import type { Metadata } from "next";
import Image from "next/image";
import { CTABand, PageHero, SectionHead } from "@/components/Blocks";
import { CountUp } from "@/components/CountUp";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { faqs, metrics, team, testimonials, timeline, values } from "@/lib/data";

export const metadata: Metadata = { title: "About", description: "Our story, values and the team behind Velnqora Labs." };

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About Velnqora Labs"
        title="We help organisations make better decisions"
        lead="Founded by operators, Velnqora Labs brings senior strategic support to businesses that are too busy growing to slow down and plan."
      />

      <section className="section--tight">
        <div className="container">
          <div className="media media--cinema" data-reveal="clip" data-parallax="0.08">
            <Image src="/images/loft-team.jpg" alt="The Velnqora Labs team in a workshop around a whiteboard" fill priority sizes="(min-width: 1600px) 1600px, 100vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature">
            <div className="feature-copy" data-reveal>
              <span className="eyebrow">Our story</span>
              <h2 className="display-2">Built by people who have been in your seat</h2>
              <p className="lead">
                We started Velnqora Labs after years of running teams and watching good businesses stall — not for lack of ambition, but for lack of time, structure and clear data.
              </p>
              <p className="muted">
                Today we work with founders and leadership teams in more than 25 countries. Our approach hasn&apos;t changed: listen carefully, be honest about what we find, and stay until the results show up in the numbers.
              </p>
            </div>
            <ul className="metrics" style={{ listStyle: "none", padding: 0, marginTop: 0, gridTemplateColumns: "repeat(2, 1fr)" }}>
              {metrics.map((m) => (
                <li className="metric" key={m.label} data-reveal style={{ paddingLeft: 0, borderLeft: 0, paddingBottom: 24 }}>
                  <strong>
                    <CountUp value={m.value} />
                  </strong>
                  <span>{m.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHead center eyebrow="Our values" title="What we stand for" />
          <div className="grid grid-3">
            {values.map((v, i) => (
              <article className="value-card" key={v.title} data-reveal style={{ ["--delay" as string]: `${i * 80}ms` }}>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark on-dark">
        <div className="container">
          <SectionHead eyebrow="Timeline" title="A journey of growth and excellence" />
          <ol className="timeline">
            {timeline.map((t, i) => (
              <li key={t.year} data-reveal style={{ ["--delay" as string]: `${i * 80}ms` }}>
                <span className="year">{t.year}</span>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead split eyebrow="Team" title="A team of experts" lead="Senior consultants with backgrounds in operations, finance, analytics and people strategy." />
          <div className="grid grid-4">
            {team.map((m, i) => (
              <article className="team-card" key={m.name} data-reveal style={{ ["--delay" as string]: `${i * 80}ms` }}>
                <div className="media media--tall">
                  <Image src={m.image} alt={`Portrait of ${m.name}`} fill sizes="(min-width: 1000px) 300px, 50vw" />
                </div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark on-dark">
        <div className="container">
          <SectionHead eyebrow="Trusted by business leaders" title="In their words" />
          <Testimonials items={testimonials} />
        </div>
      </section>

      <section className="section">
        <div className="container faq-layout">
          <div data-reveal style={{ display: "grid", gap: 20, alignContent: "start" }}>
            <span className="eyebrow">FAQ</span>
            <h2 className="display-2">Answers to the questions we get</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
