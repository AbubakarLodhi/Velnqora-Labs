import Image from "next/image";
import Link from "next/link";
import { CaseCard, CTABand, MiniChart, PostCard, PricingCards, ProcessSteps, SectionHead } from "@/components/Blocks";
import { CountUp } from "@/components/CountUp";
import { EmailCapture } from "@/components/EmailCapture";
import { FAQ } from "@/components/FAQ";
import { HeroVideo } from "@/components/HeroVideo";
import { ArrowRight } from "@/components/Icons";
import { Showcase3D } from "@/components/Showcase3D";
import { Split } from "@/components/Split";
import { Testimonials } from "@/components/Testimonials";
import { caseStudies, clientNames, faqs, heroAvatars, metrics, plans, posts, services, testimonials } from "@/lib/data";

const buildSteps = [
  { title: "Design to code", body: "Design systems and reusable components, so every page stays consistent as you grow." },
  { title: "Responsive by default", body: "Layouts tested on phones, tablets and wide screens before anything ships." },
  { title: "Built for speed", body: "Fast-loading, accessible pages that search engines and visitors both love." },
];

export default function HomePage() {
  return (
    <>
      {/* 1–2. Full-screen video hero (fades and lifts away on scroll) */}
      <section className="hero" aria-labelledby="hero-title" data-scrub="exit">
        <HeroVideo />
        <div className="container hero-inner">
          <p className="proof">
            <span className="avatar-stack" aria-hidden="true">
              {heroAvatars.map((src) => (
                <span key={src}>
                  <Image src={src} alt="" fill sizes="32px" style={{ objectFit: "cover" }} />
                </span>
              ))}
            </span>
            300+ clients complete impactful projects
          </p>
          <h1 id="hero-title" data-reveal="split">
            <Split text="Making business stuff easier to handle" />
          </h1>
          <div className="hero-form">
            <EmailCapture mode="book" tone="hero" label="Your work email" />
          </div>
        </div>
      </section>

      {/* 3D showcase: a website being built */}
      <section className="section showcase" aria-labelledby="showcase-title">
        <div className="container">
          <div className="section-head section-head--split" data-reveal>
            <div style={{ display: "grid", gap: 20 }}>
              <span className="eyebrow">How we build</span>
              <h2 id="showcase-title" className="display-2" data-reveal="split">
                <Split text="Watch your website come to life" />
              </h2>
            </div>
            <p className="lead">
              From the first line of code to launch day: design systems, responsive layouts and fast front-ends, built in the open so you can see
              every step.
            </p>
          </div>
          <Showcase3D />
          <div className="showcase-features">
            {buildSteps.map((s, i) => (
              <article key={s.title} data-reveal style={{ ["--delay" as string]: `${i * 100}ms` }}>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p className="muted">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trust / proof */}
      <section className="section section--white">
        <div className="container">
          <div className="proof-grid">
            <div data-reveal="left">
              <div className="portrait-row" aria-hidden="true">
                {["/images/portrait-5.jpg", "/images/portrait-2.jpg", "/images/portrait-6.jpg", "/images/portrait-7.jpg"].map((src) => (
                  <span key={src}>
                    <Image src={src} alt="" fill sizes="52px" style={{ objectFit: "cover" }} />
                  </span>
                ))}
              </div>
              <p className="big-stat">
                <CountUp value="48K+" />
              </p>
              <p className="muted">Trusted by thousands of satisfied customers</p>
            </div>
            <div data-reveal="right" style={{ display: "grid", gap: 24, justifyItems: "start" }}>
              <p className="display-3">
                Data-driven strategies and hands-on support that turn complex business challenges into clear, steady growth.
              </p>
              <Link href="/about" className="link-arrow">
                Learn more about us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <ul className="metrics" style={{ listStyle: "none", padding: 0 }}>
            {metrics.map((m, i) => (
              <li className="metric" key={m.label} data-reveal style={{ ["--delay" as string]: `${i * 90}ms` }}>
                <strong>
                  <CountUp value={m.value} />
                </strong>
                <span>{m.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Client marquee */}
      <section className="marquee-section section--white" aria-label="Some of the teams we work with">
        <div className="marquee">
          <div className="marquee-track">
            {[...clientNames, ...clientNames].map((name, i) => (
              <span key={i} aria-hidden={i >= clientNames.length ? true : undefined}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Editorial features */}
      <section className="section">
        <div className="container">
          <div className="feature">
            <div className="media media--tall" data-reveal="clip" data-parallax="0.08">
              <Image src="/images/team-review.jpg" alt="Consultants reviewing a plan together on a laptop" fill sizes="(min-width: 900px) 640px, 100vw" />
              <div className="glass media-chip" data-float="0.05">
                <strong>
                  <CountUp value="56%" />
                </strong>
                <span>Average reduction in admin time</span>
              </div>
            </div>
            <div className="feature-copy" data-reveal="right">
              <span className="eyebrow">For entrepreneurs</span>
              <h2 className="display-2" data-reveal="split">
                <Split text="We give you control of the moving parts" />
              </h2>
              <p className="lead">
                Finance, hiring, operations and reporting in one clear plan — so you spend your week building the business, not chasing it.
              </p>
              <MiniChart values={[32, 40, 38, 52, 60, 58, 74, 88]} label="Bar chart showing client revenue rising steadily over eight quarters" />
              <ul className="check-list">
                <li>A single weekly view of cash, pipeline and delivery</li>
                <li>Clear owners for every priority</li>
              </ul>
            </div>
          </div>

          <div className="feature feature--reverse">
            <div className="media media--tall" data-reveal="clip" data-parallax="0.08">
              <Image src="/images/presentation.jpg" alt="A founder presenting growth plans to a small team in a loft office" fill sizes="(min-width: 900px) 640px, 100vw" />
            </div>
            <div className="feature-copy" data-reveal="left">
              <span className="eyebrow">Velnqora Labs for founders</span>
              <h2 className="display-2" data-reveal="split">
                <Split text="From idea to operating company, faster" />
              </h2>
              <p className="lead">Formation, first hires and the operating rhythm that keeps a young company on track.</p>
              <div className="stat-pair">
                <div className="stat-card">
                  <strong>
                    <CountUp value="17K+" />
                  </strong>
                  <span>Founders started a business with us</span>
                </div>
                <div className="stat-card">
                  <strong>
                    <CountUp value="92%" />
                  </strong>
                  <span>Still operating after three years</span>
                  <div className="progress" aria-hidden="true">
                    <i style={{ width: "92%" }} />
                  </div>
                </div>
              </div>
              <Link href="/services" className="btn btn--primary" style={{ justifySelf: "start" }}>
                Explore services <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services */}
      <section className="section section--dark on-dark" id="services">
        <div className="container">
          <SectionHead
            split
            eyebrow="Services"
            title="Built to simplify every step of your workflow"
            lead="Five focused services. Use one, or combine them into a programme shaped around your goals."
          />
          <div className="service-list">
            {services.map((s, i) => (
              <article
                className="service-card"
                key={s.slug}
                data-reveal="scale"
                data-spotlight
                data-num={s.number}
                style={{ ["--delay" as string]: `${(i % 3) * 90}ms` }}
              >
                <span className="service-card-icon" aria-hidden="true">
                  <ArrowRight className="" />
                </span>
                <span className="num">{s.number}</span>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <Link href={`/services#${s.slug}`} className="card-link" aria-label={`Learn about ${s.title}`}>
                  Learn more <ArrowRight />
                </Link>
              </article>
            ))}
            <article className="service-card service-card--cta" data-reveal="scale" data-spotlight data-num="06" style={{ ["--delay" as string]: "180ms" }}>
              <span className="service-card-icon" aria-hidden="true">
                <ArrowRight className="" />
              </span>
              <span className="num" style={{ color: "var(--ink)" }}>
                06
              </span>
              <h3>Not sure where to start?</h3>
              <p>Tell us what is slowing you down and we&apos;ll suggest the right mix.</p>
              <Link href="/contact" className="card-link">
                Book a slot <ArrowRight />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* 6. Process */}
      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="How we work" title="A simple process, applied with discipline" />
          <ProcessSteps />
        </div>
      </section>

      {/* 7. Case studies */}
      <section className="section section--white">
        <div className="container">
          <SectionHead
            split
            eyebrow="Case studies"
            title="Client success in action and growth"
            lead="Real problems, measurable results. A few recent engagements."
            action={
              <Link href="/case-study" className="btn btn--ghost">
                View all case studies <ArrowRight />
              </Link>
            }
          />
          <div className="grid grid-2">
            {caseStudies.slice(0, 4).map((c, i) => (
              <CaseCard key={c.slug} item={c} delay={(i % 2) * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Image band */}
      <section className="section--tight">
        <div className="container">
          <div className="media media--cinema" data-reveal="clip" data-parallax="0.1">
            <Image src="/images/loft-office.jpg" alt="A bright open-plan office with teams at work" fill sizes="(min-width: 1600px) 1600px, 100vw" />
            <div className="glass media-chip" style={{ maxWidth: 360 }} data-float="0.06">
              <span className="eyebrow">Less busywork. More progress.</span>
              <p style={{ marginTop: 8 }}>Clients reclaim an average of 9 hours per week within the first quarter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pricing */}
      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="Pricing" title="Smart solutions, transparent pricing" lead="Pick a plan that fits today and change it as you grow." />
          <PricingCards plans={plans} />
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="section section--dark on-dark">
        <div className="container">
          <SectionHead eyebrow="Testimonials" title="What clients say about us" />
          <div data-reveal="scale">
            <Testimonials items={testimonials} />
          </div>
        </div>
      </section>

      {/* 10. Blog */}
      <section className="section">
        <div className="container">
          <SectionHead
            split
            eyebrow="Resources"
            title="Insights for running a better business"
            action={
              <Link href="/blog" className="btn btn--ghost">
                Read the blog <ArrowRight />
              </Link>
            }
          />
          <div className="grid grid-3">
            {posts.slice(0, 3).map((p, i) => (
              <PostCard key={p.slug} post={p} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="section section--white">
        <div className="container faq-layout">
          <div data-reveal="left" style={{ display: "grid", gap: 20, alignContent: "start" }}>
            <span className="eyebrow">FAQ</span>
            <h2 className="display-2" data-reveal="split">
              <Split text="Answers to the questions we get" />
            </h2>
            <p className="lead">Something else on your mind?</p>
            <Link href="/contact" className="link-arrow" style={{ justifySelf: "start" }}>
              Ask us directly <ArrowRight size={16} />
            </Link>
          </div>
          <div data-reveal="right">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* 12. Final CTA (footer is in the layout) */}
      <CTABand />
    </>
  );
}
