"use client";

import { Activity, BarChart2, MessageSquare, TrendingUp } from "lucide-react";

interface KpiMetricsProps {
  kpis: {
    share_of_voice: string;
    total_mentions: string;
    avg_sentiment: string;
    sentiment_delta: string;
  };
}

export default function KpiMetricsBar({ kpis }: KpiMetricsProps) {
  const isPositive = kpis.sentiment_delta.startsWith('+');

  const metrics = [
    { label: "Share of Voice", value: kpis.share_of_voice, icon: <BarChart2 size={20} className="text-[var(--color-glossier-pink)]" /> },
    { label: "Total Mentions", value: kpis.total_mentions, icon: <MessageSquare size={20} className="text-gray-400" /> },
    { label: "Avg Sentiment", value: kpis.avg_sentiment, icon: <Activity size={20} className="text-[var(--color-glossier-red)]" /> },
    { 
      label: "Growth Trajectory", 
      value: kpis.sentiment_delta, 
      icon: <TrendingUp size={20} className={isPositive ? 'text-green-500' : 'text-red-500'} />,
      colorClass: isPositive ? 'text-green-600' : 'text-red-600'
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {metrics.map((m, i) => (
        <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{m.label}</p>
            <p className={`text-2xl font-bold ${m.colorClass || 'text-gray-800'}`}>{m.value}</p>
          </div>
          <div className="bg-gray-50 h-10 w-10 flex items-center justify-center rounded-full">
            {m.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
