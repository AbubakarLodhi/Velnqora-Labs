"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

/**
 * Demo-only gate. The check runs in the browser, so it is NOT real protection.
 * For real access control use middleware/proxy + a server-side session or HTTP auth.
 */
const DEMO_PASSWORD = "velnqora";

export function PasswordGate() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (value === DEMO_PASSWORD) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Incorrect password. (Hint for this demo: “velnqora”.)");
    }
  }

  if (unlocked) {
    return (
      <div className="success-panel" role="status">
        <h2>Access granted</h2>
        <p>This is where protected content would appear.</p>
        <Link href="/" className="btn btn--primary">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="form-card" style={{ width: "100%", textAlign: "left" }}>
      <div className="field">
        <label htmlFor="pw">Password</label>
        <input id="pw" type="password" autoComplete="current-password" value={value} onChange={(e) => setValue(e.target.value)} aria-invalid={!!error} aria-describedby={error ? "pw-err" : undefined} />
        {error && (
          <span id="pw-err" className="field-error" role="alert">
            {error}
          </span>
        )}
      </div>
      <button type="submit" className="btn btn--primary" style={{ marginTop: 20, width: "100%" }}>
        Unlock
      </button>
    </form>
  );
}
