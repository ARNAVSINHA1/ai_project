from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="EduFlow AI Service")

class RecommendationRequest(BaseModel):
    topic: str
    level: str

class RecommendationResponse(BaseModel):
    recommendations: list[str]

@app.post("/recommendations", response_model=RecommendationResponse)
def recommend(request: RecommendationRequest):
    suggestions = [
        f"Review advanced {request.topic} tutorials",
        f"Practice {request.topic} problems at {request.level} difficulty",
        f"Build a mini-project using {request.topic} concepts"
    ]
    return RecommendationResponse(recommendations=suggestions)
