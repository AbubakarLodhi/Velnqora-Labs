"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Muted background video that loops continuously, with a still-image fallback.
 * - The poster image is always rendered underneath, so a failed or blocked video still shows a picture.
 * - Autoplay is skipped when the visitor prefers reduced motion (the poster is shown instead).
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {
      /* Autoplay blocked — the poster stays visible. */
    });
  }, []);

  return (
    <div className="hero-media" aria-hidden="true">
      <Image src="/images/hero-build-poster.jpg" alt="" fill priority sizes="100vw" />
      {!failed && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-build-poster.jpg"
          onError={(e) => {
            // A decode error doesn't fall through to the next <source>, so try the other format once.
            const v = e.currentTarget;
            if (!v.currentSrc.endsWith(".webm")) {
              v.src = "/video/hero-build.webm";
              v.play().catch(() => setFailed(true));
            } else setFailed(true);
          }}
        >
          <source src="/video/hero-build.mp4" type="video/mp4" />
          <source src="/video/hero-build.webm" type="video/webm" />
        </video>
      )}
    </div>
  );
}
