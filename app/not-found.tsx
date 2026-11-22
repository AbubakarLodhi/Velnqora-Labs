import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="utility">
      <div className="utility-inner">
        <p className="utility-code" aria-hidden="true">
          4<span>0</span>4
        </p>
        <h1 className="display-3">This page took a different path</h1>
        <p className="lead">The page you are looking for doesn&apos;t exist or has moved.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn btn--primary">
            Back to home <ArrowRight />
          </Link>
          <Link href="/contact" className="btn btn--ghost">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
