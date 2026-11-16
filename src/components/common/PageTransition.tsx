"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Guarantee that SSR output is immediately visible and not hidden by opacity: 0
  if (!mounted) {
    return <div className="w-full opacity-100">{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname || "page"}
        initial={{ opacity: 0.9, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.9, y: -6 }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
