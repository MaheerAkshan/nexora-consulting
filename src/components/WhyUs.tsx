import React from 'react';
import { Eye, Target, ShieldCheck, Award } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'INSIGHT',
      headline: 'We look beyond surface-level symptoms.',
      desc: 'Superficial diagnoses produce fragile strategies. We uncover structural, financial, and organizational root causes before prescribing solutions.',
      icon: <Eye className="w-5 h-5 text-blue-400" />,
    },
    {
      number: '02',
      title: 'PRECISION',
      headline: 'Every recommendation is grounded in evidence.',
      desc: 'We replace gut feelings and buzzwords with hard market telemetry, unit economic analysis, customer data, and competitive realities.',
      icon: <Target className="w-5 h-5 text-blue-400" />,
    },
    {
      number: '03',
      title: 'PRACTICALITY',
      headline: 'Strategies must work in the real world.',
      desc: 'Theoretical strategic models are useless if your organization cannot execute them. We design playbooks built for immediate operational adoption.',
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
    },
    {
      number: '04',
      title: 'IMPACT',
      headline: 'Success is measured by outcomes, not presentations.',
      desc: 'We do not consider a project complete when the slide deck is delivered. We align with your leadership until measurable targets are achieved.',
      icon: <Award className="w-5 h-5 text-blue-400" />,
    },
  ];

  return (
    <section id="whyus" className="py-24 bg-[#06070a] relative overflow-hidden border-b border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold">
              THE NEXORA PRINCIPLES
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.08]">
            Different thinking.{' '}
            <span className="text-gradient-blue block mt-1">Better decisions.</span>
          </h2>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="p-8 md:p-10 rounded-3xl glass-panel border border-white/10 hover:border-blue-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm font-mono font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {principle.number} — {principle.title}
                  </span>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 group-hover:bg-blue-600/10 group-hover:border-blue-500/30 transition-colors">
                    {principle.icon}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-4 group-hover:text-blue-300 transition-colors leading-snug">
                  {principle.headline}
                </h3>

                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  {principle.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>NON-NEGOTIABLE STANDARD</span>
                <span className="text-blue-400/80">NEXORA ADVISORY RULE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
