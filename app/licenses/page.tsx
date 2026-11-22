import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import { imageCredits } from "@/lib/data";

export const metadata: Metadata = { title: "Licenses & policies" };

export default function LicensesPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Home", href: "/" }, { label: "Licenses" }]} eyebrow="Utility" title="Licenses & policies" lead="Asset credits, fonts and placeholder policies for this demo site." />
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
            <h2 id="privacy">Privacy policy</h2>
            <p>
              This demo site does not collect or transmit personal data. Forms validate in your browser and show a local confirmation only. Replace this section with your real privacy policy before launch.
            </p>
            <h2 id="terms">Terms &amp; conditions</h2>
            <p>Placeholder terms. Pricing, metrics, client names and testimonials on this site are sample content and do not represent real offers or clients.</p>
          </div>
        </div>
      </section>
    </>
  );
}
