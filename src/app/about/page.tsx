import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { SakinaEmblem } from "@/components/brand/Logo";
import { specialistsData } from "@/config/clinic";
import ScrollReveal from "@/components/common/ScrollReveal";
import {
  Heart,
  Eye,
  ShieldCheck,
  Sparkles,
  ArrowLeft,
  Calendar,
  CheckCircle,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "عن سكينة | فلسفتنا ورؤيتنا في الرعاية النفسية",
  description:
    "تعرف على قصة تأسيس عيادات سكينة للصحة النفسية، رؤيتنا ورسالتنا، ومبادئنا الإنسانية في تقديم الاستشارات النفسية المتخصصة في الرياض وعن بُعد.",
};

const CLINIC_SPACES = [
  {
    title: "غرف الاستشارة الهادئة",
    description: "إضاءة دافئة غير مباشرة، أثاث مريح، وعزل صوتي فائق لضمان الخصوصية وسكينة الحديث.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "مساحات الانتظار المستقلة",
    description: "تصميم مدروس يمنع التكدس ويضمن عدم التقاء المراجعين، مع ممرات وصول آمنة وخاصة.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "استشارات عن بُعد بتقنية مشفرة",
    description: "منصة مرئية آمنة تمنحك نفس معايير الخصوصية والجودة من مكانك المفضل دون عناء التنقل.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
  },
];

export default function AboutPage() {
  return (
    <div className="py-8 lg:py-14 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "عن سكينة" }]} />

        {/* Editorial Hero */}
        <ScrollReveal animation="fade-up">
          <div className="text-right space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-200/80 text-forest-800 text-xs font-semibold">
              <span>فلسفة سكينة</span>
              <span>•</span>
              <span>من نحن</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
              الرعاية تبدأ من فهم الإنسان، لا من اختزال تجربته.
            </h1>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-ibm">
              انطلقت عيادات سكينة من إيمان عميق بأن الصحة النفسية ليست رفاهية
              إضافية، بل هي الأساس المتين الذي يستند عليه استقرار الفرد، وسعادة
              أسرته، وإنتاجيته في مجتمعه. نسعى لإعادة صياغة تجربة طلب الاستشارة لتكون
              خطوة طبيعية، كريمة، ومطمئنة.
            </p>
          </div>
        </ScrollReveal>

        {/* Clinic Story Section */}
        <ScrollReveal animation="fade-up" delay={0.1}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sage-200/60 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5 text-right">
              <span className="text-xs uppercase tracking-widest font-semibold text-terracotta-600 font-ibm block">
                قصة البداية
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-forest-900 font-alexandria">
                لماذا كانت «سَكينة»؟
              </h2>
              <div className="space-y-4 text-sm text-charcoal-700 leading-relaxed font-ibm">
                <p>
                  لاحظنا أن الكثير ممن يمرون بضغوط نفسية أو قلق أو صعوبات زوجية يترددون
                  طويلاً قبل طلب المساعدة؛ ليس لعدم حاجتهم، بل بسبب القوالب النمطية، أو
                  الخوف من فقدان الخصوصية، أو خشية الدخول في بيئات طبية باردة تُشعرهم
                  بأنهم مجرد أرقام وملفات.
                </p>
                <p>
                  من هنا ولدت فكرة «سَكينة»: عيادة مصممة بروح «الملاذ الآمن». مكان
                  تشعر فيه منذ الخطوة الأولى بالاحترام والهدوء، وتلتقي فيه بمختصين
                  يملكون التأهيل العلمي العالي، والقدرة الإنسانية الفائقة على الإنصات
                  العميق غير المشروط.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden h-[440px] sm:h-[480px] w-full shadow-card border-4 border-sand-100 bg-sand-100">
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200"
                  alt="مساحة حوار واستشارة دافئة ومريحة في عيادات سكينة"
                  fill
                  className="object-cover object-top sm:object-[center_12%]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Vision & Mission Grid */}
        <ScrollReveal
          animation="stagger-container"
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <ScrollReveal animation="stagger-item">
            <div className="bg-sand-100/70 p-8 sm:p-10 rounded-3xl border border-sand-200 text-right space-y-4 h-full">
              <div className="w-12 h-12 rounded-2xl bg-forest-500 text-ivory-100 flex items-center justify-center">
                <Eye size={24} />
              </div>
              <h3 className="font-alexandria font-bold text-2xl text-forest-900">
                رؤيتنا
              </h3>
              <p className="text-sm text-charcoal-700 font-ibm leading-relaxed">
                أن تكون عيادات سكينة المرجع الأول للرعاية النفسية الرصينة في المملكة
                والمنطقة؛ بيئة رائدة تجمع بين دقة المعايير الإكلينيكية العالمية، ودفء
                التواصل الإنساني المنسجم مع قيم مجتمعنا وخصوصيته.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger-item">
            <div className="bg-sand-100/70 p-8 sm:p-10 rounded-3xl border border-sand-200 text-right space-y-4 h-full">
              <div className="w-12 h-12 rounded-2xl bg-terracotta-500 text-ivory-100 flex items-center justify-center">
                <Heart size={24} />
              </div>
              <h3 className="font-alexandria font-bold text-2xl text-forest-900">
                رسالتنا
              </h3>
              <p className="text-sm text-charcoal-700 font-ibm leading-relaxed">
                تمكين كل مراجع من استكشاف ذاته وتجاوز تحدياته النفسية من خلال توفير
                جلسات استشارية مبنية على الأدلة، تحترم كرامته وسريته، وتزوده بأدوات
                عملية مستدامة تعينه على عيش حياة متزنة وذات مغزى.
              </p>
            </div>
          </ScrollReveal>
        </ScrollReveal>

        {/* Core Care Principles */}
        <div className="space-y-8 text-right">
          <ScrollReveal animation="fade-up">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-semibold text-forest-600 font-ibm block">
                قواعدنا المهنية
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-forest-900 font-alexandria mt-1">
                أركان الرعاية في سكينة
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal
            animation="stagger-container"
            staggerDelay={0.08}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <ScrollReveal animation="stagger-item">
              <div className="bg-white p-6 rounded-3xl border border-sage-200/60 shadow-soft text-right space-y-3 h-full">
                <span className="w-8 h-8 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <h4 className="font-alexandria font-bold text-forest-900 text-lg">
                  الحيادية والإنصات
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed font-ibm">
                  لا نطلق أحكاماً أخلاقية أو اجتماعية؛ مساحتنا مخصصة للاستماع الواعي والفهم التشاركي.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="stagger-item">
              <div className="bg-white p-6 rounded-3xl border border-sage-200/60 shadow-soft text-right space-y-3 h-full">
                <span className="w-8 h-8 rounded-xl bg-terracotta-50 text-terracotta-700 flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <h4 className="font-alexandria font-bold text-forest-900 text-lg">
                  التشخيص المسؤول
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed font-ibm">
                  لا نتسرع في إطلاق المسميات التشخيصية؛ نقيّم الحالة ككل في سياقها الحياتي والبيئي.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="stagger-item">
              <div className="bg-white p-6 rounded-3xl border border-sage-200/60 shadow-soft text-right space-y-3 h-full">
                <span className="w-8 h-8 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <h4 className="font-alexandria font-bold text-forest-900 text-lg">
                  تمكين المستشير
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed font-ibm">
                  نساعدك على بناء قدراتك الذاتية للاستغناء عن الجلسات تدريجياً، بدلاً من إيجاد اعتمادية مستمرة.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="stagger-item">
              <div className="bg-white p-6 rounded-3xl border border-sage-200/60 shadow-soft text-right space-y-3 h-full">
                <span className="w-8 h-8 rounded-xl bg-lavender-100 text-forest-800 flex items-center justify-center text-sm font-bold">
                  4
                </span>
                <h4 className="font-alexandria font-bold text-forest-900 text-lg">
                  السرية التامة
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed font-ibm">
                  حماية تفاصيلك أمانة نظامية وأخلاقية صارمة، لا تخضع لأي تهاون أو مشاركة دون موافقتك.
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </div>

        {/* Visual Environment Showcase */}
        <div className="space-y-8 text-right">
          <ScrollReveal animation="fade-up">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-semibold text-terracotta-600 font-ibm block">
                بيئة العيادة
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-forest-900 font-alexandria mt-1">
                مساحات صُممت لتحتضن هدوءك
              </h2>
              <p className="text-sm text-charcoal-600 font-ibm mt-2">
                كل تفصيل في التصميم المعماري والألوان والمواد اختير بعناية لتخفيف التوتر الحسي وتهدئة الجهاز العصبي.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal
            animation="stagger-container"
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {CLINIC_SPACES.map((space, idx) => (
              <ScrollReveal key={idx} animation="stagger-item">
                <div
                  className="bg-white rounded-3xl overflow-hidden border border-sage-200/60 shadow-soft text-right flex flex-col h-full"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={space.image}
                      alt={space.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h4 className="font-alexandria font-bold text-forest-900 text-lg">
                      {space.title}
                    </h4>
                    <p className="text-xs text-charcoal-600 font-ibm leading-relaxed">
                      {space.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </ScrollReveal>
        </div>

        {/* Team Preview CTA */}
        <ScrollReveal animation="scale-up" className="bg-forest-900 text-ivory-100 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-forest-800 border border-forest-700">
            <Users size={28} className="text-sage-300" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-alexandria max-w-xl mx-auto">
            فريق مؤهل من الاستشاريين والأخصائيين في خدمتك
          </h2>

          <p className="text-sm text-sage-200/90 font-ibm max-w-xl mx-auto leading-relaxed">
            يضم فريق سكينة نخبة من حاملي الشهادات العليا في الطب النفسي وعلم النفس
            العيادي والإرشاد الأسري، المشهود لهم بالالتزام الأخلاقي.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/specialists"
              className="inline-flex items-center gap-2 bg-sage-200 hover:bg-white text-forest-900 text-sm font-semibold px-7 py-3.5 rounded-2xl transition-all"
            >
              <span>تصفح ملفات الأخصائيين</span>
              <ArrowLeft size={16} />
            </Link>

            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-700 text-ivory-100 text-sm font-medium px-6 py-3.5 rounded-2xl border border-forest-700 transition-colors"
            >
              <Calendar size={16} />
              <span>طلب موعد استشارة</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
