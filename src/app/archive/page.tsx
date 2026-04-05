"use client";

import { RoomShell } from "@/components/villa/RoomShell";
import { motion } from "framer-motion";



const TECH_STACK = ["C++", "C", "Python", "Java", "SQL", "HTML", "CSS"];

export default function SystemSpecificationsPage() {
  return (
    <RoomShell 
      title="System Specifications" 
      description="Hardware architecture, active software modules, and communication protocols."
    >
      <div className="mt-12 space-y-10 font-mono">
        
        {/* 1. Main Processor (Education) */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="relative border-l-2 border-cyan-500/50 pl-6"
        >
          <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <h2 className="text-[0.65rem] uppercase tracking-[0.35em] text-cyan-500/80 mb-2">
            [ Main Processor ]
          </h2>
          <div className="bg-[#0f0e0d] border border-white/5 p-5 rounded-sm shadow-inner">
            <h3 className="text-xl text-stone-100 tracking-wide">National and Kapodistrian University of Athens (NKUA)</h3>
            <p className="mt-1 text-sm text-zinc-400">BSc Computer Science and Telecommunications</p>
            <div className="mt-4 flex items-center gap-3 text-xs">
              <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-sm">
                STATUS: ACTIVE
              </span>
              <span className="text-zinc-500">Panhellenic Score: 18,235 // GPA: ARISTA (18.7/20)</span>
            </div>
          </div>
        </motion.section>

        {/* 2. Active Modules (Programming Languages) */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative border-l-2 border-amber-500/50 pl-6"
        >
          <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
          <h2 className="text-[0.65rem] uppercase tracking-[0.35em] text-amber-500/80 mb-2">
            [ Active Tech Modules ]
          </h2>
          <div className="bg-[#0f0e0d] border border-white/5 p-5 rounded-sm shadow-inner">
            <div className="flex flex-wrap gap-3">
              {TECH_STACK.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 bg-amber-500/5 border border-amber-500/30 text-amber-100/90 text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(251,191,36,0.05)] transition-colors hover:bg-amber-500/20 hover:border-amber-400 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 3. Communication Protocol (C2 English) */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="relative border-l-2 border-purple-500/50 pl-6"
        >
          <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          <h2 className="text-[0.65rem] uppercase tracking-[0.35em] text-purple-500/80 mb-2">
            [ Communication Protocol ]
          </h2>
          <div className="bg-[#0f0e0d] border border-white/5 p-5 rounded-sm shadow-inner">
            <h3 className="text-lg text-stone-100 tracking-wide">C2 English Proficiency</h3>
            <p className="mt-1 text-sm text-zinc-400">ECPE / University of Michigan</p>
            <div className="mt-4 flex items-center gap-3 text-xs">
              <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-sm">
                VERIFIED
              </span>
              <span className="text-zinc-500">// Global Operations Ready</span>
            </div>
          </div>
        </motion.section>

      </div>
    </RoomShell>
  );
}