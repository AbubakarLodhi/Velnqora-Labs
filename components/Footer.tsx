import Link from "next/link";
import { footerNav, legalLinks, site } from "@/lib/data";
import { EmailCapture } from "./EmailCapture";
import { ArrowUpRight, MailIcon } from "./Icons";
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
            <p>Practical strategy, operations and analytics for businesses that want to grow without the chaos.</p>
            <EmailCapture mode="subscribe" tone="footer" buttonLabel="Subscribe" label="Email address for our newsletter" />
            <a href={`mailto:${site.email}`} className="footer-mail">
              <span className="footer-mail-icon" aria-hidden="true">
                <MailIcon />
              </span>
              <span className="footer-mail-text">
                <small>Email us</small>
                <span className="footer-mail-addr">{site.email}</span>
              </span>
              <ArrowUpRight className="footer-mail-arrow" />
            </a>
          </div>
          <div className="footer-cols">
            {footerNav.map((group) => (
              <nav key={group.title} aria-label={`Footer ${group.title}`}>
                <h2>{group.title}</h2>
                <ul>
                  {group.links.map((l) => (
                    <li key={l.href}>
                      {/* /404 intentionally doesn't exist; skip prefetch so it doesn't log a 404 */}
                      <Link href={l.href} prefetch={l.href === "/404" ? false : undefined}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <nav aria-label="Social">
              <h2>Social</h2>
              <ul>
                {site.social.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer-word" aria-hidden="true" data-reveal="split">
          <Split text="Velnqora Labs" by="chars" step={35} />
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Velnqora Labs. Demo site — independent implementation.</p>
          <ul>
            {legalLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
