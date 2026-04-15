"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface AestheticData {
  name: string;
  value: number;
  fill: string;
}

interface AestheticShareChartProps {
  data: AestheticData[];
}

export default function AestheticShareChart({ data }: AestheticShareChartProps) {
  return (
    <div className="w-full h-80 bg-white shadow-sm rounded-xl p-4 border border-gray-100 flex flex-col">
      <h3 className="text-sm font-bold mb-4 text-foreground text-center">TikTok Aesthetic Distribution</h3>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              formatter={(value) => [`${value}%`, 'Market Share']}
            />
            <Legend 
              iconType="circle" 
              layout="vertical" 
              verticalAlign="middle" 
              align="right"
              wrapperStyle={{ fontSize: 12 }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
