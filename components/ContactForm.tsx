"use client";

import { useRef, useState, type FormEvent } from "react";
import { EMAIL_RE } from "./EmailCapture";

type Values = { name: string; email: string; phone: string; message: string; schedule: boolean };
type Errors = Partial<Record<keyof Values, string>>;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.phone.trim() && !/^[+()\d\s.-]{7,20}$/.test(v.phone.trim())) e.phone = "Use digits, spaces and + ( ) - only.";
  if (v.message.trim().length < 10) e.message = "Tell us a little more (at least 10 characters).";
  return e;
}

export function ContactForm({ defaultEmail = "", defaultSchedule = false, defaultMessage = "" }: { defaultEmail?: string; defaultSchedule?: boolean; defaultMessage?: string }) {
  const [values, setValues] = useState<Values>({ name: "", email: defaultEmail, phone: "", message: defaultMessage, schedule: defaultSchedule });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) setErrors(validate(next));
  };

  const blur = (key: keyof Values) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  };

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, email: true, phone: true, message: true });
    if (Object.keys(errs).length) {
      setSubmitError("Please fix the highlighted fields.");
      const first = Object.keys(errs)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setSubmitError("");
    /*
     * Backend integration point: POST `values` to a route handler (e.g. app/api/contact/route.ts)
     * that forwards to your CRM, email service (Resend, Postmark) or form backend. Nothing is
     * transmitted in this demo.
     */
    setSubmitted(true);
    requestAnimationFrame(() => successRef.current?.focus());
  }

  if (submitted) {
    return (
      <div className="success-panel" ref={successRef} tabIndex={-1} role="status">
        <h2>Thanks, {values.name.split(" ")[0]}!</h2>
        <p>
          Your message is ready to go. {values.schedule ? "We'll follow up with a few times for a call. " : ""}
          (Demo site: nothing was sent — connect a backend to deliver messages.)
        </p>
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => {
            setValues({ name: "", email: "", phone: "", message: "", schedule: false });
            setTouched({});
            setErrors({});
            setSubmitted(false);
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldProps = (key: "name" | "email" | "phone" | "message") => ({
    id: `cf-${key}`,
    name: key,
    value: values[key],
    onChange: (e: { target: { value: string } }) => set(key, e.target.value),
    onBlur: () => blur(key),
    "aria-invalid": touched[key] && !!errors[key],
    "aria-describedby": touched[key] && errors[key] ? `cf-${key}-err` : undefined,
  });

  const err = (key: keyof Values) =>
    touched[key] && errors[key] ? (
      <span id={`cf-${key}-err`} className="field-error">
        {errors[key]}
      </span>
    ) : null;

  return (
    <form ref={formRef} className="form-card" onSubmit={onSubmit} noValidate aria-label="Contact form">
      <div className="form-grid">
        <div className="field">
          <label htmlFor="cf-name">Full name</label>
          <input type="text" autoComplete="name" required {...fieldProps("name")} />
          {err("name")}
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email</label>
          <input type="email" autoComplete="email" inputMode="email" required {...fieldProps("email")} />
          {err("email")}
        </div>
        <div className="field full">
          <label htmlFor="cf-phone">
            Phone <span className="optional">(optional)</span>
          </label>
          <input type="tel" autoComplete="tel" inputMode="tel" {...fieldProps("phone")} />
          {err("phone")}
        </div>
        <div className="field full">
          <label htmlFor="cf-message">How can we help?</label>
          <textarea required {...fieldProps("message")} />
          {err("message")}
        </div>
        <label className="checkbox full">
          <input type="checkbox" name="schedule" checked={values.schedule} onChange={(e) => set("schedule", e.target.checked)} />
          <span>I&apos;d like to schedule a free 30-minute discovery call.</span>
        </label>
        {submitError && (
          <p className="form-status form-status--error full" role="alert">
            {submitError}
          </p>
        )}
        <div className="full">
          <button type="submit" className="btn btn--primary">
            Send message
          </button>
        </div>
      </div>
    </form>
  );
}
