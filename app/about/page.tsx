import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTABand, PageHero, SectionHead } from "@/components/Blocks";
import { ArrowRight } from "@/components/Icons";
import { values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Velnqora Labs",
  description: "Meet Velnqora Labs: a digital technology partner for web development, mobile apps, AI, and digital growth.",
  openGraph: {
    title: "About Velnqora Labs",
    description: "Our mission, values, and considered approach to building useful digital products.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About Velnqora Labs"
        title="Technology should move good ideas forward."
        lead="We help businesses turn opportunities into considered digital products, useful software, and stronger online experiences."
      />

      <section className="section--tight">
        <div className="container">
          <div className="media media--cinema" data-reveal="clip">
            <Image
              src="/images/desk-topdown.jpg"
              alt="A thoughtful product-planning workspace with notes and a laptop"
              fill
              priority
              sizes="(min-width: 1600px) 1600px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container about-intro">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2 className="display-2">A technology partner, from first question to finished product.</h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              Velnqora Labs is a digital technology and software development agency working across web development, mobile apps, AI and machine
              learning, and digital marketing.
            </p>
            <p>
              We work with startups, entrepreneurs, and businesses at different stages. Our focus is understanding what you need to achieve, bringing
              the right expertise to the problem, and making the path forward clear.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <article className="value-card" data-reveal>
            <span className="eyebrow">Our mission</span>
            <h2 className="display-3">Make good technology more useful.</h2>
            <p>
              Help ambitious people and organisations turn complex challenges into accessible digital experiences and dependable software.
            </p>
          </article>
          <article className="value-card" data-reveal>
            <span className="eyebrow">Our vision</span>
            <h2 className="display-3">A future shaped by thoughtful engineering.</h2>
            <p>
              Contribute to a digital landscape where technology is purposeful, people-centred, and built to keep improving.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--dark on-dark">
        <div className="container">
          <SectionHead center eyebrow="Our values" title="The principles behind the work" />
          <div className="grid grid-4">
            {values.map((value, i) => (
              <article className="value-card value-card--dark" key={value.title} data-reveal style={{ ["--delay" as string]: `${i * 80}ms` }}>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container feature">
          <div className="media media--tall" data-reveal="clip">
            <Image src="/images/analytics.jpg" alt="A considered view of digital product analytics" fill sizes="(min-width: 900px) 640px, 100vw" />
          </div>
          <div className="feature-copy" data-reveal="right">
            <span className="eyebrow">What makes us different</span>
            <h2 className="display-2">We connect the big picture to the small details.</h2>
            <p className="lead">
              Design, engineering, AI, and marketing work best when they support the same business goal.
            </p>
            <ul className="check-list">
              <li>Start with the problem and the people affected by it.</li>
              <li>Choose tools to fit the requirements—not the other way around.</li>
              <li>Keep the work understandable, collaborative, and practical.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container approach-grid">
          <div>
            <span className="eyebrow">Our approach to technology</span>
            <h2 className="display-2">Use the right tool, with care.</h2>
          </div>
          <div className="about-copy">
            <p>
              We begin with your users, workflows, and goals. From there, we consider the simplest technology that can meet the need, the people who
              will maintain it, and how the product may evolve.
            </p>
            <p>
              For AI projects, that also means discussing data readiness, evaluation, privacy considerations, and where human judgement belongs.
            </p>
            <Link href="/services" className="link-arrow">
              Explore our capabilities <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container trust-panel">
          <span className="eyebrow">Why businesses trust our approach</span>
          <h2 className="display-2">Clear decisions. Honest conversations. Work with a purpose.</h2>
          <p className="lead">
            Trust grows when expectations are clear. We aim to make scope, trade-offs, and next steps visible throughout the work—so you can make
            informed decisions with confidence.
          </p>
        </div>
      </section>

      <CTABand
        title="Let’s talk about what you want to make possible."
        body="Share a challenge, an early idea, or a product you want to improve. We’ll start with a conversation about what matters most."
      />
    </>
  );
}
