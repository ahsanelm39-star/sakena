"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BrandLoader from "@/components/common/BrandLoader";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentPathRef = useRef(pathname);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Intercept internal navigation link clicks to trigger calm loading screen
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("//") &&
        !href.startsWith("/#") &&
        !target.getAttribute("target") &&
        !target.getAttribute("download")
      ) {
        const cleanHref = href.split("?")[0].split("#")[0];
        const cleanCurrent = (pathname || "").split("?")[0].split("#")[0];
        if (cleanHref !== cleanCurrent) {
          setIsTransitioning(true);
        }
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, [pathname]);

  // When pathname changes, keep the loading screen for ~850ms then smoothly exit
  useEffect(() => {
    if (currentPathRef.current !== pathname) {
      currentPathRef.current = pathname;
      setIsTransitioning(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 850);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pathname]);

  // Guarantee that SSR output is immediately visible and not hidden by opacity: 0
  if (!mounted) {
    return <div className="w-full opacity-100">{children}</div>;
  }

  return (
    <>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="page-loader-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ivory-100/95 backdrop-blur-md"
          >
            <BrandLoader message="جاري تهيئة المساحة الهادئة..." size="lg" />
          </motion.div>
        )}
      </AnimatePresence>

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
    </>
  );
}
