import { SectionHeader } from "./SectionHeader";


export function StyleGuide() {
  return (
    <section className="bg-background">
      <SectionHeader id="style" line1="Style" line2="Guide" />
      <div className="grain px-6 sm:px-10 py-16">
        <div className="mx-auto max-w-6xl flex items-center justify-between text-xs uppercase tracking-[0.2em] text-foreground/60 pb-10">
          <span>Portfolio — Style Guide</span>
          <span>Date: 2025</span>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="mt-8 md:mt-32">
            <h3 className="font-display text-2xl uppercase tracking-wider">Style Guide</h3>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Developed comprehensive style guides that define typography, color systems, and
              visual elements to ensure consistency across all design outputs. Established clear
              design rules and scalable systems that streamline workflows and maintain a strong,
              cohesive brand identity.
            </p>
          </div>

          <div>
            <img src="./Style Guide.png" alt="Style Guide" className="max-w-sm w-full h-auto rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
