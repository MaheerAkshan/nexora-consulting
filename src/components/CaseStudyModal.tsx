import React from 'react';
import { X, CheckCircle2, ArrowRight, Quote } from 'lucide-react';
import type { CaseStudyItem } from './CaseStudies';

interface CaseStudyModalProps {
  study: CaseStudyItem | null;
  onClose: () => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose, onOpenBooking }) => {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0b0d14] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tags */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            {study.number}
          </span>
          <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            INDUSTRY: {study.industry.toUpperCase()}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white mb-6 leading-tight">
          {study.title}
        </h2>

        {/* Highlight Result Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-[#0b0d14] border border-blue-500/30 flex items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
              PRIMARY QUANTIFIED METRIC
            </span>
            <span className="text-xl sm:text-2xl font-heading font-bold text-white">
              {study.result}
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-xl font-heading font-black">
            {study.resultMetric}
          </div>
        </div>

        {/* Breakdown Content */}
        <div className="space-y-8 text-sm font-light text-slate-300">
          {/* Client Context */}
          <div>
            <h4 className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold mb-2">
              CLIENT BACKGROUND & CONTEXT
            </h4>
            <p className="leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/[0.06]">
              {study.fullBreakdown.clientContext}
            </p>
          </div>

          {/* Key Milestones */}
          <div>
            <h4 className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold mb-3">
              STRATEGIC INTERVENTIONS & MILESTONES
            </h4>
            <div className="space-y-2.5">
              {study.fullBreakdown.keyMilestones.map((milestone, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{milestone}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Before vs After Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20">
              <span className="text-xs font-mono text-red-400 font-bold block mb-2">BEFORE ENGAGEMENT</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {study.fullBreakdown.transformationBefore}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
              <span className="text-xs font-mono text-emerald-400 font-bold block mb-2">AFTER ENGAGEMENT</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {study.fullBreakdown.transformationAfter}
              </p>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="p-6 rounded-2xl bg-blue-950/30 border border-blue-500/20 relative">
            <Quote className="w-8 h-8 text-blue-500/20 absolute top-4 left-4" />
            <p className="text-sm font-heading font-medium text-slate-100 relative z-10 italic pl-6">
              {study.fullBreakdown.testimonialQuote}
            </p>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            ← Close Case Study
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenBooking(study.title);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
          >
            <span>Book Similar Advisory Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
