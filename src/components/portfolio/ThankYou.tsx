import { Sparkle, MonogramA } from "./Sparkle";

export function ThankYou() {
  return (
    <section className="relative bg-background grain px-6 py-20 overflow-hidden">
      <img src="./A blue.svg" alt="" width="68.37px" height="68.37px" className="absolute left-6 bottom-6 w-12 h-12 text-primary opacity-100 float" />
      <img src="./Blue star.svg" alt="" width="68.37px" height="68.37px" className="absolute right-6 bottom-6 w-10 h-10 text-primary opacity-100 float" />
      <div className="justify-items-center">
        <img src="./Blue star.svg" alt="" width="68.37px" height="68.37px" className="w-10 h-10" />
        <h2
          className="mt-6 font-display font-bold uppercase text-primary tracking-[3.93px] float"
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
        >
          Thank You !
        </h2>
        <p className="mt-3 text-foreground/70 float">See you soon</p>
        <p className="mt-6 font-display uppercase tracking-[0.25em] text-primary">
          by Aaron R Thomas
        </p>
      </div>
    </section>
  );
}
