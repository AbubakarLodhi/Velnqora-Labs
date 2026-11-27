import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { formatDate, processSteps, type CaseStudy, type Post } from "@/lib/data";
import { ArrowRight } from "./Icons";
import { Split } from "./Split";

/** Strings get the word-by-word scroll reveal; other nodes render as-is. */
const splitTitle = (title: ReactNode) => (typeof title === "string" ? <Split text={title} /> : title);
const splitAttr = (title: ReactNode) => (typeof title === "string" ? { "data-reveal": "split" } : {});

/* ---------- Page hero for inner pages ---------- */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  crumbs?: { label: string; href?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        {crumbs && (
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb">
              {crumbs.map((c) => (
                <li key={c.label}>{c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <div className="page-hero-main">
          <h1 className="display-1" {...splitAttr(title)}>
            {splitTitle(title)}
          </h1>
          {lead && (
            <p className="lead" data-reveal="right">
              {lead}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ---------- Section heading ---------- */
export function SectionHead({
  eyebrow,
  title,
  lead,
  split,
  center,
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  split?: boolean;
  center?: boolean;
  action?: ReactNode;
}) {
  const cls = `section-head${split ? " section-head--split" : ""}${center ? " section-head--center" : ""}`;
  if (split) {
    return (
      <div className={cls} data-reveal>
        <div style={{ display: "grid", gap: 20 }}>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="display-2" {...splitAttr(title)}>
            {splitTitle(title)}
          </h2>
        </div>
        <div className={`section-head-aside${lead ? "" : " section-head-aside--end"}`}>
          {lead && <p className="lead">{lead}</p>}
          {action}
        </div>
      </div>
    );
  }
  return (
    <div className={cls} data-reveal>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="display-2" {...splitAttr(title)}>
        {splitTitle(title)}
      </h2>
      {lead && <p className="lead">{lead}</p>}
      {action}
    </div>
  );
}

/* ---------- Case study card ---------- */
export function CaseCard({ item, delay = 0 }: { item: CaseStudy; delay?: number }) {
  return (
    <article className="card" data-reveal style={{ ["--delay" as string]: `${delay}ms` }}>
      <div className="media media--wide">
        <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 900px) 600px, 100vw" />
        <span className="tag">Concept project</span>
      </div>
      <div className="card-meta">
        <span>{item.category}</span>
        <span>Demonstration work</span>
      </div>
      <h3>
        <Link href={`/case-study/${item.slug}`}>{item.title}</Link>
      </h3>
      <p>{item.summary}</p>
      <p className="concept-disclaimer">An illustrative concept, not a client engagement.</p>
    </article>
  );
}

/* ---------- Blog post card ---------- */
export function PostCard({ post, delay = 0 }: { post: Post; delay?: number }) {
  return (
    <article className="card" data-reveal style={{ ["--delay" as string]: `${delay}ms` }}>
      <div className="media media--wide">
        <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 900px) 400px, 100vw" />
        <span className="tag">{post.category}</span>
      </div>
      <div className="card-meta">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>{post.readTime}</span>
      </div>
      <h3>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
    </article>
  );
}

/* ---------- CTA band ---------- */
export function CTABand({
  title = "Ready to move your idea forward?",
  body = "Tell us what you want to build or improve. We’ll start with the problem, the people it affects, and what a good outcome looks like.",
  image = "/images/high-five.jpg",
}: {
  title?: string;
  body?: string;
  image?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band on-dark" data-reveal="scale" data-parallax="0.07">
          <Image src={image} alt="" fill sizes="(min-width: 1600px) 1600px, 100vw" />
          <h2 className="display-2" data-reveal="split">
            <Split text={title} />
          </h2>
          <p>{body}</p>
          <div className="btn-row">
            <Link href="/contact" className="btn btn--lime">
              Start a project <ArrowRight />
            </Link>
            <Link href="/services" className="btn btn--ghost">
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Mini bar chart ---------- */
export function MiniChart({ values, label }: { values: number[]; label: string }) {
  const max = Math.max(...values);
  return (
    <div className="mini-chart" role="img" aria-label={label} data-reveal>
      {values.map((v, i) => (
        <div key={i} style={{ height: `${(v / max) * 100}%`, transitionDelay: `${i * 60}ms` }} />
      ))}
    </div>
  );
}

/* ---------- Process timeline ---------- */
export function ProcessSteps({ scrub = true }: { scrub?: boolean }) {
  return (
    <ol className="process" {...(scrub ? { "data-scrub": "enter" } : {})}>
      {processSteps.map((s, i) => (
        <li className="process-step" key={s.number} data-reveal style={{ ["--delay" as string]: `${i * 120}ms`, ["--i" as string]: i }}>
          <span className="process-node" aria-hidden="true" />
          <div className="process-top">
            <span className="num">Step {s.number}</span>
            <span className="process-when">{s.when}</span>
          </div>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
          <div className="process-output">
            <span>Deliverable</span>
            <strong>{s.output}</strong>
          </div>
        </li>
      ))}
    </ol>
  );
}
