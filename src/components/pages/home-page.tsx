"use client";

import React from "react";
import { useRouter, type PageName } from "../thelaw/router";
import { SectionTitle } from "../thelaw/section-title";
import { AnimatedSection, CounterItem } from "../thelaw/scroll-animation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Scale,
  BookOpen,
  Gavel,
  Briefcase,
  Shield,
  Copyright,
  Landmark,
  Phone,
  Mail,
  ArrowRight,
  Send,
  Search,
  Crosshair,
  Eye,
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Users,
  TrendingUp,
  MessageSquare,
  CheckCircle,
  Plus,
  Minus,
  MapPin,
  Clock,
  DollarSign,
  Share2,
  Copy,
  Twitter,
  Linkedin,
  Check,
  MessageCircle,
  Handshake,
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { AppointmentForm } from "../thelaw/appointment-form";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/i18n/language-context";

/* ===== Non-translatable data (icons, images, long descriptions/services for modals) ===== */

const PRACTICE_AREA_ICONS = [
  BookOpen,
  Gavel,
  Scale,
  Briefcase,
  Shield,
  MessageSquare,
  Copyright,
  Landmark,
  Handshake,
];

const PRACTICE_AREA_DETAILS = [
  {
    description:
      "Our legal advisory services provide comprehensive guidance for individuals and businesses facing complex legal challenges. With decades of combined experience, our attorneys offer strategic counsel that helps clients navigate intricate legal landscapes with confidence and clarity. Whether you are dealing with a personal matter or a corporate dispute, our team ensures that your rights are protected at every stage of the process. We take pride in delivering personalized attention to each case, ensuring that no detail is overlooked and every legal avenue is thoroughly explored.",
    services: [
      "Personal legal consultations",
      "Corporate legal strategy",
      "Legal document review",
      "Regulatory compliance guidance",
      "Pre-litigation risk assessment",
    ],
  },
  {
    description:
      "Our litigation team has successfully represented thousands of clients in state and federal courts. We combine aggressive advocacy with meticulous preparation to achieve the best possible outcomes for our clients. From pre-trial negotiations to courtroom arguments, our attorneys bring unparalleled dedication and expertise to every case. We understand that litigation can be stressful and overwhelming, which is why we maintain open communication with our clients throughout the entire process, ensuring they are informed and empowered at every step.",
    services: [
      "Civil and commercial litigation",
      "Class action lawsuits",
      "Appellate advocacy",
      "Alternative dispute resolution",
      "Trial preparation and strategy",
    ],
  },
  {
    description:
      "When legal disputes escalate to formal lawsuits, having experienced representation is crucial. Our firm has a proven track record of success in managing complex lawsuits from filing through resolution. We employ a strategic approach that considers both the legal merits and the practical implications of each case. Our attorneys work closely with clients to develop tailored strategies that align with their goals, whether that means pursuing a favorable settlement or taking a case to trial to protect their interests.",
    services: [
      "Personal injury lawsuits",
      "Breach of contract claims",
      "Property dispute litigation",
      "Employment lawsuits",
      "Medical malpractice claims",
    ],
  },
  {
    description:
      "In today's complex business environment, having trusted legal counsel is essential for success. Our business law practice provides comprehensive legal services to companies of all sizes, from startups to established corporations. We assist with entity formation, contract drafting and negotiation, mergers and acquisitions, and ongoing corporate governance matters. Our attorneys understand the unique challenges that businesses face and provide practical, solution-oriented advice that helps our clients achieve their commercial objectives while minimizing legal risk.",
    services: [
      "Business formation and structuring",
      "Contract drafting and negotiation",
      "Mergers and acquisitions",
      "Corporate compliance and governance",
      "Intellectual property protection",
    ],
  },
  {
    description:
      "Facing criminal charges is one of the most stressful experiences a person can endure. Our criminal defense attorneys are dedicated to protecting the rights, freedom, and reputation of every client we represent. We provide aggressive defense strategies backed by thorough investigation and deep knowledge of criminal law. From minor infractions to serious felony charges, we approach every case with the same level of commitment and determination. Our team has secured favorable outcomes in thousands of criminal cases, including acquittals, reduced charges, and alternative sentencing arrangements.",
    services: [
      "Felony and misdemeanor defense",
      "DUI/DWI representation",
      "White-collar crime defense",
      "Drug offense defense",
      "Expungement and record sealing",
    ],
  },
  {
    description:
      "Legal disputes can arise in any area of life, from business disagreements to neighborhood conflicts. Our dispute resolution team is skilled in both negotiation and litigation, helping clients find efficient and effective solutions to their conflicts. We prioritize resolving disputes through mediation and negotiation when possible, saving clients time and expense. However, when litigation is necessary, our attorneys are formidable advocates who will fight tirelessly to protect your interests in court.",
    services: [
      "Mediation and arbitration",
      "Contract dispute resolution",
      "Neighbor and property disputes",
      "Consumer disputes",
      "Employment conflict resolution",
    ],
  },
  {
    description:
      "Protecting your intellectual property is vital in today's knowledge-based economy. Our copyright practice helps creators, artists, writers, and businesses secure and defend their creative works. We assist with copyright registration, licensing agreements, and enforcement actions against infringement. Our attorneys stay at the forefront of evolving copyright law, including digital and online issues, to provide cutting-edge counsel. Whether you need to protect a single work or manage an extensive portfolio, we deliver strategic advice that safeguards your creative assets.",
    services: [
      "Copyright registration and filing",
      "Licensing and transfer agreements",
      "Infringement litigation",
      "Fair use analysis",
      "Digital rights management",
    ],
  },
  {
    description:
      "Our criminal law practice encompasses a wide range of criminal matters, providing comprehensive defense for individuals charged with offenses at both the state and federal levels. We understand the profound impact that criminal charges can have on your life, career, and family, which is why we approach every case with compassion and determination. Our attorneys have extensive courtroom experience and deep knowledge of criminal statutes, precedents, and procedural rules. We conduct thorough investigations, challenge evidence, and build strong defense strategies designed to achieve the best possible outcome.",
    services: [
      "State and federal criminal defense",
      "Appeals and post-conviction relief",
      "Juvenile defense",
      "Bail and bond hearings",
      "Criminal investigation representation",
    ],
  },
  {
    description:
      "Our legal partnership services provide coordinated, reliable counsel for clients managing cross-border transactions, regulatory requirements, and complex legal matters. We work closely with trusted legal professionals to deliver clear guidance and practical representation tailored to each client's needs.",
    services: [
      "Legal representation coordination",
      "Cross-border transaction support",
      "Regulatory and compliance guidance",
      "Contract and document review",
      "Ongoing legal counsel",
    ],
  },
];

const HOW_IT_WORKS_ICONS = [Send, Search, Crosshair];

const CASE_IMAGES = [
  "/images/blog-1.png",
  "/images/blog-2.png",
  "/images/blog-3.png",
  "/images/blog-4.png",
  "/images/blog-5.png",
  "/images/blog-1.png",
  "/images/blog-2.png",
  "/images/blog-3.png",
  "/images/blog-4.png",
  "/images/blog-5.png",
];

const CLIENT_LOGOS = [
  { src: "/images/sbc.png", alt: "SBC" },
  { src: "/images/e2next.png", alt: "E2next" },
  { src: "/images/img1.png", alt: "img1" },
  { src: "/images/img2.png", alt: "img2" },
  { src: "/images/img3.jpeg", alt: "img3" },
  { src: "/images/img4.jpeg", alt: "img4" },
  { src: "/images/img5.jpeg", alt: "img5" },
  { src: "/images/img6.jpeg", alt: "img6" },
];

/*
const LEGACY_TESTIMONIALS = [
  {
    quote:
      "John handled my case with the utmost professionalism and care. He was always available to answer my questions and fought tirelessly for my rights.",
    name: "Sarah M.",
    caseType: "Family Law",
    location: "بغداد, المنصور, شارع مطعم الساعة",
    initials: "SM",
    rating: 5,
    date: "2 months ago",
  },
  {
    quote:
      "After my arrest, I was terrified. D.Baraa A. Khaleel guided me through every step and achieved the best possible outcome. I can't thank them enough.",
    name: "David R.",
    caseType: "Criminal Defense",
    location: "بغداد, المنصور, شارع مطعم الساعة",
    initials: "DR",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    quote:
      "Their business law expertise saved our company from a potentially devastating lawsuit. Highly recommended for any corporate legal needs.",
    name: "Michael T.",
    caseType: "Business Law",
    location: "بغداد, المنصور, شارع مطعم الساعة",
    initials: "MT",
    rating: 5,
    date: "1 month ago",
  },
  {
    quote:
      "When our corporation faced a complex merger dispute, D.Baraa A. Khaleel's strategic counsel was invaluable. They navigated the regulatory landscape with precision and secured a favorable outcome that protected our shareholders' interests.",
    name: "Jennifer K.",
    caseType: "Corporate Law",
    location: "بغداد, المنصور, شارع مطعم الساعة",
    initials: "JK",
    rating: 5,
    date: "5 months ago",
  },
  {
    quote:
      "Going through a custody battle was the hardest thing I've ever faced. Their family law team showed genuine compassion while being fierce advocates in court. I got full custody of my children and I'll forever be grateful.",
    name: "Robert L.",
    caseType: "Family Law",
    location: "بغداد, المنصور, شارع مطعم الساعة",
    initials: "RL",
    rating: 5,
    date: "1 week ago",
  },
  {
    quote:
      "After being wrongfully terminated, I didn't know where to turn. D.Baraa A. Khaleel took my case on contingency and fought for every dollar I deserved. They truly care about their clients.",
    name: "Amanda P.",
    caseType: "Employment Law",
    location: "بغداد, المنصور, شارع مطعم الساعة",
    initials: "AP",
    rating: 5,
    date: "4 months ago",
  },
  {
    quote:
      "My immigration case was incredibly complex, but this firm navigated every hurdle with expertise. I now have my green card and couldn't be happier. Thank you for changing my life.",
    name: "Carlos V.",
    caseType: "Immigration Law",
    location: "بغداد, المنصور, شارع مطعم الساعة",
    initials: "CV",
    rating: 5,
    date: "6 months ago",
  },
  {
    quote:
      "I was injured in a commercial truck accident and the insurance company offered me almost nothing. D.Baraa A. Khaleel secured a $1.2M settlement that covers all my medical needs.",
    name: "Patricia W.",
    caseType: "Personal Injury",
    location: "بغداد, المنصور, شارع مطعم الساعة",
    initials: "PW",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    quote:
      "As a small business owner, having reliable legal counsel is essential. This firm has been our go-to for contract reviews, compliance issues, and dispute resolution for over 5 years.",
    name: "Thomas H.",
    caseType: "Business Law",
    location: "بغداد, المنصور, شارع مطعم الساعة",
    initials: "TH",
    rating: 5,
    date: "3 months ago",
  },
  {
    quote:
      "The real estate closing on our first home hit unexpected legal complications. The team resolved everything quickly and kept us informed throughout. Professional and thorough.",
    name: "Linda S.",
    caseType: "Real Estate",
    location: "بغداد, المنصور, شارع مطعم الساعة",
    initials: "LS",
    rating: 4,
    date: "8 months ago",
  },
];
*/

const TESTIMONIALS = [
  {
    rating: 5,
    en: {
      quote:
        "The office reviewed our company registration documents carefully and explained every required step before submission. The process was organized and clear.",
      name: "Ahmed H.",
      caseType: "Company Registration",
      location: "Baghdad, Al-Mansour",
      initials: "AH",
      date: "2 months ago",
    },
    ar: {
      quote:
        "راجع المكتب مستندات تسجيل شركتنا بدقة وشرح لنا كل خطوة مطلوبة قبل التقديم. كانت الإجراءات منظمة وواضحة.",
      name: "أحمد ح.",
      caseType: "تسجيل الشركات",
      location: "بغداد، المنصور",
      initials: "أح",
      date: "قبل شهرين",
    },
  },
  {
    rating: 5,
    en: {
      quote:
        "I needed representation in a property dispute. The lawyer prepared the file, followed the hearings, and kept me informed after each court date.",
      name: "Zainab A.",
      caseType: "Property Dispute",
      location: "Baghdad, Karrada",
      initials: "ZA",
      date: "3 weeks ago",
    },
    ar: {
      quote:
        "كنت بحاجة إلى تمثيل في نزاع ملكية. قام المحامي بإعداد الملف ومتابعة الجلسات وإبلاغي بكل جديد بعد كل موعد في المحكمة.",
      name: "زينب ع.",
      caseType: "نزاعات الملكية",
      location: "بغداد، الكرادة",
      initials: "زع",
      date: "قبل 3 أسابيع",
    },
  },
  {
    rating: 5,
    en: {
      quote:
        "Their team helped us draft and review a commercial contract before signing. The advice was practical and helped us avoid unclear obligations.",
      name: "Karim M.",
      caseType: "Commercial Contracts",
      location: "Baghdad, Al-Jadriya",
      initials: "KM",
      date: "1 month ago",
    },
    ar: {
      quote:
        "ساعدنا الفريق في صياغة ومراجعة عقد تجاري قبل التوقيع. كانت الاستشارة عملية وساعدتنا على تجنب التزامات غير واضحة.",
      name: "كريم م.",
      caseType: "العقود التجارية",
      location: "بغداد، الجادرية",
      initials: "كم",
      date: "قبل شهر",
    },
  },
  {
    rating: 5,
    en: {
      quote:
        "The consultation was direct and honest. I received a clear explanation of my options in a criminal complaint and what documents I needed to prepare.",
      name: "Mustafa S.",
      caseType: "Criminal Complaint",
      location: "Baghdad, Al-Harithiya",
      initials: "MS",
      date: "5 months ago",
    },
    ar: {
      quote:
        "كانت الاستشارة مباشرة وواضحة. حصلت على شرح دقيق لخياراتي في دعوى جنائية والمستندات التي يجب أن أجهزها.",
      name: "مصطفى س.",
      caseType: "دعوى جنائية",
      location: "بغداد، الحارثية",
      initials: "مس",
      date: "قبل 5 أشهر",
    },
  },
  {
    rating: 5,
    en: {
      quote:
        "We contacted the office for an investment licensing matter. They clarified the requirements and coordinated the legal paperwork professionally.",
      name: "Sara K.",
      caseType: "Investment Licensing",
      location: "Baghdad, Al-Mansour",
      initials: "SK",
      date: "1 week ago",
    },
    ar: {
      quote:
        "تواصلنا مع المكتب بخصوص إجازة استثمارية. أوضحوا المتطلبات ونسقوا الأوراق القانونية بمهنية عالية.",
      name: "سارة ك.",
      caseType: "إجازات الاستثمار",
      location: "بغداد، المنصور",
      initials: "سك",
      date: "قبل أسبوع",
    },
  },
  {
    rating: 4,
    en: {
      quote:
        "They handled our NGO registration questions with patience and gave us a realistic timeline. The follow-up was consistent throughout the process.",
      name: "Omar R.",
      caseType: "Organization Registration",
      location: "Baghdad, Palestine Street",
      initials: "OR",
      date: "4 months ago",
    },
    ar: {
      quote:
        "تعاملوا مع أسئلتنا حول تسجيل منظمة بصبر وقدموا لنا جدولاً زمنياً واقعياً. كانت المتابعة مستمرة طوال الإجراءات.",
      name: "عمر ر.",
      caseType: "تسجيل المنظمات",
      location: "بغداد، شارع فلسطين",
      initials: "عر",
      date: "قبل 4 أشهر",
    },
  },
];

function TestimonialsSection() {
  const { t, language, isRTL } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right",
  );
  const [allReviewsOpen, setAllReviewsOpen] = useState(false);
  const testimonials = TESTIMONIALS.map((testimonial) => ({
    ...testimonial[language],
    rating: testimonial.rating,
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection("right");
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goTo = (index: number) => {
    setSlideDirection(index > activeIndex ? "right" : "left");
    setActiveIndex(index);
  };

  const prev = (direction: "left" | "right" = "left") => {
    setSlideDirection(direction);
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const next = (direction: "left" | "right" = "right") => {
    setSlideDirection(direction);
    setActiveIndex((i) => (i + 1) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-charcoal relative overflow-hidden">
      {/* All Reviews Dialog */}
      <Dialog open={allReviewsOpen} onOpenChange={setAllReviewsOpen}>
        <DialogContent className="sm:max-w-3xl bg-white dark:bg-charcoal-dark border-gold/20 max-h-[85vh] overflow-y-auto">
          <DialogTitle className="sr-only">
            {t.testimonials.clientReviews}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {t.testimonials.clientReviews}
          </DialogDescription>
          <div className="p-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                <Star size={24} className="text-gold fill-gold" />
              </div>
              <div>
                <h2
                  className="text-2xl font-bold text-charcoal dark:text-white"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {t.testimonials.clientReviews}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <span className="text-gold font-semibold text-sm">4.9/5</span>
                  <span className="text-medium-gray dark:text-gray-400 text-sm">
                    {language === "ar"
                      ? `(${testimonials.length} تقييمات)`
                      : `(${testimonials.length} reviews)`}
                  </span>
                </div>
              </div>
            </div>
            {/* Google Reviews Badge */}
            <div className="flex items-center gap-2 mb-6 p-3 bg-light-gray dark:bg-charcoal rounded-lg border border-border-gray dark:border-gray-700">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-sm text-charcoal dark:text-gray-300 font-medium">
                {t.testimonials.reviewsVerified}
              </span>
            </div>
            <div className="space-y-4">
              {testimonials.map((tm) => (
                <div
                  key={tm.name}
                  className="p-4 border border-border-gray dark:border-gray-700 rounded-lg hover:border-gold/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shrink-0">
                      <span className="text-charcoal font-bold text-sm">
                        {tm.initials}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-charcoal dark:text-white font-semibold text-sm">
                          {tm.name}
                        </p>
                        <span className="text-medium-gray dark:text-gray-500 text-xs shrink-0">
                          {tm.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          {[...Array(tm.rating)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className="text-gold fill-gold"
                            />
                          ))}
                        </div>
                        <span className="text-gold text-xs font-medium">
                          {tm.caseType}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p
                    className="text-medium-gray dark:text-gray-300 text-sm leading-relaxed italic"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    &ldquo;{tm.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <MapPin
                      size={10}
                      className="text-medium-gray dark:text-gray-500"
                    />
                    <span className="text-medium-gray dark:text-gray-500 text-xs">
                      {tm.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212,175,55,0.1) 10px, rgba(212,175,55,0.1) 11px)",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <AnimatedSection>
          <SectionTitle
            title={t.testimonials.title}
            subtitle={t.testimonials.subtitle}
            light
          />
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="max-w-3xl mx-auto text-center relative">
            {/* Large quote mark */}
            <div
              className="text-gold text-6xl mb-4 opacity-30"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              &ldquo;
            </div>

            {/* Testimonial content */}
            <div className="min-h-[180px] md:min-h-[220px] flex items-center justify-center overflow-hidden">
              <div
                key={activeIndex}
                className="w-full"
                style={{
                  animation:
                    slideDirection === "right"
                      ? "slideInRight 500ms ease-out forwards"
                      : "slideInLeft 500ms ease-out forwards",
                }}
              >
                {/* Quote card with border */}
                <div className="bg-charcoal-dark/50 border border-gold/20 rounded-lg p-4 md:p-8 shadow-[0_0_15px_rgba(212,175,55,0.08)] transition-all duration-500">
                  <p
                    className="text-gray-100 text-base md:text-xl leading-relaxed mb-6 md:mb-8 italic"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    &ldquo;{testimonials[activeIndex].quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="text-gold fill-gold"
                        />
                      ),
                    )}
                  </div>
                  {/* Client info with initials-based avatar */}
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shrink-0">
                      <span className="text-charcoal font-bold text-sm">
                        {testimonials[activeIndex].initials}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="text-white font-semibold">
                        {testimonials[activeIndex].name}
                      </p>
                      <p className="text-gold text-xs uppercase tracking-wider">
                        {testimonials[activeIndex].caseType}
                      </p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <MapPin size={10} className="text-gray-300" />
                        <p className="text-gray-300 text-xs">
                          {testimonials[activeIndex].location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => (isRTL ? next("left") : prev("left"))}
              className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 w-11 h-11 min-w-[44px] min-h-[44px] border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => (isRTL ? prev("right") : next("right"))}
              className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 w-11 h-11 min-w-[44px] min-h-[44px] border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all min-w-[44px] min-h-[44px] flex items-center justify-center ${i === activeIndex ? "bg-gold w-8 h-3" : "w-3 h-3 bg-gold/30 hover:bg-gold/60"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Google Reviews Badge + View All Reviews Button */}
      </div>
    </section>
  );
}

function CounterStatsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-charcoal-dark relative overflow-hidden">
      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:flex items-center justify-between gap-6 md:gap-0">
          <CounterItem
            icon={<Award size={28} className="md:w-[40px] md:h-[40px]" />}
            value={1500}
            suffix="+"
            label={t.counter.casesWon}
            delay={0}
          />
          {/* Gold divider */}
          <div className="hidden md:block w-px h-16 bg-gold/20" />
          <CounterItem
            icon={<TrendingUp size={28} className="md:w-[40px] md:h-[40px]" />}
            value={12}
            suffix="+"
            label={t.counter.yearsExperience}
            delay={200}
          />
          <div className="hidden md:block w-px h-16 bg-gold/20" />
          <CounterItem
            icon={<Eye size={28} className="md:w-[40px] md:h-[40px]" />}
            value={98}
            suffix="%"
            label={t.counter.successRate}
            delay={400}
          />
          <div className="hidden md:block w-px h-16 bg-gold/20" />
          <CounterItem
            icon={<Users size={28} className="md:w-[40px] md:h-[40px]" />}
            value={12}
            suffix="+"
            label={t.counter.expertLawyers}
            delay={600}
          />
        </div>
      </div>
    </section>
  );
}

/* ===== Section Divider Component ===== */

function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}
    >
      <svg
        className="relative block w-full h-[50px]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 25C200 0 400 50 600 25C800 0 1000 50 1200 25V50H0V25Z"
          fill="currentColor"
          className="text-gold/10"
        />
        <path
          d="M0 30C200 5 400 55 600 30C800 5 1000 55 1200 30V50H0V30Z"
          fill="currentColor"
          className="text-gold/5"
        />
      </svg>
    </div>
  );
}

function HowWeCanHelpAccordion() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = t.howWeCanHelp.items;

  return (
    <div className="space-y-3">
      {items.map(
        (item: { title: string; description: string }, index: number) => (
          <div
            key={item.title}
            className={`border-l-4 transition-all duration-300 ${
              openIndex === index
                ? "border-l-gold bg-white dark:bg-charcoal-dark shadow-md"
                : "border-l-transparent bg-white/50 dark:bg-charcoal/50 hover:bg-white dark:hover:bg-charcoal-dark shadow-sm"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left group"
              aria-expanded={openIndex === index}
              aria-controls={`accordion-content-${index}`}
            >
              <h3
                className={`font-semibold text-lg transition-colors duration-300 ${
                  openIndex === index
                    ? "text-gold"
                    : "text-charcoal dark:text-gray-300 group-hover:text-gold"
                }`}
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {item.title}
              </h3>
              <div
                className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${
                  openIndex === index
                    ? "bg-gold text-charcoal border-gold"
                    : "border-gold/30 text-gold group-hover:border-gold group-hover:bg-gold/10"
                }`}
              >
                {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>
            <div
              id={`accordion-content-${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              role="region"
              aria-labelledby={`accordion-trigger-${index}`}
            >
              <div className="px-6 pb-5 pt-0">
                <p className="text-medium-gray dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

/* ===== Practice Area Share Buttons ===== */
function PracticeAreaShareButtons({ title }: { title: string }) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast({ title: t.common.copied, description: "" });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Failed to copy",
        description: "",
        variant: "destructive",
      });
    }
  };

  const handleShareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Learn about ${title} at D.Baraa A. Khaleel`)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleShareLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-4 border-t border-border-gray dark:border-gray-700">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-charcoal dark:text-gray-300 font-semibold text-sm flex items-center gap-2">
          <Share2 size={16} className="text-gold" />
          {t.common.shareThis}
        </span>
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-1.5 px-3 py-2 text-sm border border-border-gray dark:border-gray-600 rounded-md hover:border-gold hover:text-gold transition-colors text-charcoal dark:text-gray-300"
        >
          {copied ? (
            <Check size={14} className="text-gold" />
          ) : (
            <Copy size={14} />
          )}
          {copied ? t.common.copied : t.common.copyLink}
        </button>
        <button
          onClick={handleShareTwitter}
          className="flex items-center gap-1.5 px-3 py-2 text-sm border border-border-gray dark:border-gray-600 rounded-md hover:border-gold hover:text-gold transition-colors text-charcoal dark:text-gray-300"
        >
          <Twitter size={14} />
          Twitter
        </button>
        <button
          onClick={handleShareLinkedIn}
          className="flex items-center gap-1.5 px-3 py-2 text-sm border border-border-gray dark:border-gray-600 rounded-md hover:border-gold hover:text-gold transition-colors text-charcoal dark:text-gray-300"
        >
          <Linkedin size={14} />
          LinkedIn
        </button>
      </div>
    </div>
  );
}

export function HomePage() {
  const { t, isRTL } = useLanguage();
  const { navigate } = useRouter();
  const [caseIndex, setCaseIndex] = useState(0);
  const [selectedPracticeAreaIndex, setSelectedPracticeAreaIndex] = useState<
    number | null
  >(null);
  const [practiceAreaModalOpen, setPracticeAreaModalOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [typedName, setTypedName] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const heroSubtitles = t.hero.subtitles;
  const heroDescriptions = t.hero.descriptions;

  // Typing animation for attorney name
  useEffect(() => {
    const fullName = t.hero.name;
    let i = 0;
    setTypedName("");
    setIsTyping(true);
    const timer = setInterval(() => {
      if (i < fullName.length) {
        setTypedName(fullName.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, [heroSlide, t.hero.name]);

  // Auto-cycle hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSubtitles.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSubtitles.length]);

  const caseItems = t.cases.items;
  const visibleCasesStart = caseIndex;
  const visibleCasesEnd = caseIndex + 4;
  const canGoLeft = caseIndex > 0;
  const canGoRight = caseIndex < caseItems.length - 4;
  const contactCards = [
    {
      icon: Phone,
      label: t.contactPage.info.phone.title,
      value: t.contactPage.info.phone.number,
      href: `tel:${t.contactPage.info.phone.number.replace(/\s/g, "")}`,
      subtitle: t.contactPage.hours.weekdayHours,
    },
    {
      icon: Mail,
      label: t.contactPage.info.email.title,
      value: t.contactPage.info.email.address,
      href: `mailto:${t.contactPage.info.email.address}`,
      subtitle: t.contactPage.form.title,
    },
    {
      icon: MapPin,
      label: t.contactPage.info.address.title,
      value: t.contactPage.info.address.full.replace("\n", ", "),
      href: "https://maps.app.goo.gl/MUkfnMUiTLEBo3W96",
      subtitle: t.contactPage.addressCard.title,
    },
  ];

  const handlePracticeAreaClick = (index: number) => {
    setSelectedPracticeAreaIndex(index);
    setPracticeAreaModalOpen(true);
  };

  const selectedPracticeArea =
    selectedPracticeAreaIndex !== null
      ? PRACTICE_AREA_DETAILS[selectedPracticeAreaIndex]
      : null;
  const selectedPracticeAreaIcon =
    selectedPracticeAreaIndex !== null
      ? PRACTICE_AREA_ICONS[selectedPracticeAreaIndex]
      : null;
  const selectedPracticeAreaTitle =
    selectedPracticeAreaIndex !== null
      ? t.practiceAreas.items[selectedPracticeAreaIndex].title
      : "";
  const selectedPracticeAreaDesc =
    selectedPracticeAreaIndex !== null
      ? t.practiceAreas.items[selectedPracticeAreaIndex].desc
      : "";
  const SelectedPracticeAreaIcon = selectedPracticeAreaIcon;

  return (
    <div className="overflow-x-hidden max-w-full">
      {/* Practice Area Detail Modal */}
      <Dialog
        open={practiceAreaModalOpen}
        onOpenChange={setPracticeAreaModalOpen}
      >
        <DialogContent className="sm:max-w-2xl bg-white dark:bg-charcoal-dark border-gold/20 max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">
            {selectedPracticeAreaTitle} - Practice Area Details
          </DialogTitle>
          <DialogDescription className="sr-only">
            {selectedPracticeAreaDesc}
          </DialogDescription>

          {selectedPracticeArea && SelectedPracticeAreaIcon && (
            <div className="space-y-6">
              {/* Icon and Title */}
              <div className="flex items-center gap-4 pb-4 border-b border-border-gray dark:border-gray-700">
                <div className="w-16 h-16 flex items-center justify-center bg-gold/10 text-gold shrink-0">
                  <SelectedPracticeAreaIcon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h2
                    className="text-2xl font-bold text-charcoal dark:text-white"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {selectedPracticeAreaTitle}
                  </h2>
                  <p className="text-gold text-sm uppercase tracking-wider font-semibold">
                    {selectedPracticeAreaDesc}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-medium-gray dark:text-gray-300 leading-relaxed text-sm">
                  {selectedPracticeArea.description}
                </p>
              </div>

              {/* Key Services */}
              <div>
                <h3
                  className="text-lg font-bold text-charcoal dark:text-white mb-4"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Key Services
                </h3>
                <div className="space-y-2.5">
                  {selectedPracticeArea.services.map((service) => (
                    <div key={service} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-gold shrink-0" />
                      <span className="text-charcoal dark:text-gray-300 text-sm">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <PracticeAreaShareButtons title={selectedPracticeAreaTitle} />

              {/* CTA Button */}
              <div className="pt-4 border-t border-border-gray dark:border-gray-700">
                <button
                  onClick={() => {
                    setPracticeAreaModalOpen(false);
                    navigate("contact");
                  }}
                  className="w-full btn-ripple btn-primary-hover bg-gold text-charcoal px-6 py-3.5 font-semibold uppercase text-sm tracking-wider hover:bg-gold-dark transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  {t.common.contactUs}
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-charcoal overflow-hidden max-w-full">
        {/* Background image with dark overlay - parallax-like effect */}
        <div className="absolute inset-0 hero-parallax-bg">
          <div
            className="absolute inset-0 scale-110"
            style={{
              backgroundImage: "url(/images/hero-bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Floating gold particles (CSS only) - hidden on mobile for performance */}
        <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="particle"
            style={{
              left: "10%",
              animationDuration: "12s",
              animationDelay: "0s",
              width: "3px",
              height: "3px",
            }}
          />
          <div
            className="particle"
            style={{
              left: "25%",
              animationDuration: "15s",
              animationDelay: "2s",
              width: "4px",
              height: "4px",
            }}
          />
          <div
            className="particle"
            style={{
              left: "40%",
              animationDuration: "10s",
              animationDelay: "4s",
              width: "2px",
              height: "2px",
            }}
          />
          <div
            className="particle"
            style={{
              left: "55%",
              animationDuration: "14s",
              animationDelay: "1s",
              width: "3px",
              height: "3px",
            }}
          />
          <div
            className="particle"
            style={{
              left: "70%",
              animationDuration: "11s",
              animationDelay: "3s",
              width: "5px",
              height: "5px",
            }}
          />
          <div
            className="particle"
            style={{
              left: "85%",
              animationDuration: "13s",
              animationDelay: "5s",
              width: "2px",
              height: "2px",
            }}
          />
          <div
            className="particle"
            style={{
              left: "15%",
              animationDuration: "16s",
              animationDelay: "6s",
              width: "3px",
              height: "3px",
            }}
          />
          <div
            className="particle"
            style={{
              left: "60%",
              animationDuration: "9s",
              animationDelay: "7s",
              width: "4px",
              height: "4px",
            }}
          />
          <div
            className="particle"
            style={{
              left: "90%",
              animationDuration: "12s",
              animationDelay: "8s",
              width: "2px",
              height: "2px",
            }}
          />
          <div
            className="particle"
            style={{
              left: "35%",
              animationDuration: "14s",
              animationDelay: "9s",
              width: "3px",
              height: "3px",
            }}
          />
        </div>

        {/* Decorative gold border frame around hero */}
        <div className="absolute inset-2 md:inset-4 lg:inset-8 border border-gold/15 pointer-events-none z-20">
          {/* Corner accents */}
          <div className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-gold/60" />
          <div className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-gold/60" />
          <div className="absolute -bottom-px -left-px w-8 h-8 border-b-2 border-l-2 border-gold/60" />
          <div className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-gold/60" />
        </div>

        {/* Decorative gold lines top/bottom */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gold/40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gold/40" />

        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 lg:py-24 relative z-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            {/* Left content */}
            <div className="animate-fade-in-up" key={heroSlide}>
              {/* Gold badge with shimmer pulse */}
              <div className="inline-flex items-center gap-1.5 md:gap-2 gold-gradient text-charcoal px-3 py-1.5 md:px-5 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 shimmer-badge animate-pulse-gold">
                <span className="w-2 h-2 rounded-full bg-charcoal" />
                {t.hero.badge}
              </div>

              {/* Decorative gold line */}
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="gold-line animate-line-expand" />
                <span className="text-gold text-xs md:text-sm font-semibold uppercase tracking-widest">
                  {heroSubtitles[heroSlide]}
                </span>
              </div>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] max-w-full"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  textShadow: "0 2px 10px rgba(0,0,0,0.7)",
                }}
              >
                <span className={isTyping ? "animate-typing-cursor" : ""}>
                  {typedName}
                </span>
              </h1>

              {/* Gold separator */}
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <span className="w-12 h-0.5 bg-gold" />
                <span className="w-2 h-2 bg-gold rotate-45" />
                <span className="w-12 h-0.5 bg-gold" />
              </div>

              <p className="text-gray-100 text-base md:text-lg mb-6 md:mb-8 max-w-md leading-relaxed">
                {heroDescriptions[heroSlide]}
              </p>

              {/* <div className="flex flex-wrap items-center gap-2 text-white text-base md:text-lg max-w-full">
                <Phone
                  size={18}
                  className="text-gold md:w-[20px] md:h-[20px] shrink-0"
                />
                <span className="font-medium">{t.hero.callFree}:</span>
                <a
                  href="tel:07802233000"
                  className="text-gold font-semibold hover:text-gold-light transition-colors ml-2 md:ml-4 min-h-[44px] flex items-center"
                >
                  <span dir="ltr" className="phone-ltr">
                    07802233000
                  </span>
                </a>
              </div> */}

              <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                <button
                  onClick={() => navigate("contact")}
                  className="bg-gold text-charcoal px-8 py-3.5 font-semibold uppercase text-sm tracking-wider hover:bg-gold-light transition-all flex items-center gap-2"
                >
                  <Phone size={16} />
                  {t.faqPage.stillHaveQuestions.contactUs}
                </button>
              </div>

              {/* Slider dots - functional with auto-cycle */}
              <div className="flex items-center gap-2 mt-8 md:mt-10">
                {heroSubtitles.map((_: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => setHeroSlide(i)}
                    className={`transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${i === heroSlide ? "h-1.5 w-8 bg-gold" : "h-1.5 w-4 bg-gold/40 hover:bg-gold/60"}`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right - Attorney Image with enhanced gold frame */}
            <div className="hidden lg:flex justify-end animate-slide-in-right">
              <div className="relative corner-frame">
                {/* Gold frame border */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold/60" />
                {/* Corner decorations */}
                <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold z-20" />
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-gold z-20" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-gold z-20" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold z-20" />
                {/* Small diamond at top-left corner */}
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-gold rotate-45 z-30" />
                {/* Small diamond at bottom-right corner */}
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gold rotate-45 z-30" />
                <img
                  src="/images/lawyer-hero-new.png"
                  alt={t.hero.name}
                  className="relative z-10 max-h-[500px] object-cover shadow-2xl rounded-b-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gradient overlay at bottom of hero blending into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-charcoal to-transparent z-10 pointer-events-none" />
      </section>

      {/* Counter Stats Section */}
      <CounterStatsSection />

      {/* Wave divider: dark to light transition */}
      <div className="relative w-full overflow-hidden leading-[0] bg-charcoal-dark dark:bg-charcoal-dark">
        <svg
          className="relative block w-full h-[60px] md:h-[80px]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40C150 10 350 70 600 40C850 10 1050 70 1200 40V80H0V40Z"
            className="fill-white dark:fill-charcoal-dark"
          />
          <path
            d="M0 50C200 20 400 80 600 50C800 20 1000 80 1200 50V80H0V50Z"
            fill="currentColor"
            className="text-gold/8"
          />
        </svg>
      </div>

      {/* Practice Areas Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-charcoal-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              title={t.practiceAreas.title}
              subtitle={t.practiceAreas.subtitle}
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.practiceAreas.items.map((area, index) => {
              const Icon = PRACTICE_AREA_ICONS[index] ?? Scale;

              return (
                <AnimatedSection
                  key={index}
                  delay={index * 100}
                  className="h-full"
                >
                  <div className="practice-card hover-gold-shadow flex h-full items-start gap-3 md:gap-4 p-5 md:p-6 rounded-lg bg-white dark:bg-charcoal border border-border-gray dark:border-gray-700 shadow-sm hover:shadow-md group relative overflow-hidden hover:border-t-2 hover:border-t-gold hover:scale-[1.02] transition-all duration-300">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-gold/10 dark:bg-gold/5 text-gold group-hover:bg-gold group-hover:text-white transition-all group-hover:rotate-6 duration-300 rounded-lg">
                      <Icon
                        size={24}
                        strokeWidth={1.5}
                        className="md:w-[32px] md:h-[32px]"
                      />
                    </div>
                    <div className="relative z-10 flex-1">
                      <h3 className="font-semibold text-charcoal dark:text-white text-lg mb-1 group-hover:text-gold transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-medium-gray dark:text-gray-300 text-sm">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
          {/* <AnimatedSection>
            <div className="text-center mt-10">
              <button
                onClick={() => navigate("practice-areas")}
                className="btn-ripple btn-primary-hover border-2 border-gold text-gold px-8 py-3 font-semibold uppercase text-sm tracking-wider hover:bg-gold hover:text-charcoal transition-all"
              >
                {t.practiceAreas.viewAll}
              </button>
            </div>
          </AnimatedSection> */}
        </div>
      </section>

      {/* Section divider */}
      <SectionDivider />

      {/* How it Works Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-light-gray dark:bg-charcoal relative overflow-hidden transition-colors duration-300">
        {/* Decorative scales background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <Scale size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection>
            <SectionTitle
              title={t.howItWorks.title}
              subtitle={t.howItWorks.subtitle}
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting arrows between steps (desktop only) */}
            <div className="hidden md:flex absolute top-1/3 left-[33.33%] -translate-x-1/2 z-20 text-gold">
              <div className="relative">
                <div className="w-12 h-px bg-gold" />
                <ArrowRight
                  size={16}
                  className={`absolute -top-2 ${isRTL ? "-left-2 rotate-180" : "-right-2"}`}
                />
              </div>
            </div>
            <div className="hidden md:flex absolute top-1/3 left-[66.66%] -translate-x-1/2 z-20 text-gold">
              <div className="relative">
                <div className="w-12 h-px bg-gold" />
                <ArrowRight
                  size={16}
                  className={`absolute -top-2 ${isRTL ? "-left-2 rotate-180" : "-right-2"}`}
                />
              </div>
            </div>

            {HOW_IT_WORKS_ICONS.map((Icon, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <div className="text-center bg-white dark:bg-charcoal p-5 md:p-6 rounded-lg border border-border-gray dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow relative">
                  {/* Step number */}
                  <div
                    className="absolute top-4 right-4 text-6xl font-bold text-light-gray dark:text-gray-700"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    0{index + 1}
                  </div>
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border-2 border-gold text-gold rounded-full">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal dark:text-white mb-2">
                    {t.howItWorks.items[index].title}
                  </h3>
                  <p className="text-medium-gray dark:text-gray-300 text-sm">
                    {t.howItWorks.items[index].subtitle}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Can Help - Interactive Accordion Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-light-gray dark:bg-charcoal transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              title={t.howWeCanHelp.title}
              subtitle={t.howWeCanHelp.subtitle}
            />
          </AnimatedSection>
          <div className="max-w-3xl mx-auto mt-6 md:mt-8">
            <HowWeCanHelpAccordion />
          </div>
        </div>
      </section>

      {/* Section divider */}
      <SectionDivider flip />

      {/* A Case Like Yours Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-charcoal-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title={t.cases.title} subtitle={t.cases.subtitle} />
          </AnimatedSection>
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseItems
                .slice(visibleCasesStart, visibleCasesEnd)
                .map(
                  (
                    caseItem: { title: string; category: string },
                    index: number,
                  ) => (
                    <AnimatedSection
                      key={caseIndex + index}
                      delay={index * 100}
                    >
                      <div className="overflow-hidden relative">
                        <div className="relative h-44 md:h-56 overflow-hidden">
                          <img
                            src={CASE_IMAGES[caseIndex + index]}
                            alt={caseItem.title}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                          {/* Category badge */}
                          <div className="absolute top-3 left-3">
                            <span className="bg-gold text-charcoal text-xs uppercase tracking-wider font-bold px-3 py-1">
                              {caseItem.category}
                            </span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-white font-bold text-lg">
                              {caseItem.title}
                            </h3>
                          </div>
                        </div>
                        <div className="h-1 bg-gold" />
                      </div>
                    </AnimatedSection>
                  ),
                )}
            </div>
            {canGoLeft && (
              <button
                onClick={() => setCaseIndex(Math.max(0, caseIndex - 1))}
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-11 h-11 min-w-[44px] min-h-[44px] bg-white dark:bg-charcoal shadow-lg flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all"
              >
                <ChevronLeft size={20} />
              </button>
            )}
            {canGoRight && (
              <button
                onClick={() =>
                  setCaseIndex(Math.min(caseItems.length - 4, caseIndex + 1))
                }
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-11 h-11 min-w-[44px] min-h-[44px] bg-white dark:bg-charcoal shadow-lg flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <SectionDivider />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Client Logo Carousel Section */}
      <section className="py-8 md:py-12 bg-light-gray dark:bg-gold overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <AnimatedSection>
            <SectionTitle title={t.clientLogos.title} subtitle="Our Clients" />
          </AnimatedSection>
        </div>
        <div className="relative overflow-hidden group">
          {/* Top and bottom gold accent lines */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gold/30" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gold/30" />
          {/* Marquee - double items for seamless loop */}
          <div className="flex animate-ticker">
            {[
              ...CLIENT_LOGOS,
              ...CLIENT_LOGOS,
              ...CLIENT_LOGOS,
              ...CLIENT_LOGOS,
              ...CLIENT_LOGOS,
              ...CLIENT_LOGOS,
            ].map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="flex-shrink-0 mx-6 md:mx-10 flex items-center justify-center h-24 w-44 md:w-56 px-5 md:px-8 border border-transparent hover:border-gold/20 rounded-lg transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="max-h-16 w-full object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Area List Section */}
      {/* <section className="py-12 md:py-16 lg:py-20 bg-light-gray dark:bg-charcoal transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <SectionTitle
                  title={t.practiceList.title}
                  subtitle={t.practiceList.subtitle}
                  className="text-left [&>*]:text-left [&>*]:justify-start"
                />
                <p className="text-medium-gray dark:text-gray-300 mb-6 leading-relaxed">
                  {t.immigration.description}
                </p>
                <button
                  onClick={() => navigate("practice-areas")}
                  className="text-gold hover:underline font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                >
                  {t.immigration.learnMore} <ArrowRight size={16} />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {t.practiceList.items.map((item: string) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 py-2 border-b border-border-gray dark:border-gray-700"
                  >
                    <ChevronRight size={14} className="text-gold shrink-0" />
                    <span className="text-charcoal dark:text-gray-300 text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden bg-gold dark:bg-[#1a1a1a] transition-colors duration-300">
        {/* Decorative pattern behind */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(51,51,51,0.1) 20px, rgba(51,51,51,0.1) 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(51,51,51,0.1) 20px, rgba(51,51,51,0.1) 21px)",
            }}
          />
        </div>
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-charcoal/10" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border border-charcoal/10" />

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {t.cta.title}
            </h2>
            <p className="text-charcoal/80 dark:text-white/85 mb-8 max-w-2xl mx-auto">
              {t.cta.description}
            </p>
            <button
              onClick={() => navigate("contact")}
              className="btn-ripple btn-primary-hover bg-white text-charcoal border-2 border-charcoal dark:border-white px-8 py-3 font-semibold uppercase text-sm tracking-wider hover:bg-charcoal hover:text-white hover:border-charcoal dark:hover:bg-white dark:hover:text-charcoal dark:hover:border-white transition-all"
            >
              {t.cta.contactUs}
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Appointment Booking Form */}
      <AppointmentForm />
    </div>
  );
}
