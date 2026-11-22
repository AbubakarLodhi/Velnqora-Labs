"use client";

import { useState } from "react";
import type { CaseStudy, Post } from "@/lib/data";
import { CaseCard, PostCard } from "./Blocks";

function Filters<T extends string>({ options, value, onChange, label }: { options: readonly T[]; value: T; onChange: (v: T) => void; label: string }) {
  return (
    <div className="filters" role="group" aria-label={label}>
      {options.map((opt) => (
        <button key={opt} type="button" className="filter-btn" aria-pressed={value === opt} onClick={() => onChange(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}

export function CaseStudyGrid({ items, categories }: { items: CaseStudy[]; categories: readonly string[] }) {
  const [cat, setCat] = useState<string>("All");
  const shown = cat === "All" ? items : items.filter((i) => i.category === cat);
  return (
    <>
      <Filters options={categories} value={cat} onChange={setCat} label="Filter case studies by category" />
      <p className="sr-only" aria-live="polite">
        {shown.length} case {shown.length === 1 ? "study" : "studies"} shown
      </p>
      {shown.length ? (
        <div className="grid grid-2">
          {shown.map((item, i) => (
            <CaseCard key={item.slug} item={item} delay={(i % 2) * 80} />
          ))}
        </div>
      ) : (
        <p className="empty-state">No case studies in this category yet.</p>
      )}
    </>
  );
}

export function BlogGrid({ posts, categories }: { posts: Post[]; categories: readonly string[] }) {
  const [cat, setCat] = useState<string>("All");
  const shown = cat === "All" ? posts : posts.filter((p) => p.category === cat);
  return (
    <>
      <Filters options={categories} value={cat} onChange={setCat} label="Filter articles by category" />
      <p className="sr-only" aria-live="polite">
        {shown.length} {shown.length === 1 ? "article" : "articles"} shown
      </p>
      {shown.length ? (
        <div className="grid grid-3">
          {shown.map((post, i) => (
            <PostCard key={post.slug} post={post} delay={(i % 3) * 80} />
          ))}
        </div>
      ) : (
        <p className="empty-state">No articles in this category yet.</p>
      )}
    </>
  );
}
