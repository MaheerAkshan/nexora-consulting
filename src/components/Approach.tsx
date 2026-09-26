import React, { useState } from 'react';
import { Search, Stethoscope, Compass, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

export const Approach: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const stages = [
    {
      number: '01',
      name: 'DISCOVER',
      tagline: 'Deep Context Baseline',
      desc: 'Understand the business, market dynamics, customer personas, financial unit economics, and systemic challenges.',
      icon: <Search className="w-5 h-5" />,
      outputs: ['Stakeholder Interviews', 'Financial Baseline Audit', 'Market & Competitor Mapping'],
      duration: 'Week 1 - 2',
      focus: 'Extracting ground-truth data without internal organizational bias.',
    },
    {
      number: '02',
      name: 'DIAGNOSE',
      tagline: 'Root Cause Synthesis',
      desc: 'Identify underlying root causes, high-yield leverage points, strategic operational gaps, and uncaptured value.',
      icon: <Stethoscope className="w-5 h-5" />,
      outputs: ['Root Bottleneck Matrix', 'AI Opportunity Map', 'ROI Prioritization Grid'],
      duration: 'Week 2 - 3',
      focus: 'Separating noisy superficial symptoms from critical strategic levers.',
    },
    {
      number: '03',
      name: 'DESIGN',
      tagline: 'Solution Architecture',
      desc: 'Develop pragmatic, stress-tested strategies, business models, and actionable implementation blueprints.',
      icon: <Compass className="w-5 h-5" />,
      outputs: ['Strategy Playbook', 'Resource Allocation Model', 'Change Management Protocol'],
      duration: 'Week 4 - 6',
      focus: 'Designing solutions that fit the exact operational reality of your team.',
    },
    {
      number: '04',
      name: 'DEPLOY',
      tagline: 'Executable Execution',
      desc: 'Turn high-level strategy into precise execution sprints, automated workflows, and operational rollout.',
      icon: <Rocket className="w-5 h-5" />,
      outputs: ['Sprint Execution Plan', 'Workflow Automation Rollout', 'Executive Control Dashboard'],
      duration: 'Week 6 - 8',
      focus: 'Embedding tools and behaviors directly into daily operations.',
    },
    {
      number: '05',
      name: 'DELIVER',
      tagline: 'Measured Acceleration',
      desc: 'Track measurable key results, optimize performance indicators, and foster continuous long-term expansion.',
      icon: <CheckCircle2 className="w-5 h-5" />,
      outputs: ['Outcome Variance Report', 'Continuous Optimization Cycle', 'Growth Handoff Framework'],
      duration: 'Ongoing / QTR Checkpoints',
      focus: 'Verifying actual financial and operational outcomes against target KPIs.',
    },
  ];

  const currentStage = stages[activeStageIndex];

  return (
    <section id="approach" className="py-24 bg-grid-lines relative border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold">
              THE NEXORA METHODOLOGY
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
            A structured approach to complicated problems.
          </h2>
          <p className="text-slate-400 text-sm font-light mt-4">
            We avoid generic advice and unexecuted slide decks. Every project follows a disciplined 5-phase framework designed for clarity and speed.
          </p>
        </div>

        {/* 5 Stages Navigation Tracker */}
        <div className="relative mb-12">
          {/* Animated Connecting Glowing Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 -translate-y-1/2 h-[2px] bg-slate-800 z-0">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500 transition-all duration-500"
              style={{ width: `${(activeStageIndex / (stages.length - 1)) * 100}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {stages.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              const isPassed = idx < activeStageIndex;

              return (
                <button
                  key={stage.number}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-5 rounded-2xl transition-all text-left flex flex-col justify-between border ${
                    isActive
                      ? 'bg-blue-950/60 border-blue-500 text-white shadow-xl shadow-blue-500/10 scale-[1.02]'
                      : isPassed
                      ? 'bg-[#0d101a] border-blue-500/30 text-slate-300'
                      : 'glass-card text-slate-400 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-blue-500 text-white'
                          : 'bg-white/5 text-slate-400'
                      }`}
                    >
                      {stage.number}
                    </span>
                    <div
                      className={`p-2 rounded-lg ${
                        isActive ? 'text-blue-400 bg-blue-500/10' : 'text-slate-500'
                      }`}
                    >
                      {stage.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-base font-heading font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {stage.name}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                      {stage.tagline}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Focus Box */}
        <div className="p-8 md:p-12 rounded-3xl glass-panel border border-white/10 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Left info */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold">
              STAGE {currentStage.number} • TIMELINE: {currentStage.duration}
            </div>

            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
              {currentStage.name}: {currentStage.tagline}
            </h3>

            <p className="text-slate-300 text-base font-light leading-relaxed">
              {currentStage.desc}
            </p>

            <div className="pt-2">
              <span className="text-xs font-mono text-slate-400 block mb-2 uppercase tracking-wider">
                CORE ADVISORY FOCUS
              </span>
              <p className="text-sm text-blue-300 font-medium bg-blue-950/30 p-3.5 rounded-xl border border-blue-500/20">
                "{currentStage.focus}"
              </p>
            </div>
          </div>

          {/* Right deliverables list */}
          <div className="lg:col-span-5 bg-[#08090e]/80 p-6 rounded-2xl border border-white/10 space-y-4">
            <span className="text-xs font-mono text-slate-300 block uppercase tracking-widest font-semibold">
              KEY DELIVERABLES & ARTIFACTS
            </span>

            <div className="space-y-2.5">
              {currentStage.outputs.map((output, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-slate-200 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{output}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveStageIndex((prev) => (prev + 1) % stages.length)}
                className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors"
              >
                <span>NEXT METHODOLOGY STAGE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
