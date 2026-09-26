import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (initialService?: string) => void;
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenAudit }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlight logic
      const sections = ['about', 'services', 'approach', 'casestudies', 'whyus', 'industries', 'insights'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Approach', href: '#approach' },
    { name: 'Case Studies', href: '#casestudies' },
    { name: 'Why Nexora', href: '#whyus' },
    { name: 'Industries', href: '#industries' },
    { name: 'Insights', href: '#insights' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090e]/85 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-2xl shadow-black/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 tracking-tight focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 p-[1px] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
            <div className="w-full h-full bg-[#08090e] rounded-[7px] flex items-center justify-center">
              <span className="font-heading font-extrabold text-lg text-white group-hover:text-blue-400 transition-colors">
                N
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl tracking-wider text-white flex items-center gap-1.5">
              NEXORA
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-1">
              CONSULTING
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 font-semibold shadow-inner'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenAudit}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-blue-400 px-3 py-2 rounded-lg border border-transparent hover:border-blue-500/20 hover:bg-blue-500/5 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>AI Readiness Audit</span>
          </button>

          <button
            onClick={() => onOpenBooking()}
            className="relative group overflow-hidden px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 flex items-center gap-2"
          >
            <span className="relative z-10">Book a Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-[#08090e]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 shadow-2xl flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 border-b border-white/5 text-slate-200 hover:text-blue-400 font-medium text-sm transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-300 font-medium text-xs"
            >
              <Sparkles className="w-4 h-4" />
              <span>Take Free AI Readiness Assessment</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
