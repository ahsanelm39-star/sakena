import React from "react";
import Link from "next/link";
import { SakinaEmblem } from "@/components/brand/Logo";
import { ArrowLeft, Home, Calendar } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 text-center bg-ivory-100 flex items-center justify-center min-h-[60vh]">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-sand-200 text-forest-700 flex items-center justify-center mx-auto">
          <SakinaEmblem className="w-10 h-10" theme="dark" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold text-terracotta-600 font-ibm uppercase tracking-widest block">
            خطأ 404
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-forest-900 font-alexandria">
            الصفحة المطلوبة غير موجودة
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 font-ibm leading-relaxed">
            ربما تم نقل الصفحة أو تغيير عنوانها. نرحب بعودتك إلى الصفحة الرئيسية
            أو استعراض خدماتنا المتاحة.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 text-ivory-100 text-xs sm:text-sm font-semibold py-3 px-6 rounded-2xl transition-all w-full sm:w-auto"
          >
            <Home size={15} />
            <span>العودة للرئيسية</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-sand-50 text-forest-800 border border-sage-300 text-xs sm:text-sm font-semibold py-3 px-5 rounded-2xl transition-all w-full sm:w-auto"
          >
            <span>استعراض الخدمات</span>
            <ArrowLeft size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
