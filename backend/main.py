from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from ai_service import (
    generate_brand_names,
    generate_marketing_content,
    analyze_sentiment,
    chat_with_ai
)

app = FastAPI(title="BizForge API")

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class InputText(BaseModel):
    text: str


@app.post("/api/brand-name")
def brand_name(data: InputText):
    result = generate_brand_names(data.text)
    return {"success": True, "data": result}


@app.post("/api/content")
def content(data: InputText):
    result = generate_marketing_content(data.text)
    return {"success": True, "data": result}


@app.post("/api/sentiment")
def sentiment(data: InputText):
    result = analyze_sentiment(data.text)
    return {"success": True, "data": result}


@app.post("/api/chat")
def chat(data: InputText):
    result = chat_with_ai(data.text)
    return {"success": True, "data": result}


@app.get("/")
def root():
    return {"message": "BizForge Backend Running"}