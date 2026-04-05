import Link from "next/link";

import { HUB_HOME_HREF } from "@/lib/hubNavigation";

type BackToHubButtonProps = {
  className?: string;
};

export function BackToHubButton({ className = "" }: BackToHubButtonProps) {
  return (
    <Link
      href={HUB_HOME_HREF}
      className={`group inline-flex items-center gap-2 rounded-sm border border-cyan-500/35 bg-[linear-gradient(180deg,rgba(8,22,28,0.85)_0%,rgba(4,12,16,0.95)_100%)] px-4 py-2.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.32em] text-cyan-200/95 shadow-[0_0_24px_rgba(34,211,238,0.12)] transition-[border-color,box-shadow,color] hover:border-cyan-400/55 hover:text-cyan-100 hover:shadow-[0_0_32px_rgba(34,211,238,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 ${className}`}
    >
      <span aria-hidden className="text-cyan-500/80 transition-transform group-hover:-translate-x-0.5">
        ←
      </span>
      BACK TO HUB
    </Link>
  );
}
