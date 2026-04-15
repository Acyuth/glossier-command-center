"use client";

import { useState, useEffect } from "react";
import SentimentChart from "@/components/SentimentChart";
import TrendAnomaliesFeed from "@/components/TrendAnomaliesFeed";
import StrategyHandoff from "@/components/StrategyHandoff";
import KpiMetricsBar from "@/components/KpiMetricsBar";
import ShareOfVoiceChart from "@/components/ShareOfVoiceChart";
import SentimentTrendChart from "@/components/SentimentTrendChart";
import AestheticShareChart from "@/components/AestheticShareChart";
import { Sparkles, RefreshCw } from "lucide-react";

export default function Home() {
  const [iteration, setIteration] = useState<"before" | "after">("before");
  const [nlpData, setNlpData] = useState<any>(null);
  const [visionData, setVisionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchDatasets = async (state: "before" | "after") => {
    setLoading(true);
    try {
      const nlpRes = await fetch(`/data/nlp_intelligence_${state}.json`);
      const nlpJson = await nlpRes.json();
      
      const visionRes = await fetch(`/data/vision_intelligence_${state}.json`);
      const visionJson = await visionRes.json();
      
      setNlpData(nlpJson);
      setVisionData(visionJson);
    } catch (e) {
      console.error("Failed to load mock data:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDatasets(iteration);
  }, [iteration]);

  const toggleIteration = () => {
    setIteration(prev => prev === "before" ? "after" : "before");
  };

  if (!nlpData || !visionData) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-500">
      <div className="w-8 h-8 border-4 border-gray-200 border-t-[var(--color-glossier-pink)] rounded-full animate-spin mb-4"></div>
      <p>Initializing Intelligence Command Center...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6 lg:p-10 font-sans selection:bg-[var(--color-glossier-pink)] selection:text-black">
      
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-1 text-gray-900">Glossier Command Center</h1>
          <p className="text-sm text-gray-500 font-medium">Enterprise Market Intelligence & Predictive Trajectory</p>
        </div>
        <button 
          onClick={toggleIteration}
          disabled={loading}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-md font-bold text-sm tracking-wide shadow-sm transition-all ${
            iteration === 'before' 
              ? 'bg-[var(--color-glossier-red)] text-white hover:bg-red-700' 
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          {iteration === 'before' ? (
            <><Sparkles size={16} /> Execute Global Strategy Pivot</>
          ) : (
            <><RefreshCw size={16} /> Revert to Trailing Quarter Data</>
          )}
        </button>
      </header>

      {/* KPI Bar */}
      <KpiMetricsBar kpis={nlpData.kpis} />
      
      {/* Main Grid - High Density Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Column 1: Core Charts */}
        <div className="lg:col-span-1 flex flex-col gap-6 h-full">
           <SentimentChart data={nlpData.brand_sentiment} />
           <AestheticShareChart data={visionData.aesthetic_share} />
        </div>

        {/* Column 2: Advanced Data Mapping */}
        <div className="lg:col-span-2 flex flex-col gap-6 h-full">
           <SentimentTrendChart data={nlpData.sentiment_history} />
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              <ShareOfVoiceChart data={nlpData.brand_attributes} />
              <div className="h-full">
                 <StrategyHandoff iteration={iteration} />
              </div>
           </div>
        </div>
        
        {/* Column 3: The Feed */}
        <div className="lg:col-span-1 flex flex-col h-full">
          <TrendAnomaliesFeed 
            anomalies={nlpData.anomalies} 
            visionInsights={visionData.competitor_analysis.insights} 
          />
        </div>

      </div>
    </div>
  );
}
