import React, { useState } from 'react';
import { Cpu, Cloud, ShoppingBag, Landmark, Activity, Factory, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';

export const Industries: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState<string>('SaaS');

  const industriesList = [
    {
      name: 'Technology',
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      focus: 'Hardware/Software GTM, AI integration, and technical IP monetization strategy.',
      sampleClient: 'Enterprise AI Infrastructure Vendor',
    },
    {
      name: 'SaaS',
      icon: <Cloud className="w-5 h-5 text-blue-400" />,
      focus: 'Product-led growth (PLG), subscription tier restructuring, and LTV/CAC optimization.',
      sampleClient: 'B2B Analytics Platform ($15M ARR)',
    },
    {
      name: 'E-commerce',
      icon: <ShoppingBag className="w-5 h-5 text-blue-400" />,
      focus: 'Automated fulfillment, multi-channel margin defense, and AI customer operations.',
      sampleClient: 'Global Direct-to-Consumer Brand',
    },
    {
      name: 'Financial Services',
      icon: <Landmark className="w-5 h-5 text-blue-400" />,
      focus: 'Digital banking transformation, automated compliance, and risk analytics.',
      sampleClient: 'Fintech Credit Infrastructure Provider',
    },
    {
      name: 'Healthcare',
      icon: <Activity className="w-5 h-5 text-blue-400" />,
      focus: 'HealthTech scaling, clinical workflow automation, and HIPAA-compliant data pipelines.',
      sampleClient: 'Telehealth Platform Provider',
    },
    {
      name: 'Manufacturing',
      icon: <Factory className="w-5 h-5 text-blue-400" />,
      focus: 'Industry 4.0 IoT integration, supply chain resilience, and operational throughput.',
      sampleClient: 'Advanced Components Manufacturer',
    },
    {
      name: 'Education',
      icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
      focus: 'EdTech digital delivery, institutional revenue diversification, and online platform scaling.',
      sampleClient: 'Global Executive Learning Platform',
    },
    {
      name: 'Professional Services',
      icon: <Briefcase className="w-5 h-5 text-blue-400" />,
      focus: 'Billable utilization optimization, AI knowledge bases, and partner model design.',
      sampleClient: 'Specialized Engineering Advisory Firm',
    },
  ];

  return (
    <section id="industries" className="py-24 bg-grid-lines relative border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold">
                SECTOR DOMAIN EXPERTISE
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Experience across industries
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm font-light leading-relaxed">
            Deep domain familiarity combined with transferable strategic cross-industry insights.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesList.map((ind) => {
            const isSelected = activeIndustry === ind.name;

            return (
              <div
                key={ind.name}
                onClick={() => setActiveIndustry(ind.name)}
                className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? 'bg-blue-950/50 border-blue-500 text-white shadow-xl shadow-blue-500/10 scale-[1.02]'
                    : 'glass-card hover:border-white/20 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-white/[0.03] border border-white/10'
                    }`}
                  >
                    {ind.icon}
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-blue-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </div>

                <h3 className="text-lg font-heading font-bold text-white mb-2">{ind.name}</h3>

                <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                  {ind.focus}
                </p>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>SAMPLE CLIENT ENGAGEMENT</span>
                  <span className="text-blue-400 font-semibold">{ind.sampleClient.split(' ')[0]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
