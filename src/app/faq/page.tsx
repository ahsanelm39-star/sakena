"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ScrollReveal from "@/components/common/ScrollReveal";
import { faqsData } from "@/config/clinic";
import { FAQItem } from "@/types";
import {
  ChevronDown,
  Search,
  HelpCircle,
  MessageCircle,
  Phone,
  ArrowLeft,
  Calendar,
} from "lucide-react";

const FAQ_CATEGORIES: { id: FAQItem["category"] | "all"; label: string }[] = [
  { id: "all", label: "كافة الأسئلة" },
  { id: "booking", label: "الحجز والمواعيد" },
  { id: "sessions", label: "الجلسات والاستشارات" },
  { id: "privacy", label: "الخصوصية والسرية" },
  { id: "telehealth", label: "الاستشارات عن بُعد" },
  { id: "services", label: "الخدمات والتخصصات" },
];

export default function FAQPage() {
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ "faq-1": true, "faq-5": true });

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = useMemo(() => {
    return faqsData.filter((item) => {
      const matchesCategory = selectedCat === "all" || item.category === selectedCat;
      const matchesSearch =
        item.question.includes(searchQuery) || item.answer.includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCat, searchQuery]);

  return (
    <div className="py-8 lg:py-14 bg-ivory-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "الأسئلة الشائعة" }]} />

        {/* Hero */}
        <ScrollReveal animation="fade-up">
          <div className="text-right space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta-600 font-ibm block">
              دليل الإجابات والتوضيحات
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
              الأسئلة الشائعة حول الاستشارات والرعاية.
            </h1>
            <p className="text-base sm:text-lg text-charcoal-700 font-ibm leading-relaxed">
              جمعنا لك إجابات وافية ومسؤولة حول آلية حجز المواعيد، سرية الجلسات، ونظام
              الاستشارات في عيادات سكينة لمساعدتك على اتخاذ قرارك بكل طمأنينة.
            </p>
          </div>
        </ScrollReveal>

        {/* Search Bar */}
        <ScrollReveal animation="fade-in" delay={0.1}>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن سؤالك (مثال: الخصوصية، مدة الجلسة، عن بعد، الأدوية)..."
              className="w-full pl-4 pr-11 py-3.5 rounded-2xl border border-sage-300 text-sm focus:border-forest-500 bg-white shadow-soft text-right"
            />
            <Search
              size={18}
              className="absolute top-1/2 right-3.5 -translate-y-1/2 text-charcoal-400"
            />
          </div>
        </ScrollReveal>

        {/* Category Pills */}
        <ScrollReveal animation="fade-in" delay={0.15}>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {FAQ_CATEGORIES.map((cat) => {
              const count =
                cat.id === "all"
                  ? faqsData.length
                  : faqsData.filter((f) => f.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCat(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    selectedCat === cat.id
                      ? "bg-forest-500 text-ivory-100 shadow-sm"
                      : "bg-white text-charcoal-700 hover:bg-sand-100 border border-sage-200"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      selectedCat === cat.id
                        ? "bg-forest-700 text-ivory-100"
                        : "bg-sand-200 text-charcoal-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* FAQ Accordions List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = !!openIds[faq.id];

              return (
                <ScrollReveal
                  key={faq.id}
                  animation="fade-up"
                  delay={Math.min(index * 0.05, 0.3)}
                >
                  <div
                    className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-forest-500/50 shadow-soft"
                        : "border-sage-200/70 hover:border-sage-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(faq.id)}
                      aria-expanded={isOpen}
                      className="w-full py-4.5 px-6 flex items-center justify-between gap-4 text-right transition-colors"
                    >
                      <span className="font-alexandria font-semibold text-base sm:text-lg text-forest-900 leading-snug">
                        {faq.question}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? "bg-forest-50 text-forest-700 rotate-180"
                            : "bg-sand-100 text-charcoal-500"
                        }`}
                      >
                        <ChevronDown size={17} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-charcoal-700 font-ibm leading-relaxed border-t border-sand-100/60 animate-fade-in">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-3xl border border-sage-200 p-8 space-y-3">
              <HelpCircle size={36} className="text-sage-400 mx-auto" />
              <h3 className="font-alexandria font-bold text-lg text-forest-900">
                لم نجد نتائج مطابقة لبحثك
              </h3>
              <p className="text-xs text-charcoal-500 font-ibm">
                يمكنك تجربة كلمات بحث أخرى أو التواصل مباشرة مع فريق الاستقبال.
              </p>
            </div>
          )}
        </div>

        {/* Direct Contact CTA for unanswered questions */}
        <ScrollReveal animation="scale-up">
          <div className="bg-sand-100/80 rounded-3xl p-8 sm:p-10 border border-sand-200 text-center space-y-4">
            <h2 className="font-alexandria font-bold text-xl sm:text-2xl text-forest-900">
              هل لديك استفسار آخر لم تجد إجابته هنا؟
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-ibm max-w-md mx-auto leading-relaxed">
              فريق الاستقبال في سكينة متاح للإجابة عن كافة التساؤلات الإدارية والتنظيمية بسرية وسرعة.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-ivory-100 text-xs sm:text-sm font-semibold px-6 py-3 rounded-2xl transition-all"
              >
                <span>نموذج التواصل السريع</span>
                <ArrowLeft size={15} />
              </Link>

              <Link
                href="/booking"
                className="inline-flex items-center gap-2 bg-white hover:bg-sand-50 text-forest-800 border border-sage-300 text-xs sm:text-sm font-semibold px-6 py-3 rounded-2xl transition-all"
              >
                <Calendar size={15} />
                <span>طلب موعد استشارة</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
