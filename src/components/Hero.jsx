import { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolio';
import avatarImg from '../assets/Avatar.jpg';

const TYPED_STRINGS = [
  'Frontend Engineer.',
  'React Developer.',
  'Web Developer.',
  'Coffee Lover.',
];

function useTypingEffect(strings, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [strIndex, setStrIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[strIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setStrIndex((s) => (s + 1) % strings.length);
    }

    setDisplay(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, strIndex, strings, speed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTypingEffect(TYPED_STRINGS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />

      {/* Scan line effect */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent pointer-events-none animate-scan"
        style={{ animationDuration: '8s' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-16">
        <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Status badges */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-neon-green/30 bg-neon-green/5 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="font-display text-xs text-neon-green tracking-widest">AVAILABLE FOR WORK</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-neon-green/30 bg-neon-green/5 rounded-sm">
              <svg
                className="w-3.5 h-3.5 text-neon-green"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 4.5-8 11-8 11s-8-6.5-8-11a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="font-display text-xs text-neon-green tracking-widest uppercase">{portfolioData.location}</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-4">
            <span className="block text-white">Hi, I'm</span>
            <span className="block text-gradient mt-1">{portfolioData.name}</span>
          </h1>

          {/* Avatar + Bio Section */}
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center mb-16">
            
            {/* Left: Avatar Image */}
            <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80">
              <img 
                src={avatarImg}
                alt="Avatar" 
                className="w-full h-full object-cover rounded-lg border border-neon-purple/20 hover:border-neon-purple/40 transition-colors"
              />
            </div>

            {/* Right: Content */}
            <div className="flex-1">
              {/* Typed line */}
              <div className="h-10 md:h-12 flex flex-wrap items-center gap-3 mt-6 mb-8">
                <span className="font-display text-xl md:text-2xl text-gray-400">
                  {typed}
                  <span className="animate-blink text-neon-purple">|</span>
                </span>
                <span className="flex items-center gap-1 text-xl md:text-2xl leading-none" aria-label="Canada and Philippines">
                  <span role="img" aria-label="Canada flag">🇨🇦</span>
                  <span role="img" aria-label="Philippines flag">🇵🇭</span>
                </span>
              </div>

              {/* Bio */}
              <p className="font-body text-gray-400 text-lg leading-relaxed mb-10">
                {portfolioData.bio}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#experience"
                  className="font-display text-sm tracking-widest px-6 py-3 bg-neon-purple text-dark-900 font-bold hover:bg-neon-purple/90 transition-all duration-300 rounded-sm hover:shadow-[0_0_30px_rgba(191,90,242,0.4)]"
                >
                  VIEW MY WORK
                </a>
                <a
                  href="#contact"
                  className="font-display text-sm tracking-widest px-6 py-3 border border-neon-purple/40 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple transition-all duration-300 rounded-sm"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-12 border-t border-white/5 pt-10">
            {[
              { value: '6+', label: 'Years Experience' },
              { value: '10+', label: 'Applications Shipped' },
              { value: '2', label: 'Companies' },
              // { value: '3+', label: 'Mobile Applications Shipped' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-neon-purple">{stat.value}</div>
                <div className="font-body text-xs text-gray-500 mt-1 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-display text-xs tracking-widest text-gray-500">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-neon-purple to-transparent" />
      </div>
    </section>
  );
}
