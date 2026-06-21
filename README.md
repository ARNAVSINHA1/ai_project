# EduFlow Hybrid Fullstack Project

A fast-deploy hybrid fullstack project built with:
- `frontend/` — Next.js 16 + TypeScript + Tailwind CSS
- `backend-java/` — Spring Boot REST API
- `python-ai/` — FastAPI AI recommendation service

## What is included
- React frontend with server components and Tailwind styling
- Java backend with CRUD endpoints for learning resources
- Python AI service with a recommendation API
- Dockerfiles for Java and Python services

## Run locally

### Frontend
```powershell
cd frontend
npm install
npm run dev
```
Open http://localhost:3000

### Java backend
```powershell
cd backend-java
mvn clean package
mvn spring-boot:run
```
Open http://localhost:8080

### Python AI service
```powershell
cd python-ai
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8001
```
Open http://localhost:8001/docs

## Deployment plan
- Deploy frontend to Vercel
- Deploy Java backend to Render / Railway / Heroku
- Deploy Python AI service to Render / Railway

## Next improvements
- Add authentication and authorization
- Add PostgreSQL connection and migration scripts
- Add CI/CD and automated tests
- Add AI recommendation integration in the frontend
