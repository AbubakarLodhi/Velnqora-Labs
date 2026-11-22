"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * All scroll-driven motion in one place (no animation library):
 * - data-reveal[="up"|"left"|"right"|"scale"|"clip"|"split"]: one-shot reveal when entering the viewport.
 * - data-scrub="exit"|"enter": writes --p (0..1) for scroll-linked effects (hero fade-out, showcase zoom).
 * - data-parallax="speed": shifts the element's inner img/video via --py.
 * - data-float="speed": shifts the element itself via --fy.
 * - --scroll on <html>: page progress (drives the top progress bar).
 * Everything is visible without JS, and scroll-linked motion is off under prefers-reduced-motion.
 */
export function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasIO = "IntersectionObserver" in window;
    if (hasIO) root.classList.add("reveal-on");

    const io = hasIO
      ? new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                io?.unobserve(entry.target);
              }
            }
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
        )
      : null;

    let linked: HTMLElement[] = [];
    const scan = () => {
      if (io) document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => io.observe(el));
      linked = Array.from(document.querySelectorAll<HTMLElement>("[data-scrub],[data-parallax],[data-float]"));
    };

    const clamp = (v: number) => Math.min(1, Math.max(0, v));
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      const max = root.scrollHeight - vh;
      root.style.setProperty("--scroll", (max > 0 ? window.scrollY / max : 0).toFixed(4));
      if (reduce) return;
      for (const el of linked) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -vh * 0.25 || r.top > vh * 1.25) continue;
        if ("scrub" in el.dataset) {
          const p = el.dataset.scrub === "exit" ? -r.top / r.height : (vh - r.top) / (vh * 0.8);
          el.style.setProperty("--p", clamp(p).toFixed(4));
        }
        const centre = r.top + r.height / 2 - vh / 2;
        if ("parallax" in el.dataset) el.style.setProperty("--py", `${(-centre * (Number(el.dataset.parallax) || 0.08)).toFixed(1)}px`);
        if ("float" in el.dataset) el.style.setProperty("--fy", `${(-centre * (Number(el.dataset.float) || 0.08)).toFixed(1)}px`);
      }
    };
    const request = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    scan();
    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);

    // Cursor-following glow for [data-spotlight] cards (writes --mx / --my).
    const onPointerMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.<HTMLElement>("[data-spotlight]");
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${(e.clientX - r.left).toFixed(0)}px`);
      el.style.setProperty("--my", `${(e.clientY - r.top).toFixed(0)}px`);
    };
    document.addEventListener("pointermove", onPointerMove, { passive: true });

    // Pick up elements rendered later (filtered grids, etc.), batched per frame.
    let pending = false;
    const mo = new MutationObserver(() => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        scan();
        request();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io?.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      document.removeEventListener("pointermove", onPointerMove);
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true" />;
}
