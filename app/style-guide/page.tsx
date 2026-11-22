import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Blocks";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = { title: "Style guide", robots: { index: false } };

const colors = [
  { name: "Background", token: "--bg", value: "#f5f4ef" },
  { name: "Surface", token: "--surface", value: "#ffffff" },
  { name: "Surface 2", token: "--surface-2", value: "#ecebe4" },
  { name: "Ink", token: "--ink", value: "#141613" },
  { name: "Muted", token: "--muted", value: "#5c6159" },
  { name: "Lime", token: "--lime", value: "#cbf36b" },
  { name: "Lime strong", token: "--lime-strong", value: "#b5e346" },
  { name: "Green (text)", token: "--green", value: "#3a6413" },
];

export default function StyleGuidePage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Home", href: "/" }, { label: "Style guide" }]} eyebrow="Utility" title="Style guide" lead="Tokens and core components used across the site. Tokens live in app/globals.css." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: "grid", gap: 72 }}>
          <div style={{ display: "grid", gap: 24 }}>
            <h2 className="display-3">Colours</h2>
            <div className="swatches">
              {colors.map((c) => (
                <div className="swatch" key={c.token}>
                  <i style={{ background: c.value }} />
                  <div>
                    <strong>{c.name}</strong>
                    <br />
                    <code>
                      {c.token} · {c.value}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gap: 24 }}>
            <h2 className="display-3">Typography</h2>
            <p className="display-1">Display 1</p>
            <p className="display-2">Display 2</p>
            <p className="display-3">Display 3</p>
            <p className="lead">Lead paragraph — used under headings for supporting copy.</p>
            <p>Body text set in Inter at 16px with a 1.6 line height. Headings use Inter Tight with tight tracking.</p>
            <span className="eyebrow">Eyebrow label</span>
          </div>
          <div style={{ display: "grid", gap: 24 }}>
            <h2 className="display-3">Buttons &amp; links</h2>
            <div className="btn-row">
              <Link href="/contact" className="btn btn--primary">
                Primary <ArrowRight />
              </Link>
              <Link href="/contact" className="btn btn--lime">
                Lime
              </Link>
              <Link href="/contact" className="btn btn--ghost">
                Ghost
              </Link>
              <Link href="/about" className="link-arrow">
                Text link <ArrowRight size={16} />
              </Link>
            </div>
            <div className="btn-row">
              <span className="tag">Tag</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
