"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { clinicConfig } from "@/config/clinic";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldAlert,
  Building,
  Navigation,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [agreePrivacy, setAgreePrivacy] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("يرجى إدخال اسمك الكريم.");
      return;
    }
    if (!contactInfo.trim()) {
      setErrorMsg("يرجى إدخال رقم الهاتف أو البريد الإلكتروني للتواصل.");
      return;
    }
    if (!message.trim()) {
      setErrorMsg("يرجى كتابة رسالتك أو استفسارك الإداري.");
      return;
    }
    if (!agreePrivacy) {
      setErrorMsg("يرجى الموافقة على شروط الخصوصية.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <div className="py-8 lg:py-14 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "تواصل معنا" }]} />

        {/* Hero Section */}
        <div className="text-right space-y-4 max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-terracotta-600 font-ibm block">
            قنوات الاتصال والاستفسار
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
            نحن هنا للاستماع والإجابة عن كل تساؤل.
          </h1>
          <p className="text-base sm:text-lg text-charcoal-700 font-ibm leading-relaxed">
            يسعد فريق سكينة استقبال استفساراتك حول المواعيد والخدمات عبر قنوات
            متعددة تراعي راحتك وخصوصيتك.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
          {/* Phone */}
          <div className="bg-white p-6 rounded-3xl border border-sage-200/70 shadow-soft space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-forest-50 text-forest-700 flex items-center justify-center">
              <Phone size={20} />
            </div>
            <h3 className="font-alexandria font-bold text-forest-900 text-base">
              الاتصال الهاتفي
            </h3>
            <p className="text-xs text-charcoal-500 font-ibm">
              للحجز والاستفسارات المباشرة:
            </p>
            <a
              href={clinicConfig.contact.phoneLink}
              className="text-sm font-bold text-forest-700 hover:text-forest-900 block pt-1"
              dir="ltr"
            >
              {clinicConfig.contact.phoneDisplay}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white p-6 rounded-3xl border border-sage-200/70 shadow-soft space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-sage-100 text-forest-700 flex items-center justify-center">
              <MessageCircle size={20} />
            </div>
            <h3 className="font-alexandria font-bold text-forest-900 text-base">
              محادثة واتساب
            </h3>
            <p className="text-xs text-charcoal-500 font-ibm">
              تواصل كتابي سريع وسري:
            </p>
            <a
              href={clinicConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-forest-700 hover:text-forest-900 block pt-1"
              dir="ltr"
            >
              {clinicConfig.contact.whatsappDisplay}
            </a>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-3xl border border-sage-200/70 shadow-soft space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-sand-100 text-forest-700 flex items-center justify-center">
              <Mail size={20} />
            </div>
            <h3 className="font-alexandria font-bold text-forest-900 text-base">
              البريد الإلكتروني
            </h3>
            <p className="text-xs text-charcoal-500 font-ibm">
              للمراسلات الإدارية والشراكات:
            </p>
            <a
              href={`mailto:${clinicConfig.contact.email}`}
              className="text-xs font-bold text-forest-700 hover:text-forest-900 block pt-1 break-all"
            >
              {clinicConfig.contact.email}
            </a>
          </div>

          {/* Working Hours */}
          <div className="bg-white p-6 rounded-3xl border border-sage-200/70 shadow-soft space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-terracotta-50 text-terracotta-700 flex items-center justify-center">
              <Clock size={20} />
            </div>
            <h3 className="font-alexandria font-bold text-forest-900 text-base">
              أوقات العمل
            </h3>
            <div className="text-xs text-charcoal-600 font-ibm space-y-1 pt-1">
              {clinicConfig.contact.workingHours.map((wh, idx) => (
                <div key={idx} className="leading-snug">
                  <span className="font-semibold text-forest-900">{wh.days}:</span> {wh.hours}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content: Form & Location Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-sage-200/70 shadow-card text-right space-y-6">
            <div className="space-y-1">
              <h2 className="font-alexandria font-bold text-2xl text-forest-900">
                أرسل استفسارك الإداري
              </h2>
              <p className="text-xs text-charcoal-500 font-ibm">
                يسعدنا الرد على رسالتك خلال ساعات العمل الرسمية.
              </p>
            </div>

            {/* Safety Reminder */}
            <div className="p-3 bg-sand-100 rounded-2xl border border-sand-200 text-xs text-charcoal-600 font-ibm flex items-start gap-2.5">
              <AlertCircle size={16} className="text-terracotta-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>تذكير مهم:</strong> يرجى عدم كتابة تفاصيل طبية أو أعراض نفسية حساسة في هذا النموذج العام. هذه الصفحة مخصصة للاستفسارات الإدارية والتنظيمية فقط.
              </span>
            </div>

            {isSuccess ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-forest-50 text-forest-700 flex items-center justify-center mx-auto border-2 border-forest-500">
                  <CheckCircle2 size={30} />
                </div>
                <h3 className="font-alexandria font-bold text-xl text-forest-900">
                  تم إرسال رسالتك بنجاح
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 font-ibm max-w-sm mx-auto">
                  شكراً لتواصلك. هذا نموذج توضيحي (Demo)، وسيتم الرد على استفسارك التجريبي قريباً.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setName("");
                    setContactInfo("");
                    setSubject("");
                    setMessage("");
                  }}
                  className="text-xs text-forest-700 font-semibold underline underline-offset-4 pt-2"
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-terracotta-50 text-terracotta-700 text-xs font-ibm rounded-xl border border-terracotta-200">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-forest-900 font-ibm mb-1.5">
                    الاسم الكامل <span className="text-terracotta-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="مثال: عبد العزيز المنصور"
                    className="w-full px-4 py-3 rounded-2xl border border-sage-300 text-sm focus:border-forest-500 bg-sand-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="contactInfo" className="block text-xs font-bold text-forest-900 font-ibm mb-1.5">
                    رقم الجوال أو البريد الإلكتروني <span className="text-terracotta-500">*</span>
                  </label>
                  <input
                    id="contactInfo"
                    type="text"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="05X XXX XXXX أو email@example.com"
                    className="w-full px-4 py-3 rounded-2xl border border-sage-300 text-sm focus:border-forest-500 bg-sand-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-forest-900 font-ibm mb-1.5">
                    موضوع الاستفسار
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="استفسار عن حجز / خدمات الشركات / استشارات عن بعد..."
                    className="w-full px-4 py-3 rounded-2xl border border-sage-300 text-sm focus:border-forest-500 bg-sand-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-forest-900 font-ibm mb-1.5">
                    نص الرسالة أو الاستفسار الإداري <span className="text-terracotta-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="اكتب استفسارك هنا..."
                    className="w-full px-4 py-3 rounded-2xl border border-sage-300 text-sm focus:border-forest-500 bg-sand-50/50"
                  />
                </div>

                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-charcoal-600 font-ibm">
                    <input
                      type="checkbox"
                      checked={agreePrivacy}
                      onChange={(e) => setAgreePrivacy(e.target.checked)}
                      className="mt-0.5 rounded border-sage-400 text-forest-600 focus:ring-forest-500 w-4 h-4"
                    />
                    <span>
                      أوافق على سياسة الخصوصية وأدرك أن هذه الرسالة ستستخدم فقط للتواصل الإداري.
                    </span>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 text-ivory-100 font-semibold text-sm py-3.5 px-6 rounded-2xl shadow-sm transition-all disabled:opacity-50"
                  >
                    <Send size={15} />
                    <span>{isSubmitting ? "جاري الإرسال..." : "إرسال الاستفسار"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Location & Map Placeholder */}
          <div className="lg:col-span-5 space-y-6 text-right">
            <div className="bg-sand-100/80 rounded-3xl p-8 border border-sand-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center">
                  <Building size={20} />
                </div>
                <div>
                  <h3 className="font-alexandria font-bold text-lg text-forest-900">
                    مقر عيادات سكينة (نموذج توضيحي)
                  </h3>
                  <span className="text-xs text-charcoal-500 font-ibm">الرياض، المملكة العربية السعودية</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-charcoal-700 font-ibm leading-relaxed">
                {clinicConfig.contact.addressDisplay}
              </p>

              {/* Architectural Map Demonstration Graphic */}
              <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-forest-900 p-6 flex flex-col justify-between text-ivory-100 border border-forest-800">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-sage-300 font-ibm">
                    خريطة الموقع الإرشادية (Demo Map)
                  </span>
                  <h4 className="font-alexandria font-bold text-base">
                    طريق الملك فهد — تقاطع شارع النخيل
                  </h4>
                </div>

                {/* Stylized geometric grid representing location */}
                <div className="relative py-4 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-forest-700/60 border border-sage-300/40 flex items-center justify-center animate-pulse">
                    <MapPin size={24} className="text-terracotta-400" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-sage-200/90 font-ibm">
                  <span>مواقف مخصصة ومصاعد خاصة</span>
                  <span className="inline-flex items-center gap-1 text-sage-300">
                    <Navigation size={12} />
                    <span>مدخل مريح ومحمي</span>
                  </span>
                </div>
              </div>

              <div className="text-[11px] text-charcoal-500 font-ibm leading-relaxed">
                * العنوان والخريطة أعلاه هي عناصر توضيحية لنموذج العرض (Portfolio Demo). عند التدشين الفعلي للعيادة يتم ربط الموقع الجغرافي الدقيق وتكامل Google Maps.
              </div>
            </div>

            {/* Quick Booking CTA Box */}
            <div className="bg-forest-900 text-ivory-100 rounded-3xl p-6 text-center space-y-3">
              <h4 className="font-alexandria font-bold text-lg">
                هل ترغب بحجز جلسة مباشرة؟
              </h4>
              <p className="text-xs text-sage-200 font-ibm">
                يمكنك تخطي المراسلات وحجز موعدك فوراً عبر معالج الحجز التفاعلي:
              </p>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 w-full bg-sage-200 hover:bg-white text-forest-950 font-semibold text-xs py-3 px-5 rounded-xl transition-all"
              >
                <span>الانتقال لبوابة الحجز</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Emergency Assistance Notice */}
        <div className="p-5 rounded-3xl bg-forest-900 text-ivory-100 border border-forest-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-terracotta-500/20 text-terracotta-300 flex items-center justify-center flex-shrink-0">
              <ShieldAlert size={22} />
            </div>
            <div className="text-right">
              <strong className="text-sm font-alexandria font-bold text-terracotta-300 block">
                هل تواجه أزمة نفسية طارئة أو خطراً وشيكاً؟
              </strong>
              <p className="text-xs text-sage-200 font-ibm leading-relaxed mt-0.5">
                العيادات ليست خدمة طوارئ فورية. يرجى الاتصال فوراً برقم الطوارئ الوطني (997 أو 911) أو التوجه لأقرب مركز طوارئ صحي.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 text-xs font-bold bg-forest-800 px-4 py-2 rounded-xl text-terracotta-300 border border-forest-700">
            طوارئ: 997 / 911
          </div>
        </div>
      </div>
    </div>
  );
}
