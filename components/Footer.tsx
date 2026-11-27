import Link from "next/link";
import { footerNav, site } from "@/lib/data";
import { Split } from "./Split";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="site-footer on-dark">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="wordmark" aria-label="Velnqora Labs home">
              <Wordmark />
            </Link>
            <p>{site.tagline} Thoughtful digital products and technology for ambitious businesses.</p>
            <Link href="/contact" className="btn btn--lime">
              Tell us about your project
            </Link>
          </div>
          <div className="footer-cols">
            {footerNav.map((group) => (
              <nav key={group.title} aria-label={`Footer ${group.title}`}>
                <h2>{group.title}</h2>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="footer-word" aria-hidden="true" data-reveal="split">
          <Split text="Velnqora Labs" by="chars" step={35} />
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Velnqora Labs</p>
          <p>Digital experiences, thoughtfully engineered.</p>
        </div>
      </div>
    </footer>
  );
}
