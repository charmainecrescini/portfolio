import { portfolioData } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div ref={ref} className="section-fade text-center max-w-2xl mx-auto">

          <p className="font-display text-xs text-neon-purple tracking-[0.3em] mb-3">04 / CONTACT</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build<br />
            <span className="text-gradient">Something Great</span>
          </h2>
          <p className="font-body text-gray-400 text-lg leading-relaxed mb-12">
            I'm currently open to new frontend engineering opportunities.
            Whether you have a role in mind or just want to connect — my inbox is open.
          </p>

          {/* Primary CTA */}
          <a
            href={`mailto:${portfolioData.email}`}
            className="inline-block font-display text-sm tracking-widest px-10 py-4 bg-neon-purple text-dark-900 font-bold hover:bg-neon-purple/90 transition-all duration-300 rounded-sm hover:shadow-[0_0_40px_rgba(191,90,242,0.5)] mb-12 animate-glow-pulse"
          >
            {portfolioData.email}
          </a>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-display text-xs tracking-widest text-gray-500 hover:text-neon-purple transition-colors duration-300 border border-white/10 hover:border-neon-purple/40 px-5 py-3 rounded-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-display text-xs tracking-widest text-gray-500 hover:text-neon-purple transition-colors duration-300 border border-white/10 hover:border-neon-purple/40 px-5 py-3 rounded-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              GitHub
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
