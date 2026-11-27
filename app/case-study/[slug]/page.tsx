import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseCard, CTABand, PageHero, SectionHead } from "@/components/Blocks";
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
        crumbs={[{ label: "Home", href: "/" }, { label: "Portfolio", href: "/portfolio" }, { label: item.title }]}
        eyebrow={`Concept project · ${item.category}`}
        title={item.title}
        lead={item.summary}
      />

      <section className="section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="media media--cinema" data-reveal="clip" data-parallax="0.08">
            <Image src={item.image} alt={item.imageAlt} fill priority sizes="(min-width: 1600px) 1600px, 100vw" />
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
            <h2>Concept direction</h2>
            <p>{item.outcome}</p>
            <p className="concept-disclaimer">This is demonstration work, not a real client project or a report of delivered results.</p>
          </div>
          <aside className="detail-aside" aria-label="Project details">
            <dl>
              <div>
                <dt>Project type</dt>
                <dd>Concept project</dd>
              </div>
              <div>
                <dt>Discipline</dt>
                <dd>{item.category}</dd>
              </div>
            </dl>
            <Link href="/contact" className="btn btn--primary">
              Discuss your project <ArrowRight />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHead
            split
            eyebrow="More concepts"
            title="Related concept projects"
            action={
              <Link href="/portfolio" className="btn btn--ghost">
                Explore the portfolio <ArrowRight />
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
