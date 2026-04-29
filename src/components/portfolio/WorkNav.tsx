const items = [
  { id: "brochure", label: "Brochure" },
  { id: "logos", label: "Logo Design" },
  { id: "social", label: "Social Media" },
  { id: "style", label: "Style Guide" },
];

export function WorkNav() {
  return (
    <div id="work" className="sticky top-0 z-30 bg-background/85 backdrop-blur border-y border-border items-center">
      <nav className="mx-auto max-w-6xl px-4 py-3 overflow-x-auto">
        <ul className="flex flex-wrap items-center gap-2 sm:gap-4 justify-center">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className="block px-4 py-2 rounded-full text-xs sm:text-sm uppercase tracking-[0.18em] font-display border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
