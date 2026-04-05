"use client";

import { useCallback, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { SITE_OWNER_NAME_HERO } from "@/lib/site";

const [ENTRY_HERO_FIRST, ENTRY_HERO_SECOND] = SITE_OWNER_NAME_HERO.split(" ");

type EntryScreenProps = {
  onEnter: () => void;
};

/** Placeholder “heavy mechanical” start — Web Audio, no external assets. */
function playEngineStartSound() {
  const AC =
    typeof window !== "undefined"
      ? window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      : null;
  if (!AC) return;

  const ctx = new AC();
  const t0 = ctx.currentTime;
  const master = ctx.createGain();
  master.gain.value = 0.32;
  master.connect(ctx.destination);

  const rumble = ctx.createOscillator();
  rumble.type = "sawtooth";
  rumble.frequency.setValueAtTime(38, t0);
  rumble.frequency.exponentialRampToValueAtTime(95, t0 + 0.12);
  rumble.frequency.exponentialRampToValueAtTime(48, t0 + 0.72);

  const rumbleGain = ctx.createGain();
  rumbleGain.gain.setValueAtTime(0.0001, t0);
  rumbleGain.gain.exponentialRampToValueAtTime(0.55, t0 + 0.04);
  rumbleGain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.85);
  rumble.connect(rumbleGain);
  rumbleGain.connect(master);
  rumble.start(t0);
  rumble.stop(t0 + 0.9);

  const grind = ctx.createOscillator();
  grind.type = "square";
  grind.frequency.setValueAtTime(220, t0 + 0.08);
  grind.frequency.linearRampToValueAtTime(140, t0 + 0.35);

  const grindGain = ctx.createGain();
  grindGain.gain.setValueAtTime(0.0001, t0 + 0.08);
  grindGain.gain.exponentialRampToValueAtTime(0.12, t0 + 0.1);
  grindGain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.45);
  grind.connect(grindGain);
  grindGain.connect(master);
  grind.start(t0 + 0.08);
  grind.stop(t0 + 0.5);

  const ping = ctx.createOscillator();
  ping.type = "triangle";
  ping.frequency.setValueAtTime(880, t0 + 0.14);
  ping.frequency.exponentialRampToValueAtTime(120, t0 + 0.22);

  const pingGain = ctx.createGain();
  pingGain.gain.setValueAtTime(0.0001, t0 + 0.14);
  pingGain.gain.exponentialRampToValueAtTime(0.08, t0 + 0.145);
  pingGain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.28);
  ping.connect(pingGain);
  pingGain.connect(master);
  ping.start(t0 + 0.14);
  ping.stop(t0 + 0.3);

  void ctx.resume().catch(() => {});
}

export function EntryScreen({ onEnter }: EntryScreenProps) {
  const [starting, setStarting] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleStart = useCallback(() => {
    if (starting) return;
    setStarting(true);
    playEngineStartSound();
    const delay = reduceMotion ? 280 : 1150;
    window.setTimeout(() => onEnter(), delay);
  }, [onEnter, reduceMotion, starting]);

  return (
    <motion.div
      className={`fixed inset-0 z-10 flex flex-col items-center justify-center bg-[#050506] px-8 ${starting && !reduceMotion ? "animate-engine-shake" : ""}`}
      initial={{ opacity: 1, scale: 1 }}
      exit={{
        opacity: 0,
        scale: 1.08,
        filter: "blur(6px)",
      }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_100%,rgba(34,211,238,0.07),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.85))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay animate-glitch-flicker bg-[repeating-linear-gradient(90deg,transparent,transparent_1px,rgba(255,255,255,0.4)_1px,rgba(255,255,255,0.4)_2px)]"
      />

      <div className="relative z-[1] flex flex-col items-center gap-10 md:gap-12">
        <div className="text-center font-hero leading-[0.78] text-[clamp(2.5rem,11vw,8.5rem)] font-normal uppercase tracking-[0.04em] text-stone-200/22">
          <span className="block drop-shadow-[0_0_2px_rgba(0,0,0,0.85)]">{ENTRY_HERO_FIRST}</span>
          <span className="mt-1 block text-stone-300/18 drop-shadow-[0_0_2px_rgba(0,0,0,0.85)]">
            {ENTRY_HERO_SECOND}
          </span>
        </div>

        <motion.button
        type="button"
        onClick={handleStart}
        disabled={starting}
        aria-busy={starting}
        aria-label={`Start engine — ${SITE_OWNER_NAME_HERO}`}
        className="border border-cyan-400/45 bg-[linear-gradient(180deg,rgba(12,28,36,0.95)_0%,rgba(4,10,14,0.98)_100%)] px-12 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-cyan-100 shadow-[0_0_48px_rgba(34,211,238,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] transition-[box-shadow,transform] hover:border-cyan-300/70 hover:shadow-[0_0_64px_rgba(34,211,238,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] disabled:pointer-events-none disabled:opacity-90"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{
          opacity: 1,
          scale: 1,
          boxShadow: [
            "0 0 40px rgba(34,211,238,0.3), inset 0 1px 0 rgba(255,255,255,0.12)",
            "0 0 56px rgba(34,211,238,0.42), inset 0 1px 0 rgba(255,255,255,0.15)",
            "0 0 40px rgba(34,211,238,0.3), inset 0 1px 0 rgba(255,255,255,0.12)",
          ],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.2 },
          scale: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
          boxShadow: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
        }}
        whileHover={starting ? undefined : { scale: 1.02 }}
        whileTap={starting ? undefined : { scale: 0.98 }}
      >
          Start Engine
        </motion.button>
      </div>

      <p className="pointer-events-none absolute bottom-10 left-0 right-0 z-[1] text-center text-[0.6rem] uppercase tracking-[0.35em] text-zinc-600">
        {starting ? "Ignition…" : "\u00a0"}
      </p>
    </motion.div>
  );
}
