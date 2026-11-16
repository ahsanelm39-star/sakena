import type { Metadata } from "next";
import { Alexandria, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import DemoBanner from "@/components/common/DemoBanner";
import PageTransition from "@/components/common/PageTransition";
import { clinicConfig } from "@/config/clinic";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  variable: "--font-alexandria",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-ibm",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sakina-clinic.demo"),
  title: {
    default: "سَكينة | عيادات الصحة النفسية والاستشارات المتخصصة",
    template: "%s | سَكينة للرعاية النفسية",
  },
  description:
    "عيادات سكينة للصحة النفسية: مساحة آمنة وسرية تبدأ بالاستماع. استشارات نفسية فردية، أسرية، وعن بُعد بإشراف نخبة من المختصين المؤهلين.",
  keywords: [
    "عيادة نفسية بالرياض",
    "صحة نفسية",
    "علاج القلق والتوتر",
    "استشارات نفسية عن بعد",
    "علاج الاكتئاب",
    "استشارات زوجية وأسرية",
    "دكتور نفسي بالرياض",
    "أخصائي نفسي عيادي",
    "سكينة",
  ],
  authors: [{ name: "عيادات سكينة للصحة النفسية" }],
  creator: "عيادات سكينة",
  publisher: "عيادات سكينة",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "سَكينة | رعاية نفسية تبدأ بالاستماع",
    description:
      "بيئة مهنية تحترم خصوصيتك وتساعدك على استكشاف ما تمر به للوصول إلى التوازن الداخلي بالتعاون مع مختصين مؤهلين.",
    url: "https://sakina-clinic.demo",
    siteName: "عيادات سكينة",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "عيادات سكينة للرعاية النفسية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "سَكينة | رعاية نفسية تبدأ بالاستماع",
    description: "عيادات سكينة للصحة النفسية والاستشارات المتخصصة في الرياض وعن بُعد.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sakina-clinic.demo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "عيادات سكينة للصحة النفسية",
    alternateName: "SAKINA Mental Health Clinic",
    url: "https://sakina-clinic.demo",
    logo: "https://sakina-clinic.demo/logo.svg",
    description: "عيادات متخصصة في تقديم الاستشارات والعلاجات النفسية والأسرية.",
    telephone: clinicConfig.contact.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: "طريق الملك فهد، حي النخيل",
      addressLocality: "الرياض",
      addressCountry: "SA",
    },
    medicalSpecialty: ["Psychiatric", "Psychology"],
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "الاستشارات النفسية الفردية",
      },
      {
        "@type": "MedicalTherapy",
        name: "العلاج المعرفي السلوكي للقلق",
      },
      {
        "@type": "MedicalTherapy",
        name: "الإرشاد الأسري والزوجي",
      },
    ],
  };

  return (
    <html lang="ar" dir="rtl" className={`${alexandria.variable} ${ibmPlexArabic.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory-100 text-charcoal-800 antialiased selection:bg-sage-300 selection:text-forest-900">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 z-50 bg-forest-500 text-ivory-100 px-4 py-2.5 rounded-xl shadow-lg font-medium text-sm transition-transform"
        >
          الانتقال المباشر إلى المحتوى الرئيسي
        </a>

        {/* Demo Mode Notice */}
        <DemoBanner />

        {/* Global Navigation Header */}
        <Header />

        {/* Main Content with Transition Wrapper */}
        <main id="main-content" className="flex-1 focus:outline-none">
          <PageTransition>{children}</PageTransition>
        </main>

        {/* Footer */}
        <Footer />

        {/* Sticky CTA Bar for Mobile Screens */}
        <MobileStickyCTA />
      </body>
    </html>
  );
}
