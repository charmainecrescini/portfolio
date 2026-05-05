import { portfolioData } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CATEGORY_ICONS = {
  'Frontend Engineering': '⬡',
  'Integration & APIs': '⟳',
  'Testing & Monitoring': '◈',
  'Delivery & Tools': '◆',
};

export default function Skills() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section header */}
        <div ref={headerRef} className="section-fade mb-16">
          <p className="font-display text-xs text-neon-purple tracking-[0.3em] mb-3">02 / SKILLS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Tech Stack &<br />
            <span className="text-gradient">Capabilities</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div ref={gridRef} className="section-fade grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.skills.map((group, i) => (
            <div
              key={group.category}
              className="glass-card rounded-sm p-6 border hover:border-neon-green/20 transition-all duration-500 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-neon-green text-xl">{CATEGORY_ICONS[group.category] || '◇'}</span>
                <h3 className="font-display text-xs tracking-widest text-gray-400 uppercase">
                  {group.category}
                </h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag cursor-default">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications strip */}
        <div className="mt-12 p-6 border border-neon-blue/20 bg-neon-blue/5 rounded-sm">
          <p className="font-display text-xs tracking-widest text-neon-blue mb-4">CERTIFICATIONS</p>
          <div className="flex flex-wrap gap-4">
            {portfolioData.certifications.map((cert) => (
              <div key={cert.name} className="flex items-start gap-2">
                <span className="text-neon-blue mt-0.5">▸</span>
                <div>
                  <span className="font-body text-sm text-white">{cert.name}</span>
                  <span className="font-display text-xs text-gray-500 ml-2">— {cert.issuer} · {cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Education strip */}
        <div className="mt-12 p-6 border border-neon-blue/20 bg-neon-blue/5 rounded-sm">
          <p className="font-display text-xs tracking-widest text-neon-blue mb-4">EDUCATION</p>
          <div className="flex flex-wrap gap-4">
            {portfolioData.education.map((cert) => (
              <div key={cert.name} className="flex items-start gap-2">
                <span className="text-neon-blue mt-0.5">▸</span>
                <div>
                  <span className="font-body text-sm text-white">{cert.name}</span>
                  <span className="font-display text-xs text-gray-500 ml-2">— {cert.issuer} · {cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
