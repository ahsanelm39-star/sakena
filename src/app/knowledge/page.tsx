"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { articlesData } from "@/config/clinic";
import ScrollReveal from "@/components/common/ScrollReveal";
import {
  Search,
  Clock,
  ArrowLeft,
  BookOpen,
  Sparkles,
  ShieldAlert,
  Send,
  CheckCircle,
} from "lucide-react";

const CATEGORIES = [
  "الكل",
  "الصحة النفسية",
  "الوعي الذاتي",
  "القلق والتوتر",
  "العلاقات",
  "فهم المشاعر",
];

export default function KnowledgePage() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Filter articles based on search & category
  const filteredArticles = useMemo(() => {
    return articlesData.filter((article) => {
      const matchesCategory =
        selectedCategory === "الكل" || article.category === selectedCategory;
      const matchesSearch =
        article.title.includes(searchQuery) ||
        article.excerpt.includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = articlesData[0]; // Top featured article

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterEmail("");
        setNewsletterSuccess(false);
      }, 4000);
    }
  };

  return (
    <div className="py-8 lg:py-14 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "المكتبة المعرفية" }]} />

        {/* Editorial Hero */}
        <ScrollReveal animation="fade-up">
          <div className="text-right space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest-600 font-ibm block">
              التثقيف والوعي النفسي
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
              مساحة معرفية لفهم الذات، العلاقات، والمشاعر.
            </h1>
            <p className="text-base sm:text-lg text-charcoal-700 font-ibm leading-relaxed">
              نشاركك مقالات وأدلة إكلينيكية مبسطة تُعينك على تفكيك الضغوط الحياتية
              واستكشاف آليات التكيف السليمة بلغة عربية رصينة وواعية.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Article Banner */}
        <ScrollReveal animation="scale-up" delay={0.1}>
          <div className="bg-forest-900 text-ivory-100 rounded-3xl overflow-hidden shadow-card border border-forest-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-5 text-right">
                <div className="flex items-center gap-2">
                  <span className="bg-forest-800 text-sage-200 text-xs font-semibold px-3 py-1 rounded-full border border-forest-700">
                    مقال مميز
                  </span>
                  <span className="text-xs text-sage-300 font-ibm">
                    {featuredArticle.category} • {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-alexandria leading-snug">
                  <Link
                    href={`/knowledge/${featuredArticle.slug}`}
                    className="hover:text-sage-200 transition-colors"
                  >
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-sage-200/90 font-ibm leading-relaxed line-clamp-3">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-forest-700">
                      <Image
                        src={featuredArticle.author.image}
                        alt={featuredArticle.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-semibold block font-ibm">
                        {featuredArticle.author.name}
                      </span>
                      <span className="text-[10px] text-sage-300 font-ibm">
                        {featuredArticle.author.role}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/knowledge/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-sage-200 hover:bg-white text-forest-900 px-5 py-2.5 rounded-xl transition-all"
                  >
                    <span>قراءة المقال كاملاً</span>
                    <ArrowLeft size={15} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[300px]">
                <Image
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className={`object-cover ${featuredArticle.coverImagePosition || "object-center"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-forest-900/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Search & Category Filter Bar */}
        <ScrollReveal animation="fade-in" delay={0.12} className="space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في المقالات (مثال: قلق، نوم، علاقات)..."
                className="w-full pl-4 pr-11 py-3 rounded-2xl border border-sage-300 text-xs sm:text-sm focus:border-forest-500 bg-white shadow-soft text-right"
              />
              <Search
                size={18}
                className="absolute top-1/2 right-3.5 -translate-y-1/2 text-charcoal-400"
              />
            </div>

            {/* Results Count */}
            <span className="text-xs text-charcoal-500 font-ibm text-right">
              عرض {filteredArticles.length} من أصل {articlesData.length} مقالاً
            </span>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-forest-500 text-ivory-100 shadow-sm"
                    : "bg-white text-charcoal-700 hover:bg-sand-100 border border-sage-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <ScrollReveal
            animation="stagger-container"
            staggerDelay={0.08}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.map((article) => (
              <ScrollReveal key={article.id} animation="stagger-item">
                <article
                  className="bg-white rounded-3xl overflow-hidden border border-sage-200/70 shadow-soft hover:shadow-card transition-all flex flex-col justify-between text-right group h-full"
                >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-sand-200">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className={`object-cover ${article.coverImagePosition || "object-center"} group-hover:scale-105 transition-transform duration-500`}
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-forest-800 text-[11px] font-semibold py-1 px-3 rounded-full">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-charcoal-500 font-ibm">
                      <Clock size={13} className="text-terracotta-500" />
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.publishedDate}</span>
                    </div>

                    <h3 className="font-alexandria font-bold text-lg text-forest-900 group-hover:text-forest-700 transition-colors leading-snug">
                      <Link href={`/knowledge/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-charcoal-600 font-ibm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-3 border-t border-sand-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-sand-300">
                      <Image
                        src={article.author.image}
                        alt={article.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-semibold text-charcoal-800 font-ibm">
                      {article.author.name}
                    </span>
                  </div>

                  <Link
                    href={`/knowledge/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-forest-700 hover:text-forest-900"
                  >
                    <span>قراءة</span>
                    <ArrowLeft size={13} />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </ScrollReveal>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-sage-200 p-8 space-y-3">
            <BookOpen size={36} className="text-sage-400 mx-auto" />
            <h3 className="font-alexandria font-bold text-lg text-forest-900">
              لم نجد مقالات مطابقة لبحثك
            </h3>
            <p className="text-xs text-charcoal-500 font-ibm">
              جرب تغيير الكلمات المفتاحية أو اختيار تصنيف آخر.
            </p>
          </div>
        )}

        {/* Educational Disclaimer */}
        <div className="p-4 rounded-2xl bg-sand-200/60 border border-sand-300/80 text-xs text-charcoal-700 font-ibm flex items-center gap-3">
          <ShieldAlert size={18} className="text-terracotta-600 flex-shrink-0" />
          <p>
            <strong>تنويه المسؤولية العلمية:</strong> المقالات المنشورة في هذه المكتبة
            مخصصة للتثقيف العام وزيادة الوعي النفسي، ولا تعد بديلاً عن التقييم
            التشخيصي الطبي أو الاستشارة الفردية المتخصصة.
          </p>
        </div>

        {/* Newsletter Subscription Demo */}
        <div className="bg-sand-100/80 rounded-3xl p-8 sm:p-12 border border-sand-200 text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-semibold text-forest-600 font-ibm block">
            النشرة المعرفية (Demo)
          </span>
          <h2 className="font-alexandria font-bold text-2xl text-forest-900">
            احصل على مقالاتنا الجديدة في بريدك
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 font-ibm max-w-md mx-auto">
            محتوى رصين يركز على جودة الحياة النفسية والعلاقات الأسرية، دون إعلانات مزعجة.
          </p>

          {newsletterSuccess ? (
            <div className="p-3 bg-forest-100 text-forest-800 rounded-2xl text-xs font-ibm font-semibold flex items-center justify-center gap-2 animate-fade-in">
              <CheckCircle size={16} />
              <span>شكراً لاهتمامك! تم تسجيل بريدك في القائمة التجريبية بنجاح.</span>
            </div>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto pt-2"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني..."
                className="w-full sm:flex-1 px-4 py-3 rounded-2xl border border-sage-300 text-xs focus:border-forest-500 bg-white text-right"
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-forest-500 hover:bg-forest-600 text-ivory-100 text-xs font-semibold px-6 py-3 rounded-2xl transition-all"
              >
                <Send size={13} />
                <span>اشتراك</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
