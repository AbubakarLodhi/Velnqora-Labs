import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseCard, CTABand, PageHero, SectionHead } from "@/components/Blocks";
import { CountUp } from "@/components/CountUp";
import { ArrowRight } from "@/components/Icons";
import { caseStudies } from "@/lib/data";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudies.find((c) => c.slug === slug);
  return item ? { title: item.title, description: item.summary } : {};
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const item = caseStudies.find((c) => c.slug === slug);
  if (!item) notFound();

  const related = caseStudies.filter((c) => c.slug !== item.slug).sort((a, b) => Number(b.category === item.category) - Number(a.category === item.category)).slice(0, 2);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Case studies", href: "/case-study" }, { label: item.title }]}
        eyebrow={item.category}
        title={item.title}
        lead={item.summary}
      />

      <section className="section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="media media--cinema" data-reveal="clip" data-parallax="0.08">
            <Image src={item.image} alt={`${item.title} project for ${item.client}`} fill priority sizes="(min-width: 1600px) 1600px, 100vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <div className="prose">
            <h2>Overview</h2>
            <p className="lead">{item.summary}</p>
            <h2>The challenge</h2>
            <p>{item.challenge}</p>
            <h2>Our approach</h2>
            <ol>
              {item.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ol>
            <h2>The outcome</h2>
            <p>{item.outcome}</p>
            <div className="outcome-strip" style={{ marginTop: 8 }}>
              {item.metrics.map((m) => (
                <div key={m.label}>
                  <strong>
                    <CountUp value={m.value} />
                  </strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
          <aside className="detail-aside" aria-label="Project details">
            <dl>
              <div>
                <dt>Client</dt>
                <dd>{item.client}</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>{item.category}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{item.year}</dd>
              </div>
              <div>
                <dt>Duration</dt>
                <dd>{item.duration}</dd>
              </div>
            </dl>
            <Link href="/contact" className="btn btn--primary">
              Start a similar project <ArrowRight />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHead
            split
            eyebrow="More work"
            title="Related case studies"
            action={
              <Link href="/case-study" className="btn btn--ghost">
                All case studies <ArrowRight />
              </Link>
            }
          />
          <div className="grid grid-2">
            {related.map((c, i) => (
              <CaseCard key={c.slug} item={c} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
