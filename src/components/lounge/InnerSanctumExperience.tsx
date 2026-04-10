"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { BackToHubButton } from "@/components/villa/BackToHubButton";
import { INNER_SANCTUM_CV } from "@/lib/cvText";
import { SITE_OWNER_NAME, SITE_OWNER_NAME_HERO } from "@/lib/site";

const PROFILE_IMAGE_SRC = "/personal/IMG_5448.jpeg";
const AMANZOE_BG_SRC = "/personal/ancient.greek.webp"; 

const LAPTOP_LINES = [
  SITE_OWNER_NAME_HERO,
  "// OPERATOR STATUS: ONLINE //",
  "[ MISSION ]: FULL-STACK DEVELOPMENT & ALGORITHMS",
  "EXTRACTING_CV_DATA...",
] as const;

const ENDURANCE_METRICS = [
  {
    id: "m1",
    tone: "amber",
    title: "National Rank: #3",
    detail: "4×100m Mixed Relay // 2019",
    category: "[ SPRINT PROTOCOL ]"
  },
  {
    id: "m2",
    tone: "amber",
    title: "National Rank: #3",
    detail: "4×200m Freestyle // 2019",
    category: "[ AQUATIC PROTOCOL ]"
  },
  {
    id: "m3",
    tone: "gold",
    title: "Tournament Rank: #1",
    detail: "50m Butterfly // Tzelateia 2022",
    category: "[ ELITE AQUATIC ]"
  },
];

// ==========================================
// THE LOADING TRANSITION COMPONENT
// ==========================================
function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const bootMessages = [
    "> INITIATING SECURE CONNECTION...",
    "> DECRYPTING BIOMETRIC DATA... [OK]",
    "> LOADING CYBER-HELLENIC ENVIRONMENT...",
    "> PROJECT 'AMANZOE' INITIALIZED.",
    "> ACCESS GRANTED."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootMessages.length) {
        setLines(prev => [...prev, bootMessages[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 400);
      }
    }, 250); 
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col justify-center bg-[#050505] p-8 sm:p-20 font-mono text-sm sm:text-base text-cyan-400"
    >
      <div className="max-w-2xl">
        <div className="mb-4 text-emerald-500 animate-pulse">MK_OS // LOUNGE_ACCESS</div>
        {lines.map((line, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }}
            className={i === bootMessages.length - 1 ? "text-emerald-400 mt-4" : "text-cyan-500/80"}
          >
            {line}
          </motion.div>
        ))}
        <div className="mt-2 w-3 h-4 bg-cyan-400 animate-ping" />
      </div>
    </motion.div>
  );
}

// ==========================================

function OperatorBiometrics() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[200px] shrink-0 md:max-w-[240px]"
    >
      <div className="relative rounded-sm border border-cyan-500/40 bg-[#050505] p-2 shadow-[0_0_30px_rgba(34,211,238,0.15)] group">
        <div className="absolute -left-[1px] -top-[1px] h-4 w-4 border-l-2 border-t-2 border-cyan-400" />
        <div className="absolute -right-[1px] -top-[1px] h-4 w-4 border-r-2 border-t-2 border-cyan-400" />
        <div className="absolute -bottom-[1px] -left-[1px] h-4 w-4 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute -bottom-[1px] -right-[1px] h-4 w-4 border-b-2 border-r-2 border-cyan-400" />

        <div className="relative aspect-[3/4] w-full overflow-hidden border border-cyan-900/50 bg-[#0a0a0c]">
          <Image
            src={PROFILE_IMAGE_SRC}
            alt={SITE_OWNER_NAME}
            fill
            sizes="(max-width:768px) 200px, 240px"
            className="object-cover opacity-80 mix-blend-luminosity transition-all duration-500 group-hover:mix-blend-normal group-hover:opacity-100"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,rgba(34,211,238,0.2)_100%)] mix-blend-overlay" />
          <motion.div 
            animate={{ top: ["-10%", "110%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="pointer-events-none absolute left-0 right-0 h-12 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent border-b border-cyan-400/50"
          />
        </div>
      </div>
      <div className="mt-3 text-center flex flex-col items-center gap-1">
        <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 font-mono text-[0.55rem] uppercase tracking-widest border border-cyan-500/30">
          ID: MK-375
        </span>
        <p className="font-mono text-[0.5rem] uppercase tracking-[0.28em] text-cyan-200/40">
          Biometric Scan Confirmed
        </p>
      </div>
    </motion.div>
  );
}

const springModal = { type: "spring" as const, damping: 28, stiffness: 320 };

export function InnerSanctumExperience() {
  const [isBooting, setIsBooting] = useState(true);
  const [cvOpen, setCvOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const closeCv = useCallback(() => setCvOpen(false), []);

  useEffect(() => {
    if (!cvOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCvOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [cvOpen]);

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-[#050505] text-zinc-100">
      
      <AnimatePresence>
        {isBooting && <BootSequence onComplete={() => setIsBooting(false)} />}
      </AnimatePresence>

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.08),transparent_50%)]"
      />
      
      <div className="pointer-events-none fixed inset-0 z-0 opacity-10 mix-blend-screen grayscale contrast-150" style={{ filter: "hue-rotate(180deg) sepia(100%) hue-rotate(140deg) saturate(300%)" }}>
        <Image 
          src={AMANZOE_BG_SRC}
          alt="Amanzoe Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="fixed left-6 top-6 z-50 md:left-10 md:top-8">
        <BackToHubButton />
      </div>

      {!isBooting && (
        <motion.div
          className="relative z-[1] mx-auto flex min-h-dvh max-w-6xl flex-col px-5 pb-16 pt-20 md:px-10 md:pt-24"
          initial={reduceMotion ? { scale: 1, opacity: 1 } : { scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <header className="mb-8 text-center md:mb-12">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.45em] text-cyan-500/60 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-cyan-500/40"></span>
              Operator Profile
              <span className="w-8 h-px bg-cyan-500/40"></span>
            </p>
            <h1 className="mt-3 font-display text-2xl font-light tracking-wider text-stone-100 md:text-3xl uppercase">
              Michail Kokkinos
            </h1>
          </header>

          <div className="relative flex flex-1 flex-col items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl border-l-4 border-emerald-500 bg-emerald-950/20 p-6 md:p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(16,185,129,0.05)]"
            >
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-emerald-500/80 mb-3">
                // Hellenic_Directive.exe
              </p>
              <p className="font-mono text-lg md:text-xl text-emerald-100 tracking-wide leading-relaxed">
                "If you want something really hard, <br className="hidden sm:block" />
                <span className="text-emerald-400 font-bold">you will make it.</span>"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-12 flex w-full max-w-4xl flex-col sm:flex-row justify-center gap-4 md:gap-6"
            >
              {ENDURANCE_METRICS.map((m, i) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex-1 border p-5 ${m.tone === 'gold' ? 'border-amber-500/40 bg-amber-500/5' : 'border-cyan-500/30 bg-cyan-500/5'} backdrop-blur-md relative overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-16 h-16 opacity-10 ${m.tone === 'gold' ? 'bg-amber-500' : 'bg-cyan-500'} blur-2xl rounded-full`} />
                  <p className={`font-mono text-[0.55rem] tracking-[0.2em] mb-2 ${m.tone === 'gold' ? 'text-amber-400' : 'text-cyan-400'}`}>
                    {m.category}
                  </p>
                  <h3 className="font-display text-lg text-stone-100 tracking-wide mb-1">{m.title}</h3>
                  <p className="text-xs text-zinc-400 font-mono">{m.detail}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="relative mt-20 w-full pt-10">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-[2] mx-auto w-full max-w-5xl [perspective:1000px]"
              >
                <div className="relative flex flex-col items-center justify-center gap-12 px-2 md:flex-row md:items-end md:gap-16">
                  
                  <OperatorBiometrics />

                  <div
                    className="w-full max-w-[460px] shrink-0 origin-bottom [transform-style:preserve-3d] md:w-[min(460px,45vw)]"
                    style={{ transform: "rotateX(8deg)" }}
                  >
                    <button
                      type="button"
                      onClick={() => setCvOpen(true)}
                      className="group relative w-full cursor-pointer text-left focus:outline-none"
                    >
                      <div className="absolute -inset-4 bg-cyan-500/0 blur-2xl transition-all duration-500 group-hover:bg-cyan-500/10" />
                      <div className="relative overflow-hidden rounded-t-xl border border-cyan-900/80 bg-zinc-950 shadow-[0_0_50px_rgba(34,211,238,0.1)] transition-all group-hover:border-cyan-500/50">
                        <div className="border-b border-cyan-900/50 bg-[#050505] px-4 py-2 flex justify-between items-center">
                          <div className="flex gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-red-500/50" />
                            <span className="h-2 w-2 rounded-full bg-amber-500/50" />
                            <span className="h-2 w-2 rounded-full bg-cyan-500/80 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                          </div>
                          <span className="font-mono text-[0.5rem] text-cyan-600 tracking-widest">DATA_LINK_SECURE</span>
                        </div>
                        <div className="relative min-h-[220px] bg-[#020608] px-4 py-6 md:min-h-[240px]">
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(34,211,238,0.08),transparent_70%)] pointer-events-none" />
                          <div className="relative flex flex-col gap-2 font-mono text-[0.6rem] text-cyan-400/90 md:text-[0.65rem] md:leading-relaxed">
                            {LAPTOP_LINES.map((line, idx) => (
                              <span key={idx} className="block break-words">
                                <span className="text-emerald-500 mr-2">&gt;</span>{line}
                              </span>
                            ))}
                          </div>
                          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                            <span className="px-4 py-1.5 border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 font-mono text-[0.55rem] uppercase tracking-widest transition-all group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                              [ EXTRACT FULL CV ]
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="h-4 rounded-b-xl border border-t-0 border-cyan-900/50 bg-[linear-gradient(180deg,#0a0a0c,#050505)] shadow-[inset_0_1px_0_rgba(34,211,238,0.1)]" />
                    </button>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {cvOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-[#050505]/90 backdrop-blur-md"
              onClick={closeCv}
            />
            <motion.div
              className="relative z-[1] m-0 flex max-h-[min(92vh,880px)] w-full max-w-2xl flex-col overflow-hidden rounded-t-xl border border-cyan-500/20 bg-[#0a0a0c] shadow-[0_0_80px_rgba(34,211,238,0.15)] sm:m-4 sm:rounded-xl"
              initial={{ y: "100%", opacity: 0.6 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "40%", opacity: 0 }}
              transition={springModal}
            >
              <div className="flex items-center justify-between border-b border-cyan-500/20 bg-cyan-950/30 px-5 py-4 md:px-6">
                <h2 className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-cyan-500">
                  Curriculum Vitae // MK-375
                </h2>
                <button
                  type="button"
                  onClick={closeCv}
                  className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cyan-600 transition-colors hover:text-cyan-300"
                >
                  [ CLOSE ]
                </button>
              </div>
              <div className="overflow-y-auto px-5 py-6 md:px-8 md:py-8 custom-scrollbar">
                <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-cyan-100/80 [font-variant-numeric:tabular-nums]">
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