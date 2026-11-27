import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTABand, PageHero, ProcessSteps, SectionHead } from "@/components/Blocks";
import { ArrowRight } from "@/components/Icons";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Web, App, AI & Digital Marketing Services",
  description:
    "Explore Velnqora Labs services: custom web development, mobile app development, AI and machine learning solutions, and digital marketing.",
  openGraph: {
    title: "Digital Technology Services | Velnqora Labs",
    description: "Custom web development, mobile applications, practical AI, and digital marketing for growing businesses.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="Our services"
        title="The right digital capability for your next move."
        lead="From a first website to a smarter workflow, we bring strategy, design, and engineering together around the problem you want to solve."
      >
        <div className="btn-row">
          <Link href="/contact" className="btn btn--primary">
            Discuss your project <ArrowRight />
          </Link>
          <Link href="/portfolio" className="btn btn--ghost">
            Explore concept work
          </Link>
        </div>
      </PageHero>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {services.map((service) => (
            <article className="service-detail" id={service.slug} key={service.slug} style={{ scrollMarginTop: 110 }}>
              <div className="service-detail-heading">
                <span className="num">{service.number}</span>
                <div>
                  <span className="eyebrow">Velnqora Labs services</span>
                  <h2 className="display-2">{service.title}</h2>
                  <p className="lead">{service.description}</p>
                </div>
              </div>

              <div className="service-detail-grid">
                <div className="service-detail-copy">
                  <h3>Problems we help solve</h3>
                  <ul className="check-list">
                    {service.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>

                  <h3>Services and features</h3>
                  <ul className="check-list">
                    {service.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>

                  <h3>Business benefits</h3>
                  <ul className="check-list">
                    {service.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>

                  <h3>How we work</h3>
                  <ol className="service-process">
                    {service.process.map((step, i) => (
                      <li key={step}>
                        <span>0{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <Link href="/contact" className="btn btn--primary">
                    Talk about {service.title.toLowerCase()} <ArrowRight />
                  </Link>
                </div>

                <div className="service-detail-media">
                  <div className="media media--tall" data-reveal="clip">
                    <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 900px) 480px, 100vw" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHead
            center
            eyebrow="Our process"
            title="A clear path from idea to launch"
            lead="Each project is different. We keep the work collaborative, the scope clear, and the next step visible."
          />
          <ProcessSteps />
        </div>
      </section>

      <CTABand
        title="Not sure which service fits?"
        body="Tell us what you’re trying to change. We’ll help you think through the right starting point."
      />
    </>
  );
}
