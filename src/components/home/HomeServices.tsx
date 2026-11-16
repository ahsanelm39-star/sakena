import React from "react";
import Link from "next/link";
import { servicesData } from "@/config/clinic";
import {
  UserCheck,
  Wind,
  Sun,
  HeartHandshake,
  Compass,
  Laptop,
  ArrowLeft,
  Clock,
  Sparkles,
} from "lucide-react";

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck size={22} />,
  Wind: <Wind size={22} />,
  Sun: <Sun size={22} />,
  HeartHandshake: <HeartHandshake size={22} />,
  Compass: <Compass size={22} />,
  Laptop: <Laptop size={22} />,
};

export default function HomeServices() {
  return (
    <section className="py-20 lg:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-right">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest-600 font-ibm block">
              خدمات العيادة المتخصصة
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-900 leading-tight">
              رعاية متكاملة مصممة لتلائم احتياجك الفردي.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 font-ibm leading-relaxed">
              تتنوع خدماتنا لتشمل الاستشارات الفردية والأسرية والدعم النفسي الموجه، حضورياً في مقر العيادة أو عن بُعد عبر منصة آمنة.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900 group flex-shrink-0"
          >
            <span>عرض دليل الخدمات الكامل</span>
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* Services Grid with Visual Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                className={`group rounded-3xl p-7 transition-all duration-300 text-right flex flex-col justify-between ${
                  isFeatured
                    ? "bg-forest-900 text-ivory-100 shadow-card lg:col-span-2 md:col-span-2"
                    : "bg-white text-charcoal-800 border border-sage-200/60 shadow-soft hover:shadow-card hover:border-sage-300"
                }`}
              >
                <div className="space-y-5">
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        isFeatured
                          ? "bg-forest-800 text-sage-300 border border-forest-700"
                          : "bg-sage-100 text-forest-700"
                      }`}
                    >
                      {iconMap[service.iconName] || <Sparkles size={22} />}
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-medium px-3 py-1 rounded-full ${
                          isFeatured
                            ? "bg-forest-800 text-sage-200"
                            : "bg-sand-100 text-charcoal-600"
                        }`}
                      >
                        <Clock size={12} />
                        <span>{service.duration}</span>
                      </span>

                      {service.formatAvailable.includes("telehealth") && (
                        <span
                          className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${
                            isFeatured
                              ? "bg-terracotta-500/30 text-terracotta-200"
                              : "bg-terracotta-50 text-terracotta-600"
                          }`}
                        >
                          متاح عن بُعد
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-2.5">
                    <h3
                      className={`font-alexandria font-bold text-xl sm:text-2xl ${
                        isFeatured ? "text-ivory-100" : "text-forest-900"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed font-ibm line-clamp-3 ${
                        isFeatured ? "text-sage-200/90" : "text-charcoal-600"
                      }`}
                    >
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div
                  className={`mt-6 pt-5 flex items-center justify-between border-t ${
                    isFeatured ? "border-forest-800" : "border-sage-100"
                  }`}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold group-hover:underline underline-offset-4 ${
                      isFeatured
                        ? "text-sage-300 hover:text-ivory-100"
                        : "text-forest-700 hover:text-forest-900"
                    }`}
                  >
                    <span>تفاصيل الخدمة</span>
                    <ArrowLeft size={13} />
                  </Link>

                  <Link
                    href={`/booking?service=${service.slug}`}
                    className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors ${
                      isFeatured
                        ? "bg-sage-200 text-forest-900 hover:bg-white"
                        : "bg-forest-50 text-forest-700 hover:bg-forest-500 hover:text-white"
                    }`}
                  >
                    طلب موعد
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
