from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from fastapi.templating import Jinja2Templates
from fastapi import Request

from model.model import predict_pipeline

app = FastAPI()

# Serve static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Setup Jinja2 templates
templates = Jinja2Templates(directory="templates")

class TextInput(BaseModel):
    text: str

@app.post("/predict/")
async def predict_language(text_input: TextInput):
    text = text_input.text
    if not text:
        return {"error": "Please enter some text."}
    print(text)
    # Simulated language prediction logic (replace with actual ML model)
    predicted_language = predict_pipeline(text)
    print(predicted_language) 
    return {
        "text": text_input.text,
        "language": predicted_language
    }

@app.get("/", response_class=HTMLResponse)
async def get_homepage(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
