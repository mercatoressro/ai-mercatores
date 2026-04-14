interface SectionDividerProps {
  variant?: "glow" | "gradient" | "subtle";
}

const SectionDivider = ({ variant = "gradient" }: SectionDividerProps) => {
  if (variant === "glow") {
    return (
      <div className="relative h-px w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(215_30%_35%/0.2)] to-transparent" />
      </div>
    );
  }

  if (variant === "subtle") {
    return <div className="h-px w-full bg-gradient-to-r from-transparent via-border/20 to-transparent" />;
  }

  return (
    <div className="relative h-16 w-full overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border/15 to-transparent" />
    </div>
  );
};

export default SectionDivider;
