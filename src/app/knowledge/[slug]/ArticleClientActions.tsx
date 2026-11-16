"use client";

import React, { useState, useEffect } from "react";
import { Share2, MessageCircle, Copy, Check } from "lucide-react";

export default function ArticleClientActions({ title }: { title: string }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scroll = (totalScroll / windowHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, scroll)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `مقال مميز من عيادات سكينة: "${title}"\n${currentUrl}`
  )}`;

  return (
    <>
      {/* Sticky Top Reading Progress Bar */}
      <div className="fixed top-0 inset-x-0 z-50 h-1 bg-transparent pointer-events-none">
        <div
          className="h-full bg-forest-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Share Controls Bar */}
      <aside aria-label="مشاركة المقال" className="fixed bottom-20 left-4 z-30 hidden md:flex flex-col gap-2 bg-white/90 backdrop-blur-md p-2 rounded-2xl border border-sage-200/80 shadow-elevated">
        <a
          href={whatsappShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl bg-sage-100 text-forest-800 hover:bg-forest-500 hover:text-white flex items-center justify-center transition-colors"
          title="مشاركة عبر واتساب"
        >
          <MessageCircle size={18} />
        </a>

        <button
          type="button"
          onClick={handleCopyLink}
          className="w-10 h-10 rounded-xl bg-sand-100 text-forest-800 hover:bg-forest-500 hover:text-white flex items-center justify-center transition-colors relative"
          title="نسخ رابط المقال"
        >
          {copied ? <Check size={18} className="text-forest-600" /> : <Copy size={17} />}
        </button>
      </aside>
    </>
  );
}
