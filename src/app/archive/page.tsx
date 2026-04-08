"use client";

import { motion } from "framer-motion";
import { RoomShell } from "@/components/villa/RoomShell";

const TECH_STACK = ["C++", "C", "Python", "Java", "SQL", "HTML", "CSS"];

export default function SystemSpecificationsPage() {
  return (
    <RoomShell 
      title="System Specifications" 
      description="Hardware architecture, active software modules, and communication protocols."
    >
      <div className="mt-8 sm:mt-12 space-y-8 sm:space-y-10 font-mono pb-10">
        
        {/* 1. Main Processor (NKUA) */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="relative border-l-2 border-cyan-500/50 pl-4 sm:pl-6"
        >
          <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <h2 className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.35em] text-cyan-500/80 mb-2">
            [ Main Processor ]
          </h2>
          <div className="bg-[#0f0e0d] border border-white/5 p-4 sm:p-5 rounded-sm shadow-inner">
            <h3 className="text-lg sm:text-xl text-stone-100 tracking-wide leading-snug">National and Kapodistrian University of Athens (NKUA)</h3>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-400">BSc Computer Science and Telecommunications</p>
            <div className="mt-4 flex flex-col items-start sm:flex-row sm:items-center gap-2 sm:gap-3 text-[0.65rem] sm:text-xs">
              <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-sm">
                STATUS: ACTIVE
              </span>
              <span className="text-zinc-500">// Undergraduate Studies</span>
            </div>
          </div>
        </motion.section>

        {/* ΝΕΟ: 2. Base Logic Core (High School & Panhellenic) */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="relative border-l-2 border-emerald-500/50 pl-4 sm:pl-6"
        >
          <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
          <h2 className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.35em] text-emerald-500/80 mb-2">
            [ Base Logic Core ]
          </h2>
          <div className="bg-[#0f0e0d] border border-white/5 p-4 sm:p-5 rounded-sm shadow-inner">
            <h3 className="text-base sm:text-lg text-stone-100 tracking-wide leading-snug">1st General Lyceum of Elliniko (1ο ΓΕΛ Ελληνικού)</h3>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-400">High School Diploma (Απολυτήριο Λυκείου) & Panhellenic Exams</p>
            <div className="mt-4 flex flex-col gap-3 text-[0.65rem] sm:text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <span className="inline-block w-fit px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-sm">
                  GPA: 18.7 / 20
                </span>
                <span className="text-zinc-400">EXCELLENT (Άριστα) // Class of 2023</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <span className="inline-block w-fit px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-sm">
                  SCORE: 18,235
                </span>
                <span className="text-zinc-500">Panhellenic Admissions Points (Μόρια Εξετάσεων)</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3. International Exchange (Erasmus+) */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative border-l-2 border-indigo-500/50 pl-4 sm:pl-6"
        >
          <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
          <h2 className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.35em] text-indigo-500/80 mb-2">
            [ International Exchange ]
          </h2>
          <div className="bg-[#0f0e0d] border border-white/5 p-4 sm:p-5 rounded-sm shadow-inner">
            <h3 className="text-base sm:text-lg text-stone-100 tracking-wide leading-snug">Erasmus+ Program</h3>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-400">Collaboration with Metis Montessori Lyceum Amsterdam</p>
            <p className="mt-1 text-xs text-indigo-300/80 italic">Theme: "Refugees - From the beginning to the end of the journey"</p>
            <div className="mt-4 flex flex-col items-start sm:flex-row sm:items-center gap-2 sm:gap-3 text-[0.65rem] sm:text-xs">
              <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded-sm">
                2021 — 2022
              </span>
              <span className="text-zinc-500">// Cross-Cultural Research & Analysis</span>
            </div>
          </div>
        </motion.section>

        {/* 4. Active Modules (Programming Languages) */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
          className="relative border-l-2 border-amber-500/50 pl-4 sm:pl-6"
        >
          <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
          <h2 className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.35em] text-amber-500/80 mb-2">
            [ Active Tech Modules ]
          </h2>
          <div className="bg-[#0f0e0d] border border-white/5 p-4 sm:p-5 rounded-sm shadow-inner">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {TECH_STACK.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 bg-amber-500/5 border border-amber-500/30 text-amber-100/90 text-[0.7rem] sm:text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(251,191,36,0.05)] transition-colors hover:bg-amber-500/20 hover:border-amber-400 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 5. Communication Protocol (C2 English) */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="relative border-l-2 border-purple-500/50 pl-4 sm:pl-6"
        >
          <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          <h2 className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.35em] text-purple-500/80 mb-2">
            [ Communication Protocol ]
          </h2>
          <div className="bg-[#0f0e0d] border border-white/5 p-4 sm:p-5 rounded-sm shadow-inner">
            <h3 className="text-base sm:text-lg text-stone-100 tracking-wide">C2 English Proficiency</h3>
            <p className="mt-1 text-xs sm:text-sm text-zinc-400">ECPE / University of Michigan</p>
            <div className="mt-4 flex flex-col items-start sm:flex-row sm:items-center gap-2 sm:gap-3 text-[0.65rem] sm:text-xs">
              <span className="px-2 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/30 rounded-sm">
                VERIFIED
              </span>
              <span className="text-zinc-500">// Global Operations Ready</span>
            </div>
          </div>
        </motion.section>

        {/* 6. Emergency Override (Lifeguard) */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="relative border-l-2 border-rose-500/50 pl-4 sm:pl-6"
        >
          <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
          <h2 className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.35em] text-rose-500/80 mb-2">
            [ Emergency Override Protocol ]
          </h2>
          <div className="bg-[#0f0e0d] border border-white/5 p-4 sm:p-5 rounded-sm shadow-inner">
            <h3 className="text-base sm:text-lg text-stone-100 tracking-wide">Professional Lifeguard Certification</h3>
            <p className="mt-1 text-xs sm:text-sm text-zinc-400">Certified by PASHNA</p>
            <div className="mt-4 flex flex-col items-start sm:flex-row sm:items-center gap-2 sm:gap-3 text-[0.65rem] sm:text-xs">
              <span className="px-2 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/30 rounded-sm">
                LICENSED
              </span>
              <span className="text-zinc-500">// Rescue & First Aid Ready</span>
            </div>
          </div>
        </motion.section>

      </div>
    </RoomShell>
  );
}