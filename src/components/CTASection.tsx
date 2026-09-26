import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onOpenBooking: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-28 bg-[#07080c] relative overflow-hidden border-b border-white/[0.06]">
      {/* Radiant Electric Glow background circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-transparent rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-xs font-mono tracking-widest text-blue-300 uppercase font-medium">
            INITIATE STRATEGIC DIALOGUE
          </span>
        </div>

        {/* Large Headline */}
        <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.08] max-w-3xl mx-auto">
          Your next stage of growth starts with{' '}
          <span className="text-gradient-blue block mt-2">a better question.</span>
        </h2>

        {/* Supporting Text */}
        <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          “Tell us what you're trying to solve. We'll help you find the path forward.”
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="px-9 py-4.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-2xl shadow-blue-600/35 hover:shadow-blue-500/50 hover:-translate-y-0.5 flex items-center gap-3 group"
          >
            <span>Book a Strategic Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="mailto:hello@nexora.consulting"
            className="px-8 py-4.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 font-semibold text-sm transition-all duration-300 flex items-center gap-2.5 backdrop-blur-md"
          >
            <Mail className="w-4 h-4 text-blue-400" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Trust Note */}
        <p className="text-xs font-mono text-slate-400 pt-6">
          Strict Partner NDA & Executive Confidentiality Standard Applies to All Inquiries
        </p>
      </div>
    </section>
  );
};
