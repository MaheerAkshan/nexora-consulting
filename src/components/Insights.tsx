import React from 'react';
import { ArrowUpRight, Clock, Calendar, BookOpen } from 'lucide-react';

export interface ArticleItem {
  id: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  summary: string;
  content: string[];
}

export const insightsData: ArticleItem[] = [
  {
    id: 'article-1',
    category: 'AI & Automation',
    readTime: '6 min read',
    date: 'Sep 2026',
    title: 'The AI Advantage: Where Businesses Should Start',
    summary: 'Navigating the noise around artificial intelligence to identify high-ROI operational leverage points rather than superficial software toys.',
    content: [
      'Artificial intelligence is experiencing a classic hype cycle. Executives are bombarded daily with promises of revolutionary disruption, but most struggle to translate AI potential into measurable P&L impact.',
      'To build a real AI advantage, leadership must stop treating AI as an isolated IT project and start viewing it as a core operational multiplier.',
      'First: Audit your highest friction workflows. Look for processes with heavy data transformation, high manual repeat hours, or decision bottlenecks.',
      'Second: Focus on domain-specific context. Off-the-shelf public LLMs lack your company’s internal institutional memory. Fine-tuned or RAG-enabled workflows connected to your proprietary data deliver 10× greater accuracy.',
      'Third: Measure velocity, not just headcount reduction. The true ROI of AI lies in enabling your existing senior team to execute at 3× speed.',
    ],
  },
  {
    id: 'article-2',
    category: 'Business Strategy',
    readTime: '8 min read',
    date: 'Aug 2026',
    title: 'Why Growth Without Strategy Eventually Breaks',
    summary: 'Examining why rapid revenue expansion without underlying unit economics and strategic positioning leads to operational collapse.',
    content: [
      'In high-growth environments, revenue often masks systemic organizational flaws. Companies scale sales teams, double marketing budgets, and celebrate top-line expansion—only to hit a sudden margin wall.',
      'Strategy is the art of deciding what NOT to do. Growth without strategy is simply brute-force customer acquisition that erodes gross margins.',
      'When positioning is vague, customer retention drops because expectations diverge from product capability. Sales cycles lengthen, and discounting becomes the default tool to close deals.',
      'Sustainable scaling requires a clear strategic moat: superior unit economics, defensible pricing power, and an operational model that becomes more efficient as volume increases.',
    ],
  },
  {
    id: 'article-3',
    category: 'Digital Transformation',
    readTime: '5 min read',
    date: 'Aug 2026',
    title: 'Building an Organization Ready for Change',
    summary: 'How forward-thinking CEOs align human incentives, technology systems, and organizational culture for continuous adaptation.',
    content: [
      'The greatest bottleneck to modern digital transformation is rarely technology—it is organizational friction and legacy human habits.',
      'Tools change every 18 months, but human psychology remains constant. If team members perceive new digital systems as threat or added work, adoption will stall.',
      'Transformational leaders create psychological safety around experimentation. They reward process iteration and streamline cross-functional communication channels.',
      'By decoupling strategic agility from annual rigid budgeting, resilient companies build an organizational muscle capable of pivoting in weeks rather than fiscal quarters.',
    ],
  },
];

interface InsightsProps {
  onOpenArticle: (article: ArticleItem) => void;
}

export const Insights: React.FC<InsightsProps> = ({ onOpenArticle }) => {
  return (
    <section id="insights" className="py-24 bg-[#08090e] relative border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold">
                NEXORA THINKING & PERSPECTIVES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Ideas for leaders building what comes next.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm font-light leading-relaxed">
            Executive insights on business strategy, AI integration, and organizational resilience from our senior advisory team.
          </p>
        </div>

        {/* 3 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((article) => (
            <div
              key={article.id}
              onClick={() => onOpenArticle(article)}
              className="group rounded-2xl glass-card border border-white/10 overflow-hidden cursor-pointer hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between p-8"
            >
              <div>
                {/* Meta info bar */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-[10px] font-mono text-blue-400 font-bold bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20 uppercase">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {article.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-slate-300 text-xs leading-relaxed font-light mb-6">
                  {article.summary}
                </p>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-blue-400 group-hover:text-blue-300 transition-colors">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  READ ESSAY
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
