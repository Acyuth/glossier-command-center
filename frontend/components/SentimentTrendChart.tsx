"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface HistoryData {
  month: string;
  Glossier: number;
  "Rare Beauty": number;
  "Milk Makeup": number;
}

interface SentimentTrendChartProps {
  data: HistoryData[];
}

export default function SentimentTrendChart({ data }: SentimentTrendChartProps) {
  return (
    <div className="w-full h-80 bg-white shadow-sm rounded-xl p-4 border border-gray-100 flex flex-col">
      <h3 className="text-sm font-bold mb-4 text-foreground">6-Month Sentiment Trajectory</h3>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} domain={['dataMin - 5', 'dataMax + 5']} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
              cursor={{ stroke: '#d1d5db', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Legend iconType="circle" wrapperStyle={{ fontSize: 12, paddingTop: '10px' }} />
            
            <Line type="monotone" dataKey="Glossier" stroke="var(--color-glossier-red)" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="Rare Beauty" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="Milk Makeup" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
