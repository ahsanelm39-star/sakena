"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { articlesData } from "@/config/clinic";
import { Clock, ArrowLeft, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function HomeArticles() {
  const featuredArticles = articlesData.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-right">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs uppercase tracking-widest font-semibold text-forest-600 font-ibm block">
                المكتبة المعرفية والتثقيف النفسي
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-900 leading-tight">
                مقالات إثرائية مكتوبة بوعي ومسؤولية علمية.
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 font-ibm leading-relaxed">
                نقدم في سكينة محتوى تثقيفياً موثوقاً لمساعدتك على فهم آليات عقلك ومشاعرك دون تعقيد أو تشخيصات متسرعة.
              </p>
            </div>

            <Link
              href="/knowledge"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900 group flex-shrink-0"
            >
              <span>تصفح كامل المقالات</span>
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Articles Cards Grid */}
        <ScrollReveal
          animation="stagger-container"
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredArticles.map((article) => (
            <ScrollReveal key={article.id} animation="stagger-item">
              <article
                className="bg-white rounded-3xl overflow-hidden border border-sage-200/60 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between text-right group h-full"
              >
                <div>
                  {/* Cover Image */}
                  <div className="relative h-52 w-full overflow-hidden bg-sand-200">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className={`object-cover transition-transform duration-500 group-hover:scale-105`}
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-forest-800 text-[11px] font-semibold py-1 px-3 rounded-full">
                      {article.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-charcoal-500 font-ibm">
                      <Clock size={13} className="text-terracotta-500" />
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.publishedDate}</span>
                    </div>

                    <h3 className="font-alexandria font-bold text-lg sm:text-xl text-forest-900 leading-snug group-hover:text-forest-700 transition-colors">
                      <Link href={`/knowledge/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-charcoal-600 leading-relaxed font-ibm line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Author & Read More Link */}
                <div className="px-6 pb-6 pt-3 border-t border-sand-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-sage-200">
                      <Image
                        src={article.author.image}
                        alt={article.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-right">
                      <span className="block text-xs font-semibold text-forest-900 font-ibm">
                        {article.author.name}
                      </span>
                      <span className="text-[10px] text-charcoal-500 font-ibm">
                        {article.author.role.split("—")[0]}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/knowledge/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-forest-700 hover:text-forest-900 group-hover:underline underline-offset-4"
                  >
                    <span>قراءة المقال</span>
                    <ArrowLeft size={13} />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
