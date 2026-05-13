export function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`wave-divider ${className}`}
      viewBox="0 0 1200 28"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 14 Q 75 0 150 14 T 300 14 T 450 14 T 600 14 T 750 14 T 900 14 T 1050 14 T 1200 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
