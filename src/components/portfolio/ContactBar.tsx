export function ContactBar() {
  const contacts = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.093L2.25 6.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      href: "mailto:aaronrthomas88@gmail.com",
      label: "Email",
      detail: "aaronrthomas88@gmail.com",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      href: "tel:+917034670789",
      label: "Phone",
      detail: "+91 703 467 0789",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      href: "https://instagram.com/aa.r.on_",
      label: "Instagram",
      detail: "@aa.r.on_",
      external: true,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: "https://www.linkedin.com/in/aaron-r-thomas-ba311931a/",
      label: "LinkedIn",
      detail: "Aaron R Thomas",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="bg-black text-primary grain px-6 sm:px-10 py-16 scroll-mt-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <img src="./Blue star.svg" alt="" width="68.37" height="68.37" className="w-8 h-8 mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-5xl uppercase font-bold leading-[0.9] tracking-[3.93px]">
            Get in
            <br />
            Touch
          </h2>
          <p className="mt-4 text-primary/70 text-sm max-w-md mx-auto font-bold">
            Have a project in mind or want to collaborate? Reach out through any of these channels.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary/20 mb-10" />

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noreferrer" : undefined}
              aria-label={c.label}
              className="group flex flex-col items-center gap-3 py-6 px-4 rounded-xl border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-primary/50 grid place-items-center group-hover:bg-primary group-hover:text-black transition-all duration-300">
                {c.icon}
              </div>
              <span className="font-display uppercase tracking-widest text-xs font-bold">
                {c.label}
              </span>
              <span className="text-primary text-sm font-extrabold">
                {c.detail}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom icons */}
        <div className="flex items-center gap-3 mt-10">
          {/* <img src="./White A.svg" alt="" width="68.37" height="68.37" className="w-8 h-8" />
          <img src="./White star.svg" alt="" width="68.37" height="68.37" className="w-8 h-8" /> */}
          <div className="flex-1 h-px bg-primary/20" />
        </div>
      </div>
    </section>
  );
}
