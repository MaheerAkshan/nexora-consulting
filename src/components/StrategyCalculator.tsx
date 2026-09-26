import React, { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw } from 'lucide-react';

interface StrategyCalculatorProps {
  onOpenBookingWithAudit: (score: number, focusArea: string) => void;
}

export const StrategyCalculator: React.FC<StrategyCalculatorProps> = ({ onOpenBookingWithAudit }) => {
  const [step, setStep] = useState(1);
  const [companyStage, setCompanyStage] = useState('Growth SME ($5M-$20M)');
  const [primaryChallenge, setPrimaryChallenge] = useState('Scaling Operations & Efficiency');
  const [aiMaturity, setAiMaturity] = useState('Evaluating Opportunities');

  const [completedScore, setCompletedScore] = useState<number | null>(null);

  const stages = [
    'Early Startup / Seed',
    'Growth SME ($5M-$20M)',
    'Mid-Market Enterprise ($20M-$100M+)',
    'Established Family Business / HoldCo',
  ];

  const challenges = [
    'Unclear Market Positioning & GTM',
    'Scaling Operations & Efficiency',
    'Integrating AI & Workflow Automation',
    'Data Fragmentation & Executive Visibility',
  ];

  const aiLevels = [
    'Minimal / Ad-hoc Tools Only',
    'Evaluating Opportunities',
    'Active Pilot Workflows',
    'Fully Integrated Enterprise AI',
  ];

  const calculateScore = () => {
    let score = 58;
    if (companyStage.includes('SME') || companyStage.includes('Enterprise')) score += 15;
    if (aiMaturity.includes('Evaluating') || aiMaturity.includes('Pilot')) score += 18;
    if (primaryChallenge.includes('AI') || primaryChallenge.includes('Scaling')) score += 9;
    setCompletedScore(Math.min(96, score));
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setCompletedScore(null);
  };

  return (
    <section id="assessment" className="py-24 bg-grid-lines relative border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="p-8 md:p-12 rounded-3xl glass-panel border border-blue-500/20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                INTERACTIVE STRATEGIC AUDIT TOOL
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                Calculate Your Strategic Growth Score
              </h3>
            </div>
            {step < 4 && (
              <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                STEP {step} OF 3
              </span>
            )}
          </div>

          {/* Step 1: Company Stage */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h4 className="text-sm font-mono text-slate-300 uppercase tracking-wider font-semibold">
                1. SELECT YOUR CURRENT BUSINESS STAGE
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stages.map((stg) => (
                  <button
                    key={stg}
                    onClick={() => setCompanyStage(stg)}
                    className={`p-4 rounded-xl text-left font-medium text-sm transition-all border ${
                      companyStage === stg
                        ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30'
                        : 'glass-card text-slate-300 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {stg}
                  </button>
                ))}
              </div>
              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all flex items-center gap-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Primary Challenge */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h4 className="text-sm font-mono text-slate-300 uppercase tracking-wider font-semibold">
                2. WHAT IS YOUR PRIMARY STRATEGIC BOTTLENECK?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {challenges.map((ch) => (
                  <button
                    key={ch}
                    onClick={() => setPrimaryChallenge(ch)}
                    className={`p-4 rounded-xl text-left font-medium text-sm transition-all border ${
                      primaryChallenge === ch
                        ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30'
                        : 'glass-card text-slate-300 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {ch}
                  </button>
                ))}
              </div>
              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 font-medium text-xs"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all flex items-center gap-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: AI Maturity */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h4 className="text-sm font-mono text-slate-300 uppercase tracking-wider font-semibold">
                3. WHAT IS YOUR CURRENT AI & AUTOMATION ADOPTION LEVEL?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aiLevels.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setAiMaturity(lvl)}
                    className={`p-4 rounded-xl text-left font-medium text-sm transition-all border ${
                      aiMaturity === lvl
                        ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30'
                        : 'glass-card text-slate-300 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 font-medium text-xs"
                >
                  Back
                </button>
                <button
                  onClick={calculateScore}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-xl shadow-blue-600/30 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Growth Score</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Results Display */}
          {step === 4 && completedScore !== null && (
            <div className="space-y-8 animate-in zoom-in-95 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#08090e]/90 p-8 rounded-2xl border border-blue-500/30">
                <div className="md:col-span-5 text-center md:text-left">
                  <span className="text-xs font-mono text-slate-400 block uppercase mb-1">
                    YOUR CALCULATED GROWTH READINESS SCORE
                  </span>
                  <div className="flex items-baseline justify-center md:justify-start gap-2">
                    <span className="text-6xl font-heading font-black text-gradient-blue">
                      {completedScore}
                    </span>
                    <span className="text-2xl font-heading font-bold text-slate-400">/ 100</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono font-semibold block mt-2">
                    HIGH POTENTIAL EXPANSION ZONE
                  </span>
                </div>

                <div className="md:col-span-7 space-y-3">
                  <h4 className="text-base font-semibold text-white">Advisory Recommendation:</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    Based on your focus area (<span className="text-blue-300 font-semibold">{primaryChallenge}</span>), your company has immediate leverage to unlock <span className="text-white font-semibold font-mono">2.5× to 4× operational throughput</span> by modernizing core strategy and integrating AI agent workflows.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-[10px] font-mono text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20">
                      Stage: {companyStage}
                    </span>
                    <span className="text-[10px] font-mono text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20">
                      AI Adoption: {aiMaturity}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Recalculate Score</span>
                </button>

                <button
                  onClick={() => onOpenBookingWithAudit(completedScore, primaryChallenge)}
                  className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-xl shadow-blue-600/30 flex items-center gap-2 group"
                >
                  <span>Discuss Score with Senior Advisor</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
