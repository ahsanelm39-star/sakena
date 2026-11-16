"use client";

import React, { useState } from "react";
import { Info, X } from "lucide-react";
import { clinicConfig } from "@/config/clinic";

export default function DemoBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !clinicConfig.demoNotice.isDemo) return null;

  return (
    <aside aria-label="تنبيه النسخة التجريبية" className="bg-forest-900 text-ivory-100/90 text-xs py-2 px-4 border-b border-forest-700/60 transition-all duration-300 relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-forest-700 text-sage-300 flex-shrink-0">
            <Info size={13} aria-hidden="true" />
          </span>
          <p className="font-ibm leading-relaxed">
            <strong className="text-sage-200 font-semibold ml-1.5">عرض محفظة أعمال (Portfolio Demo):</strong>
            {clinicConfig.demoNotice.bannerText}
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-ivory-100/60 hover:text-ivory-100 p-1 rounded-md transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-sage-300"
          aria-label="إغلاق التنبيه التجريبي"
        >
          <X size={15} />
        </button>
      </div>
    </aside>
  );
}
