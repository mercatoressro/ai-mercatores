import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  speed: number;
}

interface OrganicNetworkProps {
  opacity?: number;
  /** Fade center content area to keep text clean */
  fadeCenterX?: number;
  fadeCenterY?: number;
  className?: string;
}

const OrganicNetwork = ({
  opacity = 0.34,
  fadeCenterX = 0.5,
  fadeCenterY = 0.5,
  className = "",
}: OrganicNetworkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initNodes = () => {
      const isMobile = canvas.offsetWidth < 768;
      const count = isMobile ? 64 : 156;
      const nodes: Node[] = [];
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      for (let i = 0; i < count; i++) {
        // Bias nodes toward edges — avoid center content area
        let x: number, y: number;
        const edge = Math.random();
        if (edge < 0.35) {
          // Left edge
          x = Math.random() * w * 0.18;
          y = Math.random() * h;
        } else if (edge < 0.7) {
          // Right edge
          x = w - Math.random() * w * 0.18;
          y = Math.random() * h;
        } else if (edge < 0.85) {
          // Top
          x = Math.random() * w;
          y = Math.random() * h * 0.12;
        } else {
          // Bottom / between sections
          x = Math.random() * w;
          y = h * 0.85 + Math.random() * h * 0.15;
        }

        nodes.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.12,
          radius: 1.7 + Math.random() * 1.7,
          phase: Math.random() * Math.PI * 2,
          speed: 0.002 + Math.random() * 0.004,
        });
      }
      nodesRef.current = nodes;
    };

    resize();
    initNodes();

    const handleResize = () => { resize(); initNodes(); };
    window.addEventListener("resize", handleResize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;
    const connectionDist = 470;
    const glowPrimary = getComputedStyle(document.documentElement)
      .getPropertyValue("--glow-primary")
      .trim();
    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim();
    const clampAlpha = (value: number, max = 1) => Math.min(max, Math.max(0, value));

    const lineColor = (a: number) => `hsl(${glowPrimary} / ${clampAlpha(a)})`;
    const nodeColor = (a: number) => `hsl(${accent} / ${clampAlpha(a)})`;

    const draw = () => {
      if (!isVisibleRef.current) {
        animRef.current = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w(), h());
      const nodes = nodesRef.current;
      const cw = w();
      const ch = h();
      const cx = cw * fadeCenterX;
      const cy = ch * fadeCenterY;

      // Update positions
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.phase += n.speed;

        // Gentle drift with organic wobble
        n.vx += (Math.random() - 0.5) * 0.003;
        n.vy += (Math.random() - 0.5) * 0.003;
        n.vx *= 0.998;
        n.vy *= 0.998;

        if (n.x < -20) n.x = cw + 20;
        if (n.x > cw + 20) n.x = -20;
        if (n.y < -20) n.y = ch + 20;
        if (n.y > ch + 20) n.y = -20;
      }

      // Connections — organic bezier curves
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const distFade = 1 - dist / connectionDist;

            // Fade near center content
            const midX = (nodes[i].x + nodes[j].x) / 2;
            const midY = (nodes[i].y + nodes[j].y) / 2;
            const distFromCenter = Math.sqrt(
              ((midX - cx) / cw) ** 2 + ((midY - cy) / ch) ** 2
            );
            const centerFade = Math.min(1, Math.pow(distFromCenter * 2.9, 1.08));

            const alpha = clampAlpha(distFade * centerFade * 2.35, 1);
            if (alpha < 0.004) continue;

            // Bezier curve for organic feel
            const cpx = (nodes[i].x + nodes[j].x) / 2 + Math.sin(nodes[i].phase) * 15;
            const cpy = (nodes[i].y + nodes[j].y) / 2 + Math.cos(nodes[j].phase) * 12;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.quadraticCurveTo(cpx, cpy, nodes[j].x, nodes[j].y);
            ctx.strokeStyle = lineColor(alpha);
            ctx.lineWidth = 1.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes — small, subtle dots
      for (const n of nodes) {
        const pulse = Math.sin(n.phase) * 0.3 + 0.7;
        const distFromCenter = Math.sqrt(
          ((n.x - cx) / cw) ** 2 + ((n.y - cy) / ch) ** 2
        );
        const centerFade = Math.min(1, Math.pow(distFromCenter * 2.8, 1.06));
        const alpha = clampAlpha(pulse * centerFade * 2.15, 1);

        if (alpha < 0.01) continue;

        // Soft glow
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 5.8);
        grad.addColorStop(0, nodeColor(alpha * 0.78));
        grad.addColorStop(1, nodeColor(0));
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 5.8, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor(alpha);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { threshold: 0.05 }
    );
    observer.observe(canvas);
    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [fadeCenterX, fadeCenterY]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
    />
  );
};

export default OrganicNetwork;
