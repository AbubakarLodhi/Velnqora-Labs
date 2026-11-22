import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CaseCard, CTABand, PageHero, ProcessSteps, SectionHead } from "@/components/Blocks";
import { ArrowRight } from "@/components/Icons";
import { caseStudies, services } from "@/lib/data";

export const metadata: Metadata = { title: "Services", description: "Risk assessment, talent strategy, growth planning, performance optimization and business analytics." };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="Services"
        title="Built to simplify every step of your workflow"
        lead="Five focused services, delivered by senior consultants and measured against outcomes you agree up front."
      >
        <div className="btn-row">
          <Link href="/contact" className="btn btn--primary">
            Book a slot <ArrowRight />
          </Link>
          <Link href="/pricing" className="btn btn--ghost">
            See pricing
          </Link>
        </div>
      </PageHero>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {services.map((s) => (
            <article className="service-row" id={s.slug} key={s.slug} data-reveal style={{ scrollMarginTop: 110 }}>
              <span className="num">{s.number}</span>
              <div className="service-row-copy">
                <h2 className="display-3">{s.title}</h2>
                <p className="lead">{s.description}</p>
                <h3 className="sr-only">Outcomes</h3>
                <ul className="check-list">
                  {s.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
                <Link href="/contact" className="link-arrow" style={{ justifySelf: "start" }}>
                  Discuss {s.title.toLowerCase()} <ArrowRight size={16} />
                </Link>
              </div>
              <div className="media media--wide" data-reveal="clip" data-parallax="0.06">
                <Image src={s.image} alt="" fill sizes="(min-width: 900px) 480px, 100vw" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHead center eyebrow="Process" title="How every engagement runs" />
          <ProcessSteps />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            split
            eyebrow="Outcomes"
            title="Results our clients can measure"
            action={
              <Link href="/case-study" className="btn btn--ghost">
                All case studies <ArrowRight />
              </Link>
            }
          />
          <div className="grid grid-2">
            {caseStudies.slice(0, 2).map((c, i) => (
              <CaseCard key={c.slug} item={c} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <CTABand image="/images/handshake.jpg" />
    </>
  );
}
