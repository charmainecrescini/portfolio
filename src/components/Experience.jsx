import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal();

  const active = portfolioData.experience[activeIndex];

  return (
    <section id="experience" className="py-32 relative bg-dark-800/30">
      {/* Subtle bg decoration */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Section header */}
        <div ref={headerRef} className="section-fade mb-16">
          <p className="font-display text-xs text-neon-purple tracking-[0.3em] mb-3">03 / EXPERIENCE</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Where I've<br />
            <span className="text-gradient">Shipped Work</span>
          </h2>
        </div>

        <div ref={contentRef} className="section-fade flex flex-col md:flex-row gap-8">

          {/* Company tabs (left) */}
          <div className="md:w-56 flex-shrink-0">
            <div className="flex md:flex-col gap-1">
              {portfolioData.experience.map((exp, i) => (
                <button
                  key={`${exp.company}-${i}`}
                  onClick={() => setActiveIndex(i)}
                  className={`text-left px-4 py-3 border-l-2 transition-all duration-300 ${
                    activeIndex === i
                      ? 'border-neon-purple text-neon-purple bg-neon-purple/5'
                      : 'border-white/10 text-gray-500 hover:text-gray-300 hover:border-white/30'
                  }`}
                >
                  <span className="font-display text-sm tracking-wider block">{exp.company}</span>
                  <span className="font-body text-xs text-gray-600 mt-0.5 block">{exp.period}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Detail panel (right) */}
          <div key={activeIndex} className="flex-1 glass-card rounded-sm p-8 border border-white/5 animate-fade-in">
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-white mb-1">{active.role}</h3>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-sm text-neon-purple">{active.company}</span>
                <span className="text-gray-600">·</span>
                <span className="font-display text-xs text-gray-500 tracking-wider">{active.period}</span>
              </div>
              <p className="font-body text-sm text-gray-600 italic mt-2">{active.description}</p>
            </div>

            {/* Highlights */}
            <ul className="space-y-3">
              {active.highlights.map((point, i) => (
                <li key={i} className="flex gap-3 group">
                  <span className="flex-shrink-0 text-neon-purple mt-1 group-hover:text-neon-blue transition-colors">▸</span>
                  <span className="font-body text-base text-gray-300 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
