"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  highlight: boolean;
}

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const nodeCount = Math.min(Math.floor((width * height) / 18000), 50);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const isHighlight = Math.random() < 0.25;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.35,
        vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.35,
        radius: isHighlight ? 2.2 : 1.5,
        baseRadius: isHighlight ? 2.2 : 1.5,
        highlight: isHighlight,
      });
    }

    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const connectionDistance = 140;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections in delicate periwinkle (#ABC5F5)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.45;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = nodes[i].highlight || nodes[j].highlight
              ? `rgba(141, 170, 255, ${alpha * 1.5})`
              : `rgba(171, 197, 245, ${alpha * 0.9})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // Cursor connection in vibrant periwinkle (#8DAAFF)
      if (mouse.active) {
        for (let i = 0; i < nodes.length; i++) {
          const dx = mouse.x - nodes[i].x;
          const dy = mouse.y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(141, 170, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Render nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (!prefersReducedMotion) {
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          if (mouse.active) {
            const dx = n.x - mouse.x;
            const dy = n.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 90 && dist > 0) {
              const force = (90 - dist) / 90;
              n.x += (dx / dist) * force * 1.0;
              n.y += (dy / dist) * force * 1.0;
            }
          }
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        if (n.highlight) {
          ctx.fillStyle = "#8DAAFF";
        } else {
          ctx.fillStyle = "rgba(171, 197, 245, 0.9)";
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-75"
      aria-hidden="true"
    />
  );
}
