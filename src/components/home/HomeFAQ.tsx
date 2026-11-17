"use client";

import React, { useState } from "react";
import Link from "next/link";
import { faqsData } from "@/config/clinic";
import { ChevronDown, ArrowLeft, HelpCircle } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function HomeFAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const previewFaqs = faqsData.slice(0, 5);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-sand-50 border-t border-sand-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center space-y-3 mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta-600 font-ibm block">
              إجابات واضحة لأسئلتك
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-900 leading-tight">
              الأسئلة الأكثر شيوعاً حول الاستشارات.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 font-ibm leading-relaxed">
              جمعنا لك إجابات دقيقة حول آليات الحجز، سرية الجلسات، ونظام الاستشارات لتبدأ رحلتك باطمئنان تام.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordions List */}
        <ScrollReveal animation="stagger-container" staggerDelay={0.06} className="space-y-3.5">
          {previewFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <ScrollReveal key={faq.id} animation="stagger-item">
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
                    <span className="font-alexandria font-semibold text-base sm:text-lg text-forest-900">
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
                    <div className="px-6 pb-5 pt-1 text-sm text-charcoal-700 font-ibm leading-relaxed border-t border-sand-100/60 animate-fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </ScrollReveal>

        {/* Link to Full FAQ */}
        <ScrollReveal animation="fade-up" delay={0.2} className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900 group"
          >
            <span>هل لديك المزيد من التساؤلات؟ استعرض كافة الأسئلة الشائعة</span>
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
