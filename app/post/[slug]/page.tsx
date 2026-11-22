import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABand, PostCard, SectionHead } from "@/components/Blocks";
import { ArrowRight } from "@/components/Icons";
import { formatDate, posts } from "@/lib/data";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category)).slice(0, 3);

  return (
    <>
      <article>
        <header className="page-hero">
          <div className="container article-head">
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <span aria-current="page">{post.category}</span>
                </li>
              </ol>
            </nav>
            <span className="tag" style={{ justifySelf: "start" }}>
              {post.category}
            </span>
            <h1 className="display-2">{post.title}</h1>
            <p className="lead">{post.excerpt}</p>
            <p className="author-line">
              <span>By {post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </p>
          </div>
        </header>
        <div className="container">
          <div className="media media--cinema" data-reveal="clip" data-parallax="0.08">
            <Image src={post.image} alt="" fill priority sizes="(min-width: 1600px) 1600px, 100vw" />
          </div>
        </div>
        <div className="section container">
          <div className="article-body">
            {post.body.map((block, i) => {
              if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
              if (block.type === "quote") return <blockquote key={i}>{block.text}</blockquote>;
              if (block.type === "list")
                return (
                  <ul key={i}>
                    {block.items?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{block.text}</p>;
            })}
            <p style={{ marginTop: 16 }}>
              <Link href="/blog" className="link-arrow">
                Back to all articles <ArrowRight size={16} />
              </Link>
            </p>
          </div>
        </div>
      </article>

      <section className="section section--white">
        <div className="container">
          <SectionHead eyebrow="Keep reading" title="Related articles" />
          <div className="grid grid-3">
            {related.map((p, i) => (
              <PostCard key={p.slug} post={p} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
