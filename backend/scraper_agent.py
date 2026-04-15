import json
import os
import random
from datetime import datetime

OUTPUT_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "frontend", "public", "data")

def generate_nlp_data():
    """Generates advanced mock NLP data for the ESSEC premium dashboard."""
    
    # --- BEFORE STATE ---
    data_before = {
        "timestamp": datetime.now().isoformat(),
        "kpis": {
            "share_of_voice": "34.2%",
            "total_mentions": "124.5K",
            "avg_sentiment": "68/100",
            "sentiment_delta": "-4.5%"
        },
        "brand_sentiment": [
            {"name": "Glossier", "score": 68, "volume": 12400},
            {"name": "Rare Beauty", "score": 88, "volume": 18500},
            {"name": "Milk Makeup", "score": 75, "volume": 9200}
        ],
        "sentiment_history": [
            {"month": "Jan", "Glossier": 76, "Rare Beauty": 84, "Milk Makeup": 70},
            {"month": "Feb", "Glossier": 75, "Rare Beauty": 85, "Milk Makeup": 71},
            {"month": "Mar", "Glossier": 73, "Rare Beauty": 86, "Milk Makeup": 73},
            {"month": "Apr", "Glossier": 70, "Rare Beauty": 88, "Milk Makeup": 74},
            {"month": "May", "Glossier": 69, "Rare Beauty": 88, "Milk Makeup": 75},
            {"month": "Jun", "Glossier": 68, "Rare Beauty": 88, "Milk Makeup": 75}
        ],
        "brand_attributes": [
            {"attribute": "Pigment", "Glossier": 45, "Rare Beauty": 95, "Milk Makeup": 70},
            {"attribute": "Blendability", "Glossier": 90, "Rare Beauty": 80, "Milk Makeup": 75},
            {"attribute": "Longevity", "Glossier": 60, "Rare Beauty": 85, "Milk Makeup": 65},
            {"attribute": "Packaging", "Glossier": 85, "Rare Beauty": 90, "Milk Makeup": 80},
            {"attribute": "Value", "Glossier": 70, "Rare Beauty": 85, "Milk Makeup": 75}
        ],
        "anomalies": [
            {
                "id": "anomaly_1_before",
                "source": "Sephora Reviews",
                "topic": "Glossier Cloud Paint (Sheer)",
                "sentiment": "Negative",
                "insight": "Increase in 'too sheer', 'not showing up' complaints. Users dropping off.",
                "severity": "High",
                "brand": "Glossier"
            },
            {
                "id": "anomaly_2_before",
                "source": "Reddit (r/MakeupAddiction)",
                "topic": "Rare Beauty Soft Pinch",
                "sentiment": "Positive",
                "insight": "High engagement discussing 'intense pigment' & 'value for money'.",
                "severity": "Medium",
                "brand": "Rare Beauty"
            }
        ]
    }
    
    # --- AFTER STATE ---
    data_after = {
        "timestamp": datetime.now().isoformat(),
        "kpis": {
            "share_of_voice": "41.8%",
            "total_mentions": "156.2K",
            "avg_sentiment": "82/100",
            "sentiment_delta": "+14.0%"
        },
        "brand_sentiment": [
            {"name": "Glossier", "score": 82, "volume": 14000},
            {"name": "Rare Beauty", "score": 86, "volume": 18200},
            {"name": "Milk Makeup", "score": 74, "volume": 9100}
        ],
        "sentiment_history": [
            {"month": "Jul", "Glossier": 70, "Rare Beauty": 87, "Milk Makeup": 75},
            {"month": "Aug", "Glossier": 74, "Rare Beauty": 86, "Milk Makeup": 76},
            {"month": "Sep", "Glossier": 77, "Rare Beauty": 86, "Milk Makeup": 75},
            {"month": "Oct", "Glossier": 79, "Rare Beauty": 87, "Milk Makeup": 74},
            {"month": "Nov", "Glossier": 81, "Rare Beauty": 86, "Milk Makeup": 74},
            {"month": "Dec", "Glossier": 82, "Rare Beauty": 86, "Milk Makeup": 74}
        ],
        "brand_attributes": [
            {"attribute": "Pigment", "Glossier": 85, "Rare Beauty": 92, "Milk Makeup": 72},
            {"attribute": "Blendability", "Glossier": 88, "Rare Beauty": 82, "Milk Makeup": 75},
            {"attribute": "Longevity", "Glossier": 75, "Rare Beauty": 86, "Milk Makeup": 68},
            {"attribute": "Packaging", "Glossier": 85, "Rare Beauty": 90, "Milk Makeup": 80},
            {"attribute": "Value", "Glossier": 78, "Rare Beauty": 84, "Milk Makeup": 75}
        ],
        "anomalies": [
            {
                "id": "anomaly_1_after",
                "source": "TikTok / Reddit",
                "topic": "Glossier 'Pigment Plus' Campaign",
                "sentiment": "Highly Positive",
                "insight": "Campaign directly addressed pigment concerns. Strong conversion observed.",
                "severity": "Low",
                "brand": "Glossier"
            },
            {
                "id": "anomaly_2_after",
                "source": "Sephora Reviews",
                "topic": "Glossier Complexion Products",
                "sentiment": "Neutral",
                "insight": "Focus shifting from blush pigment to skin tint coverage.",
                "severity": "Low",
                "brand": "Glossier"
            }
        ]
    }

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    with open(os.path.join(OUTPUT_DIR, "nlp_intelligence_before.json"), "w") as f:
        json.dump(data_before, f, indent=2)

    with open(os.path.join(OUTPUT_DIR, "nlp_intelligence_after.json"), "w") as f:
        json.dump(data_after, f, indent=2)
        
    print(f"✅ Enhanced NLP scraper data generated successfully at {OUTPUT_DIR}")

if __name__ == "__main__":
    generate_nlp_data()
