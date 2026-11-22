"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight } from "./Icons";

type Testimonial = { quote: string; name: string; role: string; image: string };

export function Testimonials({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const count = items.length;
  const go = (i: number) => setIndex(((i % count) + count) % count);
  const step = (delta: number) => setIndex((cur) => (cur + delta + count) % count);

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  }

  return (
    <section className="carousel" aria-roledescription="carousel" aria-label="Client testimonials" onKeyDown={onKeyDown}>
      <div className="carousel-viewport">
        <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((t, i) => (
            <figure
              key={t.name}
              className="testimonial"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== index}
              inert={i !== index}
              style={{ margin: 0 }}
            >
              <div className="media">
                <Image src={t.image} alt={`Portrait of ${t.name}`} fill sizes="(min-width: 900px) 220px, 160px" />
              </div>
              <div>
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  {t.role}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <div className="carousel-dots">
          {items.map((t, i) => (
            <button key={t.name} type="button" aria-label={`Show testimonial ${i + 1}: ${t.name}`} aria-current={i === index} onClick={() => go(i)} />
          ))}
        </div>
        <div className="btn-row">
          <button type="button" className="icon-btn" aria-label="Previous testimonial" onClick={() => step(-1)}>
            <ArrowLeft />
          </button>
          <button type="button" className="icon-btn" aria-label="Next testimonial" onClick={() => step(1)}>
            <ArrowRight className="" />
          </button>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        Showing testimonial {index + 1} of {count}: {items[index].name}
      </p>
    </section>
  );
}
