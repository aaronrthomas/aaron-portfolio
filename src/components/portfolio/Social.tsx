import { SectionHeader } from "./SectionHeader";

function Tile({ tone = "primary" }: { tone?: "primary" | "warm" | "cool" }) {
  const palette =
    tone === "warm"
      ? "from-orange-500/80 to-rose-500/60"
      : tone === "cool"
        ? "from-sky-500/70 to-indigo-500/60"
        : "from-primary/80 to-primary/40";
  return (
    <div className={`aspect-[3/4] rounded-md bg-gradient-to-br ${palette} relative overflow-hidden border border-border`}>
      <div className="absolute inset-0 grain opacity-60" />
      <div className="absolute bottom-3 left-3 right-3 space-y-1">
        <div className="h-1.5 w-2/3 bg-white/80 rounded-full" />
        <div className="h-1.5 w-1/2 bg-white/60 rounded-full" />
      </div>
    </div>
  );
}

function Row({
  title,
  body,
  tiles,
}: {
  title: string;
  body: string;
  tiles: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div>
        <h3 className="font-display text-xl uppercase tracking-wider mt-4 md:mt-16" style={{ fontSize: "clamp(35.38px,5vw,1rem)" }}>{title}</h3>
        <p className="mt-3 text-foreground/80 leading-relaxed text-sm" style={{ fontSize: "clamp(18.38px,5vw,1rem)" }}>{body}</p>
      </div>
      <div>{tiles}</div>
    </div>
  );
}

export function Social() {
  return (
    <section className="bg-background">
      <SectionHeader id="social" line1="Social" line2="Media" />
      <div className="grain px-6 sm:px-10 py-16 space-y-16">
        <div className="mx-auto max-w-6xl flex items-center justify-between text-xs uppercase tracking-[0.2em] text-foreground/60">
          <span>Portfolio — Social Media</span>
          <span>Date: 2024 — now</span>
        </div>

        <div className="mx-auto max-w-6xl space-y-16" style={{ fontSize: "clamp(50.38px,5vw,1.5rem)" }}>
          <Row
            title="Social Media Grid Design"
            body="Designed cohesive grid layouts that maintain a consistent visual identity and create an engaging, well-structured feed."
            tiles={
              <img src="./grid.png" alt="Social media grid design" className="w-full h-auto rounded-md" />
            }
          />
          <Row
            title="Posters"
            body="Created impactful poster designs focused on strong composition, typography, and clear communication of key messages."
            tiles={
              <img src="./poster.svg" alt="Social media grid design" className="w-full h-auto rounded-md" />
            }
          />
          <Row
            title="Reel Covers"
            body="Crafted visually compelling reel covers that capture attention instantly and enhance content discoverability and engagement."
            tiles={
              <img src="./cover.svg" alt="Social media grid design" className="w-auto h-auto rounded-md" />
            }
          />
        </div>
      </div>
    </section>
  );
}
