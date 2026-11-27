import type { Metadata } from "next";
import { CTABand, PageHero } from "@/components/Blocks";
import { CaseStudyGrid } from "@/components/FilterGrids";
import { caseCategories, caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio | Digital Project Concepts",
  description:
    "Explore Velnqora Labs concept projects across e-commerce, SaaS, AI, mobile applications, business websites, and digital marketing.",
  openGraph: {
    title: "Digital Project Concepts | Velnqora Labs",
    description: "A portfolio of clearly labeled concept work across web, mobile, AI, and digital growth.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
        eyebrow="Concept portfolio"
        title="Ideas, explored through digital experiences."
        lead="These demonstration concepts show the kinds of challenges and directions we can explore together. They are not client projects or reported results."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CaseStudyGrid items={caseStudies} categories={caseCategories} />
          <p className="portfolio-note">Every project shown here is a concept project created for demonstration purposes.</p>
        </div>
      </section>
      <CTABand
        title="Let’s create something that fits your business."
        body="Tell us what you want to build, improve, or explore. We’ll help shape a practical next step."
      />
    </>
  );
}
