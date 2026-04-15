"use client";

import { Lightbulb, ArrowRight, Share2 } from 'lucide-react';

interface StrategyHandoffProps {
  iteration: "before" | "after";
}

export default function StrategyHandoff({ iteration }: StrategyHandoffProps) {
  const strategies = iteration === "before" ? [
    {
      team: "Content Marketing",
      action: "Pivot TikTok content to showcase high-pigment layered blush techniques instead of sheer application.",
      priority: "Immediate",
    },
    {
      team: "Product Development",
      action: "Review Cloud Paint formula sheer complaints; consider 'Intense' variant drop.",
      priority: "Short-term",
    },
    {
      team: "Performance Marketing",
      action: "Pause current 'clean girl' ad spend and A/B test bold color creative assets.",
      priority: "Immediate",
    }
  ] : [
    {
      team: "Content Marketing",
      action: "Maintain momentum on 'Pigment Plus' campaign; explore hybrid skincare/color tutorials.",
      priority: "Steady",
    },
    {
      team: "Product Development",
      action: "Accelerate launch of Complexion Skincare line based on new Sephora review topics.",
      priority: "Long-term",
    },
    {
      team: "Performance Marketing",
      action: "Scale spend on top-performing bold color ads; monitor CAC vs LTV.",
      priority: "Medium-term",
    }
  ];

  return (
    <div className="bg-[#171717] rounded-xl p-6 shadow-lg text-white">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Lightbulb className="text-[var(--color-glossier-pink)]" /> System Handoff
        </h3>
        <button className="text-sm bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-full flex items-center gap-2">
          <Share2 size={14} /> Send to Jira
        </button>
      </div>

      <p className="text-gray-400 text-sm mb-6">
        Auto-generated strategic pivots based on combined NLP & Vision data.
      </p>

      <div className="space-y-4">
        {strategies.map((strategy, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-semibold text-[var(--color-glossier-pink)] uppercase tracking-wider">
                {strategy.team}
              </span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full border ${strategy.priority === 'Immediate' ? 'border-red-500 text-red-400' : 'border-gray-500 text-gray-400'}`}>
                {strategy.priority}
              </span>
            </div>
            <p className="text-sm font-medium leading-relaxed">
              {strategy.action}
            </p>
            <div className="mt-3 flex items-center text-xs text-gray-400 hover:text-white cursor-pointer w-fit group">
              Assign Action <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
