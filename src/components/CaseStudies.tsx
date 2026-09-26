import React from 'react';
import { ArrowRight, TrendingUp, Cpu, Compass } from 'lucide-react';

export interface CaseStudyItem {
  id: string;
  number: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  resultMetric: string;
  icon: React.ReactNode;
  bgGradient: string;
  fullBreakdown: {
    clientContext: string;
    keyMilestones: string[];
    transformationBefore: string;
    transformationAfter: string;
    testimonialQuote: string;
  };
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'case-1',
    number: 'CASE STUDY 01',
    title: 'Repositioning a B2B company for its next stage of growth',
    industry: 'Technology',
    challenge: 'Stagnating growth and unclear market positioning across legacy product tiers.',
    solution: 'Comprehensive market analysis, brand positioning strategy, customer value segmentation, and GTM redesign.',
    result: '+42% projected revenue opportunity',
    resultMetric: '+42%',
    icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
    bgGradient: 'from-blue-900/40 via-slate-900 to-[#08090e]',
    fullBreakdown: {
      clientContext: 'A mid-market B2B enterprise SaaS firm with $18M ARR had experienced 4 quarters of plateaued expansion due to commoditized messaging and legacy pricing structures.',
      keyMilestones: [
        'Executed 45+ deep-dive executive buyer interviews to map true purchase drivers.',
        'Restructured 3 core product tiers into value-based pricing models.',
        'Retrained outbound sales team on modern solution-oriented GTM positioning.',
      ],
      transformationBefore: 'Siloed sales cycles averaging 140 days with 18% discounting erosion.',
      transformationAfter: 'Streamlined enterprise sales cycle reduced to 85 days with 32% increase in average contract value (ACV).',
      testimonialQuote: '“Nexora brought rigorous analytical clarity to our market strategy. They didn’t just give us advice—they mapped our entire next phase of growth.”',
    },
  },
  {
    id: 'case-2',
    number: 'CASE STUDY 02',
    title: 'Building an AI-powered operating model',
    industry: 'E-commerce',
    challenge: 'High manual workload, slow catalog processing, and inefficient customer service routing.',
    solution: 'AI workflow automation, domain LLM agent deployment, and operational process redesign.',
    result: '35% reduction in operational workload',
    resultMetric: '-35%',
    icon: <Cpu className="w-5 h-5 text-blue-400" />,
    bgGradient: 'from-indigo-900/40 via-slate-900 to-[#08090e]',
    fullBreakdown: {
      clientContext: 'A fast-growing multi-channel e-commerce retailer struggling with operational overhead as order volume doubled year-over-year.',
      keyMilestones: [
        'Deployed automated AI extraction agents for supplier inventory processing.',
        'Integrated multi-turn AI customer response assistant for Tier-1 support queries.',
        'Automated demand forecasting sync with central ERP inventory.',
      ],
      transformationBefore: 'Manual catalog updates took 28 hours per product batch.',
      transformationAfter: 'Automated catalog sync completed in under 12 minutes with 99.4% accuracy.',
      testimonialQuote: '“The operational leverage we achieved through Nexora’s AI strategy allowed our core team to focus entirely on brand expansion.”',
    },
  },
  {
    id: 'case-3',
    number: 'CASE STUDY 03',
    title: 'Entering a new market with confidence',
    industry: 'Consumer Technology',
    challenge: 'High uncertainty around European market entry regulations, pricing elasticity, and localized customer demand.',
    solution: 'Granular market research, regulatory risk analysis, competitive pricing model, and rollout strategy.',
    result: '3 new strategic growth opportunities identified',
    resultMetric: '3×',
    icon: <Compass className="w-5 h-5 text-blue-400" />,
    bgGradient: 'from-cyan-900/30 via-slate-900 to-[#08090e]',
    fullBreakdown: {
      clientContext: 'A US consumer hardware & software maker seeking expansion into 4 European territories without overextending capital reserves.',
      keyMilestones: [
        'Mapped regulatory compliance framework and localized channel partner dynamics.',
        'Conducted price sensitivity testing across 3,000 target European consumers.',
        'Established phased Go-to-Market expansion roadmap with risk-adjusted milestones.',
      ],
      transformationBefore: 'Uncalculated risk exposure and unclear distributor margins.',
      transformationAfter: 'Successful zero-friction market entry yielding 15,000 active subscribers in first 90 days.',
      testimonialQuote: '“Nexora provided us with total clarity before we committed capital. Their analysis saved us millions in potential execution missteps.”',
    },
  },
];

interface CaseStudiesProps {
  onOpenCaseStudy: (study: CaseStudyItem) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenCaseStudy }) => {
  return (
    <section id="casestudies" className="py-24 bg-[#08090e] relative border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold">
                PROVEN RESULTS & IMPACT
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Strategy that creates measurable impact.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm font-light leading-relaxed">
            Real enterprise transformations delivered for leadership teams across technology, e-commerce, and high-growth sectors.
          </p>
        </div>

        {/* 3 Large Case Study Cards */}
        <div className="space-y-8">
          {caseStudiesData.map((study) => (
            <div
              key={study.id}
              onClick={() => onOpenCaseStudy(study)}
              className="group relative rounded-3xl glass-panel border border-white/10 overflow-hidden cursor-pointer hover:border-blue-500/40 transition-all duration-300"
            >
              {/* Background Ambient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${study.bgGradient} opacity-50 group-hover:opacity-80 transition-opacity`}></div>

              <div className="relative z-10 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Case Info */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                      {study.number}
                    </span>
                    <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      INDUSTRY: {study.industry.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white group-hover:text-blue-300 transition-colors leading-tight">
                    {study.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light text-slate-300 pt-2">
                    <div className="p-4 rounded-xl bg-[#08090e]/70 border border-white/[0.06]">
                      <span className="text-[10px] font-mono text-slate-500 block uppercase mb-1">CHALLENGE</span>
                      <p>{study.challenge}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#08090e]/70 border border-white/[0.06]">
                      <span className="text-[10px] font-mono text-slate-500 block uppercase mb-1">STRATEGIC SOLUTION</span>
                      <p>{study.solution}</p>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-xs font-mono text-blue-400 group-hover:text-blue-300 transition-colors font-semibold">
                    <span>VIEW CASE STUDY ARCHITECTURE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>

                {/* Right Hero Metric Display Badge */}
                <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
                  <div className="w-full max-w-xs p-6 rounded-2xl bg-[#08090e]/90 border border-blue-500/30 backdrop-blur-xl text-center lg:text-right shadow-2xl group-hover:border-blue-400 transition-all">
                    <div className="flex items-center justify-center lg:justify-end gap-2 mb-2 text-blue-400">
                      {study.icon}
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">KEY MEASURED OUTCOME</span>
                    </div>
                    <span className="text-4xl md:text-5xl font-heading font-black text-white block mb-2">
                      {study.resultMetric}
                    </span>
                    <p className="text-xs text-slate-300 font-medium">
                      {study.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
