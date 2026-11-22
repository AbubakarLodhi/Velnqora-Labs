import type { Metadata } from "next";
import Link from "next/link";
import { CTABand, PageHero, PricingCards } from "@/components/Blocks";
import { FAQ } from "@/components/FAQ";
import { ArrowRight } from "@/components/Icons";
import { faqs, plans } from "@/lib/data";

export const metadata: Metadata = { title: "Pricing", description: "Simple plans for freelancers, small teams, growing businesses and enterprises." };

const comparison = [
  { feature: "Included hours / month", values: plans.map((p) => p.hours) },
  { feature: "Workflow automation", values: ["—", "✓", "✓", "✓"] },
  { feature: "Custom reports", values: ["—", "✓", "✓", "✓"] },
  { feature: "Advanced analytics", values: ["—", "—", "✓", "✓"] },
  { feature: "API access", values: ["—", "—", "✓", "✓"] },
  { feature: "Dedicated account manager", values: ["—", "—", "—", "✓"] },
  { feature: "Single sign-on (SSO)", values: ["—", "—", "—", "✓"] },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
        eyebrow="Pricing"
        title="Smart solutions, transparent pricing"
        lead="Start small and scale up. Every plan includes onboarding, monthly reporting and access to senior consultants."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <PricingCards plans={plans} />
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <h2 className="display-3" style={{ marginBottom: 32 }} data-reveal>
            Compare plans
          </h2>
          <div style={{ overflowX: "auto" }} data-reveal tabIndex={0} role="region" aria-label="Plan comparison table">
            <table style={{ width: "100%", minWidth: 640, borderCollapse: "collapse", fontSize: "0.9375rem" }}>
              <thead>
                <tr>
                  <th scope="col" style={{ textAlign: "left", padding: "14px 12px", borderBottom: "1px solid var(--line)" }}>
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th key={p.slug} scope="col" style={{ textAlign: "center", padding: "14px 12px", borderBottom: "1px solid var(--line)" }}>
                      <Link href={`/pricing-plan/${p.slug}`} className="link-arrow">
                        {p.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature}>
                    <th scope="row" style={{ textAlign: "left", fontWeight: 400, padding: "14px 12px", borderBottom: "1px solid var(--line)" }}>
                      {row.feature}
                    </th>
                    {row.values.map((v, i) => (
                      <td key={i} style={{ textAlign: "center", padding: "14px 12px", borderBottom: "1px solid var(--line)" }}>
                        {v === "✓" ? <span aria-label="Included">✓</span> : v === "—" ? <span aria-label="Not included" className="muted">—</span> : v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-layout">
          <div data-reveal style={{ display: "grid", gap: 20, alignContent: "start" }}>
            <span className="eyebrow">FAQ</span>
            <h2 className="display-2">Answers to the questions we get</h2>
            <Link href="/contact" className="link-arrow" style={{ justifySelf: "start" }}>
              Still have questions? <ArrowRight size={16} />
            </Link>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
