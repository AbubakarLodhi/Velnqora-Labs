import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import { changelog, formatDate } from "@/lib/data";

export const metadata: Metadata = { title: "Changelog", robots: { index: false } };

export default function ChangelogPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Home", href: "/" }, { label: "Changelog" }]} eyebrow="Utility" title="Changelog" lead="Updates to this site." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {changelog.map((entry) => (
            <article className="changelog-entry" key={entry.version}>
              <div>
                <h2 className="display-3">v{entry.version}</h2>
                <time className="muted" dateTime={entry.date}>
                  {formatDate(entry.date)}
                </time>
              </div>
              <ul className="check-list">
                {entry.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
