import type { Metadata } from "next";
import { CTABand, PageHero } from "@/components/Blocks";
import { BlogGrid } from "@/components/FilterGrids";
import { postCategories, posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights on Web Development, AI & Product Strategy",
  description: "Practical perspectives from Velnqora Labs on building digital products, applying AI, and making thoughtful technology decisions.",
  openGraph: {
    title: "Digital Product & Technology Insights | Velnqora Labs",
    description: "Ideas on web development, AI, and product strategy from Velnqora Labs.",
  },
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
        eyebrow="Insights"
        title="Ideas for building better digital products."
        lead="Practical perspectives on technology, product decisions, and the details that make digital experiences useful."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <BlogGrid posts={sorted} categories={postCategories} />
        </div>
      </section>
      <CTABand title="Working through a product question?" />
    </>
  );
}
