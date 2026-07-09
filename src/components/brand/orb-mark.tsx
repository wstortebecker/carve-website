interface OrbMarkProps {
  size?: number;
  className?: string;
}

export function OrbMark({ size = 20, className }: OrbMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      className={className}
      role="img"
      aria-label="Carve"
    >
      <defs>
        <radialGradient id="orb-mark-body" cx="38%" cy="38%" r="72%">
          <stop offset="0%" stopColor="#C57150" />
          <stop offset="50%" stopColor="#8B4A2C" />
          <stop offset="100%" stopColor="#4A2816" />
        </radialGradient>
        <radialGradient id="orb-mark-shadow" cx="72%" cy="78%" r="62%">
          <stop offset="0%" stopColor="#1A100A" stopOpacity="0" />
          <stop offset="100%" stopColor="#1A100A" stopOpacity="0.32" />
        </radialGradient>
        <radialGradient id="orb-mark-spec" cx="30%" cy="25%" r="28%">
          <stop offset="0%" stopColor="#FFF5E6" stopOpacity="0.52" />
          <stop offset="100%" stopColor="#FFF5E6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="64" cy="64" r="60" fill="url(#orb-mark-body)" />
      <circle cx="64" cy="64" r="60" fill="url(#orb-mark-shadow)" />
      <circle cx="64" cy="64" r="60" fill="url(#orb-mark-spec)" />
    </svg>
  );
}
