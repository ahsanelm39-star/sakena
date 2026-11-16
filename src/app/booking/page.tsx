"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { servicesData, specialistsData, clinicConfig } from "@/config/clinic";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Building,
  Video,
  Check,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  Copy,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Send,
  Info,
} from "lucide-react";

// Days generator for the next 12 days
const generateDays = () => {
  const days = [];
  const arabicDayNames = [
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];
  const arabicMonths = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];

  const now = new Date();
  for (let i = 1; i <= 12; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);

    // Skip Fridays if preferred, or keep as afternoon slots
    const dayName = arabicDayNames[d.getDay()];
    const dateStr = `${d.getDate()} ${arabicMonths[d.getMonth()]}`;
    const isoDate = d.toISOString().split("T")[0];

    days.push({
      isoDate,
      dayName,
      dateStr,
      isFriday: d.getDay() === 5,
    });
  }
  return days;
};

const DEMO_TIME_SLOTS = [
  { time: "10:00 ص", period: "morning" },
  { time: "11:30 ص", period: "morning" },
  { time: "01:00 م", period: "afternoon" },
  { time: "04:30 م", period: "evening" },
  { time: "06:00 م", period: "evening" },
  { time: "07:30 م", period: "evening" },
  { time: "08:45 م", period: "evening" },
];

function BookingContent() {
  const searchParams = useSearchParams();

  // URL preselection
  const initialService = searchParams?.get("service") || "";
  const initialSpecialist = searchParams?.get("specialist") || "";

  // Wizard state
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedFormat, setSelectedFormat] = useState<"in-clinic" | "telehealth">("in-clinic");
  const [selectedSpecialist, setSelectedSpecialist] = useState(initialSpecialist || "any");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [preferredContact, setPreferredContact] = useState<"whatsapp" | "call">("whatsapp");
  const [adminNotes, setAdminNotes] = useState("");
  const [agreePrivacy, setAgreePrivacy] = useState(true);

  // Submission & Confirmation state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [validationError, setValidationError] = useState("");

  const daysList = React.useMemo(() => generateDays(), []);

  // Update preselection from URL if changed
  useEffect(() => {
    if (initialService) setSelectedService(initialService);
    if (initialSpecialist) setSelectedSpecialist(initialSpecialist);
  }, [initialService, initialSpecialist]);

  // Selected Service & Specialist metadata
  const currentServiceObj = servicesData.find((s) => s.slug === selectedService);
  const currentSpecialistObj = specialistsData.find((s) => s.slug === selectedSpecialist);

  // Validation before proceeding
  const handleNext = () => {
    setValidationError("");

    if (currentStep === 1) {
      if (!selectedService) {
        setValidationError("يرجى اختيار الخدمة المطلوبة للمتابعة.");
        return;
      }
    }

    if (currentStep === 4) {
      if (!selectedDate || !selectedTime) {
        setValidationError("يرجى تحديد اليوم والتوقيت المناسب لك.");
        return;
      }
    }

    if (currentStep === 5) {
      if (!contactName.trim()) {
        setValidationError("يرجى إدخال اسمك الكريم.");
        return;
      }
      if (!contactPhone.trim() || contactPhone.trim().length < 8) {
        setValidationError("يرجى إدخال رقم جوال صالح للتواصل.");
        return;
      }
      if (!agreePrivacy) {
        setValidationError("يرجى الموافقة على شروط الخصوصية وسرية البيانات.");
        return;
      }
    }

    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 180, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    setValidationError("");
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 180, behavior: "smooth" });
    }
  };

  // Submit appointment request simulation
  const handleSubmitBooking = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
      window.scrollTo({ top: 150, behavior: "smooth" });
    }, 900);
  };

  // Build formatted summary text
  const selectedDateObj = daysList.find((d) => d.isoDate === selectedDate);
  const dateFormattedArabic = selectedDateObj
    ? `${selectedDateObj.dayName}، ${selectedDateObj.dateStr}`
    : selectedDate;

  const summaryText = `*طلب موعد استشارة — عيادات سَكينة*
- الخدمة: ${currentServiceObj ? currentServiceObj.title : "استشارة عامة"}
- النمط: ${selectedFormat === "in-clinic" ? "حضوري بالعيادة" : "عن بُعد (مرئي مشفر)"}
- المختص: ${currentSpecialistObj ? currentSpecialistObj.name : "لا يوجد تفضيل / مساعدة بالتوجيه"}
- الموعد المقترح: ${dateFormattedArabic} (${selectedTime})
- اسم المراجع: ${contactName}
- رقم الجوال: ${contactPhone}
- وسيلة التواصل المفضلة: ${preferredContact === "whatsapp" ? "واتساب" : "اتصال هاتفي"}
${adminNotes ? `- ملاحظات إدارية: ${adminNotes}` : ""}`;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  const whatsappURL = `https://wa.me/966559801122?text=${encodeURIComponent(summaryText)}`;

  const resetBooking = () => {
    setIsConfirmed(false);
    setCurrentStep(1);
    setSelectedService("");
    setSelectedSpecialist("any");
    setSelectedDate("");
    setSelectedTime("");
    setContactName("");
    setContactPhone("");
    setAdminNotes("");
  };

  return (
    <div className="py-8 lg:py-14 bg-ivory-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "طلب حجز موعد" }]} />

        {/* Header */}
        <div className="text-right space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-terracotta-600 font-ibm block">
            بوابة حجز الاستشارات
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
            احجز موعد استشارتك بكل يسر وخصوصية.
          </h1>
          <p className="text-sm sm:text-base text-charcoal-700 font-ibm leading-relaxed">
            اختر تفضيلات الجلسة والمختص الأنسب، وسيتواصل معك فريق الاستقبال لتأكيد
            الموعد وترتيب الجلسة.
          </p>
        </div>

        {/* Demo Mode Notice */}
        <div className="bg-sand-200/70 p-4 rounded-2xl border border-sand-300 text-xs text-charcoal-700 font-ibm flex items-start gap-3">
          <Sparkles size={17} className="text-forest-700 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-forest-900 font-semibold ml-1">تنبيه النموذج التجريبي:</strong>
            هذا النظام تفاعلي بالكامل لمحاكاة تجربة الحجز الرقمية. يمكنك استكمال الخطوات، وتجربة إرسال الملخص عبر واتساب أو نسخ ملخص الطلب دون حفظ بياناتك في خوادم خارجية.
          </p>
        </div>

        {!isConfirmed ? (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sage-200/70 shadow-card space-y-8">
            {/* Step Progress Indicator */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-charcoal-600 font-ibm">
                <span>
                  الخطوة {currentStep} من 6:{" "}
                  {currentStep === 1 && "اختيار الخدمة"}
                  {currentStep === 2 && "نمط الاستشارة"}
                  {currentStep === 3 && "اختيار الأخصائي"}
                  {currentStep === 4 && "اليوم والتوقيت"}
                  {currentStep === 5 && "بيانات الاتصال"}
                  {currentStep === 6 && "مراجعة الطلب وتأكيده"}
                </span>
                <span className="text-forest-700 font-bold">
                  {Math.round((currentStep / 6) * 100)}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-2 w-full bg-sand-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-forest-500 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 6) * 100}%` }}
                />
              </div>
            </div>

            {/* Validation Error Alert */}
            {validationError && (
              <div className="p-3.5 bg-terracotta-50 border border-terracotta-200 rounded-2xl text-xs text-terracotta-700 font-ibm text-right flex items-center gap-2 animate-fade-in">
                <Info size={16} className="flex-shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* STEP 1: Select Service */}
            {currentStep === 1 && (
              <div className="space-y-5 text-right">
                <div className="space-y-1">
                  <h2 className="font-alexandria font-bold text-xl text-forest-900">
                    الخطوة 1: اختر نوع الخدمة أو الاستشارة
                  </h2>
                  <p className="text-xs text-charcoal-500 font-ibm">
                    حدد الخدمة الأقرب لما تشعر بالحاجة إليه حالياً:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {servicesData.map((service) => {
                    const isSelected = selectedService === service.slug;

                    return (
                      <button
                        type="button"
                        key={service.id}
                        onClick={() => setSelectedService(service.slug)}
                        className={`p-5 rounded-2xl border text-right transition-all flex flex-col justify-between ${
                          isSelected
                            ? "bg-forest-50/70 border-forest-500 shadow-soft ring-1 ring-forest-500"
                            : "bg-white border-sage-200/80 hover:border-sage-300 hover:bg-sand-50"
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center border text-xs ${
                                isSelected
                                  ? "border-forest-600 bg-forest-600 text-white"
                                  : "border-sand-300 bg-white"
                              }`}
                            >
                              {isSelected && <Check size={12} />}
                            </span>
                            <span className="text-[11px] text-charcoal-500 font-ibm">
                              {service.duration}
                            </span>
                          </div>

                          <h3 className="font-alexandria font-bold text-base text-forest-900">
                            {service.title}
                          </h3>
                          <p className="text-xs text-charcoal-600 font-ibm line-clamp-2">
                            {service.shortDescription}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: Choose Consultation Format */}
            {currentStep === 2 && (
              <div className="space-y-5 text-right">
                <div className="space-y-1">
                  <h2 className="font-alexandria font-bold text-xl text-forest-900">
                    الخطوة 2: حدد نمط الاستشارة المفضل لديك
                  </h2>
                  <p className="text-xs text-charcoal-500 font-ibm">
                    يمكنك حضور الجلسة بالعيادة أو إجراؤها عن بُعد عبر اتصال مشفر:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <button
                    type="button"
                    onClick={() => setSelectedFormat("in-clinic")}
                    className={`p-6 rounded-3xl border text-right transition-all space-y-4 ${
                      selectedFormat === "in-clinic"
                        ? "bg-forest-50/80 border-forest-500 shadow-soft ring-1 ring-forest-500"
                        : "bg-white border-sage-200/80 hover:bg-sand-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center">
                        <Building size={24} />
                      </div>
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center border text-xs ${
                          selectedFormat === "in-clinic"
                            ? "border-forest-600 bg-forest-600 text-white"
                            : "border-sand-300 bg-white"
                        }`}
                      >
                        {selectedFormat === "in-clinic" && <Check size={14} />}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-alexandria font-bold text-lg text-forest-900">
                        زيارة العيادة (حضوري)
                      </h3>
                      <p className="text-xs text-charcoal-600 font-ibm mt-1.5 leading-relaxed">
                        الحضور في مقر عيادات سكينة بالرياض، في غرف استشارة عازلة للصوت ومصممة للتهدئة الحسية.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedFormat("telehealth")}
                    className={`p-6 rounded-3xl border text-right transition-all space-y-4 ${
                      selectedFormat === "telehealth"
                        ? "bg-forest-50/80 border-forest-500 shadow-soft ring-1 ring-forest-500"
                        : "bg-white border-sage-200/80 hover:bg-sand-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-sage-100 text-forest-800 flex items-center justify-center">
                        <Video size={24} />
                      </div>
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center border text-xs ${
                          selectedFormat === "telehealth"
                            ? "border-forest-600 bg-forest-600 text-white"
                            : "border-sand-300 bg-white"
                        }`}
                      >
                        {selectedFormat === "telehealth" && <Check size={14} />}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-alexandria font-bold text-lg text-forest-900">
                        استشارة عن بُعد (مرئية ومحمية)
                      </h3>
                      <p className="text-xs text-charcoal-600 font-ibm mt-1.5 leading-relaxed">
                        جلسة مرئية مشفرة عبر منصة آمنة من جهازك أو هاتفك أينما كنت، دون الحاجة لتحميل تطبيقات.
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Choose Specialist */}
            {currentStep === 3 && (
              <div className="space-y-5 text-right">
                <div className="space-y-1">
                  <h2 className="font-alexandria font-bold text-xl text-forest-900">
                    الخطوة 3: اختر الأخصائي المفضل
                  </h2>
                  <p className="text-xs text-charcoal-500 font-ibm">
                    اختر المختص الذي ترتاح لمساره، أو دع فريقنا يوجهك للمختص الأكثر ملاءمة:
                  </p>
                </div>

                <div className="space-y-3.5">
                  {/* Option: Any / No Preference */}
                  <button
                    type="button"
                    onClick={() => setSelectedSpecialist("any")}
                    className={`w-full p-4.5 rounded-2xl border text-right transition-all flex items-center justify-between ${
                      selectedSpecialist === "any"
                        ? "bg-forest-50/80 border-forest-500 shadow-soft ring-1 ring-forest-500"
                        : "bg-white border-sage-200/80 hover:bg-sand-50"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-sand-200 text-forest-800 flex items-center justify-center">
                        <Sparkles size={20} />
                      </div>
                      <div>
                        <h3 className="font-alexandria font-bold text-base text-forest-900">
                          لا يوجد تفضيل / الأقرب موعداً
                        </h3>
                        <p className="text-xs text-charcoal-500 font-ibm">
                          سيقوم فريق التنسيق باقتراح الأخصائي الأكثر ملاءمة لطبيعة استشارتك.
                        </p>
                      </div>
                    </div>

                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center border text-xs ${
                        selectedSpecialist === "any"
                          ? "border-forest-600 bg-forest-600 text-white"
                          : "border-sand-300 bg-white"
                      }`}
                    >
                      {selectedSpecialist === "any" && <Check size={12} />}
                    </span>
                  </button>

                  {/* Individual Specialists */}
                  {specialistsData.map((sp) => {
                    const isSelected = selectedSpecialist === sp.slug;

                    return (
                      <button
                        type="button"
                        key={sp.id}
                        onClick={() => setSelectedSpecialist(sp.slug)}
                        className={`w-full p-4.5 rounded-2xl border text-right transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-forest-50/80 border-forest-500 shadow-soft ring-1 ring-forest-500"
                            : "bg-white border-sage-200/80 hover:bg-sand-50"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-sand-200 flex-shrink-0">
                            <Image src={sp.image} alt={sp.name} fill className="object-cover" />
                          </div>
                          <div>
                            <h3 className="font-alexandria font-bold text-base text-forest-900">
                              {sp.name}
                            </h3>
                            <p className="text-xs text-forest-700 font-ibm">
                              {sp.title} — {sp.specialty}
                            </p>
                            <span className="text-[11px] text-charcoal-500 font-ibm block mt-0.5">
                              أيام التواجد: {sp.availableDays.join("، ")}
                            </span>
                          </div>
                        </div>

                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center border text-xs ${
                            isSelected
                              ? "border-forest-600 bg-forest-600 text-white"
                              : "border-sand-300 bg-white"
                          }`}
                        >
                          {isSelected && <Check size={12} />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: Choose Date & Time */}
            {currentStep === 4 && (
              <div className="space-y-6 text-right">
                <div className="space-y-1">
                  <h2 className="font-alexandria font-bold text-xl text-forest-900">
                    الخطوة 4: حدد اليوم والوقت المفضل
                  </h2>
                  <p className="text-xs text-charcoal-500 font-ibm">
                    المواعيد أدناه هي مواعيد تجريبية توضيحية لجدول العيادة:
                  </p>
                </div>

                {/* Day selector slider */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-forest-900 font-ibm block">
                    اختر اليوم:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2.5">
                    {daysList.map((day) => {
                      const isSelected = selectedDate === day.isoDate;

                      return (
                        <button
                          type="button"
                          key={day.isoDate}
                          onClick={() => setSelectedDate(day.isoDate)}
                          className={`p-3 rounded-2xl border text-center transition-all ${
                            isSelected
                              ? "bg-forest-500 text-ivory-100 border-forest-600 shadow-sm"
                              : "bg-white text-charcoal-800 border-sage-200/80 hover:bg-sand-50"
                          }`}
                        >
                          <span className="block text-xs font-semibold font-alexandria">
                            {day.dayName}
                          </span>
                          <span
                            className={`block text-[11px] font-ibm mt-0.5 ${
                              isSelected ? "text-ivory-200" : "text-charcoal-500"
                            }`}
                          >
                            {day.dateStr}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time slot selector */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-forest-900 font-ibm block">
                    اختر الفترة الزمنية:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {DEMO_TIME_SLOTS.map((slot, idx) => {
                      const isSelected = selectedTime === slot.time;

                      return (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => setSelectedTime(slot.time)}
                          className={`py-3 px-4 rounded-xl border text-center text-xs font-semibold font-ibm transition-all flex items-center justify-center gap-1.5 ${
                            isSelected
                              ? "bg-forest-500 text-ivory-100 border-forest-600 shadow-sm"
                              : "bg-white text-charcoal-800 border-sage-200/80 hover:bg-sand-50"
                          }`}
                        >
                          <Clock size={13} />
                          <span>{slot.time}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: Contact Information */}
            {currentStep === 5 && (
              <div className="space-y-6 text-right">
                <div className="space-y-1">
                  <h2 className="font-alexandria font-bold text-xl text-forest-900">
                    الخطوة 5: بيانات الاتصال الأساسية
                  </h2>
                  <p className="text-xs text-charcoal-500 font-ibm">
                    نطلب فقط الحد الأدنى من المعلومات الإدارية اللازمة لتنسيق الموعد. لا نطلب أي معلومات إكلينيكية حساسة هنا.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="contactName"
                      className="block text-xs font-bold text-forest-900 font-ibm mb-1.5"
                    >
                      الاسم الكامل أو المفضل <span className="text-terracotta-500">*</span>
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="مثال: أحمد عبد الله"
                      className="w-full px-4 py-3 rounded-2xl border border-sage-300 text-sm focus:border-forest-500 bg-sand-50/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contactPhone"
                      className="block text-xs font-bold text-forest-900 font-ibm mb-1.5"
                    >
                      رقم الجوال للتأكيد <span className="text-terracotta-500">*</span>
                    </label>
                    <input
                      id="contactPhone"
                      type="tel"
                      dir="ltr"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="+966 5X XXX XXXX"
                      className="w-full px-4 py-3 rounded-2xl border border-sage-300 text-sm focus:border-forest-500 bg-sand-50/50 text-right"
                    />
                  </div>

                  <div>
                    <span className="block text-xs font-bold text-forest-900 font-ibm mb-1.5">
                      وسيلة التواصل المفضلة لتأكيد الموعد:
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPreferredContact("whatsapp")}
                        className={`p-3.5 rounded-xl border text-xs font-medium font-ibm flex items-center justify-center gap-2 transition-all ${
                          preferredContact === "whatsapp"
                            ? "bg-forest-50 border-forest-500 text-forest-800 font-bold"
                            : "bg-white border-sage-200 text-charcoal-700"
                        }`}
                      >
                        <MessageCircle size={15} className="text-sage-600" />
                        <span>رسالة واتساب</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPreferredContact("call")}
                        className={`p-3.5 rounded-xl border text-xs font-medium font-ibm flex items-center justify-center gap-2 transition-all ${
                          preferredContact === "call"
                            ? "bg-forest-50 border-forest-500 text-forest-800 font-bold"
                            : "bg-white border-sage-200 text-charcoal-700"
                        }`}
                      >
                        <Phone size={15} className="text-forest-600" />
                        <span>اتصال هاتفي</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="adminNotes"
                      className="block text-xs font-bold text-forest-900 font-ibm mb-1.5"
                    >
                      ملاحظات إدارية اختيارية (مثل أوقات الاتصال المفضلة)
                    </label>
                    <textarea
                      id="adminNotes"
                      rows={2}
                      value={adminNotes}
                      onChange={(e) => setAdminNotes(e.target.value)}
                      placeholder="أي توضيحات تنظيمية تود إبلاغ الاستقبال بها..."
                      className="w-full px-4 py-3 rounded-2xl border border-sage-300 text-sm focus:border-forest-500 bg-sand-50/50"
                    />
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-charcoal-600 font-ibm">
                      <input
                        type="checkbox"
                        checked={agreePrivacy}
                        onChange={(e) => setAgreePrivacy(e.target.checked)}
                        className="mt-0.5 rounded border-sage-400 text-forest-600 focus:ring-forest-500 w-4 h-4"
                      />
                      <span>
                        أوافق على سياسة الخصوصية وأدرك أن هذه البيانات الإدارية تستخدم فقط للتواصل بشأن الموعد.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 6: Review & Final Submit */}
            {currentStep === 6 && (
              <div className="space-y-6 text-right">
                <div className="space-y-1">
                  <h2 className="font-alexandria font-bold text-xl text-forest-900">
                    الخطوة 6: مراجعة ملخص طلب الموعد
                  </h2>
                  <p className="text-xs text-charcoal-500 font-ibm">
                    يرجى مراجعة تفاصيل طلبك قبل الإرسال المبدئي:
                  </p>
                </div>

                <div className="bg-sand-50 rounded-2xl p-6 border border-sand-200 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-ibm">
                    <div>
                      <span className="text-charcoal-500 block">الخدمة المطلوبة:</span>
                      <strong className="text-forest-900 text-sm">
                        {currentServiceObj ? currentServiceObj.title : "استشارة عامة"}
                      </strong>
                    </div>

                    <div>
                      <span className="text-charcoal-500 block">نمط الاستشارة:</span>
                      <strong className="text-forest-900 text-sm">
                        {selectedFormat === "in-clinic" ? "حضوري بالعيادة (الرياض)" : "عن بُعد (مرئي مشفر)"}
                      </strong>
                    </div>

                    <div>
                      <span className="text-charcoal-500 block">المختص المفضل:</span>
                      <strong className="text-forest-900 text-sm">
                        {currentSpecialistObj ? currentSpecialistObj.name : "لا يوجد تفضيل / مساعدة بالتوجيه"}
                      </strong>
                    </div>

                    <div>
                      <span className="text-charcoal-500 block">الموعد المقترح:</span>
                      <strong className="text-forest-900 text-sm">
                        {dateFormattedArabic} — {selectedTime}
                      </strong>
                    </div>

                    <div>
                      <span className="text-charcoal-500 block">اسم المراجع:</span>
                      <strong className="text-forest-900 text-sm">{contactName}</strong>
                    </div>

                    <div>
                      <span className="text-charcoal-500 block">رقم الجوال:</span>
                      <strong className="text-forest-900 text-sm" dir="ltr">{contactPhone}</strong>
                    </div>
                  </div>

                  {adminNotes && (
                    <div className="pt-2 border-t border-sand-200 text-xs font-ibm">
                      <span className="text-charcoal-500 block">ملاحظات إضافية:</span>
                      <p className="text-charcoal-700 mt-0.5">{adminNotes}</p>
                    </div>
                  )}
                </div>

                <div className="p-3.5 bg-forest-50 rounded-2xl border border-forest-200/60 text-xs text-forest-800 font-ibm flex items-center gap-2">
                  <ShieldCheck size={18} className="text-forest-600 flex-shrink-0" />
                  <span>
                    الضغط على «إرسال الطلب» هو طلب تمهيدي لحجز الموعد. سيتواصل معك الاستقبال لتأكيده نهائياً.
                  </span>
                </div>
              </div>
            )}

            {/* Wizard Navigation Buttons */}
            <div className="pt-6 border-t border-sand-200/80 flex items-center justify-between gap-4">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-2xl border border-sage-300 text-charcoal-700 hover:bg-sand-50 text-xs font-semibold transition-colors"
                >
                  <ChevronRight size={16} />
                  <span>الخطوة السابقة</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 6 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-forest-500 hover:bg-forest-600 text-ivory-100 text-sm font-semibold shadow-sm transition-all"
                >
                  <span>متابعة</span>
                  <ChevronLeft size={16} />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmitBooking}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-forest-500 hover:bg-forest-600 text-ivory-100 text-sm font-semibold shadow-card transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>جاري معالجة الطلب...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>تأكيد وإرسال طلب الموعد</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Professional Confirmation State */
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sage-200/70 shadow-card text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-forest-50 text-forest-700 flex items-center justify-center mx-auto border-2 border-forest-500">
              <Check size={32} />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <h2 className="font-alexandria font-bold text-2xl sm:text-3xl text-forest-900">
                تم استلام طلب الموعد المبدئي بنجاح
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 font-ibm leading-relaxed">
                شكراً لثقتك بسكينة. هذا طلب تمهيدي (Demo) لتوضيح مسار الحجز الرقمي. يمكنك الآن تجربة إرسال تفاصيل الطلب مباشرة عبر واتساب العيادة أو نسخ الملخص.
              </p>
            </div>

            {/* Summary Box */}
            <div className="max-w-md mx-auto bg-ivory-50 p-5 rounded-2xl border border-sand-200 text-right text-xs font-ibm space-y-2">
              <div className="flex justify-between border-b border-sand-200 pb-2">
                <span className="text-charcoal-500">الخدمة:</span>
                <span className="font-semibold text-forest-900">
                  {currentServiceObj ? currentServiceObj.title : "استشارة عامة"}
                </span>
              </div>
              <div className="flex justify-between border-b border-sand-200 pb-2">
                <span className="text-charcoal-500">المختص:</span>
                <span className="font-semibold text-forest-900">
                  {currentSpecialistObj ? currentSpecialistObj.name : "الأقرب موعداً"}
                </span>
              </div>
              <div className="flex justify-between border-b border-sand-200 pb-2">
                <span className="text-charcoal-500">الموعد:</span>
                <span className="font-semibold text-forest-900">
                  {dateFormattedArabic} ({selectedTime})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-500">الاسم والجوال:</span>
                <span className="font-semibold text-forest-900">
                  {contactName} ({contactPhone})
                </span>
              </div>
            </div>

            {/* Direct Communication Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-sage-200 hover:bg-sage-300 text-forest-950 text-xs font-bold py-3.5 px-5 rounded-2xl transition-colors"
              >
                <MessageCircle size={16} />
                <span>إرسال الملخص لواتساب العيادة</span>
              </a>

              <button
                type="button"
                onClick={handleCopySummary}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-sand-100 text-forest-800 border border-sage-300 text-xs font-semibold py-3.5 px-5 rounded-2xl transition-colors"
              >
                <Copy size={15} />
                <span>{copiedSummary ? "تم النسخ بنجاح!" : "نسخ ملخص الطلب"}</span>
              </button>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={resetBooking}
                className="text-xs text-forest-700 hover:text-forest-900 font-semibold underline underline-offset-4"
              >
                بدء طلب حجز موعد جديد
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center font-ibm text-sm">جاري تحميل نظام الحجز...</div>}>
      <BookingContent />
    </Suspense>
  );
}
