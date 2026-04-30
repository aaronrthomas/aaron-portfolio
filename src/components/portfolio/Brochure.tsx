import { SectionHeader } from "./SectionHeader";

export function Brochure() {
  return (
    <section className="bg-background">
      <SectionHeader id="brochure" line1="Vijnana" line2="Keralam" />
      <div className="grain px-6 sm:px-10 py-16">
        <div className="mx-auto max-w-6xl flex items-center justify-between text-xs uppercase tracking-[0.2em] text-foreground/60 pb-10">
          <span>Portfolio — Vijnana Keralam</span>
          <span>Date: 2025</span>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="mt-8 md:mt-32">
            <h3 className="font-display text-2xl uppercase tracking-wider">Brochure</h3>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Designed a professional brochure for K-DISC Vijnana Keralam, focusing on clear
              information hierarchy, structured layouts, and visually engaging elements to
              communicate content effectively. Ensured consistency in typography, color usage,
              and branding while creating a clean and accessible reading experience.
            </p>
          </div>

          {/* Stylized brochure mock */}
          <div className="relative w-full max-w-sm justify-self-center md:justify-self-end bg-card rounded-md shadow-xl shadow-primary/10 overflow-hidden border border-border">
            <img src="./Trifold.svg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
