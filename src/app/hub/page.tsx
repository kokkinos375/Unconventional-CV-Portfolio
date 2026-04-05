import type { Metadata } from "next";

import { MainHub } from "@/components/villa/MainHub";

export const metadata: Metadata = {
  title: "Hub · The Kokkinos Villa · Michail Kokkinos",
  description: "Main interior — four schematic rooms.",
};

export default function HubPage() {
  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-[#0a0a0b]">
      <MainHub />
    </div>
  );
}
