import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ScrollReveal from "@/components/common/ScrollReveal";
import { specialistsData, servicesData } from "@/config/clinic";
import {
  Calendar,
  Building,
  Video,
  Languages,
  Check,
  Clock,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return specialistsData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const specialist = specialistsData.find((s) => s.slug === params.slug);
  if (!specialist) {
    return { title: "الأخصائي غير موجود" };
  }

  return {
    title: `${specialist.name} | ${specialist.title}`,
    description: `${specialist.name} - ${specialist.specialty}. تعرف على منهجه الإكلينيكي، مجالات تركيزه، واحجز استشارتك في عيادات سكينة.`,
  };
}

export default function SpecialistDetailPage({ params }: PageProps) {
  const specialist = specialistsData.find((s) => s.slug === params.slug);

  if (!specialist) {
    notFound();
  }

  // Related services
  const relatedServices = servicesData.slice(0, 3);

  return (
    <div className="py-8 lg:py-14 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "الأخصائيون", href: "/specialists" },
            { label: specialist.name },
          ]}
        />

        {/* Profile Hero Card */}
        <ScrollReveal animation="fade-up">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sage-200/70 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Portrait with arch */}
              <div className="lg:col-span-4 relative">
                <div className="relative arch-top overflow-hidden max-w-xs mx-auto shadow-card border-4 border-sand-100">
                  <div className="relative h-[360px] w-full">
                    <Image
                      src={specialist.image}
                      alt={specialist.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Demo Badge */}
                  <div className="absolute top-3 right-3 bg-forest-900/85 backdrop-blur-md text-ivory-100 text-[10px] font-ibm py-1 px-3 rounded-full">
                    ملف توضيحي للعرض (Demo)
                  </div>
                </div>
              </div>

              {/* Specialist Details */}
              <div className="lg:col-span-8 space-y-6 text-right">
                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-terracotta-600 font-ibm block mb-1.5">
                    الملف الإكلينيكي والاستشاري
                  </span>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-900 font-alexandria">
                    {specialist.name}
                  </h1>
                  <p className="text-base font-semibold text-forest-700 font-ibm mt-1">
                    {specialist.title} — {specialist.specialty}
                  </p>
                  <p className="text-xs text-charcoal-500 font-ibm mt-1">
                    {specialist.qualificationsPlaceholder}
                  </p>
                </div>

                {/* Consultation Formats & Languages */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {specialist.formats.includes("in-clinic") && (
                    <span className="inline-flex items-center gap-1.5 text-xs bg-sand-100 text-forest-800 px-3.5 py-1.5 rounded-full font-ibm">
                      <Building size={13} />
                      <span>متاح بالعيادة (حضوري)</span>
                    </span>
                  )}
                  {specialist.formats.includes("telehealth") && (
                    <span className="inline-flex items-center gap-1.5 text-xs bg-sage-100 text-forest-800 px-3.5 py-1.5 rounded-full font-ibm">
                      <Video size={13} />
                      <span>متاح عن بُعد</span>
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-xs bg-ivory-200/80 text-charcoal-700 px-3.5 py-1.5 rounded-full font-ibm">
                    <Languages size={13} />
                    <span>{specialist.languages.join("، ")}</span>
                  </span>
                </div>

                {/* Approach Statement */}
                <blockquote className="p-4 rounded-2xl bg-sand-50 border-r-4 border-forest-500 text-sm text-charcoal-700 font-ibm leading-relaxed italic">
                  «{specialist.approach}»
                </blockquote>

                {/* Schedule and CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href={`/booking?specialist=${specialist.slug}`}
                    className="inline-flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 text-ivory-100 text-sm font-semibold px-8 py-3.5 rounded-2xl shadow-sm transition-all"
                  >
                    <Calendar size={17} />
                    <span>طلب موعد استشارة مع {specialist.name.split(" ")[0]}</span>
                  </Link>

                  <div className="flex items-center gap-2 text-xs text-charcoal-600 font-ibm px-3">
                    <Clock size={15} className="text-forest-600" />
                    <span>{specialist.schedulePreview}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Narrative Bio & Areas of Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-right">
          {/* Biography */}
          <ScrollReveal animation="slide-right" className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 border border-sage-200/60 shadow-soft space-y-4 h-full">
              <h2 className="font-alexandria font-bold text-xl text-forest-900">
                نبذة عن المسار المهني
              </h2>
              <div className="text-sm text-charcoal-700 font-ibm leading-relaxed space-y-3">
                <p>{specialist.bio}</p>
                <p>
                  يحرص على توفير بيئة استشارية تتسم بالإنصات الصادق، والامتناع التام عن إطلاق
                  الأحكام، وتمكين المراجع من مهارات واستراتيجيات معرفية وسلوكية تلائم واقعه
                  وثقافته.
                </p>
              </div>

              <div className="pt-4 border-t border-sand-100 flex items-center gap-2 text-xs text-charcoal-500 font-ibm">
                <ShieldCheck size={16} className="text-forest-600" />
                <span>
                  جميع الجلسات تخضع لقواعد السرية المهنية وأخلاقيات الممارسة الطبية المعتمدة.
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Areas of Focus */}
          <ScrollReveal animation="slide-left" className="lg:col-span-5">
            <div className="bg-sand-100/70 rounded-3xl p-8 border border-sand-200 space-y-4 h-full">
              <h2 className="font-alexandria font-bold text-xl text-forest-900">
                مجالات التركيز الإكلينيكي
              </h2>
              <ul className="space-y-3">
                {specialist.focusAreas.map((area, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-700 font-ibm bg-white/80 p-3 rounded-2xl border border-sand-200/60"
                  >
                    <span className="w-5 h-5 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center flex-shrink-0">
                      <Check size={12} />
                    </span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Related Services */}
        <ScrollReveal animation="fade-up">
          <div className="space-y-6 text-right">
            <div className="flex items-center justify-between">
              <h2 className="font-alexandria font-bold text-xl text-forest-900">
                الخدمات المرتبطة بتخصص الأخصائي
              </h2>
              <Link
                href="/services"
                className="text-xs font-semibold text-forest-700 hover:text-forest-900 inline-flex items-center gap-1"
              >
                <span>جميع الخدمات</span>
                <ArrowLeft size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-3xl border border-sage-200/60 shadow-soft flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <h3 className="font-alexandria font-bold text-base text-forest-900">
                      {service.title}
                    </h3>
                    <p className="text-xs text-charcoal-600 font-ibm leading-relaxed line-clamp-2">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-sand-100 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-semibold text-forest-700 hover:underline"
                    >
                      تفاصيل الخدمة
                    </Link>

                    <Link
                      href={`/booking?service=${service.slug}&specialist=${specialist.slug}`}
                      className="text-xs font-medium bg-forest-50 text-forest-700 hover:bg-forest-500 hover:text-white px-3 py-1 rounded-full transition-colors"
                    >
                      حجز
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
