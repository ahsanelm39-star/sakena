"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export type AnimationType =
  | "fade-up"
  | "fade-in"
  | "scale-up"
  | "slide-right"
  | "slide-left"
  | "stagger-container"
  | "stagger-item";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  staggerDelay?: number;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration,
  className = "",
  staggerDelay = 0.1,
}: ScrollRevealProps) {
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // If user prefers reduced motion, render clean static or subtle fade
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Animation variants adapted for Desktop vs Mobile
  // Mobile uses smaller offsets and faster duration to prevent layout jumping
  const desktopDuration = duration || 0.65;
  const mobileDuration = duration ? duration * 0.75 : 0.42;

  const getVariants = () => {
    switch (animation) {
      case "fade-up":
        return {
          hidden: {
            opacity: 0,
            y: isMobile ? 12 : 28,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: isMobile ? mobileDuration : desktopDuration,
              delay,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        };

      case "fade-in":
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: isMobile ? mobileDuration : desktopDuration,
              delay,
              ease: "easeOut",
            },
          },
        };

      case "scale-up":
        return {
          hidden: {
            opacity: 0,
            scale: isMobile ? 0.98 : 0.95,
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: isMobile ? mobileDuration : desktopDuration,
              delay,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        };

      case "slide-right":
        // RTL natural motion: comes softly from right
        return {
          hidden: {
            opacity: 0,
            x: isMobile ? 10 : 25,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: isMobile ? mobileDuration : desktopDuration,
              delay,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        };

      case "slide-left":
        return {
          hidden: {
            opacity: 0,
            x: isMobile ? -10 : -25,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: isMobile ? mobileDuration : desktopDuration,
              delay,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        };

      case "stagger-container":
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: isMobile ? 0.07 : staggerDelay,
              delayChildren: delay,
            },
          },
        };

      case "stagger-item":
        return {
          hidden: {
            opacity: 0,
            y: isMobile ? 10 : 20,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: isMobile ? mobileDuration : desktopDuration,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        };

      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: isMobile ? "-20px 0px" : "-45px 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
