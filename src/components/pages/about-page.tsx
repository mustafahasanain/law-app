"use client";

import React, { useEffect, useState } from "react";
import { PageHero } from "../thelaw/page-hero";
import { SectionTitle } from "../thelaw/section-title";
import { useRouter } from "../thelaw/router";
import {
  AnimatedSection,
  CounterItem,
  useScrollAnimation,
  useCountAnimation,
} from "../thelaw/scroll-animation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Scale,
  Shield,
  CheckCircle,
  Phone,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  DollarSign,
  Users,
  Banknote,
  Gavel,
  GraduationCap,
  Award,
  MapPin,
  TrendingUp,
  Eye,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

const SERVICE_ICONS = [Scale, DollarSign, Users, Shield, Gavel, Banknote];

const TEAM_MEMBERS = [
  {
    name: "Mark Brown",
    role: "Senior Attorney",
    img: "/images/team-1.png",
    bio: "Mark Brown is a distinguished senior attorney with over 20 years of experience in criminal defense and civil litigation. After graduating magna cum laude from Columbia Law School, he began his career as a public defender before transitioning to private practice. Mark has successfully tried over 300 cases to verdict, earning a reputation as a formidable courtroom advocate who leaves no stone unturned in the pursuit of justice for his clients. His dedication to his clients and his craft has earned him recognition as one of Baghdad's top trial lawyers.",
    bio2: "Beyond his litigation practice, Mark is deeply committed to legal education and mentorship. He serves as an adjunct professor at Baghdad University College of Law, where he teaches advanced trial advocacy. Mark has also authored several influential articles on criminal justice reform and is a frequent speaker at national legal conferences. His pro bono work has helped dozens of underserved clients receive fair representation.",
    practiceAreas: [
      "Criminal Defense",
      "Civil Litigation",
      "Constitutional Law",
      "Appeals",
    ],
    education: [
      "J.D., Columbia Law School (magna cum laude)",
      "B.A., Political Science, Yale University",
    ],
    credentials: [
      "Iraqi Bar Association",
      "U.S. District Court, Southern District of NY",
      "National Association of Criminal Defense Lawyers",
      "American Bar Association - Litigation Section",
    ],
    email: "m.brown@thelawfirm.com",
    phone: "07802233000",
  },
  {
    name: "Jane Doe",
    role: "Lawyer Assistant & Paralegal",
    img: "/images/team-2.png",
    bio: "Jane Doe brings over 15 years of paralegal expertise to our firm, specializing in complex litigation support and case management. With a keen eye for detail and exceptional organizational skills, Jane plays a crucial role in preparing cases for trial, managing discovery processes, and coordinating with expert witnesses. Her thorough approach to case preparation has been instrumental in securing favorable outcomes for countless clients. Jane is certified by the National Association of Legal Assistants and continuously updates her skills through advanced professional development programs.",
    bio2: "Jane is particularly skilled in legal research and document management, utilizing cutting-edge e-discovery tools and database management systems. She has developed innovative workflows that have streamlined the firm's case preparation process, resulting in significant time and cost savings. Jane is also passionate about mentoring junior paralegals and has created a comprehensive training program that has become the standard across the firm.",
    practiceAreas: [
      "Litigation Support",
      "Case Management",
      "Legal Research",
      "E-Discovery",
    ],
    education: [
      "B.S., Legal Studies, Pace University",
      "Paralegal Certificate, Baghdad University",
      "Certified Paralegal (NALA)",
    ],
    credentials: [
      "National Association of Legal Assistants",
      "Baghdad Paralegal Association",
      "Certified E-Discovery Specialist",
    ],
    email: "j.doe@thelawfirm.com",
    phone: "07802233000",
  },
  {
    name: "Alex Darayov",
    role: "Associate Attorney",
    img: "/images/team-3.png",
    bio: "Alex Darayov is a rising star in the legal profession, bringing fresh perspective and innovative strategies to our firm's practice. After graduating from Fordham University School of Law, Alex clerked for the Honorable Judge Patricia Martinez in the Baghdad Court, gaining invaluable insight into judicial decision-making processes. Since joining our firm, Alex has quickly established himself as a skilled negotiator and meticulous legal researcher, with a particular talent for identifying creative solutions to complex legal problems.",
    bio2: "Alex's practice focuses on business law and intellectual property, areas where his background in technology and finance gives him a unique advantage. He has successfully represented numerous startups and established businesses in contract negotiations, trademark disputes, and regulatory compliance matters. Alex is fluent in Russian and English, enabling our firm to better serve a diverse client base. He is actively involved in the American Bar Association's Young Lawyers Division and regularly volunteers at local legal aid clinics.",
    practiceAreas: [
      "Business Law",
      "Intellectual Property",
      "Contract Negotiation",
      "Regulatory Compliance",
    ],
    education: [
      "J.D., Fordham University School of Law",
      "B.S., Finance & Computer Science, Baruch College",
    ],
    credentials: [
      "Iraqi Bar Association",
      "U.S. Patent and Trademark Office",
      "American Bar Association - Business Law Section",
      "Baghdad Bar Association",
    ],
    email: "a.darayov@thelawfirm.com",
    phone: "07802233000",
  },
];

const LEGAL_SERVICES = [
  {
    title: "Legal Consultation",
    desc: "Legal advice is the giving of a professional or formal opinion regarding the substance or procedure of the law in relation to a particular factual situation.",
  },
  {
    title: "Disputes",
    desc: 'A lawsuit is a proceeding by a party or parties against another in the civil court of law. The archaic term "suit in law" is found in only a small number of laws still in effect today.',
  },
  {
    title: "Insurance Services",
    desc: "Insurance is a means of protection from financial loss. It is a form of risk management, primarily used to hedge against the risk of a contingent or uncertain loss.",
  },
];

/* Animated progress bar component */
function AnimatedProgressBar({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const [width, setWidth] = useState(0);
  const { count } = useCountAnimation(value, 1500, isVisible);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(value), 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, value]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="text-charcoal dark:text-gray-300 font-medium text-sm">
          {label}
        </span>
        <span className="text-gold font-semibold text-sm">{count}%</span>
      </div>
      <div className="w-full h-2 bg-light-gray dark:bg-gray-700 overflow-hidden">
        <div
          className="h-full bg-gold transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export function AboutPage() {
  const { navigate } = useRouter();
  const { t, isRTL } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<
    (typeof TEAM_MEMBERS)[0] | null
  >(null);

  const aboutCounters = [
    {
      icon: <TrendingUp size={40} />,
      value: 12,
      suffix: "+",
      label: t.counter.yearsExperience,
    },
    {
      icon: <Award size={40} />,
      value: 1500,
      suffix: "+",
      label: t.counter.casesWon,
    },
    {
      icon: <Eye size={40} />,
      value: 98,
      suffix: "%",
      label: t.counter.successRate,
    },
    {
      icon: <Users size={40} />,
      value: 12,
      suffix: "+",
      label: t.counter.expertLawyers,
    },
  ];
  const aboutHistory = isRTL
    ? {
        title: "تاريخنا",
        subtitle: "محطاتنا",
        items: [
          {
            year: "1998",
            title: "التأسيس",
            description:
              "تأسست شركة المحاماة على أساس الالتزام بالعدالة والدفاع عن العملاء، بدءاً من مكتب صغير وفريق من ثلاثة محامين متفانين.",
          },
          {
            year: "2003",
            title: "أول حكم كبير",
            description:
              "حققنا حكماً بارزاً بقيمة 3.2 مليون دولار في قضية خطأ طبي، مما رسخ سمعتنا في التمثيل القضائي الحازم والفعال.",
          },
          {
            year: "2008",
            title: "التوسع إلى 3 مكاتب",
            description:
              "توسعنا لخدمة العملاء في ثلاث مناطق حضرية رئيسية، مع توسيع الفريق والقدرات لمواكبة الطلب المتزايد.",
          },
          {
            year: "2013",
            title: "القضية الـ 500 الناجحة",
            description:
              "وصلنا إلى محطة 500 نتيجة قضائية ناجحة، في دليل على التزامنا الثابت بتحقيق العدالة لعملائنا.",
          },
          {
            year: "2018",
            title: "تصنيفنا كأحد أفضل الشركات",
            description:
              "تم الاعتراف بنا كواحدة من أفضل 50 شركة محاماة في البلاد، وهو تكريم يعكس التزامنا بالتميز.",
          },
          {
            year: "2023",
            title: "الذكرى الـ 25",
            description:
              "احتفلنا بمرور 25 عاماً من التميز القانوني، بعد خدمة أكثر من 10,000 عميل واسترداد ما يزيد عن 100 مليون دولار في الأحكام والتسويات.",
          },
        ],
      }
    : {
        title: "Our History",
        subtitle: "Milestones",
        items: [
          {
            year: "1998",
            title: "Founded",
            description:
              "D.Baraa A. Khaleel was established with a commitment to justice and client advocacy, starting with a small office and a team of three dedicated attorneys.",
          },
          {
            year: "2003",
            title: "First Major Verdict",
            description:
              "Secured a landmark $3.2M verdict in a medical malpractice case, establishing our reputation for aggressive and effective courtroom representation.",
          },
          {
            year: "2008",
            title: "Expanded to 3 Offices",
            description:
              "Grew our practice to serve clients across three major metropolitan areas, expanding our team and capabilities to meet growing demand.",
          },
          {
            year: "2013",
            title: "500th Case Won",
            description:
              "Reached the milestone of 500 successful case outcomes, a testament to our unwavering dedication to achieving justice for our clients.",
          },
          {
            year: "2018",
            title: "Named Top Law Firm",
            description:
              "Recognized as one of the top 50 law firms in the country, reflecting our long-standing commitment to excellence.",
          },
          {
            year: "2023",
            title: "25th Anniversary",
            description:
              "Celebrated 25 years of legal excellence, having served over 10,000 clients and recovered more than $100M in verdicts and settlements.",
          },
        ],
      };
  const aboutMe = isRTL
    ? {
        title: "عنّي",
        subtitle: "نبذة شخصية",
        description:
          "أنا د. براء عبد الحكيم خليل، محامٍ ومستشار قانوني أعمل على تقديم حلول قانونية واضحة وعملية للأفراد والشركات. أركز في عملي على فهم تفاصيل كل قضية، وشرح الخيارات القانونية للموكلين بشفافية، ثم بناء مسار قانوني منظم يحمي مصالحهم أمام الجهات الرسمية والمحاكم.",
        imageAlt: "د. براء عبد الحكيم خليل",
      }
    : {
        title: "About Me",
        subtitle: "Personal Profile",
        description:
          "I am Dr. Baraa Abdulhakeem Khaleel, an attorney and legal consultant focused on providing clear, practical legal solutions for individuals and businesses. My work starts with understanding each case in detail, explaining the available legal options transparently, and building an organized legal path that protects my clients' interests before official authorities and courts.",
        imageAlt: "Dr. Baraa Abdulhakeem Khaleel",
      };
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  // Merge translation data with TEAM_MEMBERS for i18n support
  const teamMembers = TEAM_MEMBERS.map((member, i) => {
    const translated = t.about.team.members[i];
    return {
      ...member,
      name: translated?.name || member.name,
      role: translated?.role || member.role,
      bio: translated?.bio || member.bio,
    };
  });

  const handleMemberClick = (member: (typeof teamMembers)[0]) => {
    setSelectedMember(member);
    setProfileModalOpen(true);
  };

  return (
    <div className="overflow-x-hidden max-w-full">
      {/* Team Member Profile Modal */}
      <Dialog open={profileModalOpen} onOpenChange={setProfileModalOpen}>
        <DialogContent className="sm:max-w-3xl bg-white dark:bg-charcoal-dark border-gold/20 max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">
            {selectedMember?.name} - Team Member Profile
          </DialogTitle>
          <DialogDescription className="sr-only">
            Professional profile and background of {selectedMember?.name}
          </DialogDescription>

          {selectedMember && (
            <div className="space-y-6">
              {/* Photo and Name Header */}
              <div className="flex flex-col sm:flex-row gap-6 pb-6 border-b border-border-gray dark:border-gray-700">
                <div className="shrink-0">
                  <img
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    loading="lazy"
                    className="w-32 h-40 object-cover object-top border-2 border-gold/30"
                  />
                </div>
                <div className="flex-1">
                  <h2
                    className="text-2xl font-bold text-charcoal dark:text-white mb-1"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {selectedMember.name}
                  </h2>
                  <p className="text-gold text-sm uppercase tracking-wider font-semibold mb-4">
                    {selectedMember.role}
                  </p>
                  {/* Contact Info */}
                  <div className="space-y-2">
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="flex items-center gap-2 text-sm text-medium-gray dark:text-gray-400 hover:text-gold transition-colors"
                    >
                      <Mail size={14} className="text-gold shrink-0" />
                      {selectedMember.email}
                    </a>
                    <a
                      href={`tel:${selectedMember.phone}`}
                      className="flex items-center gap-2 text-sm text-medium-gray dark:text-gray-400 hover:text-gold transition-colors"
                    >
                      <Phone size={14} className="text-gold shrink-0" />
                      <span dir="ltr" className="phone-ltr">
                        {selectedMember.phone}
                      </span>
                    </a>
                  </div>
                  {/* Social Links */}
                  <div className="flex gap-3 mt-4">
                    <a
                      href="#"
                      className="w-9 h-9 bg-charcoal/10 dark:bg-charcoal flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all"
                    >
                      <Facebook size={16} />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-charcoal/10 dark:bg-charcoal flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all"
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-charcoal/10 dark:bg-charcoal flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="w-9 h-9 bg-charcoal/10 dark:bg-charcoal flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all"
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <h3
                  className="text-lg font-bold text-charcoal dark:text-white mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  About
                </h3>
                <p className="text-medium-gray dark:text-gray-300 leading-relaxed text-sm mb-3">
                  {selectedMember.bio}
                </p>
                <p className="text-medium-gray dark:text-gray-300 leading-relaxed text-sm">
                  {selectedMember.bio2}
                </p>
              </div>

              {/* Practice Areas */}
              <div>
                <h3
                  className="text-lg font-bold text-charcoal dark:text-white mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {t.about.team.practiceAreasLabel}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.practiceAreas.map((area: string) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1.5 bg-gold/10 text-gold px-3 py-1.5 text-sm font-medium rounded"
                    >
                      <Scale size={12} />
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education & Credentials in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Education */}
                <div>
                  <h3
                    className="text-lg font-bold text-charcoal dark:text-white mb-3 flex items-center gap-2"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    <GraduationCap size={20} className="text-gold" />
                    {t.about.team.education}
                  </h3>
                  <div className="space-y-2">
                    {selectedMember.education.map((edu: string) => (
                      <div key={edu} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                        <span className="text-medium-gray dark:text-gray-300 text-sm">
                          {edu}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Credentials */}
                <div>
                  <h3
                    className="text-lg font-bold text-charcoal dark:text-white mb-3 flex items-center gap-2"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    <Award size={20} className="text-gold" />
                    {t.about.team.credentials}
                  </h3>
                  <div className="space-y-2">
                    {selectedMember.credentials.map((cred: string) => (
                      <div key={cred} className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="text-gold mt-0.5 shrink-0"
                        />
                        <span className="text-medium-gray dark:text-gray-300 text-sm">
                          {cred}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 border-t border-border-gray dark:border-gray-700">
                <button
                  onClick={() => {
                    setProfileModalOpen(false);
                    navigate("contact");
                  }}
                  className="w-full bg-gold text-charcoal px-6 py-3.5 font-semibold uppercase text-sm tracking-wider hover:bg-gold-dark transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  {t.about.freeEvaluation.contactUs}
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <PageHero
        title={t.about.hero.title}
        breadcrumb={t.about.hero.breadcrumb.current}
      />

      {/* Animated Statistics Counter Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-charcoal relative overflow-hidden">
        {/* Decorative gold lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:flex items-center justify-between gap-6 md:gap-0">
            {aboutCounters.map((counter, index) => (
              <React.Fragment key={counter.label}>
                <CounterItem
                  icon={counter.icon}
                  value={counter.value}
                  suffix={counter.suffix}
                  label={counter.label}
                />
                {index < aboutCounters.length - 1 && (
                  <div className="hidden md:block w-px h-16 bg-gold/20" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-light-gray dark:bg-charcoal relative overflow-hidden transition-colors duration-300">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 1px, transparent 25px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <AnimatedSection>
              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold" />
                <img
                  src="/images/lawyer-hero-new.png"
                  alt={aboutMe.imageAlt}
                  loading="lazy"
                  className="relative z-10 w-full max-h-[520px] object-cover object-top shadow-xl"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div>
                <SectionTitle
                  title={aboutMe.title}
                  subtitle={aboutMe.subtitle}
                  className="text-left [&>*]:text-left [&>*]:justify-start"
                />
                <p className="text-medium-gray dark:text-gray-300 leading-relaxed text-base md:text-lg">
                  {aboutMe.description}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-charcoal-dark relative overflow-hidden transition-colors duration-300">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <SectionTitle
                  title={t.about.vision.title}
                  subtitle={t.about.vision.subtitle}
                  className="text-left [&>*]:text-left [&>*]:justify-start"
                />
                <p className="text-medium-gray dark:text-gray-300 leading-relaxed mb-8">
                  {t.about.vision.description}
                </p>
                {/* Stats - animated progress bars */}
                <div className="space-y-5">
                  {t.about.vision.stats.map(
                    (stat: { label: string; value: number }) => (
                      <AnimatedProgressBar
                        key={stat.label}
                        value={stat.value}
                        label={stat.label}
                      />
                    ),
                  )}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold" />
                  <img
                    src="/images/lawyer-hero-new.png"
                    alt="D.Baraa A. Khaleel"
                    loading="lazy"
                    className="relative z-10 max-h-[450px] object-cover object-top shadow-xl"
                  />
                  <div className="absolute bottom-6 left-0 right-0 z-20 bg-charcoal/80 py-3 text-center">
                    <p className="text-white font-semibold">
                      D.Baraa A. Khaleel
                    </p>
                    <p className="text-gold text-sm">
                      Criminal Justice Attorney
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      {/* <section className="py-12 md:py-16 lg:py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <Scale size={48} className="text-gold mx-auto mb-6" />
            <blockquote
              className="text-xl md:text-2xl lg:text-3xl text-white italic mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              &ldquo;{t.about.quote.text}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <span className="gold-line" />
              <span className="text-gold font-medium">
                {t.about.quote.author}
              </span>
              <span className="gold-line" />
            </div>
          </AnimatedSection>
        </div>
      </section> */}

      {/* Our Mission Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-light-gray dark:bg-charcoal relative overflow-hidden transition-colors duration-300">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 1px, transparent 20px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <div>
                <SectionTitle
                  title={t.about.mission.title}
                  subtitle={t.about.mission.subtitle}
                  className="text-left [&>*]:text-left [&>*]:justify-start"
                />
                <p className="text-medium-gray dark:text-gray-300 leading-relaxed mb-6">
                  {t.about.mission.description}
                </p>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.mission.services.map(
                (service: string, index: number) => {
                  const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
                  return (
                    <AnimatedSection key={service} delay={index * 80}>
                      <div className="flex items-center gap-3 p-4 bg-white dark:bg-charcoal-dark border border-border-gray dark:border-gray-700 hover:border-gold hover:shadow-sm transition-all group cursor-pointer">
                        <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                          <Icon
                            size={18}
                            className="text-gold group-hover:text-white transition-colors"
                          />
                        </div>
                        <span className="text-charcoal dark:text-white font-medium text-sm">
                          {service}
                        </span>
                      </div>
                    </AnimatedSection>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Get Your Legal Advice Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-charcoal-dark relative overflow-hidden transition-colors duration-300">
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection>
            <SectionTitle
              title={t.about.legalAdvice.title}
              subtitle={t.about.legalAdvice.subtitle}
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {t.about.legalAdvice.items.map(
              (item: { title: string; desc: string }, index: number) => {
                const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
                return (
                  <AnimatedSection
                    key={item.title}
                    delay={index * 100}
                    className="h-full"
                  >
                    <div className="practice-card h-full min-h-[300px] text-center p-8 border border-border-gray dark:border-gray-700 bg-white dark:bg-charcoal-dark group cursor-pointer hover:border-gold flex flex-col items-center">
                      <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold transition-colors">
                        <Icon
                          size={28}
                          className="text-gold group-hover:text-white transition-colors"
                        />
                      </div>
                      <h3
                        className="text-charcoal dark:text-white font-bold text-lg mb-3 group-hover:text-gold transition-colors"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-medium-gray dark:text-gray-300 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="w-8 h-0.5 bg-gold mx-auto mt-auto group-hover:w-16 transition-all duration-300" />
                    </div>
                  </AnimatedSection>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      {/* <section className="py-12 md:py-16 lg:py-20 bg-light-gray dark:bg-charcoal relative overflow-hidden transition-colors duration-300">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #D4AF37 0, #D4AF37 1px, transparent 1px, transparent 20px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection>
            <SectionTitle
              title={t.about.clients.title}
              subtitle={t.about.clients.subtitle}
            />
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {t.about.clients.items.map((client: string, index: number) => (
              <AnimatedSection key={client} delay={index * 60}>
                <div className="flex items-center justify-center h-28 bg-white dark:bg-charcoal-dark border-2 border-border-gray dark:border-gray-700 hover:border-gold transition-colors group cursor-pointer relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <span
                    className="text-medium-gray dark:text-gray-300 font-bold text-lg tracking-wider group-hover:text-gold transition-colors"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {client}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Free Case Evaluation CTA */}
      <section className="py-12 md:py-16 lg:py-20 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212,175,55,0.1) 10px, rgba(212,175,55,0.1) 11px)",
            }}
          />
        </div>
        {/* Decorative gold lines */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <Scale size={48} className="text-gold mx-auto mb-6" />
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {t.about.freeEvaluation.title}
            </h2>
            <p className="text-gray-100 mb-8 max-w-xl mx-auto">
              {t.about.freeEvaluation.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate("contact")}
                className="bg-gold text-charcoal px-8 py-3.5 font-semibold uppercase text-sm tracking-wider hover:bg-gold-light transition-all flex items-center gap-2"
              >
                <ArrowRight size={16} />
                {t.about.freeEvaluation.contactUs}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
