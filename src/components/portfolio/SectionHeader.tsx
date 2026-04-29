import { Sparkle, MonogramA } from "./Sparkle";

type Props = {
  line1: string;
  line2?: string;
  eyebrow?: string;
  id?: string;
};

export function SectionHeader({ line1, line2, eyebrow, id }: Props) {
  return (
    <header
      id={id}
      className="relative bg-primary text-primary-foreground px-6 sm:px-10 pt-14 pb-10 grain overflow-hidden scroll-mt-4"
    >
      <img src="./White star.svg" alt="" width="68.37px" height="68.37px" className="w-10 h-10 mx-auto" />
      <h2 className="mt-6 text-center font-display font-bold uppercase leading-[0.85] tracking-tight">
        <span className="block" style={{ fontSize: "clamp(3.5rem, 14vw, 11rem)" }}>
          {line1}
        </span>
        {line2 && (
          <span className="block mt-3" style={{ fontSize: "clamp(3.5rem, 14vw, 11rem)" }}>
            {line2}
          </span>
        )}
      </h2>
      <div className="mt-10 h-px bg-primary-foreground/40" />
    </header>
  );
}
