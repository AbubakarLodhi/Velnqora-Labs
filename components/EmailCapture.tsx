"use client";

import { useRouter } from "next/navigation";
import { useId, useState, type FormEvent } from "react";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Props = {
  /** "book" sends the visitor to /contact with the email prefilled; "subscribe" shows a local confirmation. */
  mode?: "book" | "subscribe";
  tone?: "hero" | "light" | "footer";
  buttonLabel?: string;
  label?: string;
};

export function EmailCapture({ mode = "book", tone = "hero", buttonLabel = "Book a slot", label = "Email address" }: Props) {
  const router = useRouter();
  const id = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{ state: "idle" | "error" | "success"; msg: string }>({ state: "idle", msg: "" });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setStatus({ state: "error", msg: "Please enter a valid email address." });
      return;
    }
    if (mode === "book") {
      router.push(`/contact?email=${encodeURIComponent(value)}&schedule=1#contact-form`);
      return;
    }
    // Newsletter: no data leaves the browser. Connect your email provider (e.g. a
    // POST to /api/subscribe that calls Mailchimp/ConvertKit) here.
    setStatus({ state: "success", msg: "Thanks — you're on the list. (Demo: nothing was sent.)" });
    setEmail("");
  }

  const isLight = tone === "light";

  return (
    <form onSubmit={onSubmit} noValidate className={tone === "footer" ? "footer-capture" : undefined}>
      <div className={`capture${isLight ? " capture--light" : ""}`}>
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <input
          id={id}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status.state === "error") setStatus({ state: "idle", msg: "" });
          }}
          aria-invalid={status.state === "error"}
          aria-describedby={`${id}-msg`}
        />
        <button type="submit" className={`btn ${tone === "footer" ? "btn--lime" : "btn--primary"}`}>
          {buttonLabel}
        </button>
      </div>
      <p id={`${id}-msg`} className={`capture-msg${isLight ? " capture-msg--light" : ""}`} data-state={status.state} role="status" aria-live="polite">
        {status.msg}
      </p>
    </form>
  );
}
