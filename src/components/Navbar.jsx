import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#about" className="font-display text-neon-purple text-lg tracking-wider hover:opacity-80 transition-opacity">
          CC<span className="animate-blink">_</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-xs tracking-widest text-gray-400 hover:text-neon-purple transition-colors duration-300 uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:charm.p.crescini@gmail.com"
              className="font-display text-xs tracking-widest px-4 py-2 border border-neon-purple/40 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple transition-all duration-300 rounded-sm"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-neon-purple transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-neon-purple transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-neon-purple transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="bg-dark-800/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-xs tracking-widest text-gray-400 hover:text-neon-purple transition-colors uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
