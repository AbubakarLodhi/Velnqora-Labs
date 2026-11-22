import type { Metadata } from "next";
import { CTABand, PageHero } from "@/components/Blocks";
import { CaseStudyGrid } from "@/components/FilterGrids";
import { caseCategories, caseStudies } from "@/lib/data";

export const metadata: Metadata = { title: "Case studies", description: "How Velnqora Labs clients turned complex challenges into measurable growth." };

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Case studies" }]}
        eyebrow="Case studies"
        title="Client success in action and growth"
        lead="Real engagements, real numbers. Filter by the kind of work you are interested in."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CaseStudyGrid items={caseStudies} categories={caseCategories} />
        </div>
      </section>
      <CTABand title="Want results like these?" />
    </>
  );
}
