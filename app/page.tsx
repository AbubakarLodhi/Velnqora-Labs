import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CaseCard, CTABand, ProcessSteps, SectionHead } from "@/components/Blocks";
import { FAQ } from "@/components/FAQ";
import { HeroVideo } from "@/components/HeroVideo";
import { ArrowRight } from "@/components/Icons";
import { Split } from "@/components/Split";
import { caseStudies, faqs, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Web Development, Apps & AI Solutions",
  description:
    "Velnqora Labs is a digital technology agency building custom websites, mobile apps, AI and machine learning solutions, and digital marketing strategies.",
  openGraph: {
    title: "Velnqora Labs | Digital Products, AI & Growth",
    description: "Build a more useful digital future with a thoughtful technology partner.",
  },
};

const technologies = ["Next.js", "React", "TypeScript", "Node.js", "Python", "Flutter", "React Native", "Cloud platforms"];

export default function HomePage() {
  return (
    <>
      <section className="hero on-dark" aria-labelledby="hero-title" data-scrub="exit">
        <HeroVideo />
        <div className="container hero-inner">
          <p className="eyebrow hero-eyebrow">Digital products · Practical AI · Sustainable growth</p>
          <h1 id="hero-title" data-reveal="split">
            <Split text="Building Digital Experiences. Engineering What's Next." />
          </h1>
          <p className="hero-lead">
            From powerful websites and mobile apps to intelligent AI and considered digital marketing, we help turn ambitious ideas into useful digital
            experiences.
          </p>
          <div className="btn-row hero-actions">
            <Link href="/contact" className="btn btn--lime">
              Let&apos;s build something <ArrowRight />
            </Link>
            <Link href="/services" className="btn btn--ghost">
              Explore our services
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container intro-grid">
          <span className="eyebrow">A technology partner for what&apos;s next</span>
          <div>
            <h2 className="display-2">Good technology should make the next step clearer.</h2>
            <p className="lead">
              Velnqora Labs partners with startups, entrepreneurs, and growing businesses to shape, build, and improve digital products—combining
              thoughtful design with dependable engineering.
            </p>
            <Link href="/about" className="link-arrow">
              Get to know us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--dark on-dark" id="services">
        <div className="container">
          <SectionHead
            split
            eyebrow="What we do"
            title="Digital solutions, shaped around your goals"
            lead="Bring us a clear brief or an early idea. We’ll help you find the right mix of design, development, AI, and digital growth."
          />
          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.slug} data-num={service.number} data-spotlight>
                <span className="service-card-icon" aria-hidden="true">
                  <ArrowRight />
                </span>
                <span className="num">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link href={`/services#${service.slug}`} className="card-link">
                  Explore service <ArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            split
            eyebrow="How we work"
            title="Clear thinking. Careful execution."
            lead="A collaborative process keeps the right people involved and the work focused from the first conversation through launch."
          />
          <ProcessSteps />
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHead
            split
            eyebrow="Selected concepts"
            title="A glimpse of what we can create"
            lead="Explore concept projects made to demonstrate possible directions—not client commissions or reported results."
            action={
              <Link href="/portfolio" className="btn btn--ghost">
                View the concept portfolio <ArrowRight />
              </Link>
            }
          />
          <div className="grid grid-2">
            {caseStudies.slice(0, 4).map((project, i) => (
              <CaseCard key={project.slug} item={project} delay={(i % 2) * 100} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container tech-section">
          <div>
            <span className="eyebrow">Technology, thoughtfully chosen</span>
            <h2 className="display-2">The right tools for the job.</h2>
            <p className="lead">
              We select technologies to suit the product, its users, and the team that will maintain it. These are examples of tools across modern
              digital projects—not a one-size-fits-all stack.
            </p>
          </div>
          <ul className="tech-list" aria-label="Example technologies">
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--white">
        <div className="container faq-layout">
          <div className="faq-intro">
            <span className="eyebrow">Frequently asked</span>
            <h2 className="display-2">A few useful answers.</h2>
            <p className="lead">Have a question that isn&apos;t covered here?</p>
            <Link href="/contact" className="link-arrow">
              Tell us what you&apos;re working on <ArrowRight size={16} />
            </Link>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="media media--cinema" data-reveal="clip">
            <Image src="/images/loft-office.jpg" alt="A bright, calm workspace for focused collaboration" fill sizes="(min-width: 1600px) 1600px, 100vw" />
          </div>
        </div>
      </section>

      <CTABand
        title="Have a good idea? Let’s make it useful."
        body="Tell us what you want to build or improve. We’ll start with the problem, the people it affects, and what a good outcome looks like."
        image="/images/high-five.jpg"
      />
    </>
  );
}
