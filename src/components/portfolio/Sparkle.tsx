type Props = { className?: string };

export function Sparkle({ className }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M50 0 C 54 38, 62 46, 100 50 C 62 54, 54 62, 50 100 C 46 62, 38 54, 0 50 C 38 46, 46 38, 50 0 Z" />
    </svg>
  );
}

export function MonogramA({ className }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20 90 L50 10 L80 90 L65 90 L58 70 L42 70 L35 90 Z M46 58 L54 58 L50 40 Z" />
    </svg>
  );
}
