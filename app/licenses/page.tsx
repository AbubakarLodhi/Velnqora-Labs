import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import { imageCredits } from "@/lib/data";

export const metadata: Metadata = { title: "Site credits", robots: { index: false } };

export default function LicensesPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Home", href: "/" }, { label: "Site credits" }]} eyebrow="Site information" title="Site credits" lead="A note on the visual assets and fonts used throughout this website." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="article-body" style={{ marginInline: 0 }}>
            <h2 id="assets">Images &amp; video</h2>
            <ul>
              {imageCredits.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <h2 id="fonts">Fonts</h2>
            <p>Inter and Inter Tight by Rasmus Andersson, licensed under the SIL Open Font License 1.1, served via next/font.</p>
            <p>Project examples throughout this site are clearly identified as concept work, not client commissions or reported results.</p>
          </div>
        </div>
      </section>
    </>
  );
}
