import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import { ContactForm } from "@/components/ContactForm";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Velnqora Labs",
  description: "Tell Velnqora Labs about your website, mobile app, AI, or digital marketing project.",
  openGraph: {
    title: "Start a Project with Velnqora Labs",
    description: "Share what you want to build, improve, or explore with our digital technology team.",
  },
};

type SearchParams = Promise<{ email?: string }>;

export default async function ContactPage({ searchParams }: { searchParams: SearchParams }) {
  const { email } = await searchParams;

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Start a conversation"
        title="Tell us what you’re looking to make possible."
        lead="Share a little about your project, what you want to achieve, and where you are in the process. A clear brief starts with a few useful details."
      />
      <section className="section" style={{ paddingTop: 0 }} id="contact-form">
        <div className="container contact-layout">
          <aside className="contact-intro">
            <h2 className="display-3">A good place to start</h2>
            <p className="muted">You don’t need every detail figured out. It helps to share:</p>
            <ul className="check-list">
              <li>The challenge or opportunity you have in mind</li>
              <li>Who the product, service, or campaign is for</li>
              <li>Any timing, budget, or technical considerations</li>
            </ul>
            <p className="contact-notice">
              This form is a front-end demonstration. It currently does not transmit or store enquiries; connect a submission service before launch.
            </p>
            <a className="link-arrow" href="#contact-form">
              Jump to the project form <ArrowRight size={16} />
            </a>
          </aside>
          <ContactForm key={email ?? ""} defaultEmail={email ?? ""} />
        </div>
      </section>
    </>
  );
}
