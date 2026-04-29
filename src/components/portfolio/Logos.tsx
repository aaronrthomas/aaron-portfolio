import { SectionHeader } from "./SectionHeader";

const marks = [
  { label: "BN", src: "./logos/5a0faf3d-7cc7-478e-8e8b-321d012ee544 1.svg" },
  { label: "H", src: "./logos/5b36ea79-f47e-4d49-afe0-f7644fb60cab 1.svg" },
  { label: "HX", src: "./logos/6489d1f7-acf7-43b5-83fa-63688f44f924 1.svg" },
  { label: "Golden Fern Co.", src: "./logos/663befa7-74f4-4946-8d7a-7079cb2835cf 1.svg" },
  { label: "Caretta", src: "./logos/95fb0645-b846-4a3a-ab14-d8ee8de0bce8 1.svg" },
  { label: "Cowboy", src: "./logos/9d4728fd-3e04-48a8-9e4b-27f1b0b13de3 1.svg" },
  { label: "Umbra", src: "./logos/Mask group.svg" },
  { label: "Mesmeric", src: "./logos/b78404a3-ba11-4e9a-891e-b81117b637d5 1.svg" },
  { label: "Pacific Crest", src: "./logos/e9b633c7-ff95-4742-8e71-2b660ae63e41 1.svg" },
];

function Mark({ label, src }: { label: string; src: string }) {
  return (
    <div className="aspect-square grid place-items-center p-6">
      <img src={src} alt={label} className="w-full h-full object-contain" />
    </div>
  );
}

export function Logos() {
  return (
    <section className="bg-background">
      <SectionHeader id="logos" line1="Logo" line2="Design" />
      <div className="grain px-6 sm:px-10 py-16">
        <div className="mx-auto max-w-6xl flex items-center justify-between text-xs uppercase tracking-[0.2em] text-foreground/60 pb-10">
          <span>Portfolio — Logofolio</span>
          <span>Date: 2024 — now</span>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="mt-8 md:mt-32">
            <h3 className="font-display text-xl uppercase tracking-wider mt-4 md:mt-16" style={{ fontSize: "clamp(35.38px,5vw,1rem)" }}>Logofolio</h3>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Over the course of my design journey, I have crafted a diverse range of logos for
              individuals, businesses, startups, and university initiatives. Each logo is
              developed with a focus on clarity, concept, and identity—ensuring it not only
              looks distinctive but also communicates the essence of the brand.
            </p>
          </div>

          <div className="grid grid-cols-3">
            {marks.map((m, i) => (
              <div
                key={m.label}
                className={[
                  "border-border",
                  (i % 3 !== 2) ? "border-r" : "",
                  (i < 6) ? "border-b" : "",
                ].join(" ")}
              >
                <Mark {...m} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
