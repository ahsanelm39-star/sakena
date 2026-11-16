import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { servicesData, specialistsData } from "@/config/clinic";
import {
  Calendar,
  Clock,
  Building,
  Video,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: "الخدمة غير موجودة" };
  }

  return {
    title: `${service.title} | خدمات سكينة`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Related specialists
  const relatedSpecialists = specialistsData.slice(0, 2);

  return (
    <div className="py-8 lg:py-14 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "خدماتنا", href: "/services" },
            { label: service.title },
          ]}
        />

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 text-right">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs bg-sand-200 text-forest-800 px-3 py-1 rounded-full font-ibm font-medium flex items-center gap-1.5">
                <Clock size={13} />
                <span>{service.duration}</span>
              </span>

              {service.formatAvailable.includes("in-clinic") && (
                <span className="text-xs bg-white text-forest-800 px-2.5 py-1 rounded-full border border-sage-200 font-ibm">
                  حضوري بالعيادة
                </span>
              )}

              {service.formatAvailable.includes("telehealth") && (
                <span className="text-xs bg-sage-100 text-forest-800 px-2.5 py-1 rounded-full font-ibm">
                  متاح عن بُعد
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-charcoal-700 font-ibm leading-relaxed">
              {service.overview}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href={`/booking?service=${service.slug}`}
                className="inline-flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 text-ivory-100 text-sm font-semibold px-8 py-3.5 rounded-2xl shadow-sm transition-all"
              >
                <Calendar size={17} />
                <span>طلب موعد لهذه الاستشارة</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-forest-700 hover:text-forest-900 py-3.5 px-4 rounded-2xl border border-sage-200/80 hover:bg-ivory-100 transition-colors"
              >
                <span>العودة لكافة الخدمات</span>
                <ArrowLeft size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative arch-top overflow-hidden h-[340px] sm:h-[400px] w-full shadow-card border-4 border-white">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Section 1: Target Audience & Session Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-right">
          {/* Who is this for */}
          <div className="bg-white rounded-3xl p-8 border border-sage-200/70 shadow-soft space-y-5">
            <h2 className="font-alexandria font-bold text-xl sm:text-2xl text-forest-900">
              لمن تناسب هذه الخدمة؟
            </h2>
            <p className="text-xs text-charcoal-600 font-ibm">
              قد تكون هذه الاستشارة خياراً ملائماً ومفيداً إذا كنت تواجه أحد المؤشرات التالية:
            </p>
            <ul className="space-y-3">
              {service.targetAudience.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-700 font-ibm"
                >
                  <CheckCircle2 size={16} className="text-forest-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Session Progression */}
          <div className="bg-sand-100/70 rounded-3xl p-8 border border-sand-200 space-y-5">
            <h2 className="font-alexandria font-bold text-xl sm:text-2xl text-forest-900">
              ماذا تتضمن مسيرة الجلسات؟
            </h2>
            <p className="text-xs text-charcoal-600 font-ibm">
              تسير خطة الرعاية وفق مراحل إكلينيكية متدرجة تراعي وتيرتك الخاصة:
            </p>
            <ol className="space-y-3">
              {service.sessionStructure.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-700 font-ibm bg-white/80 p-3.5 rounded-2xl border border-sand-200/60"
                >
                  <span className="w-5 h-5 rounded-full bg-forest-500 text-ivory-100 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Section 2: Therapeutic Framework & Clinical Limitations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-right">
          {/* Approach */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-sage-200/70 shadow-soft space-y-4">
            <h2 className="font-alexandria font-bold text-xl text-forest-900">
              المنهج العلاجي المتبع
            </h2>
            <p className="text-sm text-charcoal-700 font-ibm leading-relaxed">
              {service.therapeuticApproach}
            </p>
            <p className="text-xs text-charcoal-500 font-ibm leading-relaxed pt-2">
              نركز دائماً على العلاجات المبنية على البراهين العلمية المعتمدة إقليمياً وعالمياً، مع مراعاة السياق الثقافي والاجتماعي الخاص لكل مراجع.
            </p>
          </div>

          {/* Limitations & Ethical Boundaries */}
          <div className="lg:col-span-5 bg-sand-50 rounded-3xl p-8 border border-terracotta-200/60 space-y-4">
            <div className="flex items-center gap-2 text-terracotta-700 font-alexandria font-bold text-lg">
              <AlertCircle size={20} className="flex-shrink-0" />
              <h3>حدود وضوابط الاستشارة</h3>
            </div>
            <ul className="space-y-2.5">
              {service.ethicalLimitations.map((lim, idx) => (
                <li key={idx} className="text-xs text-charcoal-600 font-ibm leading-relaxed flex items-start gap-2">
                  <span className="text-terracotta-500 font-bold">•</span>
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 3: Service-specific FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="space-y-6 text-right max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-terracotta-600 font-ibm block">
                توضيحات تهمك
              </span>
              <h2 className="font-alexandria font-bold text-2xl text-forest-900">
                أسئلة شائعة حول {service.title}
              </h2>
            </div>

            <div className="space-y-3.5">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-sage-200/60 shadow-soft space-y-2 text-right"
                >
                  <h3 className="font-alexandria font-bold text-forest-900 text-base flex items-center gap-2">
                    <HelpCircle size={16} className="text-forest-600 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-700 font-ibm leading-relaxed pr-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: Specialists offering this service */}
        <div className="space-y-6 text-right">
          <h2 className="font-alexandria font-bold text-xl text-forest-900">
            أخصائيون يشاركون في تقديم هذه الخدمة
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedSpecialists.map((sp) => (
              <div
                key={sp.id}
                className="bg-white p-6 rounded-3xl border border-sage-200/60 shadow-soft flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-sand-200 flex-shrink-0">
                    <Image src={sp.image} alt={sp.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-alexandria font-bold text-base text-forest-900">
                      {sp.name}
                    </h3>
                    <p className="text-xs text-forest-700 font-ibm">{sp.title}</p>
                    <span className="text-[10px] text-charcoal-500 font-ibm block mt-0.5">
                      {sp.availableDays.join("، ")}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/booking?service=${service.slug}&specialist=${sp.slug}`}
                  className="inline-flex items-center gap-1.5 bg-forest-50 text-forest-700 hover:bg-forest-500 hover:text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex-shrink-0"
                >
                  <Calendar size={13} />
                  <span>حجز معه</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking CTA */}
        <div className="bg-forest-900 text-ivory-100 rounded-3xl p-8 sm:p-12 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold font-alexandria">
            جاهز لبدء جلستك في {service.title}؟
          </h2>
          <p className="text-sm text-sage-200/90 font-ibm max-w-lg mx-auto">
            خطوات حجز سريعة وسرية، مع خيارات حضورية بالعيادة أو عن بُعد.
          </p>
          <div className="pt-2">
            <Link
              href={`/booking?service=${service.slug}`}
              className="inline-flex items-center gap-2 bg-sage-200 hover:bg-white text-forest-900 text-sm font-semibold px-8 py-3.5 rounded-2xl transition-all"
            >
              <Calendar size={16} />
              <span>طلب موعد الآن</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
