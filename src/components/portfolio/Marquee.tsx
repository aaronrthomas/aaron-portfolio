import { Sparkle, MonogramA } from "./Sparkle";

export function Marquee({ text = "Portfolio" }: { text?: string }) {
  const items = Array.from({ length: 8 });
  return (
    <div className="w-full overflow-hidden bg-black text-primary-foreground py-3 border-y border-primary-foreground/20">
      <div className="marquee-track">
        {[0, 1].map((g) => (
          <div key={g} className="flex items-center gap-6 pr-6">
            {items.map((_, i) => (
              <div key={i} className="flex items-center gap-6 text-sm font-display tracking-widest uppercase">
                <img src="./A blue.svg" alt="" className="w-8 h-8" />
                <span>{text}</span>
                <img src="./Blue star.svg" alt="" className="w-8 h-8" />
                <span>Aaron R Thomas</span>
                <Sparkle className="w-8 h-8" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}