import type { Metadata } from "next";

import { InnerSanctumExperience } from "@/components/lounge/InnerSanctumExperience";

export const metadata: Metadata = {
  title: "Inner Sanctum · Lounge · Michail Kokkinos",
  description:
    "About Michail Kokkinos — private study: desk, medals, and portfolio OS.",
};

export default function LoungePage() {
  return <InnerSanctumExperience />;
}
