"use client"; // important — uses hooks and browser APIs
import { useRef } from "react";
import type { CSSProperties } from "react";
import LaserFlow from "@/components/LaserFlow";

export default function LaserFlowBoxExample() {
  const revealImgRef = useRef<HTMLImageElement | null>(null);

  // typed style object that allows custom CSS properties (CSS variables)
  const revealStyle: CSSProperties & Record<string, string | number> = {
    position: "absolute",
    width: "100%",
    top: "-50%",
    zIndex: 5,
    mixBlendMode: "lighten",
    opacity: 0.3,
    pointerEvents: "none",
    // CSS custom properties are provided via an index signature on the typed object
    ["--mx" as any]: "-9999px",
    ["--my" as any]: "-9999px",
    WebkitMaskImage:
      "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
    maskImage:
      "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  };

  return (
    <div
      style={{
        height: "800px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#060010",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", `${x}px`);
          el.style.setProperty("--my", `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", "-9999px");
          el.style.setProperty("--my", "-9999px");
        }
      }}
    >
      <LaserFlow horizontalBeamOffset={0.1} verticalBeamOffset={0.0} color="#94eaff" />

      <img
        ref={revealImgRef}
        src="/path/to/image.jpg"
        alt="Reveal effect"
        style={revealStyle}
      />
    </div>
  );
}
