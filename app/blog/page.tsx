import type { Metadata } from "next";
import { CTABand, PageHero } from "@/components/Blocks";
import { BlogGrid } from "@/components/FilterGrids";
import { postCategories, posts } from "@/lib/data";

export const metadata: Metadata = { title: "Blog", description: "Practical articles on strategy, leadership, operations and finance." };

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        eyebrow="Blog"
        title="Insights for running a better business"
        lead="Short, practical reads from our consultants. No fluff, no jargon."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <BlogGrid posts={sorted} categories={postCategories} />
        </div>
      </section>
      <CTABand title="Prefer to talk it through?" />
    </>
  );
}
