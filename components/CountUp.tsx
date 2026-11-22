"use client";

import { useEffect, useRef } from "react";

/**
 * Counts a metric such as "13K+", "99.9%" or "24 hrs" up from zero when it scrolls into view.
 * Server-renders the final value, so it is correct without JS and under reduced motion.
 * Values with more than one number (e.g. "6 → 15") are left as they are.
 */
export function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(\D*)$/);
    if (!el || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const [, pre, num, post] = match;
    const target = parseFloat(num);
    const decimals = (num.split(".")[1] || "").length;
    const format = (n: number) => `${pre}${n.toFixed(decimals)}${post}`;
    let raf = 0;

    // Only reset to zero if the number is below the fold, so nothing visible flashes.
    if (el.getBoundingClientRect().top > window.innerHeight) el.textContent = format(0);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const k = Math.min(1, (now - t0) / duration);
          el.textContent = format(target * (1 - Math.pow(1 - k, 4)));
          if (k < 1) raf = requestAnimationFrame(tick);
          else el.textContent = value;
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = value;
    };
  }, [value, duration]);

  return <span ref={ref}>{value}</span>;
}
