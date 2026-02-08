import os
from groq import Groq

# Initialize Groq client using Render environment variable
client = Groq(api_key=os.getenv("GROQ_API_KEY"))


def generate_brand_names(keywords: str):
    base = keywords.split()[0].capitalize()
    return [
        f"{base}Nova",
        f"{base}Labs",
        f"{base}ify",
        f"{base}Hub",
        f"{base}Works"
    ]


def generate_marketing_content(description: str):
    return (
        f"{description} is designed to deliver innovation, quality, "
        "and customer-focused solutions with a strong brand identity."
    )


def analyze_sentiment(text: str):
    text = text.lower()
    if "good" in text or "great" in text or "nice" in text:
        return {"sentiment": "Positive", "confidence": "High"}
    elif "bad" in text or "poor" in text:
        return {"sentiment": "Negative", "confidence": "High"}
    else:
        return {"sentiment": "Neutral", "confidence": "Medium"}


def chat_with_ai(message: str):
    """
    REAL AI POWERED CHAT (Groq + LLaMA 3)
    """
    response = client.chat.completions.create(
        model="llama3-8b-8192",
        messages=[
            {
                "role": "system",
                "content": "You are a helpful branding and startup advisor."
            },
            {
                "role": "user",
                "content": message
            }
        ],
        temperature=0.7,
        max_tokens=200
    )

    return response.choices[0].message.content.strip()
