"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { BackToHubButton } from "@/components/villa/BackToHubButton";
import { INNER_SANCTUM_CV } from "@/lib/cvText";
import { SITE_OWNER_NAME, SITE_OWNER_NAME_HERO } from "@/lib/site";

const PROFILE_IMAGE_SRC = "/personal/IMG_5448.jpeg";

const LAPTOP_LINES = [
  SITE_OWNER_NAME_HERO,
  "// NKUA CS STUDENT //",
  "[ CERTIFICATION ]: C2 ENGLISH PROFICIENCY (ECPE / Univ. of Michigan) // STATUS: ACTIVE",
  "PORTFOLIO_OS",
] as const;

const MEDALS = [
  {
    id: "m1",
    tone: "bronze" as const,
    title: "3rd Place",
    detail: "4×100m Mixed · National 2019",
  },
  {
    id: "m2",
    tone: "bronze" as const,
    title: "3rd Place",
    detail: "4×200m Free · National 2019",
  },
  {
    id: "m3",
    tone: "gold" as const,
    title: "1st Place",
    detail: "50m Butterfly · Tzelateia 2022",
  },
];

function MedalIconSimple({ tone, uid }: { tone: "bronze" | "gold"; uid: string }) {
  const gid = `medal-shine-${uid}`;
  const stroke = tone === "gold" ? "#d4a017" : "#9a6b3f";
  const inner = tone === "gold" ? "#3d3518" : "#2a1f18";
  return (
    <svg viewBox="0 0 100 130" className="h-28 w-24 drop-shadow-[0_10px_28px_rgba(0,0,0,0.5)] md:h-32 md:w-28" aria-hidden>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={tone === "gold" ? "#fff8e7" : "#e8c4a0"} stopOpacity="0.35" />
          <stop offset="100%" stopColor={tone === "gold" ? "#c9a227" : "#6b4423"} stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path d="M32 118 L50 88 L68 118 Z" fill="#121214" />
      <circle cx="50" cy="52" r="38" fill={inner} stroke={stroke} strokeWidth="5" />
      <circle cx="50" cy="52" r="32" fill={`url(#${gid})`} opacity={0.5} />
      <circle cx="50" cy="52" r="28" fill="none" stroke={stroke} strokeWidth="1.5" opacity={0.6} />
      <text x="50" y="56" textAnchor="middle" fill="#e7e5e4" fontSize="14" fontWeight="700" fontFamily="system-ui">
        {tone === "gold" ? "I" : "III"}
      </text>
    </svg>
  );
}

function DigitalPhotoFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.78, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[200px] shrink-0 [perspective:900px] md:max-w-[220px]"
    >
      <div
        className="origin-bottom [transform-style:preserve-3d]"
        style={{ transform: "rotateX(8deg)" }}
      >
        <div
          className="relative rounded-lg border border-amber-500/35 bg-[linear-gradient(145deg,#1a1814_0%,#0c0b09_100%)] p-2"
          style={{
            boxShadow:
              "0 0 0 1px rgba(251,191,36,0.15), 0 0 40px rgba(245,180,90,0.28), 0 22px 56px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <div className="pointer-events-none absolute -inset-px rounded-lg bg-[linear-gradient(135deg,rgba(255,220,160,0.35),transparent_40%,rgba(255,200,120,0.15))] opacity-70 blur-[2px]" />
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-[#050505] ring-1 ring-amber-900/50">
            <Image
              src={PROFILE_IMAGE_SRC}
              alt={SITE_OWNER_NAME}
              fill
              sizes="(max-width:768px) 200px, 220px"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,rgba(0,0,0,0.35)_100%)]" />
          </div>
        </div>
        <p className="mt-2 text-center font-mono text-[0.5rem] uppercase tracking-[0.28em] text-amber-200/40">
          Digital frame · v1
        </p>
      </div>
    </motion.div>
  );
}

const springModal = { type: "spring" as const, damping: 28, stiffness: 320 };

export function InnerSanctumExperience() {
  const [cvOpen, setCvOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const closeCv = useCallback(() => setCvOpen(false), []);

  useEffect(() => {
    if (!cvOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCvOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [cvOpen]);

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-[#0b0907] text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_120%_90%_at_80%_-10%,rgba(255,190,120,0.18),transparent_55%),radial-gradient(ellipse_80%_70%_at_20%_30%,rgba(55,48,42,0.45),transparent_50%),radial-gradient(ellipse_100%_60%_at_50%_100%,rgba(18,16,14,0.95),#080706)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.07] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.5%22/%3E%3C/svg%3E')]"
      />

      <div className="fixed left-6 top-6 z-50 md:left-10 md:top-8">
        <BackToHubButton />
      </div>

      <motion.div
        className="relative z-[1] mx-auto flex min-h-dvh max-w-6xl flex-col px-5 pb-16 pt-20 md:px-10 md:pt-24"
        initial={reduceMotion ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 1.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="mb-8 text-center md:mb-10">
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.45em] text-amber-200/35">
            Inner sanctum
          </p>
          <h1 className="mt-2 font-display text-2xl font-light text-stone-100 md:text-3xl">About me</h1>
        </header>

        <div className="relative flex flex-1 flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl border-[10px] border-[#1c1917] bg-[#0f0e0d] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.65),inset_0_0_0_1px_rgba(255,255,255,0.04)] md:p-10"
          >
            <div className="absolute left-2 top-2 h-3 w-3 border-l border-t border-amber-900/40" />
            <div className="absolute right-2 top-2 h-3 w-3 border-r border-t border-amber-900/40" />
            <div className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-amber-900/40" />
            <div className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-amber-900/40" />
            <p className="font-poster text-center text-[clamp(1.05rem,3.5vw,1.75rem)] font-bold uppercase leading-[1.12] tracking-[0.04em] text-[#f5f0e8] drop-shadow-[0_2px_24px_rgba(255,200,120,0.12)]">
              If you want something really hard,
              <br />
              you will make it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-10 flex w-full max-w-3xl flex-wrap items-end justify-center gap-8 md:mt-14 md:gap-12"
          >
            {MEDALS.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                <MedalIconSimple tone={m.tone} uid={m.id} />
                <p className="mt-2 max-w-[9rem] font-mono text-[0.58rem] font-medium uppercase leading-snug tracking-[0.12em] text-amber-100/75">
                  {m.title}
                </p>
                <p className="mt-1 max-w-[10rem] text-[0.65rem] leading-snug text-zinc-500">{m.detail}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="relative mt-auto w-full pt-16 md:pt-24">
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-1/2 h-[45%] min-h-[200px] w-[140%] max-w-none -translate-x-1/2 bg-[linear-gradient(180deg,rgba(12,12,14,0.2)_0%,#050506_40%)]"
            />
            <div
              aria-hidden
              className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent)] md:h-40"
            />

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-[2] mx-auto w-full max-w-5xl [perspective:900px]"
            >
              <div className="relative mx-auto h-4 w-[108%] max-w-[720px] -translate-x-[4%] rounded-sm bg-[linear-gradient(90deg,#0a0a0c,#1a1a1f,#0a0a0c)] shadow-[0_-2px_0_rgba(255,255,255,0.04),0_8px_40px_rgba(0,0,0,0.8)]" />

              <div className="relative -mt-1 flex flex-col items-center justify-center gap-10 px-2 md:flex-row md:items-end md:gap-8 lg:gap-12">
                <DigitalPhotoFrame />

                <div
                  className="w-full max-w-[420px] shrink-0 origin-bottom [transform-style:preserve-3d] md:w-[min(420px,42vw)]"
                  style={{ transform: "rotateX(6deg)" }}
                >
                  <button
                    type="button"
                    onClick={() => setCvOpen(true)}
                    className="group relative w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0907]"
                    aria-label="Open full curriculum vitae"
                  >
                    <span className="pointer-events-none absolute -inset-3 rounded-lg bg-amber-400/0 blur-2xl transition-all group-hover:bg-amber-400/10" />
                    <div className="overflow-hidden rounded-t-lg border border-zinc-700/80 bg-zinc-950 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
                      <div className="border-b border-zinc-800 bg-black/80 px-3 py-1.5">
                        <div className="mx-auto flex max-w-[200px] gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-red-500/80" />
                          <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                          <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
                        </div>
                      </div>
                      <div className="relative min-h-[200px] bg-[#030708] px-3 py-4 sm:px-5 sm:py-6 md:min-h-[220px]">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(34,211,238,0.12),transparent_65%)]" />
                        <div className="relative flex min-h-[168px] flex-col items-center justify-center gap-1.5 px-1 text-center font-mono text-[0.5rem] leading-snug text-cyan-300/95 shadow-[inset_0_0_60px_rgba(34,211,238,0.08)] sm:gap-2 sm:text-[0.58rem] md:text-[0.62rem] md:leading-relaxed">
                          {LAPTOP_LINES.map((line) => (
                            <span key={line} className="block max-w-full break-words tracking-[0.06em]">
                              {line}
                            </span>
                          ))}
                        </div>
                        <p className="relative mt-3 text-center font-mono text-[0.5rem] text-cyan-600/60 sm:text-[0.55rem]">
                          Click to open CV
                        </p>
                      </div>
                    </div>
                    <div className="h-3 rounded-b-lg border border-t-0 border-zinc-800 bg-[linear-gradient(180deg,#141418,#0a0a0c)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {cvOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-panel-title"
            className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
              aria-label="Close CV"
              onClick={closeCv}
            />
            <motion.div
              className="relative z-[1] m-0 flex max-h-[min(92vh,880px)] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-white/[0.08] bg-[#0e0e10] shadow-[0_-20px_80px_rgba(0,0,0,0.7)] sm:m-4 sm:rounded-2xl"
              initial={{ y: "100%", opacity: 0.6 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "40%", opacity: 0 }}
              transition={springModal}
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4 md:px-6">
                <h2 id="cv-panel-title" className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-zinc-500">
                  Curriculum vitae
                </h2>
                <button
                  type="button"
                  onClick={closeCv}
                  className="rounded-md px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:bg-white/5 hover:text-zinc-300"
                >
                  Close
                </button>
              </div>
              <div className="overflow-y-auto px-5 py-6 md:px-8 md:py-8">
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-zinc-300 [font-variant-numeric:tabular-nums]">
                  {INNER_SANCTUM_CV}
                </pre>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}