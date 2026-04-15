import json
import os
from datetime import datetime

OUTPUT_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "frontend", "public", "data")

def generate_vision_data():
    """Generates advanced mock computer vision data for the ESSEC premium dashboard."""
    
    data_before = {
        "timestamp": datetime.now().isoformat(),
        "aesthetic_share": [
            {"name": "Clean Girl", "value": 45, "fill": "#f4d2d8"},  # Glossier Pink
            {"name": "Bold Pigment", "value": 35, "fill": "#e02a27"}, # Glossier Red
            {"name": "Grunge", "value": 12, "fill": "#333333"},
            {"name": "Skincare Hybrid", "value": 8, "fill": "#e5e7eb"}
        ],
        "competitor_analysis": {
            "platform": "TikTok",
            "competitor_focus": ["Rare Beauty", "Milk Makeup"],
            "trend_shift_detected": True,
            "insights": [
                {
                    "trait": "Bold Pigment / Saturated Colors",
                    "change": "+45%",
                    "impact": "High",
                    "description": "Creators using saturated blush tones in heavy lighting."
                },
                {
                    "trait": "Clean Girl Aesthetic (Sheer/Dewy)",
                    "change": "-30%",
                    "impact": "Medium",
                    "description": "Drop in 'no-makeup' makeup looks across top 100 beauty influencers."
                }
            ],
            "visual_references": ["tiktok_rare_beauty_viral.mp4", "tiktok_milk_lipcheek.mp4"]
        }
    }
    
    data_after = {
        "timestamp": datetime.now().isoformat(),
        "aesthetic_share": [
            {"name": "Clean Girl", "value": 30, "fill": "#f4d2d8"},
            {"name": "Bold Pigment", "value": 45, "fill": "#e02a27"},
            {"name": "Grunge", "value": 5, "fill": "#333333"},
            {"name": "Skincare Hybrid", "value": 20, "fill": "#e5e7eb"}
        ],
        "competitor_analysis": {
            "platform": "TikTok",
            "competitor_focus": ["Rare Beauty", "Milk Makeup"],
            "trend_shift_detected": False,
            "insights": [
                {
                    "trait": "Bold Pigment / Saturated Colors",
                    "change": "-5%",
                    "impact": "Low",
                    "description": "Glossier's new pigmented drops taking share of this aesthetic."
                },
                {
                    "trait": "Hybrid Skincare/Color Looks",
                    "change": "+20%",
                    "impact": "High",
                    "description": "The new emerging trend marrying skincare routines with color prep."
                }
            ],
            "visual_references": ["tiktok_glossier_bold.mp4"]
        }
    }

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    with open(os.path.join(OUTPUT_DIR, "vision_intelligence_before.json"), "w") as f:
        json.dump(data_before, f, indent=2)

    with open(os.path.join(OUTPUT_DIR, "vision_intelligence_after.json"), "w") as f:
        json.dump(data_after, f, indent=2)
        
    print(f"✅ Enhanced Vision intelligence data generated successfully at {OUTPUT_DIR}")

if __name__ == "__main__":
    generate_vision_data()
