"use client";

import React, { useState, useMemo } from "react";
import { PageHero } from "../thelaw/page-hero";
import { SectionTitle } from "../thelaw/section-title";
import { AnimatedSection } from "../thelaw/scroll-animation";
import { useRouter } from "../thelaw/router";
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
  Heart,
  Car,
  Users,
  ShoppingBag,
  DollarSign,
  Baby,
  ArrowRight,
  Phone,
  CheckCircle,
  Clock,
  MapPin,
  Mail,
  ChevronRight,
  Award,
  TrendingUp,
  Eye,
} from "lucide-react";
import { CounterItem } from "../thelaw/scroll-animation";
import { useLanguage } from "@/lib/i18n/language-context";

type TabName = "All" | "Business Law" | "Personal Law" | "Criminal Law";

const PRACTICE_AREAS = [
  {
    icon: Heart,
    title: "Spousal Assault",
    category: "Family Law",
    tab: "Personal Law" as TabName,
    desc: "Protecting your rights in domestic disputes with compassionate legal representation.",
    description:
      "Spousal assault cases require a delicate balance of aggressive legal advocacy and compassionate client support. Our family law attorneys have extensive experience handling domestic violence cases, ensuring that victims receive the protection they need while defending the rights of the accused. We understand the emotional toll these cases take on families and approach each situation with sensitivity and discretion. Our team works diligently to secure protective orders when necessary, navigate complex evidence requirements, and achieve outcomes that prioritize the safety and well-being of all parties involved. We also provide guidance on related matters such as child custody modifications and divorce proceedings that may arise from domestic violence situations.",
    services: [
      "Protective order hearings",
      "Domestic violence defense",
      "Child custody modifications",
      "Spousal support negotiations",
      "Family court representation",
    ],
  },
  {
    icon: Car,
    title: "Drinking and Driving",
    category: "Civil Disobedience",
    tab: "Criminal Law" as TabName,
    desc: "Experienced defense for DUI/DWI charges to protect your driving privileges.",
    description:
      "DUI and DWI charges carry severe consequences including license suspension, hefty fines, and potential jail time. Our experienced criminal defense attorneys have successfully defended thousands of clients against drunk driving charges. We meticulously examine every aspect of the arrest, including the validity of the traffic stop, the accuracy of field sobriety tests, and the calibration of breathalyzer equipment. Our team understands the science behind blood alcohol content testing and frequently works with forensic experts to challenge questionable evidence. We explore all available defenses, from procedural errors to constitutional violations, to achieve the best possible outcome for our clients.",
    services: [
      "DUI/DWI defense",
      "License suspension hearings",
      "Field sobriety test challenges",
      "Breathalyzer accuracy disputes",
      "Plea negotiation and sentencing alternatives",
    ],
  },
  {
    icon: Users,
    title: "Social Offences",
    category: "Drug Offences",
    tab: "Criminal Law" as TabName,
    desc: "Strategic defense against drug-related charges at state and federal levels.",
    description:
      "Drug offense cases require sophisticated legal strategies and a deep understanding of both state and federal drug laws. Our attorneys have successfully defended clients against charges ranging from simple possession to large-scale trafficking operations. We thoroughly investigate the circumstances of each arrest, examining search warrant validity, chain of custody issues, and potential constitutional violations. Our team is well-versed in drug court programs and alternative sentencing options that focus on rehabilitation rather than punishment. We fight aggressively to suppress unlawfully obtained evidence and negotiate favorable outcomes when trial is not in the client's best interest.",
    services: [
      "Drug possession defense",
      "Trafficking charge representation",
      "Search warrant challenges",
      "Drug court program advocacy",
      "Asset forfeiture defense",
    ],
  },
  {
    icon: Shield,
    title: "Sexual Offenses",
    category: "Criminal",
    tab: "Criminal Law" as TabName,
    desc: "Vigorous defense protecting your reputation and freedom in sensitive cases.",
    description:
      "Sexual offense allegations carry devastating personal and professional consequences, often before any conviction occurs. Our criminal defense team provides vigorous, discreet representation for clients facing these serious charges. We understand the complex evidentiary issues involved in sexual offense cases, including DNA evidence, digital forensics, witness credibility, and consent defenses. Our attorneys work with private investigators and forensic experts to build strong defense strategies. We are committed to protecting our clients' rights, reputation, and freedom while ensuring they receive fair treatment under the law. Every case is handled with the utmost confidentiality and sensitivity.",
    services: [
      "Sexual assault defense",
      "Child exploitation charge defense",
      "Sex offender registration challenges",
      "Consent defense strategies",
      "Post-conviction relief and appeals",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Shoplifting",
    category: "Civil Disobedience",
    tab: "Personal Law" as TabName,
    desc: "Minimizing consequences of theft charges through skilled negotiation.",
    description:
      "While shoplifting may seem like a minor offense, a conviction can have lasting consequences on your criminal record, employment opportunities, and immigration status. Our attorneys have extensive experience defending clients against theft and shoplifting charges, from first-time incidents to repeat offenses. We explore all available defenses, including mistaken identity, lack of intent, and unlawful search and seizure. When appropriate, we negotiate for diversion programs, community service alternatives, or reduced charges that can keep your record clean. Our goal is to minimize the impact of these charges on your life and future.",
    services: [
      "Theft charge defense",
      "Diversion program negotiation",
      "Record expungement",
      "Civil recovery dispute resolution",
      "Juvenile shoplifting defense",
    ],
  },
  {
    icon: DollarSign,
    title: "Fraud",
    category: "Business Law",
    tab: "Business Law" as TabName,
    desc: "Defending against fraud allegations with comprehensive legal strategies.",
    description:
      "Fraud allegations can arise in many contexts, from business transactions and insurance claims to financial reporting and securities dealings. Our business law and criminal defense teams collaborate to provide comprehensive representation for clients facing fraud charges. We conduct thorough investigations, engage forensic accountants and financial experts, and build defense strategies that address both the criminal and civil dimensions of fraud cases. Whether you are facing state or federal fraud charges, our attorneys have the experience and resources to mount an effective defense. We also assist clients under investigation who have not yet been charged, providing proactive counsel to protect their interests.",
    services: [
      "White-collar fraud defense",
      "Insurance fraud representation",
      "Securities fraud defense",
      "Financial crime investigation support",
      "Regulatory compliance counseling",
    ],
  },
  {
    icon: Copyright,
    title: "Money Laundering",
    category: "Business Law",
    tab: "Business Law" as TabName,
    desc: "Navigating complex financial crime charges with experienced counsel.",
    description:
      "Money laundering charges are among the most complex in criminal law, often involving multiple jurisdictions, intricate financial transactions, and extensive government investigations. Our attorneys have deep experience defending clients against both state and federal money laundering charges. We work with forensic financial analysts to trace fund flows and challenge the government's narrative about the source and movement of money. Our team understands the Bank Secrecy Act, anti-money laundering regulations, and the sophisticated investigative techniques used by law enforcement. We provide aggressive defense at every stage, from grand jury proceedings through trial and appeal.",
    services: [
      "Federal money laundering defense",
      "Asset forfeiture challenges",
      "Bank Secrecy Act compliance",
      "Financial transaction analysis",
      "Grand jury representation",
    ],
  },
  {
    icon: Baby,
    title: "Child Abuse",
    category: "Family Law",
    tab: "Personal Law" as TabName,
    desc: "Sensitive handling of child-related legal matters with utmost care.",
    description:
      "Child abuse cases are among the most sensitive and consequential matters in the legal system. Our attorneys approach these cases with the gravity they deserve, providing vigorous defense for those accused while ensuring that the rights and welfare of children are prioritized. We have extensive experience navigating the intersection of criminal court, family court, and child protective services proceedings. Our team works with medical experts, child psychologists, and social workers to build comprehensive case strategies. We understand the devastating impact that false or exaggerated allegations can have on families and fight diligently to uncover the truth while protecting our clients' parental rights and reputations.",
    services: [
      "Child abuse defense",
      "CPS investigation representation",
      "Parental rights protection",
      "Dependency court advocacy",
      "Family reunification support",
    ],
  },
];

const ADDITIONAL_SERVICES = [
  "Business organizations law",
  "Civil law or common law",
  "Communications law",
  "Constitutional law",
  "Cultural property law",
  "Mergers & acquisitions law",
  "Native American law",
  "Product liability litigation",
  "Real estate law",
  "Obscenity law",
  "Nationality law",
  "Procedural law",
];

const WHY_CHOOSE_US = [
  {
    icon: CheckCircle,
    title: "Experienced Attorneys",
    desc: "Over 25 years of combined legal experience fighting for our clients.",
  },
  {
    icon: Scale,
    title: "Proven Track Record",
    desc: "98% success rate with thousands of cases won across all practice areas.",
  },
  {
    icon: Shield,
    title: "Aggressive Defense",
    desc: "We fight tirelessly to protect your rights and achieve the best outcome.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Emergency legal services available around the clock when you need us most.",
  },
];

const TABS: {
  name: TabName;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}[] = [
  { name: "All", icon: BookOpen },
  { name: "Business Law", icon: Briefcase },
  { name: "Personal Law", icon: Heart },
  { name: "Criminal Law", icon: Shield },
];

export function PracticeAreasPage() {
  const { navigate } = useRouter();
  const { t } = useLanguage();
  const [selectedArea, setSelectedArea] = useState<
    (typeof PRACTICE_AREAS)[0] | null
  >(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabName>("All");
  const [animatingCards, setAnimatingCards] = useState(false);

  const filteredAreas = useMemo(() => {
    if (activeTab === "All") return PRACTICE_AREAS;
    return PRACTICE_AREAS.filter((area) => area.tab === activeTab);
  }, [activeTab]);

  const handleTabChange = (tab: TabName) => {
    if (tab === activeTab) return;
    setAnimatingCards(true);
    setActiveTab(tab);
    setTimeout(() => setAnimatingCards(false), 400);
  };

  const handleAreaClick = (area: (typeof PRACTICE_AREAS)[0]) => {
    setSelectedArea(area);
    setModalOpen(true);
  };

  return (
    <div className="overflow-x-hidden max-w-full">
      {/* Practice Area Detail Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-2xl bg-white dark:bg-charcoal-dark border-gold/20 max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">
            {selectedArea?.title} - Practice Area Details
          </DialogTitle>
          <DialogDescription className="sr-only">
            Detailed information about our {selectedArea?.title} practice area
          </DialogDescription>

          {selectedArea && (
            <div className="space-y-6">
              {/* Icon and Title */}
              <div className="flex items-center gap-4 pb-4 border-b border-border-gray dark:border-gray-700">
                <div className="w-16 h-16 flex items-center justify-center bg-gold/10 text-gold shrink-0">
                  <selectedArea.icon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h2
                    className="text-2xl font-bold text-charcoal dark:text-white"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {selectedArea.title}
                  </h2>
                  <p className="text-gold text-sm uppercase tracking-wider font-semibold">
                    {selectedArea.category}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-medium-gray dark:text-gray-300 leading-relaxed text-sm">
                  {selectedArea.description}
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
                  {selectedArea.services.map((service) => (
                    <div key={service} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-gold shrink-0" />
                      <span className="text-charcoal dark:text-gray-300 text-sm">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 border-t border-border-gray dark:border-gray-700">
                <button
                  onClick={() => {
                    setModalOpen(false);
                    navigate("contact");
                  }}
                  className="w-full bg-gold text-charcoal px-6 py-3.5 font-semibold uppercase text-sm tracking-wider hover:bg-gold-dark transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  {t.practiceAreasPage.cta.button}
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <PageHero
        title={t.practiceAreasPage.hero.title}
        breadcrumb={t.practiceAreasPage.hero.breadcrumb.current}
      />

      {/* Stats Counter Section */}
      <section className="py-10 md:py-14 bg-charcoal-dark relative overflow-hidden">
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
            <div className="hidden md:block w-px h-16 bg-gold/20" />
            <CounterItem
              icon={
                <TrendingUp size={28} className="md:w-[40px] md:h-[40px]" />
              }
              value={25}
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
              value={50}
              suffix="+"
              label={t.counter.expertLawyers}
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Intro Section with Tabs */}
      <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-charcoal-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-left">
            <div className="max-w-3xl mx-auto text-center">
              <SectionTitle
                title={t.practiceAreasPage.title}
                subtitle={t.practiceAreasPage.subtitle}
              />
              <p className="text-medium-gray dark:text-gray-400 leading-relaxed text-base">
                {t.practiceAreasPage.intro}
              </p>
            </div>
          </AnimatedSection>

          {/* Tabs */}
          <AnimatedSection delay={100}>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-10">
              {TABS.map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.name}
                    onClick={() => handleTabChange(tab.name)}
                    className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider border-2 transition-all duration-300 min-h-[44px] ${
                      activeTab === tab.name
                        ? "bg-gold text-charcoal border-gold shadow-md"
                        : "bg-transparent text-charcoal dark:text-gray-300 border-border-gray dark:border-gray-600 hover:border-gold hover:text-gold"
                    }`}
                  >
                    <TabIcon size={16} />
                    {tab.name}
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Practice Areas Grid with animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAreas.map((area, index) => (
              <div
                key={area.title}
                className={`transition-all duration-400 ease-out ${
                  animatingCards
                    ? "opacity-0 scale-95 translate-y-4"
                    : "opacity-100 scale-100 translate-y-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <AnimatedSection delay={index * 80}>
                  <div
                    onClick={() => handleAreaClick(area)}
                    className="practice-card group cursor-pointer bg-light-gray dark:bg-charcoal p-8 text-center hover:bg-charcoal transition-all duration-300 relative overflow-hidden hover-gold-shadow hover:scale-[1.02]"
                  >
                    {/* Gold top border on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center border-2 border-gold text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
                      <area.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-charcoal dark:text-white text-lg mb-2 group-hover:text-white transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-gold text-xs uppercase tracking-wider font-semibold mb-4">
                      {area.category}
                    </p>
                    <p className="text-medium-gray dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      {area.desc}
                    </p>
                    <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-gold text-sm font-semibold flex items-center justify-center gap-1">
                        {t.practiceAreasPage.viewMore} <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-left">
            <SectionTitle
              title={t.practiceAreasPage.whyChoose.title}
              subtitle={t.practiceAreasPage.whyChoose.subtitle}
              light
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.practiceAreasPage.whyChoose.items.map(
              (item: { title: string; desc: string }, index: number) => {
                const Icon = WHY_CHOOSE_US[index]?.icon || CheckCircle;
                return (
                  <AnimatedSection key={item.title} delay={index * 100}>
                    <div className="text-center p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300 group hover:scale-[1.02] hover-gold-shadow">
                      <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center border border-gold text-gold group-hover:bg-gold group-hover:text-charcoal transition-all">
                        <Icon size={26} />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </AnimatedSection>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* Additional Practice Areas List */}
      <section className="py-12 md:py-16 lg:py-20 bg-light-gray dark:bg-charcoal transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="fade-left">
              <div>
                <SectionTitle
                  title={t.practiceAreasPage.moreAreas.title}
                  subtitle="Full List"
                  className="text-left [&>*]:text-left [&>*]:justify-start"
                />
                <p className="text-medium-gray dark:text-gray-400 mb-6 leading-relaxed">
                  {t.practiceAreasPage.moreAreas.description}
                </p>
                <button
                  onClick={() => navigate("contact")}
                  className="border-2 border-gold text-gold px-6 py-3 font-semibold uppercase text-sm tracking-wider hover:bg-gold hover:text-white transition-all"
                >
                  {t.practiceAreasPage.cta.button}
                </button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {t.practiceAreasPage.moreAreas.items.map((item: string) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 py-2.5 border-b border-border-gray dark:border-gray-700 hover:border-gold transition-colors group cursor-pointer"
                  >
                    <ChevronRight
                      size={14}
                      className="text-gold shrink-0 group-hover:translate-x-1 transition-transform"
                    />
                    <span className="text-charcoal dark:text-gray-300 text-sm group-hover:text-gold transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Legal Consultation CTA */}
      <section className="py-12 md:py-16 lg:py-20 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(51,51,51,0.1) 20px, rgba(51,51,51,0.1) 21px)",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {t.practiceAreasPage.cta.title}
            </h2>
            <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
              {t.practiceAreasPage.cta.description}
            </p>
            <button
              onClick={() => navigate("contact")}
              className="bg-charcoal text-white px-8 py-3.5 font-semibold uppercase text-sm tracking-wider hover:bg-charcoal-dark transition-colors"
            >
              {t.practiceAreasPage.cta.button}
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
