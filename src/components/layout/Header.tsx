"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { clinicConfig } from "@/config/clinic";
import { Menu, X, Phone, Calendar, ArrowLeft } from "lucide-react";

const NAV_LINKS = [
  { name: "الرئيسية", href: "/" },
  { name: "عن سكينة", href: "/about" },
  { name: "الأخصائيون", href: "/specialists" },
  { name: "خدماتنا", href: "/services" },
  { name: "المكتبة المعرفية", href: "/knowledge" },
  { name: "الأسئلة الشائعة", href: "/faq" },
  { name: "تواصل معنا", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname || "/";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll and mark root class when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("mobile-menu-active");
    } else {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("mobile-menu-active");
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("mobile-menu-active");
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-ivory-100/90 backdrop-blur-md shadow-soft border-b border-sage-200/40 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo variant="full" />

          {/* Desktop Navigation */}
          <nav
            aria-label="القائمة الرئيسية"
            className="hidden lg:flex items-center gap-1.5 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full border border-sage-200/50 shadow-soft"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-forest-700 bg-sage-100 font-semibold"
                      : "text-charcoal-700 hover:text-forest-700 hover:bg-ivory-200/60"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 right-1/2 translate-x-1/2 w-1.5 h-1.5 bg-forest-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Left Actions & Mobile Controls (Grouped together on the left edge) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Contact Link (Tablet & Desktop) */}
            <a
              href={clinicConfig.contact.phoneLink}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-charcoal-700 hover:text-forest-700 py-2 px-3 rounded-full hover:bg-white/80 transition-colors"
              title="اتصال سريع بالعيادة"
            >
              <Phone size={14} className="text-forest-600" />
              <span dir="ltr">{clinicConfig.contact.phoneDisplay}</span>
            </a>

            {/* Primary Booking CTA (Tablet & Desktop) */}
            <Link
              href="/booking"
              className="hidden sm:inline-flex items-center gap-2 bg-forest-500 text-ivory-100 hover:bg-forest-600 active:scale-[0.98] text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              <Calendar size={16} />
              <span>احجز موعدًا</span>
            </Link>

            {/* Mini Booking Link (Phone Mobile Only) */}
            <Link
              href="/booking"
              className="inline-flex sm:hidden items-center gap-1.5 bg-forest-500 text-ivory-100 text-xs font-medium px-3.5 py-2 rounded-full shadow-sm"
            >
              <Calendar size={14} />
              <span>حجز</span>
            </Link>

            {/* Mobile Hamburger Button (Tablet & Mobile) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-forest-700 hover:bg-sage-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500"
              aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة الرئيسية"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu - Rendered via Portal directly to body to avoid sticky stacking context issues */}
      {mobileMenuOpen && mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] bg-[#FAF8F5] lg:hidden overflow-y-auto animate-fade-in"
            style={{
              height: "100dvh",
              backgroundColor: "#FAF8F5",
              overscrollBehavior: "contain",
            }}
          >
            <div className="min-h-full flex flex-col justify-between p-6 pb-14 max-w-lg mx-auto">
              <div>
                {/* Top Bar inside Drawer */}
                <div className="flex items-center justify-between pb-4 border-b border-sage-200/80 mb-6">
                  <Logo variant="full" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-2xl bg-white text-forest-800 border border-sage-200/80 hover:bg-sage-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 shadow-sm"
                    aria-label="إغلاق القائمة"
                  >
                    <X size={22} />
                  </button>
                </div>

                <div className="space-y-1.5">
                  <p className="text-[11px] uppercase tracking-widest text-charcoal-500 font-semibold mb-2 px-3">
                    أقسام الموقع
                  </p>
                  {NAV_LINKS.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? currentPath === "/"
                        : currentPath.startsWith(link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium transition-colors ${
                          isActive
                            ? "bg-sage-100 text-forest-800 font-semibold"
                            : "text-charcoal-800 hover:bg-white active:bg-sage-50"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span>{link.name}</span>
                        <ArrowLeft
                          size={18}
                          className={`text-forest-600 transition-transform ${
                            isActive ? "opacity-100" : "opacity-40"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-sage-200/80 space-y-4">
                <Link
                  href="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2.5 bg-forest-500 text-ivory-100 text-base font-medium py-3.5 px-6 rounded-2xl shadow-sm hover:bg-forest-600 active:scale-[0.98] transition-all"
                >
                  <Calendar size={18} />
                  <span>طلب حجز موعد جديد</span>
                </Link>

                <div className="bg-white p-4 rounded-2xl border border-sage-200/60 flex items-center justify-between shadow-soft">
                  <div>
                    <span className="text-xs text-charcoal-500 block font-ibm">للاستفسارات المباشرة</span>
                    <span className="text-sm font-semibold text-forest-800" dir="ltr">
                      {clinicConfig.contact.phoneDisplay}
                    </span>
                  </div>
                  <a
                    href={clinicConfig.contact.phoneLink}
                    className="w-10 h-10 rounded-full bg-sage-100 text-forest-700 flex items-center justify-center hover:bg-forest-500 hover:text-white transition-colors"
                    aria-label="اتصال هاتفي"
                  >
                    <Phone size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
