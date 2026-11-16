"use client";

import React from "react";
import { SakinaEmblem } from "@/components/brand/Logo";

interface BrandLoaderProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

export default function BrandLoader({
  message = "جاري تهيئة المساحة الهادئة...",
  size = "md",
}: BrandLoaderProps) {
  const pixelMap = {
    sm: 40,
    md: 64,
    lg: 88,
  };

  const px = pixelMap[size];

  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center p-8 text-center animate-fade-in"
    >
      <div
        className="relative mb-5 flex items-center justify-center"
        style={{ width: `${px}px`, height: `${px}px` }}
      >
        <div className="absolute inset-0 rounded-full bg-sage-200/40 animate-ping opacity-75 scale-90" />
        <div className="relative z-10 transition-transform duration-700 hover:scale-105">
          <SakinaEmblem width={px} height={px} className="w-full h-full" theme="dark" />
        </div>
      </div>

      <p className="font-alexandria text-forest-700 text-sm font-medium tracking-wide animate-pulse">
        {message}
      </p>

      <div className="w-28 h-1 bg-sand-200 rounded-full mt-3 overflow-hidden">
        <div className="h-full bg-forest-500 rounded-full animate-indeterminate" />
      </div>

      <span className="sr-only">جاري تحميل المحتوى</span>
    </div>
  );
}
