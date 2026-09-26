import React from 'react';
import { ArrowUpRight, Cpu, LineChart, Cpu as AiIcon, Target, Settings, Database, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: React.ReactNode;
  detailView: {
    overview: string;
    outcomes: string[];
    timeline: string;
    methodologyKey: string;
  };
}

export const servicesData: ServiceItem[] = [
  {
    id: 'business-strategy',
    number: '01',
    title: 'Business Strategy',
    description: 'Market positioning, competitive strategy, growth planning, and resilient business models built for market shifts.',
    deliverables: ['Market Positioning Blueprint', 'Competitive Moat Analysis', '3-Year Growth Roadmap'],
    icon: <Target className="w-5 h-5 text-blue-400" />,
    detailView: {
      overview: 'We work directly with founders and executive teams to stress-test existing business models, define defensible market positioning, and establish clear strategic roadmaps for sustainable value creation.',
      outcomes: ['Clear competitive differentiation', 'Defensible pricing strategy', 'Optimized go-to-market model'],
      timeline: '4 - 8 Weeks Engagement',
      methodologyKey: 'Strategic Diagnostic & Positioning Framework',
    },
  },
  {
    id: 'digital-transformation',
    number: '02',
    title: 'Digital Transformation',
    description: 'Modernize core operations, technology infrastructure, legacy systems, and digital customer experiences.',
    deliverables: ['Tech Stack Modernization', 'Cloud Architecture Strategy', 'Digital Workflow Audit'],
    icon: <Cpu className="w-5 h-5 text-blue-400" />,
    detailView: {
      overview: 'Transitioning legacy operations into high-velocity digital environments. We align modern tech stacks with business goals to eliminate technical debt and operational drag.',
      outcomes: ['30%+ reduction in systemic latency', 'Seamless legacy API integration', 'Scalable enterprise tech stack'],
      timeline: '6 - 12 Weeks Engagement',
      methodologyKey: 'Modern Systems Architecture Review',
    },
  },
  {
    id: 'ai-automation',
    number: '03',
    title: 'AI & Automation',
    description: 'Identify high-impact opportunities to integrate enterprise AI, automated agent workflows, and predictive models.',
    deliverables: ['AI Opportunity Matrix', 'LLM Agent Integration Blueprint', 'Automation ROI Map'],
    icon: <AiIcon className="w-5 h-5 text-blue-400" />,
    detailView: {
      overview: 'Helping leadership teams evaluate, select, and deploy AI capabilities that create real operational leverage rather than gimmick software.',
      outcomes: ['Automated routine decision trees', 'Custom domain LLM workflows', '40%+ operational time saved'],
      timeline: '4 - 10 Weeks Engagement',
      methodologyKey: 'AI Maturity & Capability Assessment',
    },
  },
  {
    id: 'growth-strategy',
    number: '04',
    title: 'Growth Strategy',
    description: 'Customer acquisition architecture, market expansion plans, pricing models, and revenue stream optimization.',
    deliverables: ['GTM Launch Framework', 'Pricing Tier Restructure', 'Customer LTV/CAC Engine'],
    icon: <LineChart className="w-5 h-5 text-blue-400" />,
    detailView: {
      overview: 'Accelerating organic and inorganic revenue growth through data-backed channel optimization, pricing elasticity modeling, and expansion planning.',
      outcomes: ['Higher net revenue retention', 'Optimized sales velocity', 'Expanded total addressable market'],
      timeline: '4 - 8 Weeks Engagement',
      methodologyKey: 'Revenue Acceleration Engine',
    },
  },
  {
    id: 'operations',
    number: '05',
    title: 'Operations',
    description: 'Process optimization, performance management metrics, organizational design, and operational efficiency.',
    deliverables: ['SOP & Workflow Redesign', 'KPI Control Dashboard', 'Operational Bottleneck Audit'],
    icon: <Settings className="w-5 h-5 text-blue-400" />,
    detailView: {
      overview: 'Removing friction points across teams, tools, and processes. We optimize organizational flow so companies can scale without linear head-count expansion.',
      outcomes: ['Streamlined cross-functional handoffs', 'Clear OKR/KPI accountability', 'Lower operating overhead'],
      timeline: '6 - 10 Weeks Engagement',
      methodologyKey: 'Lean Enterprise Operational Framework',
    },
  },
  {
    id: 'data-analytics',
    number: '06',
    title: 'Data & Analytics',
    description: 'Turn fragmented business data into real-time actionable insights, executive dashboards, and forecasting engines.',
    deliverables: ['Executive BI Dashboard', 'Predictive Demand Model', 'Data Governance Architecture'],
    icon: <Database className="w-5 h-5 text-blue-400" />,
    detailView: {
      overview: 'Transforming raw data into clear executive decision systems. We construct unified data layers that empower leadership with real-time clarity.',
      outcomes: ['Single source of truth data model', 'Predictive forecasting precision', 'Real-time financial telemetry'],
      timeline: '5 - 9 Weeks Engagement',
      methodologyKey: 'Enterprise Analytics Pipeline Strategy',
    },
  },
];

export const Services: React.FC<ServicesProps> = ({ onSelectService, onOpenBooking }) => {
  return (
    <section id="services" className="py-24 bg-[#08090e] relative border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold">
                OUR CONSULTING CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
              What we help businesses solve
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm font-light leading-relaxed">
            Tailored strategic interventions designed for high-growth startups, SMEs, and mid-market organizations seeking breakthrough clarity.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.title)}
              className="group relative p-8 rounded-2xl glass-card flex flex-col justify-between h-full cursor-pointer hover:-translate-y-1 transition-all duration-300 border border-white/[0.06] hover:border-blue-500/30"
            >
              <div>
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-blue-600/10 group-hover:border-blue-500/40 transition-colors">
                    {service.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-blue-300 transition-colors flex items-center justify-between">
                  <span>{service.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed font-light mb-6">
                  {service.description}
                </p>

                {/* Deliverable Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono text-slate-400 bg-white/[0.02] border border-white/[0.06] px-2.5 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Trigger */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-blue-400 transition-colors">
                <span>EXPLORE SCOPE & OUTCOMES</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-[#0a0d17] to-slate-900 border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-1">
              Need a custom multi-disciplinary advisory scope?
            </h4>
            <p className="text-xs text-slate-300 font-light">
              We frequently combine strategy, AI automation, and operational design into tailored enterprise engagements.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('Custom Enterprise Scope')}
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-600/20 shrink-0 flex items-center gap-2"
          >
            <span>Request Custom Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
