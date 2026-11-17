"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { specialistsData } from "@/config/clinic";
import ScrollReveal from "@/components/common/ScrollReveal";
import {
  Calendar,
  ArrowLeft,
  Check,
  Video,
  Building,
  Languages,
  Clock,
  Sparkles,
} from "lucide-react";

export default function SpecialistsPage() {
  const [filterFormat, setFilterFormat] = useState<string>("all");

  const filteredSpecialists = specialistsData.filter((specialist) => {
    if (filterFormat === "all") return true;
    if (filterFormat === "in-clinic") return specialist.formats.includes("in-clinic");
    if (filterFormat === "telehealth") return specialist.formats.includes("telehealth");
    return true;
  });

  return (
    <div className="py-8 lg:py-14 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "الأخصائيون" }]} />

        {/* Hero Section */}
        <ScrollReveal animation="fade-up">
          <div className="text-right space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta-600 font-ibm block">
              فريق الرعاية الإكلينيكية
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
              نخبة من المختصين المؤهلين لمرافقتك باحترافية وأمانة.
            </h1>
            <p className="text-base sm:text-lg text-charcoal-700 font-ibm leading-relaxed">
              يضم فريق سكينة استشاريين وأخصائيين مرخصين في الطب النفسي وعلم النفس
              العيادي والإرشاد الأسري، يلتزمون بأعلى معايير الممارسة الأخلاقية
              والإنصات الإنساني.
            </p>

            {/* Demo Note */}
            <div className="p-3.5 rounded-2xl bg-sand-200/60 border border-sand-300/80 text-xs text-charcoal-600 font-ibm inline-flex items-center gap-2">
              <Sparkles size={15} className="text-forest-600 flex-shrink-0" />
              <span>
                جميع الملفات أدناه هي نماذج تمثيلية وتوضيحية لمحفظة الأعمال (Portfolio Demo)، وليست تراخيص أو بيانات اعتماد طبية حقيقية.
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Format Filter Tabs */}
        <ScrollReveal animation="fade-in" delay={0.1} className="flex flex-wrap items-center justify-start gap-2.5 pt-2">
          <button
            onClick={() => setFilterFormat("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              filterFormat === "all"
                ? "bg-forest-500 text-ivory-100 shadow-sm"
                : "bg-white text-charcoal-700 hover:bg-sand-100 border border-sage-200"
            }`}
          >
            كافة المختصين ({specialistsData.length})
          </button>
          <button
            onClick={() => setFilterFormat("in-clinic")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              filterFormat === "in-clinic"
                ? "bg-forest-500 text-ivory-100 shadow-sm"
                : "bg-white text-charcoal-700 hover:bg-sand-100 border border-sage-200"
            }`}
          >
            <Building size={14} />
            <span>متاح بالعيادة (حضوري)</span>
          </button>
          <button
            onClick={() => setFilterFormat("telehealth")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              filterFormat === "telehealth"
                ? "bg-forest-500 text-ivory-100 shadow-sm"
                : "bg-white text-charcoal-700 hover:bg-sand-100 border border-sage-200"
            }`}
          >
            <Video size={14} />
            <span>متاح عن بُعد</span>
          </button>
        </ScrollReveal>

        {/* Specialists Grid */}
        <ScrollReveal
          animation="stagger-container"
          staggerDelay={0.09}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredSpecialists.map((specialist) => (
            <ScrollReveal key={specialist.id} animation="stagger-item">
              <div
                className="bg-white rounded-3xl p-7 border border-sage-200/70 shadow-soft hover:shadow-card transition-all flex flex-col justify-between text-right group h-full"
              >
                <div className="space-y-6">
                  {/* Header with Photo & Basic Info */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-sand-200 flex-shrink-0 shadow-sm">
                      <Image
                        src={specialist.image}
                        alt={specialist.name}
                        fill
                        sizes="120px"
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h2 className="font-alexandria font-bold text-xl sm:text-2xl text-forest-900">
                          {specialist.name}
                        </h2>
                      </div>

                      <p className="text-xs font-semibold text-forest-700 font-ibm">
                        {specialist.title}
                      </p>

                      <p className="text-xs text-charcoal-500 font-ibm">
                        {specialist.specialty}
                      </p>

                      <div className="pt-1.5 flex flex-wrap items-center gap-2">
                        {specialist.formats.includes("in-clinic") && (
                          <span className="inline-flex items-center gap-1 text-[11px] bg-sand-100 text-forest-800 px-2.5 py-0.5 rounded-full font-ibm">
                            <Building size={11} />
                            <span>حضوري</span>
                          </span>
                        )}
                        {specialist.formats.includes("telehealth") && (
                          <span className="inline-flex items-center gap-1 text-[11px] bg-sage-100 text-forest-800 px-2.5 py-0.5 rounded-full font-ibm">
                            <Video size={11} />
                            <span>عن بُعد</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bio Excerpt */}
                  <p className="text-xs text-charcoal-700 font-ibm leading-relaxed line-clamp-3">
                    {specialist.bio}
                  </p>

                  {/* Focus Areas Checklist */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-forest-900 font-ibm block">
                      مجالات الاهتمام والاستشارة:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {specialist.focusAreas.slice(0, 4).map((area, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-charcoal-600 font-ibm">
                          <Check size={12} className="text-terracotta-500 flex-shrink-0" />
                          <span className="truncate">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Working Days & Languages */}
                  <div className="p-3 bg-ivory-50 rounded-2xl border border-sand-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-charcoal-600 font-ibm">
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} className="text-forest-600 flex-shrink-0" />
                      <span>أيام التواجد: {specialist.availableDays.join("، ")}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Languages size={13} className="text-forest-600 flex-shrink-0" />
                      <span>{specialist.languages.join(" / ")}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-5 border-t border-sand-100 flex items-center justify-between gap-3">
                  <Link
                    href={`/specialists/${specialist.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-700 hover:text-forest-900 transition-colors"
                  >
                    <span>الملف الشخصي والمنهج</span>
                    <ArrowLeft size={13} />
                  </Link>

                  <Link
                    href={`/booking?specialist=${specialist.slug}`}
                    className="inline-flex items-center gap-1.5 bg-forest-500 hover:bg-forest-600 text-ivory-100 text-xs font-medium py-2 px-4 rounded-xl shadow-sm transition-all"
                  >
                    <Calendar size={13} />
                    <span>طلب موعد</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </div>
    </div>
  );
}
