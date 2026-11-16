import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { SakinaEmblem } from "@/components/brand/Logo";

export default function BrandPhilosophy() {
  return (
    <section className="py-20 bg-sand-100/60 border-y border-sand-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Header & Narrative */}
          <div className="lg:col-span-5 space-y-5 text-right">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta-500 font-ibm block">
              فلسفة العيادة ومنهجنا
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-900 leading-tight">
              لأن لكل تجربة إنسانية قصتها الخاصة.
            </h2>

            <p className="text-charcoal-700 text-base leading-relaxed font-ibm">
              نرى في سكينة أن الصعوبات النفسية ليست عيباً في الشخصية أو دليلاً على
              العجز، بل هي استجابة إنسانية طبيعية لضغوط متراكمة أو تحولات كبرى.
              مهمتنا ليست إعطاء نصائح عامة، بل مرافقتك بأسلوب علمي رصين لاستعادة
              وضوحك الداخلي وقدرتك على الاختيار.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-forest-700 hover:text-forest-900 font-semibold text-sm group"
              >
                <span>تعرّف بالتفصيل على فلسفتنا ورؤيتنا</span>
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>

          {/* 3 Core Pillars in Asymmetric Editorial Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white p-6 rounded-3xl border border-sage-200/60 shadow-soft hover:shadow-card transition-shadow text-right space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-forest-50 text-forest-700 flex items-center justify-center font-bold text-base">
                01
              </div>
              <h3 className="font-alexandria font-bold text-forest-900 text-lg">
                الاستماع الواعي
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-ibm">
                مساحة حرة تماماً من التقييم أو الأحكام المسبقة. ننصت لما تقوله وما تعجز الكلمات عن التعبير عنه.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-sage-200/60 shadow-soft hover:shadow-card transition-shadow text-right space-y-3 sm:translate-y-3">
              <div className="w-10 h-10 rounded-2xl bg-terracotta-50 text-terracotta-600 flex items-center justify-center font-bold text-base">
                02
              </div>
              <h3 className="font-alexandria font-bold text-forest-900 text-lg">
                الأدلة العلمية
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-ibm">
                نعتمد مدارس علاجية معترفاً بها عالمياً (CBT, ACT) تقدم أدوات ملموسة واستراتيجيات مستدامة.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-sage-200/60 shadow-soft hover:shadow-card transition-shadow text-right space-y-3 sm:translate-y-6">
              <div className="w-10 h-10 rounded-2xl bg-sage-50 text-sage-600 flex items-center justify-center font-bold text-base">
                03
              </div>
              <h3 className="font-alexandria font-bold text-forest-900 text-lg">
                السرية والكرامة
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-ibm">
                حماية خصوصيتك التزام مهني وقانوني مطلق، نطبقه في تصميم بيئة العيادة وأنظمتنا الرقمية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
