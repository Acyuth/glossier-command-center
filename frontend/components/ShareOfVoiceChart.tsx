"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface AttributeData {
  attribute: string;
  Glossier: number;
  "Rare Beauty": number;
  "Milk Makeup": number;
}

interface ShareOfVoiceChartProps {
  data: AttributeData[];
}

export default function ShareOfVoiceChart({ data }: ShareOfVoiceChartProps) {
  return (
    <div className="w-full h-80 bg-white shadow-sm rounded-xl p-4 border border-gray-100 flex flex-col">
      <h3 className="text-sm font-bold mb-4 text-foreground text-center">Brand Attribute Mapping</h3>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="attribute" tick={{ fill: '#4b5563', fontSize: 12, fontWeight: 600 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#9ca3af', fontSize: 10 }} />
            
            <Radar name="Glossier" dataKey="Glossier" stroke="var(--color-glossier-red)" fill="var(--color-glossier-pink)" fillOpacity={0.6} strokeWidth={2} />
            <Radar name="Rare Beauty" dataKey="Rare Beauty" stroke="#8b5cf6" fill="#c4b5fd" fillOpacity={0.5} strokeWidth={2} />
            <Radar name="Milk Makeup" dataKey="Milk Makeup" stroke="#3b82f6" fill="#93c5fd" fillOpacity={0.4} strokeWidth={2} />
            
            <Tooltip 
              wrapperStyle={{ outline: 'none' }}
              contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend iconType="circle" wrapperStyle={{ fontSize: 12, paddingTop: '10px' }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
