"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { services } from "@/lib/data";

type Values = { name: string; email: string; company: string; service: string; budget: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.service) errors.service = "Choose a service or select “Not sure yet”.";
  if (values.message.trim().length < 10) errors.message = "Tell us a little more (at least 10 characters).";
  return errors;
}

export function ContactForm({ defaultEmail = "" }: { defaultEmail?: string }) {
  const [values, setValues] = useState<Values>({ name: "", email: defaultEmail, company: "", service: "", budget: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const set = (key: keyof Values, value: string) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) setErrors(validate(next));
  };

  const blur = (key: keyof Values) => {
    setTouched((current) => ({ ...current, [key]: true }));
    setErrors(validate(values));
  };

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, company: true, service: true, budget: true, message: true });
    if (Object.keys(nextErrors).length) {
      setSubmitError("Please review the highlighted fields.");
      const first = Object.keys(nextErrors)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setSubmitError("");
    setSubmitted(true);
    requestAnimationFrame(() => successRef.current?.focus());
  }

  if (submitted) {
    return (
      <div className="success-panel" ref={successRef} tabIndex={-1} role="status">
        <h2>Thanks, {values.name.split(" ")[0]}.</h2>
        <p>
          Your details are entered, but this form does not send or store submissions yet. Please connect a form service before using it to receive
          project enquiries.
        </p>
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => {
            setValues({ name: "", email: "", company: "", service: "", budget: "", message: "" });
            setTouched({});
            setErrors({});
            setSubmitted(false);
          }}
        >
          Start another enquiry
        </button>
      </div>
    );
  }

  const fieldProps = (key: keyof Values) => ({
    id: `cf-${key}`,
    name: key,
    value: values[key],
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => set(key, event.target.value),
    onBlur: () => blur(key),
    "aria-invalid": touched[key] && !!errors[key],
    "aria-describedby": touched[key] && errors[key] ? `cf-${key}-err` : undefined,
  });

  const error = (key: keyof Values) =>
    touched[key] && errors[key] ? (
      <span id={`cf-${key}-err`} className="field-error">
        {errors[key]}
      </span>
    ) : null;

  return (
    <form ref={formRef} className="form-card" method="post" onSubmit={onSubmit} noValidate aria-label="Project enquiry form">
      <p className="form-note">Your details stay in this browser; this form is not connected to a submission service.</p>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="cf-name">Name</label>
          <input type="text" autoComplete="name" required {...fieldProps("name")} />
          {error("name")}
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email</label>
          <input type="email" autoComplete="email" inputMode="email" required {...fieldProps("email")} />
          {error("email")}
        </div>
        <div className="field">
          <label htmlFor="cf-company">
            Company <span className="optional">(optional)</span>
          </label>
          <input type="text" autoComplete="organization" {...fieldProps("company")} />
        </div>
        <div className="field">
          <label htmlFor="cf-service">Service</label>
          <select required {...fieldProps("service")}>
            <option value="">Choose a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
          {error("service")}
        </div>
        <div className="field full">
          <label htmlFor="cf-budget">
            Project budget <span className="optional">(optional)</span>
          </label>
          <input type="text" autoComplete="off" placeholder="Share an estimated range or say “to be discussed”" {...fieldProps("budget")} />
        </div>
        <div className="field full">
          <label htmlFor="cf-message">Project description</label>
          <textarea required placeholder="What are you looking to build, improve, or explore?" {...fieldProps("message")} />
          {error("message")}
        </div>
        {submitError && (
          <p className="form-status form-status--error full" role="alert">
            {submitError}
          </p>
        )}
        <div className="full">
          <button type="submit" className="btn btn--primary">
            Send project enquiry
          </button>
        </div>
      </div>
    </form>
  );
}
