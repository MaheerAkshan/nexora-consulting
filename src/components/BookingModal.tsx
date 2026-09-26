import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Building2, Mail, User, Phone, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  auditScore?: number | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  auditScore,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    size: '10-50 Employees',
    service: preselectedService || 'Business Strategy',
    timeframe: 'Immediate (Next 30 Days)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Fire celebratory confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#60a5fa', '#93c5fd', '#ffffff'],
    });
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0b0d14] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                EXECUTIVE STRATEGIC ADVISORY
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Book a Strategic Consultation
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Select your advisory scope and connect with a Nexora Senior Partner.
              </p>

              {auditScore && (
                <div className="mt-3 p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs font-mono text-blue-300 flex items-center justify-between">
                  <span>Attached Growth Audit Score:</span>
                  <span className="font-bold text-white text-sm">{auditScore} / 100</span>
                </div>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">YOUR NAME *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Vance"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">WORK EMAIL *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">COMPANY NAME *</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">PHONE / WHATSAPP</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">PRIMARY PRACTICE AREA</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121524] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Business Strategy">Business Strategy</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="Growth Strategy">Growth Strategy</option>
                    <option value="Operations Optimization">Operations Optimization</option>
                    <option value="Data & Analytics">Data & Analytics</option>
                    <option value="Custom Enterprise Scope">Custom Enterprise Scope</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">TIMEFRAME</label>
                  <select
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121524] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                    <option value="1 - 3 Months">1 - 3 Months</option>
                    <option value="Exploratory / Planning Stage">Exploratory / Planning Stage</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">WHAT ARE YOU TRYING TO SOLVE? *</label>
                <textarea
                  required
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your current growth bottleneck, market challenge, or AI initiative..."
                  className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">
                  NDA Protected • Response within 24 business hours
                </span>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
                >
                  <span>Request Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation View */
          <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-heading font-bold text-white">
                Consultation Request Received
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto font-light leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. A Senior Partner at Nexora Consulting will review your scope for <span className="text-blue-400 font-mono">{formData.company}</span> and email you within 24 hours to schedule our initial diagnostic briefing.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 max-w-sm mx-auto text-left text-xs font-mono space-y-1 text-slate-400">
              <div>PRACTICE: {formData.service}</div>
              <div>TIMEFRAME: {formData.timeframe}</div>
              <div>CONFIDENTIALITY: NDA Active</div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
