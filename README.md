# CV Align  
A full-stack intelligent system for automated resume screening using RAG-based LLMs.

## Overview  
The **CV Align Platform** revolutionizes recruitment by automating the manual resume screening process. By leveraging Retrieval-Augmented Generation (RAG) with large language models, this system intelligently matches job descriptions with uploaded CVs, ranks candidates, and provides structured feedback for recruiters—all accessible through a responsive dashboard.

## Key Features

### 1. Intelligent Resume Evaluation
- **RAG Pipeline**: Combines semantic retrieval with LLMs for context-aware evaluation  
- **Scoring**: Computes a final relevance score based on skills, experience, and semantic match  
- **Feedback Generation**: Explains strengths, weaknesses, and suitability for the role  

### 2. Job Description Management
- **Structured JD Upload**: Extracts keywords, skills, and job criteria from PDF descriptions  
- **Storage**: Uploads and stores JDs in cloud storage for reuse and comparison  

### 3. CV Processing & Parsing
- **Content Extraction**: Extracts raw text, skills, education, and experience from PDFs or DOCX files  
- **Cloud Storage**: Seamlessly uploads CVs to Cloudinary or other services  
- **Multi-CV Support**: Students can upload up to 3 CVs and parse all at once  

### 4. Recruiter Dashboard
- **Candidate Rankings**: Lists candidates by relevance score for each job  
- **Filtering & Search**: Search by score, skill match, or job ID  
- **Detailed Reports**: View per-CV feedback, semantic breakdown, and component scores  

### 5. Role-Based Access
- **Students**: Upload CVs, view their feedback  
- **Recruiters**: Post jobs, upload JDs, view candidate evaluations  
- **Admins**: Manage users and monitor overall platform metrics

## Screenshots

Landing Page

![Image](https://github.com/user-attachments/assets/399d0160-7fac-4411-9bb2-fcd8c27cfec6)

### Recruiter Side

Profile

![Image](https://github.com/user-attachments/assets/3c0758f6-6e2a-4de1-9cb0-98054f0a1299)

Upload Job Description

![Image](https://github.com/user-attachments/assets/187172fb-fb23-4c32-ba9b-45098c0567b7)

See Results

![Image](https://github.com/user-attachments/assets/22d4a2a6-7385-46c6-a66f-bb79ab40b9cc)

Update Status

![Image](https://github.com/user-attachments/assets/dda0ced4-3df2-402d-a971-2cae2b541fab)

Dashboard

![Image](https://github.com/user-attachments/assets/d3662e58-84a5-424b-bcb1-61d066c03dc4)

### Student Side

Profile

![Image](https://github.com/user-attachments/assets/3dde9142-5c15-46e4-a31d-82876b405186)

Search Jobs and Apply

![Image](https://github.com/user-attachments/assets/5fd69191-f38f-454e-88bf-1d8c4ef6ab18)

See Feedback

![Image](https://github.com/user-attachments/assets/dc105b77-5c7b-4be0-9e2c-f381185431c6)

Dashboard

![Image](https://github.com/user-attachments/assets/fd6cbd85-5e6c-42b5-8a32-77b72875f0a6)

## Tech Stack

### Frontend
- **React.js** – Modular UI components  
- **Bootstrap** – Responsive design  
- **Axios** – REST API communication  

### Backend
- **FastAPI** – Python web framework  
- **MongoDB** – NoSQL database  
- **Cloudinary** – Cloud CV storage  
- **Langchain + LangGraph** – LLM orchestration  
- **Pinecone / FAISS** – Vector DB for skill and semantic search  

### Machine Learning
- **LLMs** – Google Gemini  
- **Embeddings** – all-MiniLM-L6-v2 for semantic similarity  
- **PyTorch + HuggingFace Transformers** – Custom scoring modules  

## Installation & Setup

### Prerequisites
- Python 3.8+  
- Node.js & npm  
- MongoDB (locally or via Atlas)  
- API keys: Pinecone, OpenAI/Gemini, Cloudinary  

### Clone the Repository
```bash
git clone https://github.com/C-Lakshmi/cvalign.git
```
## Backend Setup

### Create a `.env` file:
```env
MONGO_URI=your_mongodb_uri  
CLOUDINARY_URL=your_cloudinary_url  
PINECONE_API_KEY=your_pinecone_key  
GEMINI_API_KEY=your_openai_or_gemini_key  
```

### Install dependencies and run:
```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend Setup:
```bash
cd ../frontend
npm install
npm run dev
```

### System Flow
1. Recruiter uploads JD PDF

2. Student uploads CV (1–3 files max)

3. System extracts and stores text

4. Evaluator module computes scores using RAG

5. Recruiter views ranked candidates and feedback

6. Student views parsed content and final score

### Sample Use Cases
- Campus Hiring: Companies upload JD, students upload CVs, shortlist generated in minutes

- Resume Coaching: Feedback generated for students for each CV

- Blind Screening: Objective LLMs reduce human bias during shortlisting

## Team
- Lakshmi C    
- Narmada Pinjala
- Tripti Rakesh Kumar
- Srishti
