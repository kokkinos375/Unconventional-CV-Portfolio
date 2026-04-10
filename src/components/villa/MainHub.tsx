"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

import { SITE_OWNER_NAME, SITE_OWNER_NAME_HERO } from "@/lib/site";

const [HERO_FIRST, HERO_SECOND] = SITE_OWNER_NAME_HERO.split(" ");

const rooms = [
  {
    href: "/archive",
    title: "System Specifications",
    subtitle: "Education · Tech · Certifications",
    planRef: "PLN — A-01",
  },
  {
    href: "/lounge",
    title: "Lounge",
    subtitle: "Inner sanctum · About me",
    planRef: "PLN — B-02",
  },
  {
    href: "/trophy-room",
    title: "Trophy Room",
    subtitle: "Milestones & work",
    planRef: "PLN — C-03",
  },
  {
    href: "/contact",
    title: "Contact",
    subtitle: "Tools & comms",
    planRef: "PLN — D-04",
  },
] as const;

// ==========================================
// EASTER EGG 1: THE MATRIX RAIN CANVAS
// ==========================================
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) drops[x] = 1;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-50" />;
}

// ==========================================
// EASTER EGG 2: HIDDEN TERMINAL
// ==========================================
function HiddenTerminal({ 
  isOpen, 
  onClose, 
  matrixMode, 
  toggleMatrix 
}: { 
  isOpen: boolean; 
  onClose: () => void;
  matrixMode: boolean;
  toggleMatrix: (state: boolean) => void;
}) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ type: "cmd" | "res"; text: string }[]>([
    { type: "res", text: "NKUA OS [Version 1.0.0]" },
    { type: "res", text: "(c) 2026 Michail Kokkinos. All rights reserved." },
    { type: "res", text: "Type 'help' to see available commands." },
  ]);
  const endOfTerminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  useEffect(() => {
    endOfTerminalRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: "cmd" as const, text: input }];

    switch (cmd) {
      case "help":
        newHistory.push({ type: "res", text: "> AVAILABLE COMMANDS:" });
        newHistory.push({ type: "res", text: "  help            - Show this message" });
        newHistory.push({ type: "res", text: "  skills          - Display technical stack" });
        newHistory.push({ type: "res", text: "  sudo hire michail - Execute recruitment protocol" });
        newHistory.push({ type: "res", text: "  execute matrix  - [REDACTED]" });
        newHistory.push({ type: "res", text: "  exit matrix     - Restore system UI" });
        newHistory.push({ type: "res", text: "  clear           - Clear terminal history" });
        newHistory.push({ type: "res", text: "  exit            - Close terminal connection" });
        break;
      case "skills":
        newHistory.push({ type: "res", text: "> ACTIVE MODULES: C++, C, Python, Java, SQL, HTML, CSS" });
        newHistory.push({ type: "res", text: "> RATING: Highly proficient. Ready for deployment." });
        break;
      case "sudo hire michail":
        newHistory.push({ type: "res", text: "> [SECURITY BREACH]... just kidding." });
        newHistory.push({ type: "res", text: "> ACCESS GRANTED." });
        newHistory.push({ type: "res", text: "> Initiating recruitment protocol..." });
        newHistory.push({ type: "res", text: "> Please direct all offers to: michael.kokkinos375@gmail.com" });
        break;
      case "execute matrix":
        if (matrixMode) {
          newHistory.push({ type: "res", text: "> Matrix protocol is already running." });
        } else {
          toggleMatrix(true);
          newHistory.push({ type: "res", text: "> Waking up... Follow the white rabbit." });
          newHistory.push({ type: "res", text: "> SYSTEM OVERRIDDEN." });
        }
        break;
      case "exit matrix":
        if (!matrixMode) {
          newHistory.push({ type: "res", text: "> System is already in normal operation mode." });
        } else {
          toggleMatrix(false);
          newHistory.push({ type: "res", text: "> Matrix protocol terminated. UI Restored." });
        }
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "exit":
        onClose();
        setInput("");
        return;
      default:
        newHistory.push({ type: "res", text: `> Command not found: ${cmd}. Type 'help' for options.` });
    }

    setHistory(newHistory);
    setInput("");
  };

  const themeColor = matrixMode ? "text-[#00FF41]" : "text-cyan-400";
  const dimColor = matrixMode ? "text-[#00FF41]/70" : "text-cyan-500/80";
  const highlightColor = matrixMode ? "text-white" : "text-emerald-400";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed top-0 left-0 right-0 h-[45vh] z-[100] bg-[#050505]/95 backdrop-blur-md border-b-2 ${matrixMode ? 'border-[#00FF41]/50' : 'border-cyan-500/50'} shadow-lg font-mono text-sm sm:text-base ${themeColor} overflow-hidden flex flex-col transition-colors duration-500`}
        >
          {/* Terminal Header */}
          <div className={`bg-black/30 border-b ${matrixMode ? 'border-[#00FF41]/30' : 'border-cyan-500/30'} px-4 py-2 flex justify-between items-center text-xs ${dimColor}`}>
            <span>TERMINAL_OVERRIDE // {matrixMode ? 'MATRIX_ACTIVE' : 'NKUA_SYSTEM'}</span>
            <button onClick={onClose} className="hover:text-white transition-colors">
              [X] CLOSE
            </button>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2">
            {history.map((line, i) => (
              <div key={i} className={line.type === "cmd" ? themeColor : dimColor}>
                {line.type === "cmd" ? <span className={`${highlightColor} mr-2`}>guest@portfolio:~$</span> : null}
                {line.text}
              </div>
            ))}
            
            {/* Input Line */}
            <form onSubmit={handleCommand} className="flex items-center pt-2">
              <span className={`${highlightColor} mr-2`}>guest@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={`flex-1 bg-transparent outline-none border-none ${themeColor}`}
                autoComplete="off"
                spellCheck="false"
              />
            </form>
            <div ref={endOfTerminalRef} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
// ==========================================

function ParallaxHeroName() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const nx = (e.clientX - cx) / cx;
      const ny = (e.clientY - cy) / cy;
      setOffset({ x: nx * 56, y: ny * 36 });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 flex select-none items-center justify-center overflow-hidden"
    >
      <div
        className="text-center font-hero leading-[0.78] text-[clamp(3.25rem,15.5vw,12.5rem)] font-normal uppercase tracking-[0.04em] text-stone-200/15"
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        }}
      >
        <span className="block drop-shadow-[0_0_2px_rgba(0,0,0,0.85)]">{HERO_FIRST}</span>
        <span className="mt-1 block text-stone-300/12 drop-shadow-[0_0_2px_rgba(0,0,0,0.85)]">
          {HERO_SECOND}
        </span>
      </div>
    </div>
  );
}

function BlueprintRoomCard({
  href,
  title,
  subtitle,
  refLabel,
  index,
  reduceMotion,
}: {
  href: string;
  title: string;
  subtitle: string;
  refLabel: string;
  index: number;
  reduceMotion: boolean | null;
}) {
  const initial = reduceMotion
    ? { opacity: 0, y: 12 }
    : { opacity: 0, z: -520, rotateX: 16, y: 48 };
  const animate = reduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 1, z: 0, rotateX: 0, y: 0 };

  return (
    <motion.article
      className="[transform-style:preserve-3d]"
      initial={initial}
      animate={animate}
      transition={
        reduceMotion
          ? {
              delay: 0.06 + index * 0.08,
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }
          : {
              delay: 0.06 + index * 0.1,
              type: "spring",
              stiffness: 118,
              damping: 24,
              mass: 0.82,
            }
      }
    >
      <Link
        href={href}
        className="group relative flex min-h-[132px] flex-col justify-between overflow-hidden border border-dashed border-cyan-400/30 bg-[linear-gradient(155deg,rgba(18,22,26,0.5)_0%,rgba(6,8,12,0.92)_55%,rgba(4,6,10,0.96)_100%)] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition-[border-color,box-shadow] before:pointer-events-none before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,rgba(0,229,255,0.04)_0,rgba(0,229,255,0.04)_1px,transparent_1px,transparent_11px),repeating-linear-gradient(90deg,rgba(0,229,255,0.04)_0,rgba(0,229,255,0.04)_1px,transparent_1px,transparent_11px)] before:opacity-70 hover:border-cyan-300/45 hover:shadow-[0_0_32px_rgba(34,211,238,0.12),inset_0_0_0_1px_rgba(255,255,255,0.06)] md:min-h-[148px]"
      >
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent_55%)] opacity-80" />

        <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-cyan-400/45" />
        <span className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r border-t border-cyan-400/45" />
        <span className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b border-l border-cyan-400/45" />
        <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-cyan-400/45" />

        <p className="relative font-mono text-[0.58rem] uppercase tracking-[0.2em] opacity-70">
          {refLabel}
        </p>
        <div className="relative mt-1">
          <h3 className="font-display text-xl font-light tracking-wide md:text-2xl">
            {title}
          </h3>
          <p className="mt-1 text-sm opacity-60">{subtitle}</p>
        </div>
        <span className="relative mt-4 text-[0.62rem] font-medium uppercase tracking-[0.28em] opacity-70 transition-opacity group-hover:opacity-100">
          Open →
        </span>
      </Link>
    </motion.article>
  );
}

export function MainHub() {
  const reduceMotion = useReducedMotion();
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [matrixMode, setMatrixMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Backquote") {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
      if (e.key === "Escape") setIsTerminalOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.div
      // Το "μαγικό" class: Αν είναι matrixMode, ΚΑΘΕ κείμενο, περίγραμμα και SVG γίνεται Πράσινο!
      className={`fixed inset-0 z-0 overflow-hidden bg-[#0a0908] transition-colors duration-1000 ${
        matrixMode ? '[&_*]:!text-[#00FF41] [&_*]:!border-[#00FF41]/40 [&_*]:shadow-none' : ''
      }`}
      initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
    >
      <HiddenTerminal 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
        matrixMode={matrixMode}
        toggleMatrix={setMatrixMode}
      />

      {/* Dynamic Backgrounds */}
      {matrixMode ? (
        <MatrixRain />
      ) : (
        <>
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_110%,rgba(28,26,24,0.85),transparent_58%),radial-gradient(ellipse_60%_45%_at_15%_25%,rgba(55,50,46,0.35),transparent_55%),radial-gradient(ellipse_50%_40%_at_85%_20%,rgba(42,38,36,0.3),transparent_50%)]" />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,transparent_28%,rgba(0,0,0,0.55)_100%)]" />
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-soft-light animate-glitch-flicker bg-[repeating-linear-gradient(180deg,transparent,transparent_3px,rgba(0,255,255,0.12)_3px,rgba(0,255,255,0.12)_6px)]" />
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]" />
        </>
      )}

      {!matrixMode && <ParallaxHeroName />}

      {/* Scrollable Container */}
      <div className="relative z-[3] h-full w-full overflow-y-auto overflow-x-hidden">
        <div className="flex min-h-full flex-col">
          <header className="border-b border-white/[0.06] px-8 py-10 md:px-14">
            <p 
              className={`font-mono text-[0.6rem] uppercase tracking-[0.35em] ${matrixMode ? '' : 'text-cyan-500/45'} flex items-center gap-2 cursor-pointer`}
              onClick={() => setIsTerminalOpen((prev) => !prev)}
            >
              System · Interior 
              <span className={`${matrixMode ? '' : 'text-cyan-700'} ml-2 animate-pulse`}>
                <span className="hidden sm:inline">[ Press ` to open terminal ]</span>
                <span className="sm:hidden">[ Tap here to open terminal ]</span>
              </span>
            </p>
            <p className={`mt-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] ${matrixMode ? '' : 'text-zinc-500'}`}>
              {SITE_OWNER_NAME}
            </p>
            <h2 className={`mt-2 font-display text-2xl font-light tracking-[0.02em] ${matrixMode ? '' : 'text-stone-100'} md:text-3xl`}>
              An Unconventional CV
            </h2>
            <p className={`mt-2 max-w-md text-sm ${matrixMode ? '' : 'text-zinc-500'}`}>
              A high-performance portfolio experience, rendered as an interactive space.
            </p>
          </header>

          <main className="flex flex-1 flex-col justify-center px-6 py-10 md:px-14">
            <div className="mx-auto w-full max-w-5xl [perspective:1600px]">
              <div className="mx-auto grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7 [transform-style:preserve-3d]">
                {rooms.map((room, i) => (
                  <BlueprintRoomCard
                    key={room.href}
                    href={room.href}
                    title={room.title}
                    subtitle={room.subtitle}
                    refLabel={room.planRef}
                    index={i}
                    reduceMotion={reduceMotion}
                  />
                ))}
              </div>
            </div>
          </main>

          <footer className={`border-t border-white/[0.06] px-8 py-6 text-center font-mono text-[0.58rem] uppercase tracking-[0.28em] ${matrixMode ? '' : 'text-zinc-600'} md:px-14`}>
            {SITE_OWNER_NAME} · An Unconventional CV · Portfolio
          </footer>
        </div>
      </div>
    </motion.div>
  );
}