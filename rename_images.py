import os

folder_path = "dataset/healthy" 
new_name_prefix = "healthy"
supported_extensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"]

def rename_images(folder_path, prefix):
    count = 1
    for filename in os.listdir(folder_path):
        file_ext = os.path.splitext(filename)[1].lower()
        if file_ext in supported_extensions:
            new_name = f"{prefix}_{count}{file_ext}"
            src = os.path.join(folder_path, filename)
            dst = os.path.join(folder_path, new_name)
            os.rename(src, dst)
            print(f"Renamed: {filename} -> {new_name}")
            count += 1
    print("\n All supported images renamed successfully.")

rename_images(folder_path, new_name_prefix)
