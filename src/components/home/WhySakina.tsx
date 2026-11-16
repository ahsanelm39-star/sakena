import React from "react";
import Image from "next/image";
import { ShieldCheck, Ear, Award, MonitorSmartphone, Check } from "lucide-react";

const PRINCIPLES = [
  {
    title: "خصوصية صارمة ومصونة",
    description: "تعتمد عيادتنا تصميماً معمارياً ورقياً يضمن العزل الصوتي والانفصال التام بين المراجعين، مع أنظمة تشفير رقمية مشددة لملفات المراجعين.",
    icon: <ShieldCheck size={24} />,
    color: "bg-forest-100 text-forest-700",
  },
  {
    title: "إنصات واعٍ يبدأ قبل العلاج",
    description: "لا نختزل مراجعنا في تشخيص طبي جاف؛ نمنحك الوقت الكافي لمشاركة قصتك وأفكارك دون استعجال أو مقاطعة.",
    icon: <Ear size={24} />,
    color: "bg-terracotta-100 text-terracotta-700",
  },
  {
    title: "كفاءات إكلينيكية مرخصة ومؤهلة",
    description: "يضم فريقنا نخبة من استشاريي وأخصائيي الطب النفسي وعلم النفس العيادي ذوي الممارسة المهنية المستندة لأحدث البروتوكولات.",
    icon: <Award size={24} />,
    color: "bg-sage-100 text-forest-800",
  },
  {
    title: "مرونة في نمط الاستشارة",
    description: "سواء كنت تفضل الحضور الهادئ في مقر العيادة أو الاستشارة المرئية من منزلك، نضمن نفس مستوى الرعاية والجودة.",
    icon: <MonitorSmartphone size={24} />,
    color: "bg-lavender-200/60 text-forest-800",
  },
];

export default function WhySakina() {
  return (
    <section className="py-20 lg:py-28 bg-sand-100/70 border-t border-sand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Side */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative arch-full overflow-hidden max-w-sm mx-auto shadow-card border-4 border-white">
              <div className="relative h-[480px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=900"
                  alt="التصميم المعماري الدافئ والمواد الطبيعية في عيادات سكينة"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
              </div>

              {/* Inset Badge */}
              <div className="absolute bottom-6 inset-x-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-sage-200 text-right">
                <span className="text-xs font-bold text-forest-900 block font-alexandria">
                  بيئة مُصممة للتهدئة الحركية والحسية
                </span>
                <span className="text-[11px] text-charcoal-600 block mt-1 font-ibm">
                  ألوان ترابية دافئة، إضاءة غير مباشرة، ومواد طبيعية تساعد جهازك العصبي على الاسترخاء.
                </span>
              </div>
            </div>
          </div>

          {/* Text and Principles Side */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 text-right">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-terracotta-600 font-ibm block">
                لماذا سكينة؟
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-900 leading-tight">
                مبادئ راسخة في تقديم الرعاية النفسية الإنسانية.
              </h2>
              <p className="text-sm sm:text-base text-charcoal-700 font-ibm leading-relaxed">
                تأسست عيادات سكينة لتكون بديلاً مطمئناً عن البيئات الطبية الباردة. صممنا كل تفصيلة لتشعر بالراحة والأمان منذ لحظة وصولك.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PRINCIPLES.map((principle, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl border border-sage-200/60 shadow-soft text-right space-y-2.5"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${principle.color}`}
                  >
                    {principle.icon}
                  </div>
                  <h3 className="font-alexandria font-bold text-forest-900 text-base">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed font-ibm">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
