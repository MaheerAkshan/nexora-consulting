import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Sparkles, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreWork }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeMetric, setActiveMetric] = useState<'strategy' | 'ai' | 'growth'>('strategy');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Interactive node particle system
    const nodeCount = 28;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      label: string;
      color: string;
      highlighted?: boolean;
    }> = [];

    const labels = [
      'Strategy', 'Market GTM', 'AI Model', 'Data Pipeline', 'Revenue', 
      'Operations', 'Scalability', 'Automation', 'Unit Econ', 'Capital'
    ];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 3 + 2,
        label: i < labels.length ? labels[i] : '',
        color: i % 4 === 0 ? '#60a5fa' : i % 3 === 0 ? '#3b82f6' : '#94a3b8',
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid lines inside canvas
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;

      // Draw dynamic rotating strategy rings in center right
      const centerX = width * 0.55;
      const centerY = height * 0.5;
      angle += 0.005;

      ctx.save();
      ctx.translate(centerX, centerY);
      
      // Outer ring
      ctx.beginPath();
      ctx.arc(0, 0, 160, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.12)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Middle rotating dashed ring
      ctx.save();
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.setLineDash([8, 16]);
      ctx.arc(0, 0, 110, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.25)';
      ctx.stroke();
      ctx.restore();

      // Inner counter-rotating ring
      ctx.save();
      ctx.rotate(-angle * 1.5);
      ctx.beginPath();
      ctx.setLineDash([4, 12]);
      ctx.arc(0, 0, 70, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.35)';
      ctx.stroke();
      ctx.restore();

      ctx.restore();

      // Draw connecting lines between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const alpha = (1 - dist / 130) * 0.25;
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse attraction
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        if (distToMouse < 140) {
          node.x += (dx / distToMouse) * 0.4;
          node.y += (dy / distToMouse) * 0.4;
        }

        // Draw node dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = '#3b82f6';
        ctx.shadowBlur = distToMouse < 140 ? 12 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Render node text label if applicable
        if (node.label && distToMouse < 180) {
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = 'rgba(226, 232, 240, 0.7)';
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas) canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-lines">
      {/* Glow overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Editorial Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
            <span className="text-[11px] font-mono tracking-widest text-blue-300 uppercase font-medium">
              BUSINESS STRATEGY • DIGITAL TRANSFORMATION • GROWTH
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.08]">
            We turn complex business challenges into{' '}
            <span className="text-gradient-blue relative inline-block">
              clear growth strategies.
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-blue-500/40" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C50 3 150 3 298 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
            “Nexora Consulting partners with ambitious businesses to identify opportunities, solve critical problems, and build strategies that create measurable long-term growth.”
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-7 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 flex items-center gap-3 group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreWork}
              className="px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 font-semibold text-sm transition-all duration-300 flex items-center gap-2 backdrop-blur-md"
            >
              <span>Explore Our Work</span>
            </button>
          </div>

          {/* Mini Value Badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full max-w-xl">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="text-xs text-slate-400 font-medium">Evidence-Based</span>
            </div>
            <div className="flex items-center gap-2.5">
              <TrendingUp className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="text-xs text-slate-400 font-medium">Outcome-Driven</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Zap className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="text-xs text-slate-400 font-medium">AI Ready</span>
            </div>
          </div>
        </div>

        {/* Right Side Visual Canvas Component */}
        <div className="lg:col-span-5 relative w-full h-[450px] lg:h-[520px] rounded-2xl border border-white/10 glass-panel overflow-hidden flex flex-col justify-between p-6 group">
          {/* Top Canvas Header Bar */}
          <div className="flex items-center justify-between z-20 pb-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-xs font-mono text-slate-300">NEXORA STRATEGY ENGINE v4.2</span>
            </div>
            <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded-full">
              INTERACTIVE VECTOR MATRIX
            </span>
          </div>

          {/* Canvas Background Layer */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full cursor-crosshair z-10"
          ></canvas>

          {/* Overlay Interactive Cards */}
          <div className="relative z-20 mt-auto flex flex-col gap-3">
            {/* Interactive Selector Tabs */}
            <div className="flex items-center gap-2 bg-[#08090e]/90 p-1.5 rounded-xl border border-white/10 backdrop-blur-xl">
              <button
                onClick={() => setActiveMetric('strategy')}
                className={`flex-1 py-1.5 text-[11px] font-medium rounded-lg transition-all ${
                  activeMetric === 'strategy'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Strategy Architecture
              </button>
              <button
                onClick={() => setActiveMetric('ai')}
                className={`flex-1 py-1.5 text-[11px] font-medium rounded-lg transition-all ${
                  activeMetric === 'ai'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                AI Ecosystem
              </button>
              <button
                onClick={() => setActiveMetric('growth')}
                className={`flex-1 py-1.5 text-[11px] font-medium rounded-lg transition-all ${
                  activeMetric === 'growth'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Growth Capital
              </button>
            </div>

            {/* Dynamic Metric Display Card */}
            <div className="bg-[#08090e]/95 p-4 rounded-xl border border-white/10 backdrop-blur-2xl shadow-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">
                  {activeMetric === 'strategy' && 'Market Positioning Vector'}
                  {activeMetric === 'ai' && 'Automated Workflow Velocity'}
                  {activeMetric === 'growth' && 'EBITDA Expansion Target'}
                </span>
                <span className="text-xl font-heading font-bold text-white">
                  {activeMetric === 'strategy' && '+42% Competitive Edge'}
                  {activeMetric === 'ai' && '3.5× Operational Scale'}
                  {activeMetric === 'growth' && '$12.4M Value Unlocked'}
                </span>
              </div>
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
          SCROLL TO EXPLORE
        </span>
        <a href="#trust" className="p-1 rounded-full border border-white/10 bg-white/5 animate-bounce">
          <ChevronDown className="w-4 h-4 text-slate-300" />
        </a>
      </div>
    </section>
  );
};
