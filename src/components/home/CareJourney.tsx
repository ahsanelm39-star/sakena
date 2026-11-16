import React from "react";
import Link from "next/link";
import { Search, Send, PhoneCall, HeartHandshake, ArrowLeft } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "اختيار الخدمة والتفضيلات",
    description: "تصفح خدماتنا المتخصصة واختر نوع الاستشارة ومختصك المفضل أو اطلب المساعدة في التوجيه.",
    icon: <Search size={20} />,
  },
  {
    step: "02",
    title: "إرسال طلب الموعد المبدئي",
    description: "حدد اليوم والوقت المناسب لجدولك، وقدم بيانات الاتصال الأساسية عبر نموذج آمن وسهل.",
    icon: <Send size={20} />,
  },
  {
    step: "03",
    title: "تواصل فريق التنسيق",
    description: "يتواصل معك فريق الاستقبال باحترافية لتأكيد الموعد وتقديم إرشادات الجلسة الأولى والإجابة عن أي استفسار.",
    icon: <PhoneCall size={20} />,
  },
  {
    step: "04",
    title: "بدء جلسة الاستشارة",
    description: "تلتقي بالمختص في مساحة آمنة وسرية، حضورياً في بيئة العيادة الهادئة أو عن بُعد عبر اتصال مشفر.",
    icon: <HeartHandshake size={20} />,
  },
];

export default function CareJourney() {
  return (
    <section className="py-20 lg:py-28 bg-ivory-50 border-t border-sage-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-terracotta-600 font-ibm block">
            خطوات بسيطة وواضحة
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-900 leading-tight">
            رحلتك معنا نحو استعادة التوازن.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-ibm leading-relaxed">
            صممنا مسار حجز واستقبال الاستشارات ليكون سلساً، مطمئناً، ومراعياً لأقصى درجات الخصوصية والراحة.
          </p>
        </div>

        {/* Steps Grid with Connected Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-sage-200/70 shadow-soft hover:shadow-card transition-all text-right space-y-4 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest-700 flex items-center justify-center group-hover:bg-forest-500 group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <span className="font-alexandria font-bold text-sage-300 group-hover:text-terracotta-400 transition-colors text-2xl">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-alexandria font-bold text-forest-900 text-lg">
                  {step.title}
                </h3>

                <p className="text-xs text-charcoal-600 leading-relaxed font-ibm">
                  {step.description}
                </p>
              </div>

              <div className="pt-2 border-t border-sand-100 flex items-center justify-between text-[11px] text-sage-500 font-ibm">
                <span>خطوة {idx + 1} من 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper */}
        <div className="mt-12 text-center">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-ivory-100 text-sm font-semibold px-8 py-3.5 rounded-full shadow-sm transition-all"
          >
            <span>ابدأ الخطوة الأولى الآن</span>
            <ArrowLeft size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
