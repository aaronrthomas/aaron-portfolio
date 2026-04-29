import { Sparkle, MonogramA } from "./Sparkle";

export function Hero() {
  return (
    <section
      className="relative min-h-screen bg-background grain flex flex-col mt-[-10px]"
      style={{
        backgroundImage: "url('/shapes.svg')",
        backgroundSize: "100% 88%",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative chevrons */}
      {/* <div aria-hidden className="pointer-events-none absolute inset-0">
        <svg
          className="absolute -left-10 top-1/3 w-32 sm:w-56 text-primary opacity-90"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <polygon points="0,10 60,10 100,50 60,90 0,90 40,50" />
        </svg>
        <svg
          className="absolute -right-10 top-1/3 w-32 sm:w-56 text-primary opacity-90"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <polygon points="100,10 40,10 0,50 40,90 100,90 60,50" />
        </svg>
        <Sparkle className="absolute left-6 bottom-32 w-10 h-10 text-primary float" />
        <Sparkle className="absolute right-10 top-20 w-6 h-6 text-primary float" />
      </div> */}

      {/* Top bar */}
      <div className="relative flex items-center justify-center px-6 sm:px-10 lg:px-[185px] pt-10 text-xs uppercase tracking-[0.2em] font-bold">
        <nav className="hidden sm:flex items-center gap-6 text-foreground/70">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-10 lg:px-[200px] text-center">
        <div className="flex items-center gap-4 mb-0 lg:mb-[-40px]">
          <p className="font-sans text-sm sm:text-base text-foreground/80" style={{ fontSize: "clamp(0.75rem, 3vw, 25.38px)" }}>
            by <span className="uppercase tracking-[0.2em] font-medium font-display font-bold" style={{ fontSize: "clamp(1rem, 5vw, 57.88px)" }}>Aaron R Thomas</span>
          </p>
        </div>
        <div className="mt-4 flex items-center gap-[-10px]">
          <p
            className="hidden sm:block uppercase tracking-[0.35em] text-primary font-display"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "clamp(1rem, 5vw, 60px)" }}
          >
            Graphic Design
          </p>
          <h1 className="font-display font-bold text-primary uppercase leading-[0.85] tracking-tight">
            <span className="block" style={{ fontSize: "clamp(3rem, 24vw, 365px)" }}>
              Port <span className="opacity-90">20</span>
            </span>
            <span className="block mt-2" style={{ fontSize: "clamp(3rem, 24vw, 365px)" }}>
              Fort <span className="opacity-90">26</span>
            </span>
          </h1>
        </div>
      </div>

      {/* Footer line */}
      <div className="relative z-10 flex items-center gap-3 px-6 sm:px-5 pb-6 mt-16 text-xs uppercase tracking-[0.2em] text-primary">
        <img src="./A.svg" alt="" width="68.37px" height="68.37px" className="w-10 h-10" />
        <img src="./star.svg" alt="" width="68.37px" height="68.37px" className="w-10 h-10" />
        <div className="flex-1 h-px bg-black/40 font-bold" />
        <span className="opacity-80 text-black font-bold">April 2026 — All rights reserved</span>
      </div>
    </section>
  );
}
