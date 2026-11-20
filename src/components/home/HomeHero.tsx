"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowLeft, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { SakinaEmblem } from "@/components/brand/Logo";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:py-24 bg-gradient-to-b from-ivory-100 via-ivory-50 to-ivory-100">
      {/* Decorative organic background elements */}
      <div className="absolute top-12 left-10 w-96 h-96 rounded-full bg-sage-200/20 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-terracotta-200/15 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column */}
          <ScrollReveal animation="fade-up" className="lg:col-span-7 space-y-6 text-right">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-sage-200/80 shadow-soft">
              <span className="w-2 h-2 rounded-full bg-forest-500 animate-pulse" />
              <span className="text-xs font-semibold text-forest-800 font-ibm">
                عيادات سكينة للصحة النفسية والاستشارات
              </span>
              <span className="text-sage-400">|</span>
              <span className="text-xs text-charcoal-500 font-ibm">
                رعاية تبدأ بالاستماع
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-forest-900 leading-[1.25] tracking-tight">
              مساحة آمنة تبدأ فيها{" "}
              <span className="relative inline-block text-forest-700">
                رحلة فهمك
                <svg
                  className="absolute -bottom-2 inset-x-0 w-full text-terracotta-300"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9C60 3, 140 3, 197 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              لنفسك.
            </h1>

            {/* Subtitle / Supporting paragraph */}
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl font-ibm">
              في سكينة، نؤمن أن الرعاية النفسية تبدأ بالاستماع والفهم. نوفر بيئة
              مهنية تحترم خصوصيتك، وتساعدك على استكشاف ما تمر به والوصول إلى
              الدعم المناسب بالتعاون مع مختصين مؤهلين.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2.5 bg-forest-500 hover:bg-forest-600 active:scale-[0.98] text-ivory-100 text-base font-semibold px-7 py-4 rounded-2xl shadow-card transition-all"
              >
                <Calendar size={18} />
                <span>احجز موعدًا الآن</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-ivory-200/60 active:scale-[0.98] text-forest-800 text-base font-medium px-6 py-4 rounded-2xl border border-sage-200/80 shadow-soft transition-all"
              >
                <span>اكتشف خدماتنا</span>
                <ArrowLeft size={16} className="text-forest-600" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-sage-200/60 grid grid-cols-3 max-sm:grid-cols-2 gap-4 max-w-lg">
              <div className="flex items-center gap-2.5 max-sm:justify-center">
                <div className="w-8 h-8 rounded-xl bg-sage-100 flex items-center justify-center text-forest-700 flex-shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div className="text-right">
                  <span className="block text-xs font-bold text-forest-900">خصوصية تامة</span>
                  <span className="text-[11px] text-charcoal-500">سرية مهنية وأخلاقية</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 max-sm:justify-center">
                <div className="w-8 h-8 rounded-xl bg-terracotta-100 flex items-center justify-center text-terracotta-600 flex-shrink-0">
                  <HeartHandshake size={18} />
                </div>
                <div className="text-right">
                  <span className="block text-xs font-bold text-forest-900">استماع واعٍ</span>
                  <span className="text-[11px] text-charcoal-500">خالٍ من الأحكام</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 max-sm:hidden">
                <div className="w-8 h-8 rounded-xl bg-lavender-200/60 flex items-center justify-center text-forest-700 flex-shrink-0">
                  <Sparkles size={18} />
                </div>
                <div className="text-right">
                  <span className="block text-xs font-bold text-forest-900">خيارات مرنة</span>
                  <span className="text-[11px] text-charcoal-500">حضوري أو عن بُعد</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Visual Composition Column */}
          <ScrollReveal animation="scale-up" delay={0.15} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer architectural arch container */}
              <div className="relative arch-top overflow-hidden bg-forest-800 p-2 shadow-card border-4 border-white">
                <div className="relative h-[420px] sm:h-[510px] lg:h-[530px] w-full arch-top overflow-hidden bg-sand-100">
                  <Image
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200"
                    alt="مساحة استشارة دافئة ومريحة في عيادات سكينة"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-center sm:object-[center_22%] lg:object-[center_24%]"
                  />
                  {/* Subtle tint overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating calm quote badge */}
                <div className="absolute bottom-6 inset-x-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-elevated border border-sage-200/60 text-right">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 flex-shrink-0">
                      <SakinaEmblem width={36} height={36} className="w-full h-full" theme="dark" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-forest-900 font-ibm">
                        «الاستماع الصادق ليس صمتاً، بل هو احتواء كامل للإنسان.»
                      </p>
                      <span className="text-[11px] text-charcoal-500 block mt-0.5">
                        فلسفة الرعاية في عيادات سكينة
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative side accent badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-terracotta-400 text-ivory-100 py-2.5 px-4 rounded-2xl shadow-md text-xs font-medium items-center gap-2 rotate-2">
                <span>جلسات مرخصة ومبنية على الأدلة</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
