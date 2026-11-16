import React from "react";
import Link from "next/link";
import Image from "next/image";
import { specialistsData } from "@/config/clinic";
import { Calendar, ArrowLeft, Check, Sparkles } from "lucide-react";

export default function FeaturedSpecialist() {
  const featured = specialistsData[0]; // Dr. Amal Al-Khalidi

  return (
    <section className="py-20 bg-sand-50 border-t border-sand-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sage-200/70 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Specialist Portrait with architectural frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative arch-top overflow-hidden max-w-sm mx-auto shadow-soft border-4 border-sand-100">
                <div className="relative h-[380px] w-full">
                  <Image
                    src={featured.image}
                    alt={`صورة ${featured.name} - ${featured.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top"
                  />
                </div>
                {/* Demo status tag */}
                <div className="absolute top-3 right-3 bg-forest-900/85 backdrop-blur-md text-ivory-100 text-[10px] font-ibm py-1 px-2.5 rounded-full">
                  ملف استشاري توضيحي (Demo)
                </div>
              </div>
            </div>

            {/* Specialist Information */}
            <div className="lg:col-span-7 space-y-6 text-right">
              <div>
                <span className="text-xs font-semibold text-terracotta-600 uppercase tracking-widest font-ibm block mb-2">
                  أخصائي الشهر المميز
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-forest-900 font-alexandria">
                  {featured.name}
                </h3>
                <p className="text-sm font-semibold text-forest-700 font-ibm mt-1">
                  {featured.title} — {featured.specialty}
                </p>
                <p className="text-xs text-charcoal-500 font-ibm mt-0.5">
                  {featured.qualificationsPlaceholder}
                </p>
              </div>

              {/* Bio quote */}
              <blockquote className="p-4 rounded-2xl bg-ivory-100 border-r-4 border-forest-500 text-sm text-charcoal-700 italic font-ibm leading-relaxed">
                «{featured.approach}»
              </blockquote>

              {/* Focus areas */}
              <div>
                <span className="text-xs font-bold text-forest-800 font-ibm block mb-2.5">
                  مجالات التركيز الإكلينيكي:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {featured.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-700 font-ibm">
                      <span className="w-4 h-4 rounded-full bg-sage-100 text-forest-700 flex items-center justify-center flex-shrink-0">
                        <Check size={11} />
                      </span>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href={`/booking?specialist=${featured.slug}`}
                  className="inline-flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-ivory-100 text-sm font-medium py-3 px-6 rounded-2xl shadow-sm transition-all"
                >
                  <Calendar size={16} />
                  <span>حجز موعد مع {featured.name.split(" ")[0]}</span>
                </Link>

                <Link
                  href={`/specialists/${featured.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-900 py-3 px-4 rounded-2xl border border-sage-200/80 hover:bg-ivory-100 transition-colors"
                >
                  <span>عرض الملف الإكلينيكي الكامل</span>
                  <ArrowLeft size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
