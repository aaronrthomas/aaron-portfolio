import { Sparkle } from "./Sparkle";

const skills = [
  { name: "Figma", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg" },
  { name: "Affinity", icon: "./affinity.svg", raw: true },
  { name: "Illustrator", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobeillustrator.svg" },
  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobephotoshop.svg" },
];
const languages = [
  ["English", "Intermediate"],
  ["Malayalam", "Native"],
  ["Deutsch", "B1"],
  ["Hindi", "Intermediate"],
];
const interests = [
  "Design",
  "Problem Solving",
  "UI/UX Design",
  "Music",
  "Art & Craft",
  "Cinema",
  "Philosophy",
];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-primary">
      <h3 className="font-display uppercase tracking-wider text-xl">{children}</h3>
      <Sparkle className="w-4 h-4" />
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative bg-background grain px-6 sm:px-10 py-20 scroll-mt-8">
      <div className="mx-auto max-w-6xl">
        {/* Top: portrait + about copy */}
        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-10 items-start">
          <img src="./ME.svg" alt="" className="w-full h-auto" />
          <div>
            <div className="flex items-center gap-2 text-primary">
              <h2 className="font-display text-2xl uppercase tracking-wider" style={{ fontSize: "clamp(40.53px,5vw,0.5rem)" }}>About Me</h2>
              <img src="./Blue star.svg" alt="" width="68.37px" height="68.37px" className="w-10 h-10" />
            </div>
            <p className="mt-4 text-foreground/80 leading-relaxed" style={{ fontSize: "clamp(20.53px,5vw,0.5rem)" }}>
              I'm a graphic designer driven by clarity, creativity, and intention. I specialize
              in crafting visuals that don't just stand out, but communicate designs that speak,
              guide, and leave a lasting impression. My work lives at the intersection of
              aesthetics and purpose. Whether it's branding, digital design, or user interfaces,
              I focus on creating experiences that feel simple, thoughtful, and meaningful.
            </p>
          </div>
        </div>

        {/* Skills, Languages, Interests + Education, Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 text-primary">
                <h2 className="font-display text-2xl uppercase tracking-wider" style={{ fontSize: "clamp(40.53px,5vw,0.5rem)" }}>Technical Skills</h2>
                <img src="./Blue star.svg" alt="" width="68.37px" height="68.37px" className="w-10 h-10" />
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                {skills.map((s) => (
                  <div
                    key={s.name}
                    className={`w-16 h-16 rounded-2xl grid place-items-center ${s.raw ? '' : 'bg-foreground p-3.5'}`}
                    title={s.name}
                  >
                    <img
                      src={s.icon}
                      alt={s.name}
                      className={s.raw ? 'w-full h-full rounded-2xl' : 'w-full h-full'}
                      style={s.raw ? undefined : { filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-primary">
                <h2 className="font-display text-2xl uppercase tracking-wider" style={{ fontSize: "clamp(40.53px,5vw,0.5rem)" }}>Languages</h2>
                <img src="./Blue star.svg" alt="" width="68.37px" height="68.37px" className="w-10 h-10" />
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
                {languages.map(([k, v]) => (
                  <div key={k} className="contents">
                    <dt className="text-foreground/80" style={{ fontSize: "clamp(18.53px,5vw,0.5rem)" }}>{k}</dt>
                    <dd className="font-medium" style={{ fontSize: "clamp(18.53px,5vw,0.5rem)" }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <div className="flex items-center gap-2 text-primary">
                <h2 className="font-display text-2xl uppercase tracking-wider" style={{ fontSize: "clamp(40.53px,5vw,0.5rem)" }}>Interests</h2>
                <img src="./Blue star.svg" alt="" width="68.37px" height="68.37px" className="w-10 h-10" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {interests.map((i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full border border-border text-xs" style={{ fontSize: "clamp(16.53px,5vw,0.5rem)" }}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-2 text-primary">
                <h2 className="font-display text-2xl uppercase tracking-wider" style={{ fontSize: "clamp(40.53px,5vw,0.5rem)" }}>Education</h2>
                <img src="./Blue star.svg" alt="" width="68.37px" height="68.37px" className="w-10 h-10" />
              </div>
              <div className="mt-4">
                <div className="text-sm text-muted-foreground" style={{ fontSize: "clamp(18.53px,5vw,0.5rem)" }}>Jan 2024</div>
                <div className="font-display text-lg uppercase tracking-wider mt-1" style={{ fontSize: "clamp(35.53px,5vw,0.5rem)" }}>
                  B.Tech in CSE
                </div>
                <div className="text-sm text-foreground/70" style={{ fontSize: "clamp(20.53px,5vw,0.5rem)" }}>
                  St. Thomas Institute for Science and Technology — India, Kerala
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-primary">
                <h2 className="font-display text-2xl uppercase tracking-wider" style={{ fontSize: "clamp(40.53px,5vw,0.5rem)" }}>Experience</h2>
                <img src="./Blue star.svg" alt="" width="68.37px" height="68.37px" className="w-10 h-10" />
              </div>
              <div className="mt-4 space-y-6" style={{ fontSize: "clamp(20.53px,5vw,0.5rem)" }}>
                {[
                  {
                    role: "Graphic Designer",
                    year: "2024",
                    title: "YUKTHI 24",
                    body: "Contributed to the Yukthi Tech Fest 2024 design team by creating visually engaging graphics and branding materials that ensured a cohesive and impactful event identity.",
                  },
                  {
                    role: "Graphic Designer",
                    year: "2024",
                    title: "PERMUTE 24",
                    body: "Designed cohesive visual assets and branding materials for Permute '24, strengthening the event's identity and enhancing overall audience engagement.",
                  },
                  {
                    role: "UI/UX Designer",
                    year: "2025",
                    title: "μLearn",
                    body: "Conducted a UI/UX audit of the μLearn platform and transformed insights into actionable improvements that enhanced usability, clarity, and overall user experience.",
                  },
                ].map((e) => (
                  <article
                    key={e.title}
                    className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 sm:gap-6 pb-8 border-b border-border last:border-0"
                  >
                    <div className="uppercase tracking-widest text-foreground">
                      <div className="font-display font-bold leading-tight uppercase tracking-wider" style={{ fontSize: "clamp(35.53px,5vw,0.5rem)" }}>
                        {e.role}
                      </div>
                      <div className="mt-2 text-primary font-display" style={{ fontSize: "clamp(35.53px,5vw,0.5rem)" }}>
                        {e.year}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display font-bold tracking-wider" style={{ fontSize: "clamp(35.53px,5vw,0.5rem)" }}>{e.title}</h4>
                      <p className="mt-2 text-foreground/80 leading-relaxed" style={{ fontSize: "clamp(20.53px,5vw,0.5rem)" }}>{e.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
