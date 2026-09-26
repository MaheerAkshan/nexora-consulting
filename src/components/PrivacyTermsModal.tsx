import React from 'react';
import { X, Shield } from 'lucide-react';

interface PrivacyTermsModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0b0d14] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-blue-400 mb-2">
          <Shield className="w-4 h-4" />
          <span className="text-xs font-mono uppercase tracking-wider font-semibold">LEGAL COMPLIANCE STANDARD</span>
        </div>

        <h3 className="text-2xl font-heading font-bold text-white mb-4">
          {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
        </h3>

        <div className="space-y-4 text-xs font-light text-slate-300 leading-relaxed max-h-96 overflow-y-auto pr-2">
          {isPrivacy ? (
            <>
              <p>Effective Date: September 2026</p>
              <h4 className="font-semibold text-white text-sm pt-2">1. Information We Collect</h4>
              <p>Nexora Consulting collects information provided voluntarily during consultation requests, strategic audits, and executive communications. This includes names, work emails, phone numbers, and company metrics.</p>
              <h4 className="font-semibold text-white text-sm pt-2">2. Confidentiality & NDA Protection</h4>
              <p>All business diagnostic disclosures, financial figures, and strategic bottleneck submissions are strictly bound by executive Non-Disclosure protocols. We do not sell or monetize client data under any circumstance.</p>
              <h4 className="font-semibold text-white text-sm pt-2">3. Data Security</h4>
              <p>We employ enterprise-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit to ensure complete organizational security.</p>
            </>
          ) : (
            <>
              <p>Effective Date: September 2026</p>
              <h4 className="font-semibold text-white text-sm pt-2">1. Scope of Engagement</h4>
              <p>All consulting advisory deliverables, strategic roadmaps, and AI blueprints provided by Nexora Consulting are tailored recommendations based on telemetry available at time of analysis.</p>
              <h4 className="font-semibold text-white text-sm pt-2">2. Intellectual Property</h4>
              <p>Upon final settlement of engagement contracts, all custom strategic playbooks, workflow automation code, and proprietary dashboard architectures become the exclusive property of the client.</p>
              <h4 className="font-semibold text-white text-sm pt-2">3. Limitation of Liability</h4>
              <p>Nexora Consulting provides advisory services with highest industry diligence. Actual financial results depend on executive execution fidelity and broader macro-economic factors.</p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
