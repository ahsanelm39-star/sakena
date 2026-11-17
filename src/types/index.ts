export type ConsultationFormat = "in-clinic" | "telehealth" | "both";

export interface Specialist {
  id: string;
  slug: string;
  name: string;
  englishName: string;
  title: string;
  specialty: string;
  qualificationsPlaceholder: string;
  bio: string;
  approach: string;
  languages: string[];
  formats: ConsultationFormat[];
  experienceYearsNote: string;
  image: string;
  ratingDemo?: string;
  focusAreas: string[];
  schedulePreview: string;
  availableDays: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: "individual" | "couples" | "adolescents" | "specialized";
  duration: string;
  formatAvailable: ConsultationFormat[];
  iconName: string;
  heroImage: string;
  overview: string;
  targetAudience: string[];
  sessionStructure: string[];
  therapeuticApproach: string;
  ethicalLimitations: string[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  reviewerPlaceholder: string;
  coverImage: string;
  coverImagePosition?: string;
  tableOfContents: { id: string; text: string }[];
  contentSections: {
    id: string;
    heading: string;
    paragraphs: string[];
    pullQuote?: string;
    keyTakeaways?: string[];
  }[];
  relatedSlugs: string[];
}

export interface FAQItem {
  id: string;
  category: "booking" | "sessions" | "privacy" | "telehealth" | "services";
  question: string;
  answer: string;
}

export interface ClinicConfig {
  brand: {
    nameArabic: string;
    nameEnglish: string;
    taglineArabic: string;
    descriptorArabic: string;
    foundedYear: string;
  };
  contact: {
    phoneDisplay: string;
    phoneLink: string;
    whatsappDisplay: string;
    whatsappLink: string;
    email: string;
    addressDisplay: string;
    city: string;
    workingHours: {
      days: string;
      hours: string;
    }[];
  };
  social: {
    x?: string;
    linkedin?: string;
    instagram?: string;
  };
  demoNotice: {
    isDemo: boolean;
    bannerText: string;
    disclaimer: string;
  };
}
