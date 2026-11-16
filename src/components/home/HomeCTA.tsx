import React from "react";
import Link from "next/link";
import { Calendar, MessageCircle, Phone, ArrowLeft } from "lucide-react";
import { clinicConfig } from "@/config/clinic";
import { SakinaEmblem } from "@/components/brand/Logo";

export default function HomeCTA() {
  return (
    <section className="py-20 lg:py-24 bg-forest-900 text-ivory-100 relative overflow-hidden">
      {/* Decorative organic background aura */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-forest-700/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-terracotta-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex justify-center mb-6">
          <div className="w-16 h-16 rounded-3xl bg-forest-800 border border-forest-700 flex items-center justify-center shadow-soft">
            <SakinaEmblem className="w-10 h-10" theme="light" />
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-alexandria leading-tight mb-5 max-w-3xl mx-auto">
          اتخاذ الخطوة الأولى قد يبدأ بسؤال بسيط.
        </h2>

        <p className="text-base sm:text-lg text-sage-200/90 font-ibm max-w-2xl mx-auto leading-relaxed mb-10">
          إن كنت تفكر في طلب الدعم النفسي، يمكنك التواصل معنا للتعرف على الخدمات
          المتاحة وخطوات حجز الموعد بكل يسر وسرية تامة.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-sage-200 hover:bg-white text-forest-950 text-base font-semibold px-8 py-4 rounded-2xl shadow-card transition-all active:scale-[0.98]"
          >
            <Calendar size={18} />
            <span>احجز موعد استشارتك الآن</span>
          </Link>

          <a
            href={clinicConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-forest-800 hover:bg-forest-700 text-ivory-100 text-base font-medium px-6 py-4 rounded-2xl border border-forest-700 transition-colors"
          >
            <MessageCircle size={18} className="text-sage-300" />
            <span>تواصل عبر واتساب</span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-sage-300/80 font-ibm">
          <span>• خصوصية وسرية مهنية مطلقة</span>
          <span>• جلسات حضورية وعن بُعد</span>
          <span>• كفاءات عيادية مرخصة</span>
        </div>
      </div>
    </section>
  );
}
