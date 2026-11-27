import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Changelog", robots: { index: false } };

export default function ChangelogPage() {
  redirect("/");
}
