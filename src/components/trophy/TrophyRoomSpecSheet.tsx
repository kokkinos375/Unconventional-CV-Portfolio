"use client";

import { useEffect, useMemo, useState } from "react";

import { BackToHubButton } from "@/components/villa/BackToHubButton";
import {
  GREEK_MEET_RESULTS,
  INTERNATIONAL_SUMMARY,
  NATIONAL_SUMMARY,
  OPEN_WATER_SUMMARY,
  totalTrackedPodiumSlots,
} from "@/data/swimmingAchievements";
import { SITE_OWNER_NAME } from "@/lib/site";

const CV_SERVICE_LINKS = [
  {
    id: "amanzoe",
    label: "Amanzoe",
    href: "https://www.aman.com/resorts/amanzoe",
  },
  {
    id: "santorini-experience",
    label: "Santorini Experience",
    href: "https://www.santorini-experience.com/",
  },
] as const;

const HELLENIC_SWIMMING_FEDERATION_KOE = "http://www.koe.org.gr";

type WorkEntry = {
  id: string;
  location: string;
  role: string;
  durations: string[];
  href?: string;
};

const WORK_HISTORY: WorkEntry[] = [
  {
    id: "amanzoe",
    location: "Amanzoe (Porto Heli)",
    role: "Lifeguard",
    durations: ["24/08/2023 – 02/10/2023"],
    href: "https://www.aman.com/resorts/amanzoe",
  },
  {
    id: "holiday-sun",
    location: "Holiday Sun (Paros)",
    role: "Lifeguard",
    durations: ["01/09/2025 – 30/09/2025"],
  },
  {
    id: "bank-greece",
    location: "Bank of Greece (Parnitha)",
    role: "Lifeguard (Kids Camp)",
    durations: ["21/07/2023 – 31/07/2023", "15/07/2024 – 02/08/2024"],
  },
];

function useCountUp(target: number, durationMs: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / durationMs);
      const eased = 1 - (1 - p) ** 3;
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);

  return value;
}

function SpecPanel({
  sectionId,
  title,
  children,
}: {
  sectionId: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={`${sectionId}-heading`}
      className="relative border border-dashed border-cyan-400/30 bg-[linear-gradient(155deg,rgba(14,18,22,0.55)_0%,rgba(6,8,12,0.92)_100%)] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] before:pointer-events-none before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,rgba(0,229,255,0.035)_0,rgba(0,229,255,0.035)_1px,transparent_1px,transparent_10px),repeating-linear-gradient(90deg,rgba(0,229,255,0.035)_0,rgba(0,229,255,0.035)_1px,transparent_1px,transparent_10px)] before:opacity-80 md:p-8"
    >
      <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-cyan-400/45" />
      <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-cyan-400/45" />
      <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-cyan-400/45" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-cyan-400/45" />

      <h2
        id={`${sectionId}-heading`}
        className="relative font-mono text-[0.65rem] uppercase tracking-[0.28em] text-cyan-500/70"
      >
        {title}
      </h2>
      <div className="relative mt-6">{children}</div>
    </section>
  );
}

function WorkRow({ entry }: { entry: WorkEntry }) {
  const inner = (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/[0.06] pb-4 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-cyan-500/55">
        <span>REF — {entry.id}</span>
        {entry.href ? (
          <span className="text-cyan-400/50">External link · new tab</span>
        ) : (
          <span className="text-zinc-600">No external link</span>
        )}
      </div>
      <div className="mt-4 grid gap-1">
        <p className="font-display text-lg text-stone-100 md:text-xl">{entry.location}</p>
        <p className="text-sm text-zinc-400">{entry.role}</p>
        <div className="mt-2 space-y-1 font-mono text-[0.75rem] text-zinc-500">
          {entry.durations.map((d, i) => (
            <p key={i}>
              <span className="text-zinc-600">Duration{entry.durations.length > 1 ? ` ${i + 1}` : ""}: </span>
              {d}
            </p>
          ))}
        </div>
      </div>
    </>
  );

  if (entry.href) {
    return (
      <a
        href={entry.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block cursor-pointer rounded-sm border border-white/[0.07] bg-black/20 p-5 transition-colors hover:border-cyan-400/35 hover:bg-cyan-950/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="rounded-sm border border-white/[0.07] bg-black/15 p-5">{inner}</div>
  );
}

export function TrophyRoomSpecSheet() {
  const totalSlots = totalTrackedPodiumSlots();
  const medalCount = useCountUp(totalSlots, 2200);

  const medalAria = useMemo(
    () => `Total podium placements tracked: ${medalCount} of ${totalSlots}`,
    [medalCount, totalSlots],
  );

  return (
    <div className="min-h-dvh bg-[#0a0908] text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_110%,rgba(28,26,24,0.85),transparent_58%),radial-gradient(ellipse_60%_45%_at_15%_25%,rgba(55,50,46,0.28),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.04] mix-blend-soft-light bg-[repeating-linear-gradient(180deg,transparent,transparent_3px,rgba(0,255,255,0.1)_3px,rgba(0,255,255,0.1)_6px)]"
      />

      <div className="relative z-[1] mx-auto max-w-4xl px-6 py-12 md:px-10 md:py-16">
        <BackToHubButton />

        <header className="mt-10 border-b border-white/[0.08] pb-8">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-cyan-500/50">
            Document · TR-01
          </p>
          <h1 className="mt-3 font-display text-4xl font-light tracking-wide text-stone-100 md:text-5xl">
            Trophy Room
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
            {SITE_OWNER_NAME} — service log and performance record. Format: mechanical specification sheet.
          </p>
        </header>

        <div className="mt-12 space-y-12">
          <SpecPanel sectionId="work" title="1 — Work history (Service history)">
            <ul className="space-y-5">
              {WORK_HISTORY.map((entry) => (
                <li key={entry.id}>
                  <WorkRow entry={entry} />
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-dashed border-cyan-500/20 pt-8">
              <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cyan-500/65">
                CV reference links (service &amp; venues)
              </h3>
              <ul className="mt-4 space-y-3 font-mono text-[0.72rem] text-zinc-400">
                {CV_SERVICE_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400/85 underline decoration-cyan-500/35 underline-offset-2 transition-colors hover:text-cyan-300"
                    >
                      {link.label}
                    </a>
                    <span className="ml-2 text-zinc-600">
                      — {link.href.replace(/^https?:\/\//, "")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </SpecPanel>

          <SpecPanel sectionId="swim" title="2 — Swimming career (Performance database)">
            <div className="mb-8 flex flex-col gap-4 border-b border-dashed border-cyan-500/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-zinc-500">
                  Aggregate · podium index
                </p>
                <p
                  className="mt-2 font-mono text-5xl tabular-nums text-cyan-300/90 md:text-6xl"
                  aria-live="polite"
                  aria-atomic="true"
                  aria-label={medalAria}
                >
                  {medalCount}
                </p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500">
                  Tracked podium placements
                </p>
              </div>
              <p className="max-w-md text-right text-[0.75rem] leading-relaxed text-zinc-600">
                Live tally on load. Count = Greek meet podiums (per row below) plus national relay medals. Open
                water and non-podium international results are listed but not added to the index.
              </p>
            </div>

            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-cyan-500/75">
                Ελληνικά πρωταθλήματα &amp; κύπελλα
              </h3>
              <span className="rounded border border-cyan-500/25 bg-cyan-950/40 px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-cyan-400/70">
                DB · GR-MEET-01
              </span>
            </div>

            <div className="overflow-x-auto rounded-sm border border-cyan-500/20 bg-[linear-gradient(180deg,rgba(6,10,14,0.6)_0%,rgba(4,6,10,0.85)_100%)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-cyan-500/25 bg-cyan-950/35 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-cyan-500/85">
                    <th className="whitespace-nowrap px-3 py-3">Ref</th>
                    <th className="min-w-[200px] px-3 py-3">Αγώνας</th>
                    <th className="whitespace-nowrap px-3 py-3">Ημ/νία ή έτος</th>
                    <th className="min-w-[220px] px-3 py-3">Αποτελέσματα</th>
                    <th className="px-3 py-3">Κατηγορία</th>
                    <th className="whitespace-nowrap px-3 py-3 text-right">Plt</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-[0.68rem] text-zinc-400">
                  {GREEK_MEET_RESULTS.map((row, i) => (
                    <tr
                      key={row.id}
                      className={`border-b border-white/[0.04] ${i % 2 === 0 ? "bg-black/20" : "bg-black/10"}`}
                    >
                      <td className="whitespace-nowrap px-3 py-3 text-cyan-600/60">{row.id}</td>
                      <td className="px-3 py-3 text-zinc-300">{row.meet}</td>
                      <td className="whitespace-nowrap px-3 py-3 text-zinc-500">{row.dateOrYear}</td>
                      <td className="px-3 py-3 leading-snug text-zinc-400">{row.results}</td>
                      <td className="px-3 py-3 text-zinc-500">{row.category}</td>
                      <td className="px-3 py-3 text-right">
                        <span className="inline-block min-w-[2rem] rounded border border-cyan-500/30 bg-cyan-950/50 px-1.5 py-0.5 text-center text-[0.62rem] tabular-nums text-cyan-300/90">
                          {row.podiumSlots}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-sm border border-cyan-500/20 bg-black/25 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                <p className="font-mono text-[0.55rem] uppercase tracking-[0.22em] text-cyan-500/70">
                  {NATIONAL_SUMMARY.title}
                </p>
                <ul className="mt-3 space-y-2 text-[0.78rem] leading-relaxed text-zinc-400">
                  {NATIONAL_SUMMARY.lines.map((line) => (
                    <li key={line} className="border-l-2 border-amber-600/40 pl-3">
                      {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-mono text-[0.58rem] text-zinc-600">
                  +{NATIONAL_SUMMARY.podiumSlots} podium (national relays)
                </p>
              </div>
              <div className="rounded-sm border border-cyan-500/20 bg-black/25 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                <p className="font-mono text-[0.55rem] uppercase tracking-[0.22em] text-cyan-500/70">
                  {INTERNATIONAL_SUMMARY.title}
                </p>
                <ul className="mt-3 space-y-2 text-[0.78rem] leading-relaxed text-zinc-400">
                  {INTERNATIONAL_SUMMARY.lines.map((line) => (
                    <li key={line} className="border-l-2 border-zinc-600/50 pl-3">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-sm border border-cyan-500/20 bg-black/25 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                <p className="font-mono text-[0.55rem] uppercase tracking-[0.22em] text-cyan-500/70">
                  {OPEN_WATER_SUMMARY.title}
                </p>
                <ul className="mt-3 space-y-2 text-[0.78rem] leading-relaxed text-zinc-400">
                  {OPEN_WATER_SUMMARY.lines.map((line) => (
                    <li key={line} className="border-l-2 border-sky-600/35 pl-3">
                      {line}{" "}
                      <a
                        href="https://www.santorini-experience.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400/80 underline decoration-cyan-500/40 underline-offset-2"
                      >
                        santorini-experience.com
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-dashed border-white/[0.08] pt-8">
              <p className="font-mono text-[0.72rem] leading-relaxed text-zinc-500">
                Επίσημα αποτελέσματα (ομοσπονδία):{" "}
                <a
                  href={HELLENIC_SWIMMING_FEDERATION_KOE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400/85 underline decoration-cyan-500/35 underline-offset-2 transition-colors hover:text-cyan-300"
                >
                  Κολυμβητική Ομοσπονδία Ελλάδας (KOE)
                </a>
                <span className="text-zinc-600"> — {HELLENIC_SWIMMING_FEDERATION_KOE.replace(/^https?:\/\//, "")}</span>
              </p>
            </div>
          </SpecPanel>
        </div>

        <footer className="mt-16 border-t border-white/[0.06] pt-8 text-center font-mono text-[0.55rem] uppercase tracking-[0.28em] text-zinc-600">
          {SITE_OWNER_NAME} · Trophy room · Service log · TR-01
        </footer>
      </div>
    </div>
  );
}
