import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABand, PageHero } from "@/components/Blocks";
import { FAQ } from "@/components/FAQ";
import { ArrowRight } from "@/components/Icons";
import { faqs, formatPrice, plans } from "@/lib/data";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return plans.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const plan = plans.find((p) => p.slug === slug);
  return plan ? { title: `${plan.name} plan`, description: plan.description } : {};
}

export default async function PlanPage({ params }: { params: Params }) {
  const { slug } = await params;
  const plan = plans.find((p) => p.slug === slug);
  if (!plan) notFound();
  const others = plans.filter((p) => p.slug !== plan.slug);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Pricing", href: "/pricing" }, { label: plan.name }]}
        eyebrow={plan.audience}
        title={`${plan.name} plan`}
        lead={plan.description}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container detail-grid">
          <div className="prose">
            <h2 style={{ marginTop: 0 }}>What&apos;s included</h2>
            <ul className="check-list" style={{ fontSize: "1.0625rem" }}>
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
              <li>{plan.price === null ? `Engagements for ${plan.hours}` : `${plan.hours} of consulting and platform time each month`}</li>
              <li>Monthly progress report and review call</li>
            </ul>
            <h2>Ideal for</h2>
            <div className="btn-row">
              {plan.idealFor.map((i) => (
                <span key={i} className="tag" style={{ height: 36, padding: "0 16px", background: "var(--surface)", border: "1px solid var(--line)" }}>
                  {i}
                </span>
              ))}
            </div>
            <h2>Other plans</h2>
            <ul className="grid grid-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {others.map((o) => (
                <li key={o.slug} className="value-card" style={{ position: "relative" }}>
                  <h3>
                    <Link href={`/pricing-plan/${o.slug}`} className="card-link">
                      {o.name}
                      <span style={{ position: "absolute", inset: 0 }} aria-hidden="true" />
                    </Link>
                  </h3>
                  <p>
                    {formatPrice(o.price)}
                    {o.price !== null && " /month"} · {o.audience}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <aside className="detail-aside" aria-label="Plan summary">
            <p className="plan-price">
              {formatPrice(plan.price)}
              {plan.price !== null && <small> /month</small>}
            </p>
            <dl>
              <div>
                <dt>Audience</dt>
                <dd>{plan.audience}</dd>
              </div>
              <div>
                <dt>Included</dt>
                <dd>{plan.hours}</dd>
              </div>
              <div>
                <dt>Overage</dt>
                <dd>{plan.extra.replace("Extra hours at ", "")}</dd>
              </div>
            </dl>
            <Link href={`/contact?plan=${plan.slug}#contact-form`} className="btn btn--primary">
              {plan.price === null ? "Contact sales" : `Choose ${plan.name}`} <ArrowRight />
            </Link>
            <p className="muted" style={{ fontSize: "0.8125rem" }}>
              Sample pricing for demonstration only — not a real offer.
            </p>
          </aside>
        </div>
      </section>

      <section className="section section--white">
        <div className="container faq-layout">
          <h2 className="display-2">Plan questions</h2>
          <FAQ items={faqs.slice(2)} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
