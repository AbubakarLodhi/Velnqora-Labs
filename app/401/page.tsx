import type { Metadata } from "next";
import { PasswordGate } from "@/components/PasswordGate";

export const metadata: Metadata = { title: "Protected page", robots: { index: false } };

export default function PasswordPage() {
  return (
    <section className="utility">
      <div className="utility-inner">
        <p className="utility-code" aria-hidden="true">
          4<span>0</span>1
        </p>
        <h1 className="display-3">This page is password protected</h1>
        <p className="lead">Enter the password to continue.</p>
        <PasswordGate />
        <p className="muted" style={{ fontSize: "0.8125rem" }}>
          Demo only: the check runs in your browser and is not real protection.
        </p>
      </div>
    </section>
  );
}
