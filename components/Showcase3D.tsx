"use client";

import { useEffect, useRef } from "react";

/**
 * 3D "website being built" loop. The frame zooms in as it scrolls into view (data-scrub)
 * and the video loops continuously while on screen (paused off-screen only to save battery).
 * Respects reduced motion (poster only).
 * Source: rendered offline with three.js (see README) -> public/video/build-3d.{mp4,webm}.
 */
export function Showcase3D() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) {
      video.play().catch(() => {});
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.1 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <div className="showcase-stage" data-scrub="enter">
      <div className="showcase-frame">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/build-3d-poster.jpg"
          aria-label="3D animation: a website assembling in a browser while code is typed and a phone builds the mobile layout"
          onError={(e) => {
            // Fall back to the other format once; the poster stays visible if both fail.
            const v = e.currentTarget;
            if (!v.currentSrc.endsWith(".webm")) {
              v.src = "/video/build-3d.webm";
              v.play().catch(() => {});
            }
          }}
        >
          <source src="/video/build-3d.mp4" type="video/mp4" />
          <source src="/video/build-3d.webm" type="video/webm" />
        </video>
        <div className="glass showcase-chip showcase-chip--a" data-float="-0.05">
          <strong>Design → code</strong>
          <span>Pixel-perfect components, built once</span>
        </div>
        <div className="glass showcase-chip showcase-chip--b" data-float="0.06">
          <strong>98+</strong>
          <span>Lighthouse performance target</span>
        </div>
      </div>
    </div>
  );
}
