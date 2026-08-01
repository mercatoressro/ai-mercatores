import { useEffect, useRef } from "react";

const SORO_SRC =
  "https://app.trysoro.com/api/embed/19b4b7fd-5fbf-4ede-9349-24c76b010268";

const SoroBlog = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = SORO_SRC;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="mt-16 md:mt-24">
      <div
        id="soro-blog"
        ref={containerRef}
        className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 md:p-8 [&_a]:text-primary [&_h2]:font-display [&_h3]:font-display"
      />
    </div>
  );
};

export default SoroBlog;
