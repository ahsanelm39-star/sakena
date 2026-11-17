"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Phone, MessageCircle } from "lucide-react";
import { clinicConfig } from "@/config/clinic";

export default function MobileStickyCTA() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const checkMenu = () => {
      setIsMenuOpen(document.documentElement.classList.contains("mobile-menu-active"));
    };
    checkMenu();
    const observer = new MutationObserver(checkMenu);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Hide on booking page or when mobile drawer menu is open
  if (pathname === "/booking" || isMenuOpen) return null;

  return (
    <div
      aria-label="إجراءات التواصل السريع"
      className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-sage-200/80 px-4 py-3 md:hidden shadow-elevated"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Primary Booking Button */}
        <Link
          href="/booking"
          className="flex-1 flex items-center justify-center gap-2 bg-forest-500 text-ivory-100 text-sm font-medium py-3 px-4 rounded-xl shadow-sm active:scale-95 transition-all text-center"
        >
          <Calendar size={17} />
          <span>احجز موعدًا</span>
        </Link>

        {/* Quick WhatsApp Action */}
        <a
          href={clinicConfig.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-xl bg-sage-100 text-forest-700 hover:bg-forest-600 hover:text-white transition-colors flex-shrink-0"
          aria-label="محادثة واتساب"
        >
          <MessageCircle size={20} />
        </a>

        {/* Quick Phone Call Action */}
        <a
          href={clinicConfig.contact.phoneLink}
          className="w-12 h-12 flex items-center justify-center rounded-xl bg-sage-100 text-forest-700 hover:bg-forest-600 hover:text-white transition-colors flex-shrink-0"
          aria-label="اتصال هاتفي"
        >
          <Phone size={19} />
        </a>
      </div>
    </div>
  );
}
