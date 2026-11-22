"use client";

import { useId, useState } from "react";

type Item = { q: string; a: string };

export function FAQ({ items }: { items: Item[] }) {
  const base = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${base}-q${i}`;
        const panelId = `${base}-a${i}`;
        return (
          <div className="faq-item" key={item.q}>
            <h3>
              <button
                id={btnId}
                type="button"
                className="faq-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {item.q}
                <span className="faq-icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} className="faq-panel" data-open={isOpen} inert={!isOpen}>
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
