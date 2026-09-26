import React from 'react';

export const TrustBar: React.FC = () => {
  const logos = [
    { name: 'ORBIT', tagline: 'FINTECH', symbol: '◯' },
    { name: 'VERTEX', tagline: 'SAAS GLOBAL', symbol: '▲' },
    { name: 'NOVA', tagline: 'ENTERPRISE AI', symbol: '✦' },
    { name: 'ARC', tagline: 'LOGISTICS', symbol: '◠' },
    { name: 'LUMEN', tagline: 'HEALTH TECH', symbol: '☼' },
    { name: 'QUANTUM', tagline: 'CAPITAL GROUP', symbol: '❖' },
  ];

  return (
    <section id="trust" className="py-12 border-y border-white/[0.06] bg-[#07080c] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Label */}
        <div className="shrink-0 flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
            TRUSTED BY AMBITIOUS TEAMS
          </span>
        </div>

        {/* Fictional Text-based Logo Marks */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 w-full items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group flex flex-col items-center cursor-pointer transition-all duration-300"
            >
              <div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 group-hover:text-blue-400 transition-all">
                <span className="text-sm text-blue-500 font-mono">{logo.symbol}</span>
                <span className="font-heading font-extrabold text-base tracking-widest text-slate-300 group-hover:text-white">
                  {logo.name}
                </span>
              </div>
              <span className="text-[9px] font-mono text-slate-500 group-hover:text-blue-400/80 transition-colors uppercase tracking-wider mt-0.5">
                {logo.tagline}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
