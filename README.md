# 🦷 Cavi-Scan: An Automated Dental Cavity Detection System Using Machine Learning

> Final Year MCA Project | 2023–2024  
> By [Mainak Majumder](https://github.com/mainak1023), Shibam Mukherjee & Smriti Roy  
> Guided by Dr. Pabitra Kumar Dey, HOD, Department of MCA, BCREC

---

## 📌 Overview

**Cavi-Scan** is a deep learning–powered diagnostic platform for detecting **dental caries (cavities)** from intraoral and radiographic images. It combines **custom CNN** and **transfer learning with VGG-16** to offer a robust and accessible clinical decision support tool for dentists, patients, and researchers alike.

The system is deployable via a modern web-based UI, enabling both **real-time image analysis** and **AI-based dental care suggestions**, expanding the scope for **tele-dentistry**, **mobile health**, and **self-assessment**.

---

## 🎯 Features

- ✅ Binary classification: *Cavity Detected* / *No Cavity Detected*
- 🧠 Dual-model architecture: Custom CNN + Transfer Learning (VGG-16)
- 📊 Performance Metrics: Accuracy, Cross-Entropy Loss
- 🌐 Web interface built using React.js + Vite
- 📸 Image upload support for intraoral & radiographic scans
- 🧾 Third-party API integration for dental care recommendations
- 📈 Robust evaluation, fine-tuning, and overfitting mitigation
- 🔐 Ethical dataset handling with patient anonymization

---

## 🏗️ Architecture

```mermaid
graph TD;
    A[Image Input (Intraoral/Radiograph)] --> B[Preprocessing & Augmentation];
    B --> C[Custom CNN];
    B --> D[VGG-16 (Transfer Learning)];
    C --> E[Prediction];
    D --> E;
    E --> F[Web UI with Result Display];
    F --> G[AI Suggestions via API];
