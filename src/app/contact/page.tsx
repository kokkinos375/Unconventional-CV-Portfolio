"use client";

import { RoomShell } from "@/components/villa/RoomShell";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <RoomShell 
      title="Contact" 
      description="Primary communication channels and base of operations."
    >
      <div className="mt-10 sm:mt-12 space-y-8 font-mono">
        {/* Contact Dashboard Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-cyan-500/20 bg-cyan-500/5 p-6 sm:p-8 rounded-sm shadow-[0_0_30px_rgba(34,211,238,0.05)] w-full overflow-hidden"
        >
          <div className="space-y-6">
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-cyan-500/60 mb-1">Primary Operator</p>
              <p className="text-lg sm:text-xl text-stone-100 uppercase tracking-wider">Michail Kokkinos</p>
            </div>

            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-cyan-500/60 mb-1">Base Operations</p>
              <p className="text-sm sm:text-base text-stone-300">Ελληνικό Αττικής</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-cyan-500/60 mb-1">Direct Line</p>
                <a href="tel:+306947569787" className="text-sm sm:text-base text-stone-100 hover:text-cyan-400 transition-colors">
                  6947 569787
                </a>
              </div>
              <div className="min-w-0 w-full">
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-cyan-500/60 mb-1">Encrypted Comms</p>
                <a 
                  href="mailto:michael.kokkinos375@gmail.com" 
                  className="text-sm sm:text-base text-stone-100 hover:text-cyan-400 transition-colors break-all"
                >
                  michael.kokkinos375@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* System Status Note */}
        <p className="text-[0.6rem] uppercase tracking-[0.4em] text-zinc-600 text-center italic mt-8">
          // Standing by for secure connection...
        </p>
      </div>
    </RoomShell>
  );
}