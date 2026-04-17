"use client";

import React, { useEffect, useRef } from "react";

export const AuroraBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width: number, height: number, particles: any[] = [];
    let animationFrameId: number;

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles = [];
      
      // More particles but more subtle
      for (let i = 0; i < 6; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 500 + 300,
          vx: Math.random() * 0.2 - 0.1, // Slower
          vy: Math.random() * 0.2 - 0.1, // Slower
          color:
            i % 3 === 0
              ? "rgba(30, 58, 138, 0.15)" // Blue
              : i % 3 === 1
              ? "rgba(88, 28, 135, 0.1)"  // Purple
              : "rgba(13, 148, 136, 0.05)", // Teal/Green
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.filter = "blur(120px)"; // Higher blur for softer transition

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        
        // Soft wrap-around
        if (p.x < -p.r) p.x = width + p.r;
        if (p.x > width + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = height + p.r;
        if (p.y > height + p.r) p.y = -p.r;

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", init);
    init();
    animate();

    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "#020408", // Pure deep base
      }}
    >
      <canvas ref={canvasRef} className="opacity-60" />
      
      {/* Subtle Grain Overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
