import { Fragment } from "react";

/**
 * Splits text into masked words (or characters) so CSS can raise them in one by one
 * when the parent with data-reveal="split" scrolls into view. Renders plain, readable
 * text without JS.
 */
export function Split({ text, by = "words", step }: { text: string; by?: "words" | "chars"; step?: number }) {
  const parts = by === "chars" ? Array.from(text) : text.split(" ");
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          <span className="split-w">
            <span style={{ ["--i" as string]: i, ...(step ? { transitionDelay: `${i * step}ms` } : {}) }}>{part === " " ? " " : part}</span>
          </span>
          {by === "words" && i < parts.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
