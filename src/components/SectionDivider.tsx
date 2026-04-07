interface SectionDividerProps {
  variant?: "glow" | "gradient" | "subtle";
}

const SectionDivider = ({ variant = "gradient" }: SectionDividerProps) => {
  if (variant === "glow") {
    return (
      <div className="relative h-px w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-40 h-8 bg-primary/10 blur-2xl rounded-full" />
      </div>
    );
  }

  if (variant === "subtle") {
    return <div className="h-px w-full bg-gradient-to-r from-transparent via-border/30 to-transparent" />;
  }

  return (
    <div className="relative h-24 w-full overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-60 h-16 rounded-full blur-3xl animate-pulse-glow"
        style={{ background: "radial-gradient(ellipse, hsl(200 100% 55% / 0.08), transparent)" }}
      />
    </div>
  );
};

export default SectionDivider;
