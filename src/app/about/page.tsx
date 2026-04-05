import type { Metadata } from "next";

import { InnerSanctumExperience } from "@/components/lounge/InnerSanctumExperience";

export const metadata: Metadata = {
  title: "About · Inner Sanctum · Michail Kokkinos",
  description:
    "About Michail Kokkinos — NKUA CS student, athlete, portfolio (same room as Lounge).",
};

export default function AboutPage() {
  return <InnerSanctumExperience />;
}
