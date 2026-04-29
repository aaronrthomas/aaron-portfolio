import { Sparkle } from "./Sparkle";

const skills = ["Figma", "Adobe", "Illustrator", "Photoshop"];
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

export function Resume() {
  return (
    <section className="bg-background grain px-6 sm:px-10 py-20 border-t border-border">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-10">
          <div>
            <Heading>Education</Heading>
            <div className="mt-3">
              <div className="text-sm text-muted-foreground">2024 — now</div>
              <div className="font-display text-lg uppercase tracking-wider mt-1">
                B.Tech in CSE
              </div>
              <div className="text-sm text-foreground/70">
                St. Thomas Institute for Science and Technology — India, Kerala
              </div>
            </div>
          </div>

          <div>
            <Heading>Technical Skills</Heading>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-md bg-card border border-border text-xs uppercase tracking-widest"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <Heading>Languages</Heading>
            <dl className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
              {languages.map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="text-foreground/80">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <Heading>Interests</Heading>
            <div className="mt-3 flex flex-wrap gap-2">
              {interests.map((i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full border border-border text-xs"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Heading>Experience</Heading>
          {[
            {
              role: "Graphic Designer",
              year: "2024",
              title: "Yukthi 24",
              body: "Contributed to the Yukthi Tech Fest 2024 design team by creating visually engaging graphics and branding materials that ensured a cohesive and impactful event identity.",
            },
            {
              role: "Graphic Designer",
              year: "2024",
              title: "Permute 24",
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
              className="grid grid-cols-[100px_1fr] gap-4 pb-6 border-b border-border last:border-0"
            >
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {e.role}
                <div className="mt-2 text-foreground">{e.year}</div>
              </div>
              <div>
                <h4 className="font-display text-lg uppercase tracking-wider">{e.title}</h4>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{e.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
