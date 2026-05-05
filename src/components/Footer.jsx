import { portfolioData } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xs text-gray-600 tracking-widest">
          © {new Date().getFullYear()} {portfolioData.name} · Built with React + Vite + Tailwind
        </span>
        <span className="font-display text-xs text-neon-purple/40 tracking-widest">
          Toronto, ON
        </span>
      </div>
    </footer>
  );
}
