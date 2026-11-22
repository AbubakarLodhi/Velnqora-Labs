import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import { ContactForm } from "@/components/ContactForm";
import { plans, site } from "@/lib/data";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Velnqora Labs or book a free discovery call." };

type SearchParams = Promise<{ email?: string; schedule?: string; plan?: string }>;

export default async function ContactPage({ searchParams }: { searchParams: SearchParams }) {
  const { email, schedule, plan } = await searchParams;
  const selected = plans.find((p) => p.slug === plan);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Contact"
        title="Let's talk about your business"
        lead="Tell us where you are and where you want to be. We reply within one working day."
      />
      <section className="section" style={{ paddingTop: 0 }} id="contact-form">
        <div className="container contact-grid">
          <aside className="contact-info" aria-labelledby="contact-details">
            <h2 id="contact-details" className="display-3">
              Contact details
            </h2>
            <dl>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>{site.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Office</dt>
                <dd>{site.address}</dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>{site.hours}</dd>
              </div>
            </dl>
            <p className="muted" style={{ fontSize: "0.875rem" }}>
              This is a demo site: the address and phone number are placeholders and the form does not send data.
            </p>
          </aside>
          <ContactForm
            key={`${email ?? ""}|${schedule ?? ""}|${plan ?? ""}`}
            defaultEmail={email ?? ""}
            defaultSchedule={schedule === "1" || !!selected}
            defaultMessage={selected ? `Hi, I'm interested in the ${selected.name} plan.` : ""}
          />
        </div>
      </section>
    </>
  );
}
