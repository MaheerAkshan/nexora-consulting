import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const currentYear = 2026;

  return (
    <footer className="bg-[#050608] text-slate-400 py-16 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-heading font-extrabold text-white text-base">
                N
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-wider">
                NEXORA
              </span>
            </div>

            <p className="text-sm font-heading font-medium text-slate-300">
              “Clarity. Strategy. Growth.”
            </p>

            <p className="text-xs font-light text-slate-400 max-w-sm leading-relaxed">
              Strategic business consulting firm helping startups, SMEs, and growing companies solve complex business problems, improve operations, build strong strategies, and accelerate growth.
            </p>

            <div className="pt-2">
              <a
                href="mailto:hello@nexora.consulting"
                className="text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5"
              >
                <span>hello@nexora.consulting</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono text-slate-200 uppercase tracking-widest block font-semibold mb-2">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs">
              {['About', 'Services', 'Approach', 'Case Studies', 'Why Nexora', 'Industries', 'Insights'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono text-slate-200 uppercase tracking-widest block font-semibold mb-2">
              PRACTICE AREAS
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Business Strategy & Positioning</li>
              <li>Digital Transformation & Cloud</li>
              <li>Enterprise AI & Automation</li>
              <li>Growth Strategy & GTM</li>
              <li>Operational Excellence & OKRs</li>
              <li>Data Architecture & BI</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono text-slate-200 uppercase tracking-widest block font-semibold mb-2">
              CONNECT
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center justify-between"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center justify-between"
                >
                  <span>X (Twitter)</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center justify-between"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <span>© {currentYear} Nexora Consulting. All rights reserved.</span>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
