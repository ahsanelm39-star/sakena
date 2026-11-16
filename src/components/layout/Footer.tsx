import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { clinicConfig, servicesData } from "@/config/clinic";
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldAlert, ArrowUpLeft } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-ivory-100 pt-16 pb-24 md:pb-16 border-t border-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-forest-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="full" theme="light" />
            <p className="text-sage-200/90 text-sm leading-relaxed max-w-sm font-ibm">
              عيادات سكينة للصحة النفسية والاستشارات المتخصصة. بيئة مهنية دافئة
              تحترم خصوصيتك، وتوفر الرعاية المتكاملة المبنية على الأدلة العلمية
              لمساعدتك على فهم ذاتك واستعادة توازنك الداخلي.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-sage-300/80 font-medium block mb-2">
                ساعات العمل والاستقبال
              </span>
              <div className="space-y-1 text-xs text-ivory-200/80 font-ibm">
                {clinicConfig.contact.workingHours.map((wh, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Clock size={13} className="text-terracotta-300 flex-shrink-0" />
                    <span>{wh.days}: {wh.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h3 className="font-alexandria text-base font-semibold text-ivory-100">
              التنقل
            </h3>
            <ul className="space-y-2.5 text-sm text-sage-200/80 font-ibm">
              <li>
                <Link href="/" className="hover:text-ivory-100 transition-colors inline-flex items-center gap-1.5">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-ivory-100 transition-colors inline-flex items-center gap-1.5">
                  عن سكينة وفلسفتنا
                </Link>
              </li>
              <li>
                <Link href="/specialists" className="hover:text-ivory-100 transition-colors inline-flex items-center gap-1.5">
                  فريق الأخصائيين
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="hover:text-ivory-100 transition-colors inline-flex items-center gap-1.5">
                  المكتبة المعرفية
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-ivory-100 transition-colors inline-flex items-center gap-1.5">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ivory-100 transition-colors inline-flex items-center gap-1.5">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="space-y-4">
            <h3 className="font-alexandria text-base font-semibold text-ivory-100">
              خدمات العيادة
            </h3>
            <ul className="space-y-2.5 text-sm text-sage-200/80 font-ibm">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-ivory-100 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-terracotta-300 hover:text-terracotta-200 font-medium inline-flex items-center gap-1 pt-1"
                >
                  <span>كافة الخدمات</span>
                  <ArrowUpLeft size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-alexandria text-base font-semibold text-ivory-100">
              قنوات التواصل
            </h3>
            <div className="space-y-3 text-sm text-sage-200/90 font-ibm">
              <a
                href={clinicConfig.contact.phoneLink}
                className="flex items-center gap-2.5 hover:text-ivory-100 transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-forest-800 flex items-center justify-center text-terracotta-300">
                  <Phone size={15} />
                </span>
                <span dir="ltr">{clinicConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={clinicConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-ivory-100 transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-forest-800 flex items-center justify-center text-sage-300">
                  <MessageCircle size={15} />
                </span>
                <span dir="ltr">{clinicConfig.contact.whatsappDisplay}</span>
              </a>

              <a
                href={`mailto:${clinicConfig.contact.email}`}
                className="flex items-center gap-2.5 hover:text-ivory-100 transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-forest-800 flex items-center justify-center text-ivory-200">
                  <Mail size={15} />
                </span>
                <span className="text-xs break-all">{clinicConfig.contact.email}</span>
              </a>

              <div className="flex items-start gap-2.5 pt-1 text-xs text-sage-300/80">
                <MapPin size={16} className="text-terracotta-300 flex-shrink-0 mt-0.5" />
                <span>{clinicConfig.contact.addressDisplay}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Medical & Emergency Disclaimer */}
        <div className="my-8 p-4 rounded-2xl bg-forest-800/60 border border-forest-700/60 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-terracotta-400/20 text-terracotta-300 flex items-center justify-center flex-shrink-0">
            <ShieldAlert size={18} />
          </div>
          <p className="text-xs text-sage-200/90 leading-relaxed font-ibm">
            <strong className="text-terracotta-300 font-semibold ml-1">تنويه إكلينيكي مهم:</strong>
            {clinicConfig.demoNotice.disclaimer}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sage-300/70 font-ibm">
          <p>
            © {new Date().getFullYear()} عيادات سَكينة للصحة النفسية (SAKINA). جميع الحقوق محفوظة (نموذج عرض محفظة أعمال).
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-ivory-100 transition-colors underline-offset-4 hover:underline">
              سياسة الخصوصية وسرية البيانات
            </Link>
            <Link href="/faq" className="hover:text-ivory-100 transition-colors underline-offset-4 hover:underline">
              مساعدة وأسئلة
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
