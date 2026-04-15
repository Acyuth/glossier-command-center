"use client";

import { AlertTriangle, TrendingUp, MessageCircle, Eye } from 'lucide-react';

interface Anomaly {
  id: string;
  source: string;
  topic: string;
  sentiment: string;
  insight: string;
  severity: string;
  brand: string;
}

interface TrendAnomaliesFeedProps {
  anomalies: Anomaly[];
  visionInsights: Array<{
    trait: string;
    change: string;
    impact: string;
    description: string;
  }>;
}

export default function TrendAnomaliesFeed({ anomalies, visionInsights }: TrendAnomaliesFeedProps) {
  return (
    <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100 flex-1">
      <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
        <TrendingUp className="text-[var(--color-glossier-red)]" /> Trend Anomalies Feed
      </h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">NLP Intelligence (Agent 1)</h4>
          <div className="space-y-4">
            {anomalies.map((anomaly) => (
              <div key={anomaly.id} className="p-4 rounded-lg bg-gray-50 border-l-4" style={{ borderColor: anomaly.severity === 'High' ? 'var(--color-glossier-red)' : 'var(--color-glossier-pink)'}}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <MessageCircle size={14} className="text-gray-500" />
                    {anomaly.source}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${anomaly.sentiment.includes('Positive') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {anomaly.sentiment}
                  </span>
                </div>
                <p className="font-semibold text-md mb-1">{anomaly.topic} <span className="text-gray-500 font-normal">({anomaly.brand})</span></p>
                <p className="text-sm text-gray-600">{anomaly.insight}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Vision Intelligence (Agent 2)</h4>
          <div className="space-y-4">
            {visionInsights.map((insight, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <Eye size={14} className="text-gray-500" />
                    {insight.trait}
                  </span>
                  <span className={`text-sm font-bold ${insight.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                    {insight.change}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
                <div className="flex items-center gap-2">
                  <AlertTriangle size={12} className={insight.impact === 'High' ? 'text-orange-500' : 'text-gray-400'} />
                  <span className="text-xs text-gray-500">Impact: {insight.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
