import React, { useState } from 'react';
import { Target, Compass, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const [selectedStat, setSelectedStat] = useState<number | null>(null);

  const stats = [
    {
      value: '12+',
      label: 'Industries Served',
      detail: 'Cross-domain advisory spanning B2B SaaS, HealthTech, E-commerce, Financial Services, and High-Tech Manufacturing.',
    },
    {
      value: '40+',
      label: 'Strategic Projects',
      detail: 'End-to-end consulting engagements focused on market expansion, AI operations, pricing strategy, and GTM execution.',
    },
    {
      value: '3.2×',
      label: 'Average Growth Opportunity Identified',
      detail: 'Identified actionable enterprise value acceleration opportunities across cost optimizations and revenue expansion channels.',
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-grid-lines border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold">
            ABOUT NEXORA CONSULTING
          </span>
        </div>

        {/* Large Editorial Headline Statement */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl leading-[1.12] mb-16 tracking-tight">
          Strategy is not about predicting the future.{' '}
          <span className="text-gradient-blue font-extrabold block mt-2">
            It is about preparing for it.
          </span>
        </h2>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Intro statement & Core Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <p className="text-xl md:text-2xl text-slate-200 font-heading font-medium leading-relaxed">
              We operate at the intersection of executive business strategy, advanced technology infrastructure, and execution clarity.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3.5 p-4 rounded-xl glass-card">
                <Target className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Precision Diagnostic</h4>
                  <p className="text-xs text-slate-400 mt-1">We dissect root organizational bottlenecks before proposing strategic fixes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 p-4 rounded-xl glass-card">
                <Compass className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Modern AI Frameworks</h4>
                  <p className="text-xs text-slate-400 mt-1">Integrating AI & intelligence layers directly into core operational workflows.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Description & Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-8 rounded-2xl glass-panel relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light mb-6">
                “Nexora Consulting helps organizations navigate growth, transformation, and uncertainty. We combine business strategy, technology, data, and human-centered thinking to create practical solutions that move businesses forward.”
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-heading font-bold text-sm">
                  NC
                </div>
                <div>
                  <span className="text-sm font-semibold text-white block">Nexora Leadership Advisory</span>
                  <span className="text-xs text-slate-400 font-mono">Senior Strategic Partners</span>
                </div>
              </div>
            </div>

            {/* Illustrative Notice */}
            <p className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5 px-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Representative portfolio metrics reflecting aggregate consulting impact.</span>
            </p>
          </div>
        </div>

        {/* 3 Key Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedStat(selectedStat === idx ? null : idx)}
              className={`p-8 rounded-2xl transition-all duration-300 cursor-pointer border ${
                selectedStat === idx
                  ? 'bg-blue-950/40 border-blue-500/50 shadow-xl shadow-blue-500/10'
                  : 'glass-card'
              }`}
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-4xl md:text-5xl font-heading font-black text-gradient-white">
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                  METRIC 0{idx + 1}
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
