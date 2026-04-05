"use client";

import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { EntryScreen } from "./EntryScreen";
import { MainHub } from "./MainHub";

/**
 * Root experience: Start Engine is always shown first on `/`.
 * After ignition, MainHub zooms in. Subpages link to `/hub` to return without replaying entry.
 */
export function VillaExperience() {
  const [entered, setEntered] = useState(false);

  const handleEnter = useCallback(() => {
    setEntered(true);
  }, []);

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-[#0a0a0b]">
      <AnimatePresence mode="sync">
        {!entered && <EntryScreen key="entry" onEnter={handleEnter} />}
      </AnimatePresence>
      {entered && <MainHub />}
    </div>
  );
}
