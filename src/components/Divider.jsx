export default function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-neon-purple/20" />
        <span className="text-neon-purple/30 text-xs font-display">◆</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-neon-purple/20" />
      </div>
    </div>
  );
}
