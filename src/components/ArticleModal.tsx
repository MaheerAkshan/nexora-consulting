import React from 'react';
import { X, Clock, Calendar } from 'lucide-react';
import type { ArticleItem } from './Insights';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

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

        {/* Article Meta Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            {article.category}
          </span>
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {article.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {article.date}
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6 leading-snug">
          {article.title}
        </h2>

        {/* Summary box */}
        <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/20 mb-8 text-xs font-heading font-medium text-blue-200 leading-relaxed">
          "{article.summary}"
        </div>

        {/* Paragraphs */}
        <div className="space-y-4 text-sm font-light text-slate-300 leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="bg-white/[0.01] p-2 rounded">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Nexora Thought Leadership Series
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
