# For AI services

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
        return {
            "sentiment": "Positive",
            "confidence": "High"
        }
    elif "bad" in text or "poor" in text:
        return {
            "sentiment": "Negative",
            "confidence": "High"
        }
    else:
        return {
            "sentiment": "Neutral",
            "confidence": "Medium"
        }


def chat_with_ai(message: str):
    return (
        "A strong brand should have a clear message, consistent tone, "
        "and emotional connection with its audience."
    )