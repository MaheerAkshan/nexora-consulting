import React from 'react';
import { X, CheckCircle2, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import type { ServiceItem } from './Services';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenBooking,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0b0d14] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
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
            PRACTICE {service.number}
          </span>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            {service.detailView.timeline}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white mb-4">
          {service.title}
        </h2>

        {/* Overview paragraph */}
        <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 bg-white/[0.02] p-5 rounded-2xl border border-white/[0.06]">
          {service.detailView.overview}
        </p>

        {/* Deliverables & Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold mb-3">
              KEY ADVISORY DELIVERABLES
            </h4>
            <div className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold mb-3">
              MEASURED BUSINESS OUTCOMES
            </h4>
            <div className="space-y-2">
              {service.detailView.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 p-2.5 rounded-lg bg-blue-950/20 border border-blue-500/20">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Methodology Key Note */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 mb-6">
          <span>FRAMEWORK: {service.detailView.methodologyKey}</span>
          <span className="text-blue-400 font-semibold">SENIOR PARTNER LED</span>
        </div>

        {/* Modal Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            ← Back to Services
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenBooking(service.title);
            }}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
          >
            <span>Book {service.title} Briefing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
