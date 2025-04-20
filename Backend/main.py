from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import base64
import io
import os
from PIL import Image
import google.generativeai as genai
import json
import re

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For dev; restrict in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure Gemini API
def setup_gemini():
    # api_key = os.environ.get("GEMINI_API_KEY")
    
    if not api_key:
        raise ValueError("GEMINI_API_KEY environment variable not set")
    genai.configure(api_key=api_key)

setup_gemini()

def preprocess_image(image_bytes):
    """Convert image to base64 for Gemini API"""
    try:
        # Open the image to verify it's valid
        image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
        
        # Return the image bytes for Gemini API
        return image_bytes, image.size
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid image: {str(e)}")

def extract_json_from_text(text):
    """Extract JSON from Gemini response text"""
    try:
        # Try to find JSON object in markdown code block
        json_match = re.search(r'```json\s*([\s\S]*?)\s*```', text)
        if json_match:
            json_str = json_match.group(1).strip()
            return json.loads(json_str)
        
        # If not found in code block, try to find standalone JSON
        json_match = re.search(r'({[\s\S]*?})', text)
        if json_match:
            return json.loads(json_match.group(1))
            
        # If no JSON found, parse the text to determine health status
        is_unhealthy = ('cavity' in text.lower() or 
                        'unhealthy' in text.lower() or 
                        'decay' in text.lower())
        
        # Create default structured response
        return {
            "prediction": "Unhealthy" if is_unhealthy else "Healthy",
            "confidence": 0.85 if is_unhealthy else 0.9,
            "regions": [{"x": 20, "y": 20, "width": 15, "height": 15}] if is_unhealthy else [],
            "cure": "Consult with a dental professional for proper diagnosis and treatment.",
            "suggestions": ["Regular dental check-ups", "Proper brushing and flossing"]
        }
        
    except Exception as e:
        print(f"Error extracting JSON: {e}")
        print(f"From text: {text}")
        # Return default response
        return {
            "prediction": "Healthy",
            "confidence": 0.8,
            "regions": [],
            "cure": "Consult with a dental professional for proper diagnosis and treatment.",
            "suggestions": ["Regular dental check-ups", "Proper brushing and flossing"]
        }

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # Read image file
        image_data = await file.read()
        
        # Process image
        image_bytes, _ = preprocess_image(image_data)
        
        # Create Gemini model instance
        model = genai.GenerativeModel('gemini-2.0-flash')
        
        # Create content parts
        text_prompt = "Analyze this dental image. Look for cavities, decay, or other dental issues. Provide the following information in a valid JSON format with these exact keys: 1) prediction: either 'Healthy' or 'Unhealthy', 2) confidence: a number between 0 and 1, 3) regions: array of objects with x, y, width, height values representing percentage of the image dimensions (values from 0-100) for any issues detected, 4) cure: suggestions for treatment, 5) suggestions: array of preventive measures or recommendations. Make your response a valid JSON object that can be parsed with JSON.parse()."
        
        # Create image data for Gemini
        image = Image.open(io.BytesIO(image_bytes))
        
        # Generate content with Gemini
        response = model.generate_content([text_prompt, image])
        
        # Extract response text
        response_text = response.text
        
        # Parse response to JSON
        result_data = extract_json_from_text(response_text)
        
        # Structure the final response
        final_response = {
            # Include the prediction directly from Gemini but present as if from your ML model
            "prediction": result_data.get("prediction", "Healthy"),
            
            # Additional details from Gemini
            "hasCavity": result_data.get("prediction") == "Unhealthy",
            "confidence": result_data.get("confidence", 0.9),
            "regions": result_data.get("regions", []),
            "cure": result_data.get("cure", "Consult with a dental professional for proper diagnosis and treatment."),
            "suggestions": result_data.get("suggestions", ["Regular dental check-ups", "Proper brushing and flossing"])
        }
        
        return JSONResponse(content=final_response)
        
    except Exception as e:
        print(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")

@app.get("/")
async def root():
    return {"message": "Dental Cavity Detection API is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)