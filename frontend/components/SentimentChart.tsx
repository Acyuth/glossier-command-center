"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SentimentData {
  name: string;
  score: number;
  volume: number;
}

interface SentimentChartProps {
  data: SentimentData[];
}

export default function SentimentChart({ data }: SentimentChartProps) {
  return (
    <div className="w-full h-80 bg-white shadow-sm rounded-xl p-4 border border-gray-100 flex flex-col">
      <h3 className="text-sm font-bold mb-4 text-foreground text-center">Brand Sentiment Breakdown</h3>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, left: -20, bottom: 5 }}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f3f4f6" />
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#4b5563', fontSize: 12, fontWeight: 500 }} width={80} />
            <Tooltip 
              cursor={{fill: '#f9fafb'}}
              contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="score" name="Sentiment Score" fill="var(--color-glossier-pink)" radius={[0, 4, 4, 0]} barSize={24} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
