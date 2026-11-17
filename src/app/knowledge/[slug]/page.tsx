import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ScrollReveal from "@/components/common/ScrollReveal";
import { articlesData } from "@/config/clinic";
import {
  Clock,
  Calendar,
  Share2,
  Copy,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  ShieldAlert,
  Bookmark,
  CheckCircle2,
} from "lucide-react";
import ArticleClientActions from "./ArticleClientActions";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return articlesData.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = articlesData.find((a) => a.slug === params.slug);
  if (!article) {
    return { title: "المقال غير موجود" };
  }

  return {
    title: `${article.title} | المكتبة المعرفية`,
    description: article.excerpt,
  };
}

export default function ArticleDetailPage({ params }: PageProps) {
  const article = articlesData.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Related articles
  const relatedArticles = articlesData
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <div className="py-8 lg:py-14 bg-ivory-100">
      {/* Top Client-side Reading Progress & Share Helper */}
      <ArticleClientActions title={article.title} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-right">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "المكتبة المعرفية", href: "/knowledge" },
            { label: article.title },
          ]}
        />

        {/* Article Header */}
        <ScrollReveal animation="fade-up">
          <header className="space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-forest-100 text-forest-800 text-xs font-semibold px-3 py-1 rounded-full font-ibm">
                {article.category}
              </span>
              <span className="text-xs text-charcoal-500 font-ibm flex items-center gap-1">
                <Clock size={13} className="text-terracotta-500" />
                <span>{article.readTime}</span>
              </span>
              <span className="text-xs text-charcoal-500 font-ibm">
                • نشر في {article.publishedDate}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-900 leading-snug font-alexandria">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-charcoal-700 font-ibm leading-relaxed">
              {article.excerpt}
            </p>

            {/* Author & Reviewer Info */}
            <div className="p-4 rounded-2xl bg-white border border-sage-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-sand-300">
                  <Image
                    src={article.author.image}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-sm font-bold text-forest-900 font-ibm block">
                    {article.author.name}
                  </span>
                  <span className="text-xs text-forest-700 font-ibm block">
                    {article.author.role}
                  </span>
                </div>
              </div>

              <div className="text-xs text-charcoal-500 font-ibm bg-sand-50 py-1.5 px-3 rounded-xl border border-sand-200">
                {article.reviewerPlaceholder}
              </div>
            </div>
          </header>
        </ScrollReveal>

        {/* Featured Cover Image */}
        <ScrollReveal animation="scale-up" delay={0.1}>
          <div className="relative h-[340px] sm:h-[460px] lg:h-[480px] w-full arch-top overflow-hidden shadow-soft border-4 border-white bg-sand-100">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              className={`object-cover`}
            />
          </div>
        </ScrollReveal>

        {/* Table of Contents */}
        {article.tableOfContents && article.tableOfContents.length > 0 && (
          <ScrollReveal animation="fade-in">
            <nav
              aria-label="فهرس المقال"
              className="bg-sand-100/80 p-6 rounded-3xl border border-sand-200 space-y-3"
            >
              <span className="text-xs uppercase tracking-widest font-semibold text-terracotta-600 font-ibm block">
                فهرس المحتوى
              </span>
              <ul className="space-y-2">
                {article.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <a
                      href={`#${toc.id}`}
                      className="text-xs sm:text-sm text-forest-800 hover:text-forest-600 hover:underline font-ibm"
                    >
                      {toc.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </ScrollReveal>
        )}

        {/* Article Body Content */}
        <div className="space-y-10">
          {article.contentSections.map((section, sIdx) => (
            <ScrollReveal key={section.id} animation="fade-up" delay={Math.min(sIdx * 0.05, 0.2)}>
              <section id={section.id} className="space-y-4 pt-2">
                <h2 className="font-alexandria font-bold text-xl sm:text-2xl text-forest-900 border-r-4 border-forest-500 pr-3">
                  {section.heading}
                </h2>

                <div className="space-y-3.5 text-sm sm:text-base text-charcoal-700 font-ibm leading-relaxed">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Pull quote if available */}
                {section.pullQuote && (
                  <blockquote className="my-6 p-6 rounded-3xl bg-forest-900 text-ivory-100 text-base sm:text-lg font-alexandria leading-relaxed border-r-4 border-terracotta-400">
                    «{section.pullQuote}»
                  </blockquote>
                )}

                {/* Key takeaways if available */}
                {section.keyTakeaways && (
                  <div className="my-5 p-5 bg-sand-50 rounded-2xl border border-sand-200 space-y-2">
                    <span className="text-xs font-bold text-forest-900 font-ibm block">
                      خلاصات مفتاحية:
                    </span>
                    <ul className="space-y-1.5 text-xs text-charcoal-700 font-ibm">
                      {section.keyTakeaways.map((point, kIdx) => (
                        <li key={kIdx} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-forest-600 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            </ScrollReveal>
          ))}
        </div>

        {/* Medical Disclaimer */}
        <ScrollReveal animation="fade-in">
          <div className="p-4 rounded-2xl bg-sand-200/60 border border-sand-300 text-xs text-charcoal-700 font-ibm flex items-center gap-3">
            <ShieldAlert size={20} className="text-terracotta-600 flex-shrink-0" />
            <p className="leading-relaxed">
              <strong>تنويه إكلينيكي مهم:</strong> هذا المحتوى مقدم لأغراض التثقيف
              والتوعية العامة فقط، ولا يُقصد به تقديم تشخيص طبي مباشر أو استبدال
              الاستشارة السريرية مع مختص مؤهل. إذا كنت تعاني من أعراض مستمرة، ننصحك
              بطلب استشارة فردية.
            </p>
          </div>
        </ScrollReveal>

        {/* Related Articles */}
        <ScrollReveal animation="fade-up">
          <div className="pt-8 border-t border-sand-200 space-y-6">
            <h3 className="font-alexandria font-bold text-xl text-forest-900">
              مقالات ذات صلة قد تهمك
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white p-6 rounded-3xl border border-sage-200/60 shadow-soft flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] text-forest-700 font-ibm block font-semibold">
                      {rel.category} • {rel.readTime}
                    </span>
                    <h4 className="font-alexandria font-bold text-base text-forest-900">
                      <Link href={`/knowledge/${rel.slug}`} className="hover:underline">
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-charcoal-600 font-ibm line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-sand-100 mt-4 flex justify-between items-center text-xs">
                    <span className="text-charcoal-500 font-ibm">{rel.author.name}</span>
                    <Link
                      href={`/knowledge/${rel.slug}`}
                      className="text-forest-700 font-semibold inline-flex items-center gap-1 hover:underline"
                    >
                      <span>قراءة</span>
                      <ArrowLeft size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Back to Knowledge Center */}
        <div className="pt-4 text-center">
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-forest-700 hover:text-forest-900 py-3 px-6 rounded-2xl border border-sage-300 hover:bg-white transition-colors"
          >
            <ArrowRight size={15} />
            <span>العودة إلى كافة مقالات المكتبة المعرفية</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
