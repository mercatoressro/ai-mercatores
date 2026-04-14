import { useEffect, useRef } from "react";

interface ParallaxBackgroundProps {
  src: string;
  alt?: string;
  opacity?: string;
  speed?: number; // 0.1 = subtle, 0.5 = strong
  className?: string;
  overlay?: React.ReactNode;
}

const ParallaxBackground = ({
  src,
  alt = "",
  opacity = "opacity-[0.08]",
  speed = 0.25,
  className = "",
  overlay,
}: ParallaxBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Only animate when visible
        if (rect.bottom > 0 && rect.top < windowHeight) {
          const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
          const offset = (scrollProgress - 0.5) * speed * rect.height;
          img.style.transform = `translate3d(0, ${offset}px, 0) scale(1.15)`;
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${opacity} will-change-transform`}
        style={{ transform: "translate3d(0, 0, 0) scale(1.15)" }}
        loading="lazy"
      />
      {overlay}
    </div>
  );
};

export default ParallaxBackground;
