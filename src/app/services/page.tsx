import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { servicesData } from "@/config/clinic";
import ScrollReveal from "@/components/common/ScrollReveal";
import {
  Clock,
  ArrowLeft,
  Calendar,
  Building,
  Video,
  Check,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "خدماتنا | عيادات سكينة للصحة النفسية",
  description:
    "استكشف خدمات الرعاية النفسية المتخصصة في عيادات سكينة: الاستشارات الفردية، علاج القلق والتوتر، الدعم النفسي للاكتئاب، الإرشاد الزوجي والأسري، والاستشارات عن بُعد.",
};

export default function ServicesPage() {
  return (
    <div className="py-8 lg:py-14 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "خدماتنا" }]} />

        {/* Hero Section */}
        <ScrollReveal animation="fade-up">
          <div className="text-right space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta-600 font-ibm block">
              دليل الخدمات الإكلينيكية
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
              خدمات استشارية مصممة خصيصاً لمرافقة احتياجك النفسي.
            </h1>
            <p className="text-base sm:text-lg text-charcoal-700 font-ibm leading-relaxed">
              نقدم في سكينة باقة متكاملة من الاستشارات النفسية والبرامج العلاجية المبنية
              على الأدلة العلمية، في بيئة تحفظ كرامتك وخصوصيتك بأعلى درجات المهنية.
            </p>
          </div>
        </ScrollReveal>

        {/* Comprehensive Services List */}
        <div className="space-y-8">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <ScrollReveal
                key={service.id}
                animation={isReversed ? "slide-left" : "slide-right"}
                delay={0.05}
              >
                <div
                  id={service.slug}
                  className="bg-white rounded-3xl p-8 sm:p-10 border border-sage-200/70 shadow-soft hover:shadow-card transition-all"
                >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 relative ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative arch-top overflow-hidden h-[280px] sm:h-[320px] w-full shadow-soft border-2 border-sand-100">
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 space-y-5 text-right ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs bg-sand-100 text-forest-800 px-3 py-1 rounded-full font-ibm font-medium flex items-center gap-1">
                        <Clock size={12} />
                        <span>{service.duration}</span>
                      </span>

                      {service.formatAvailable.includes("in-clinic") && (
                        <span className="text-xs bg-ivory-200 text-forest-800 px-2.5 py-1 rounded-full font-ibm">
                          حضوري بالعيادة
                        </span>
                      )}

                      {service.formatAvailable.includes("telehealth") && (
                        <span className="text-xs bg-sage-100 text-forest-800 px-2.5 py-1 rounded-full font-ibm">
                          متاح عن بُعد
                        </span>
                      )}
                    </div>

                    <h2 className="font-alexandria font-bold text-2xl sm:text-3xl text-forest-900">
                      {service.title}
                    </h2>

                    <p className="text-sm text-charcoal-700 font-ibm leading-relaxed">
                      {service.overview}
                    </p>

                    {/* Target Audience Points */}
                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-bold text-forest-900 font-ibm block">
                        لمن تناسب هذه الاستشارة؟
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.targetAudience.slice(0, 2).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-600 font-ibm">
                            <Check size={14} className="text-terracotta-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 flex flex-wrap items-center gap-3.5">
                      <Link
                        href={`/booking?service=${service.slug}`}
                        className="inline-flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-ivory-100 text-xs sm:text-sm font-semibold py-2.5 px-6 rounded-2xl shadow-sm transition-all"
                      >
                        <Calendar size={15} />
                        <span>طلب موعد لهذه الخدمة</span>
                      </Link>

                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-forest-700 hover:text-forest-900 py-2.5 px-4 rounded-2xl border border-sage-200/80 hover:bg-ivory-100 transition-colors"
                      >
                        <span>دليل الخدمة والأسئلة الشائعة</span>
                        <ArrowLeft size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Format Comparison Section */}
      <ScrollReveal animation="fade-up">
        <div className="bg-sand-100/70 rounded-3xl p-8 sm:p-12 border border-sand-200 text-right space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta-600 font-ibm block">
              مرونة الاستشارة
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-forest-900 font-alexandria mt-1">
              مقارنة بين الاستشارة الحضورية وعن بُعد
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-ibm mt-2">
              نوفر كلا الخيارين بنفس مستوى الجودة والالتزام الإكلينيكي لتختار ما يناسب جدولك وراحتك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-sage-200/60 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-forest-50 text-forest-700 flex items-center justify-center">
                  <Building size={20} />
                </div>
                <div>
                  <h3 className="font-alexandria font-bold text-lg text-forest-900">
                    الاستشارة بالعيادة (حضوري)
                  </h3>
                  <span className="text-xs text-charcoal-500 font-ibm">مقر سكينة بالرياض</span>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-charcoal-700 font-ibm">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-forest-600 flex-shrink-0" />
                  <span>بيئة مادية مصممة خصيصاً للتهدئة الحسية والعزل الصوتي التام.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-forest-600 flex-shrink-0" />
                  <span>تواصل بصري وجسدي مباشر يعزز التفاعل التلقائي في الجلسات الأولى.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-forest-600 flex-shrink-0" />
                  <span>مساحات انتظار مستقلة تحمي خصوصية الدخول والخروج.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-sage-200/60 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sage-50 text-forest-700 flex items-center justify-center">
                  <Video size={20} />
                </div>
                <div>
                  <h3 className="font-alexandria font-bold text-lg text-forest-900">
                    الاستشارة عن بُعد (مرئية)
                  </h3>
                  <span className="text-xs text-charcoal-500 font-ibm">اتصال آمن ومشفر من أي مكان</span>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-charcoal-700 font-ibm">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-forest-600 flex-shrink-0" />
                  <span>مرونة كاملة في التوقيت وتوفير وقت وزحام التنقل.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-forest-600 flex-shrink-0" />
                  <span>خيار مثالي للمقيمين خارج الرياض أو المسافرين بانتظام.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-forest-600 flex-shrink-0" />
                  <span>منصة مشفرة متوافقة مع المعايير الطبية لا تتطلب برامج معقدة.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Global Assistance CTA */}
      <ScrollReveal animation="scale-up">
        <div className="bg-forest-900 text-ivory-100 rounded-3xl p-8 sm:p-12 text-center space-y-5">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-forest-800 border border-forest-700">
            <HelpCircle size={24} className="text-sage-300" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-alexandria">
            لست متأكداً أي الخدمات هي الأنسب لك حالياً؟
          </h2>

          <p className="text-sm text-sage-200/90 font-ibm max-w-xl mx-auto leading-relaxed">
            يمكنك إرسال طلب استشارة عام باختيار «لا يوجد تفضيل»، وسيقوم فريق الاستقبال
            بتوجيهك بعد استماع مبدئي ومختصر لأهدافك.
          </p>

          <div className="pt-2">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-sage-200 hover:bg-white text-forest-900 text-sm font-semibold px-8 py-3.5 rounded-2xl transition-all"
            >
              <Calendar size={16} />
              <span>طلب موعد وتوجيه استشاري</span>
            </Link>
          </div>
        </div>
      </ScrollReveal>
      </div>
    </div>
  );
}
