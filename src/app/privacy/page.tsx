import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { ShieldCheck, Lock, AlertCircle, FileText, ArrowLeft } from "lucide-react";
import { clinicConfig } from "@/config/clinic";

export const metadata: Metadata = {
  title: "سياسة الخصوصية وسرية البيانات | عيادات سكينة",
  description:
    "سياسة الخصوصية وسرية البيانات لعيادات سكينة للصحة النفسية. تعرف على كيفية التعامل مع بيانات المواعيد، حدود السرية الإكلينيكية، وحماية خصوصيتك.",
};

export default function PrivacyPage() {
  return (
    <div className="py-8 lg:py-14 bg-ivory-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-right">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "سياسة الخصوصية" }]} />

        {/* Hero */}
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-terracotta-600 font-ibm block">
            الالتزام الأخلاقي والنظامي
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
            سياسة الخصوصية وسرية البيانات الإكلينيكية
          </h1>
          <p className="text-sm sm:text-base text-charcoal-700 font-ibm leading-relaxed">
            السرية التامة هي الركيزة الجوهرية التي تبنى عليها علاقتنا بكل مراجع. نوضح هنا التزامنا الصارم بحماية بياناتك الإدارية وسرية جلساتك الاستشارية.
          </p>
        </div>

        {/* Notice of Draft / Portfolio Demo Status */}
        <div className="p-4 rounded-2xl bg-sand-200/80 border border-sand-300 text-xs text-charcoal-700 font-ibm flex items-start gap-3">
          <AlertCircle size={18} className="text-forest-700 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-forest-900 font-semibold ml-1">إشعار مسودة تجريبية (Portfolio Draft):</strong>
            هذه الصفحة هي نموذج تمثيلي لصياغة سياسات الخصوصية في المواقع الطبية. عند التدشين الفعلي للعيادة، تخضع هذه الوثيقة لمراجعة وتكييف قانوني دقيق لضمان الامتثال للأنظمة الصحية ولوائح حماية البيانات الشخصية المعمول بها في المملكة العربية السعودية.
          </p>
        </div>

        {/* Policy Document Sections */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sage-200/70 shadow-soft space-y-10 text-sm text-charcoal-700 font-ibm leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-alexandria font-bold text-xl text-forest-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-forest-50 text-forest-700 flex items-center justify-center text-xs">
                01
              </span>
              <span>المعلومات التي نجمعها عبر الموقع</span>
            </h2>
            <p>
              يقتصر جمع البيانات عبر هذا الموقع الإلكتروني على المعلومات الإدارية الضرورية اللازمة لتنسيق المواعيد والتواصل معك، وتشمل:
            </p>
            <ul className="list-disc pr-6 space-y-1.5 text-xs text-charcoal-600">
              <li>الاسم الكامل أو المفضل للتواصل.</li>
              <li>رقم الهاتف أو وسيلة التواصل المختارة (واتساب / اتصال).</li>
              <li>الخدمة المطلوبة والنمط المفضل (حضوري أو عن بُعد).</li>
              <li>ملاحظات إدارية تنظيمية يقدمها المراجع بمحض إرادته.</li>
            </ul>
            <p className="text-xs text-forest-800 font-medium pt-1">
              * نؤكد التزامنا التام بعدم طلب أو تسجيل أي تفاصيل تشخيصية أو سوابق مرضية حساسة عبر نماذج الموقع العامة.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-4 border-t border-sand-100">
            <h2 className="font-alexandria font-bold text-xl text-forest-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-forest-50 text-forest-700 flex items-center justify-center text-xs">
                02
              </span>
              <span>قدسية السرية داخل الجلسات الاستشارية</span>
            </h2>
            <p>
              جميع الحوارات، الملاحظات الإكلينيكية، والمشاركات التي تتم داخل غرفة الاستشارة أو عبر الاتصال المرئي المشفر تحظى بسرية مهنية وأخلاقية مطلقة. لا يطلع عليها سوى الأخصائي المشرف على حالتك.
            </p>
            <p>
              لا نشارك أي معلومات عن زيارتك أو ملفك مع أي طرف ثالث (بما في ذلك جهات العمل أو أفراد الأسرة) إلا بموافقة خطية وصريحة منك.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-4 border-t border-sand-100">
            <h2 className="font-alexandria font-bold text-xl text-forest-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-forest-50 text-forest-700 flex items-center justify-center text-xs">
                03
              </span>
              <span>الاستثناءات النظامية والأخلاقية للسرية</span>
            </h2>
            <p>
              وفقاً للأنظمة الصحية وأخلاقيات ممارسة مهنة علم النفس والطب النفسي، توجد استثناءات محددة وحصرية يُلزم فيها الأخصائي بالتدخل لحماية الأرواح، وتشمل حصراً:
            </p>
            <ul className="list-disc pr-6 space-y-1.5 text-xs text-charcoal-600">
              <li>وجود تهديد حقيقي ووشيك بوقوع إيذاء شديد للنفس أو الغير.</li>
              <li>شبهات إيذاء جسدي أو إهمال شديد بحق أطفال أو قاصرين أو كبار سن فاقدي الأهلية.</li>
              <li>صدور أمر قضائي صريح وملزم من جهة قضائية مختصة وفق أحكام النظام.</li>
            </ul>
            <p className="text-xs text-charcoal-600">
              وفي هذه الحالات الاستثنائية، يتم إشعار المراجع كلما كان ذلك متاحاً وآمناً، مع قصر الإفصاح على الحد الأدنى الضروري لدرء الخطر فقط.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-4 border-t border-sand-100">
            <h2 className="font-alexandria font-bold text-xl text-forest-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-forest-50 text-forest-700 flex items-center justify-center text-xs">
                04
              </span>
              <span>أمان الاستشارات عن بُعد وتشفير المنصات</span>
            </h2>
            <p>
              تتم الجلسات الافتراضية عبر منصات اتصال مرئي مشفرة بتقنية (End-to-End Encryption) متوافقة مع معايير الأمان الطبية الرقمية. لا تسجل الجلسات المرئية أو الصوتية تحت أي ظرف دون موافقة كتابية صريحة.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-4 border-t border-sand-100">
            <h2 className="font-alexandria font-bold text-xl text-forest-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-forest-50 text-forest-700 flex items-center justify-center text-xs">
                05
              </span>
              <span>حقوق المراجع والتواصل مع مسؤول الخصوصية</span>
            </h2>
            <p>
              يحق لكل مراجع طلب مراجعة بياناته الإدارية المسجلة، أو طلب تصحيحها، أو طلب حذف بيانات الاتصال التسويقية في أي وقت من خلال التواصل مع العيادة عبر البريد الإلكتروني:{" "}
              <a href={`mailto:${clinicConfig.contact.email}`} className="text-forest-700 font-semibold underline">
                {clinicConfig.contact.email}
              </a>
            </p>
          </section>
        </div>

        {/* Back Button */}
        <div className="pt-4 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-forest-700 hover:text-forest-900 py-3 px-6 rounded-2xl border border-sage-300 hover:bg-white transition-colors"
          >
            <ArrowLeft size={15} />
            <span>العودة إلى الصفحة الرئيسية</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
