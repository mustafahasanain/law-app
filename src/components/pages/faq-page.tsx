"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { PageHero } from "../thelaw/page-hero";
import { SectionTitle } from "../thelaw/section-title";
import { AnimatedSection } from "../thelaw/scroll-animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  HelpCircle,
  Send,
  Plus,
  Minus,
  MessageCircle,
  Phone,
  ChevronRight,
  Search,
  ThumbsUp,
  ThumbsDown,
  X,
} from "lucide-react";
import { useRouter } from "../thelaw/router";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/i18n/language-context";

/* ===== Feedback State ===== */
interface FeedbackState {
  up: number;
  down: number;
  userVote: "up" | "down" | null;
}

function FeedbackButtons({ itemId }: { itemId: string }) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [feedback, setFeedback] = useState<FeedbackState>(() => {
    try {
      const saved = localStorage.getItem(`faq-feedback-${itemId}`);
      if (saved) return JSON.parse(saved);
    } catch {
      /* ignore */
    }
    return {
      up: Math.floor(Math.random() * 20) + 5,
      down: Math.floor(Math.random() * 5) + 1,
      userVote: null,
    };
  });
  const [pulseActive, setPulseActive] = useState<"up" | "down" | null>(null);

  const totalVotes = feedback.up + feedback.down;
  const helpfulPercent =
    totalVotes > 0 ? Math.round((feedback.up / totalVotes) * 100) : 0;

  const handleFeedback = (type: "up" | "down") => {
    if (feedback.userVote) return;
    const newFeedback: FeedbackState = {
      ...feedback,
      userVote: type,
      [type]: feedback[type] + 1,
    };
    setFeedback(newFeedback);
    setPulseActive(type);
    setTimeout(() => setPulseActive(null), 600);
    try {
      localStorage.setItem(
        `faq-feedback-${itemId}`,
        JSON.stringify(newFeedback),
      );
    } catch {
      /* ignore */
    }
    toast({
      title:
        type === "up"
          ? t.faqPage.feedback.thanksPositive
          : t.faqPage.feedback.thanksNegative,
      description:
        type === "up"
          ? t.faqPage.feedback.helpful
          : t.faqPage.feedback.notHelpful,
    });
  };

  return (
    <div className="mt-4 pt-3 border-t border-border-gray dark:border-gray-700">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-medium-gray dark:text-gray-400 text-sm">
          {t.faqPage.feedback.helpful}?
        </span>
        <button
          onClick={() => handleFeedback("up")}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border transition-all ${
            feedback.userVote === "up"
              ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
              : "border-border-gray dark:border-gray-600 text-medium-gray dark:text-gray-400 hover:border-green-400 hover:text-green-500"
          } ${pulseActive === "up" ? "animate-gold-button-pulse" : ""}`}
          disabled={feedback.userVote !== null}
        >
          <ThumbsUp size={14} />
          <span>{t.faqPage.feedback.helpful}</span>
        </button>
        <button
          onClick={() => handleFeedback("down")}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border transition-all ${
            feedback.userVote === "down"
              ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
              : "border-border-gray dark:border-gray-600 text-medium-gray dark:text-gray-400 hover:border-red-400 hover:text-red-500"
          } ${pulseActive === "down" ? "animate-gold-button-pulse" : ""}`}
          disabled={feedback.userVote !== null}
        >
          <ThumbsDown size={14} />
          <span>{t.faqPage.feedback.notHelpful}</span>
        </button>
      </div>
      {feedback.userVote && (
        <div className="mt-2 flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gold rounded-full transition-all duration-500"
              style={{ width: `${helpfulPercent}%` }}
            />
          </div>
          <span className="text-xs text-medium-gray dark:text-gray-400">
            {helpfulPercent}% {t.faqPage.feedback.helpful}
          </span>
        </div>
      )}
    </div>
  );
}

export function FAQPage() {
  const { t } = useLanguage();
  const [askDepartment, setAskDepartment] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const { navigate } = useRouter();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setDebouncedSearch(value.toLowerCase().trim());
    }, 300);
  }, []);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const generalItems = t.faqPage.general.items as Array<{
    q: string;
    a: string;
  }>;
  const legalItems = t.faqPage.legal.items as Array<{ q: string; a: string }>;

  const filteredGeneral = generalItems.filter((faq) => {
    if (!debouncedSearch) return true;
    return (
      faq.q.toLowerCase().includes(debouncedSearch) ||
      faq.a.toLowerCase().includes(debouncedSearch)
    );
  });

  const filteredLegal = legalItems.filter((faq) => {
    if (!debouncedSearch) return true;
    return (
      faq.q.toLowerCase().includes(debouncedSearch) ||
      faq.a.toLowerCase().includes(debouncedSearch)
    );
  });

  const hasResults = filteredGeneral.length > 0 || filteredLegal.length > 0;

  const departments = t.faqPage.askForm.departments as string[];

  return (
    <div className="overflow-x-hidden max-w-full">
      <PageHero
        title={t.faqPage.hero.title}
        breadcrumb={t.faqPage.hero.breadcrumb.current}
      />

      {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-charcoal-dark relative overflow-hidden transition-colors duration-300">
        {/* Decorative question mark watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none">
          <HelpCircle size={600} className="text-gold" />
        </div>
        <div className="absolute left-0 bottom-0 -translate-x-1/4 translate-y-1/4 opacity-[0.02] pointer-events-none">
          <HelpCircle size={400} className="text-gold" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-left">
            <div className="text-center mb-4">
              <HelpCircle size={48} className="text-gold mx-auto mb-4" />
            </div>
            <p className="text-center text-medium-gray dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              {t.faqPage.askForm.subtitle}
            </p>
          </AnimatedSection>

          {/* FAQ Search */}
          <AnimatedSection delay={100}>
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Input
                  placeholder={t.faqPage.search.placeholder}
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-11 pr-10 h-14 border-2 border-border-gray dark:border-gray-600 bg-white dark:bg-charcoal text-charcoal dark:text-white focus:border-gold focus:ring-2 focus:ring-gold/20 text-base rounded-lg shadow-sm"
                />
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-medium-gray dark:text-gray-500"
                />
                {searchTerm && (
                  <button
                    onClick={() => handleSearchChange("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-medium-gray hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            </div>
          </AnimatedSection>

          {!hasResults && debouncedSearch ? (
            <AnimatedSection>
              <div className="text-center py-16">
                <Search
                  size={48}
                  className="text-medium-gray dark:text-gray-500 mx-auto mb-4"
                />
                <h3
                  className="text-xl font-bold text-charcoal dark:text-white mb-2"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {t.faqPage.search.noResults}
                </h3>
                <p className="text-medium-gray dark:text-gray-400 mb-6">
                  {t.faqPage.search.noResults} &ldquo;{searchTerm}&rdquo;
                </p>
                <button
                  onClick={() => handleSearchChange("")}
                  className="text-gold font-semibold hover:text-gold-dark transition-colors"
                >
                  {t.faqPage.search.clearSearch}
                </button>
              </div>
            </AnimatedSection>
          ) : (
            <div className="max-w-4xl mx-auto">
              {/* General FAQ */}
              {filteredGeneral.length > 0 && (
                <>
                  <AnimatedSection animation="fade-left">
                    <h3
                      className="text-2xl font-bold text-charcoal dark:text-white mb-8 flex items-center gap-3"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      <span className="w-1 h-7 bg-gold inline-block" />
                      {t.faqPage.general.title}
                    </h3>
                  </AnimatedSection>
                  <Accordion
                    type="single"
                    collapsible
                    className="mb-14 space-y-4"
                  >
                    {filteredGeneral.map((faq, index) => (
                      <AccordionItem
                        key={`general-${index}`}
                        value={`general-${index}`}
                        className="border border-border-gray dark:border-gray-700 bg-white dark:bg-charcoal hover:border-gold/30 transition-all duration-300 data-[state=open]:border-l-gold data-[state=open]:border-l-4 data-[state=open]:shadow-md data-[state=open]:bg-white dark:data-[state=open]:bg-charcoal-dark"
                      >
                        <AccordionTrigger className="text-left text-charcoal dark:text-white hover:text-gold font-medium py-5 px-6 text-base hover:no-underline [&>svg]:hidden transition-colors duration-200">
                          <span className="flex-1">{faq.q}</span>
                          <div className="relative w-7 h-7 flex items-center justify-center shrink-0 ml-4 rounded-full border border-gold/30 group-hover:border-gold transition-colors">
                            <Plus
                              size={14}
                              className="text-gold absolute transition-all duration-200 data-[state=open]:opacity-0 data-[state=open]:rotate-90"
                            />
                            <Minus
                              size={14}
                              className="text-gold absolute opacity-0 transition-all duration-200 data-[state=open]:opacity-100"
                            />
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-medium-gray dark:text-gray-300 leading-relaxed pb-6 px-6 pt-0 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                          <div className="border-t border-border-gray dark:border-gray-700 pt-4 overflow-hidden">
                            {faq.a}
                            <FeedbackButtons itemId={`general-${index}`} />
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </>
              )}

              {/* Legal FAQ */}
              {filteredLegal.length > 0 && (
                <>
                  <AnimatedSection animation="fade-left">
                    <h3
                      className="text-2xl font-bold text-charcoal dark:text-white mb-8 flex items-center gap-3"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      <span className="w-1 h-7 bg-gold inline-block" />
                      {t.faqPage.legal.title}
                    </h3>
                  </AnimatedSection>
                  <Accordion type="single" collapsible className="space-y-4">
                    {filteredLegal.map((faq, index) => (
                      <AccordionItem
                        key={`legal-${index}`}
                        value={`legal-${index}`}
                        className="border border-border-gray dark:border-gray-700 bg-white dark:bg-charcoal hover:border-gold/30 transition-all duration-300 data-[state=open]:border-l-gold data-[state=open]:border-l-4 data-[state=open]:shadow-md data-[state=open]:bg-white dark:data-[state=open]:bg-charcoal-dark"
                      >
                        <AccordionTrigger className="text-left text-charcoal dark:text-white hover:text-gold font-medium py-5 px-6 text-base hover:no-underline [&>svg]:hidden transition-colors duration-200">
                          <span className="flex-1">{faq.q}</span>
                          <div className="relative w-7 h-7 flex items-center justify-center shrink-0 ml-4 rounded-full border border-gold/30 group-hover:border-gold transition-colors">
                            <Plus
                              size={14}
                              className="text-gold absolute transition-all duration-200 data-[state=open]:opacity-0 data-[state=open]:rotate-90"
                            />
                            <Minus
                              size={14}
                              className="text-gold absolute opacity-0 transition-all duration-200 data-[state=open]:opacity-100"
                            />
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-medium-gray dark:text-gray-300 leading-relaxed pb-6 px-6 pt-0 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                          <div className="border-t border-border-gray dark:border-gray-700 pt-4 overflow-hidden">
                            {faq.a}
                            <FeedbackButtons itemId={`legal-${index}`} />
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-12 md:py-16 lg:py-20 bg-charcoal dark:bg-charcoal-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212,175,55,0.1) 10px, rgba(212,175,55,0.1) 11px)",
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <HelpCircle size={48} className="text-gold mx-auto mb-6" />
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {t.faqPage.stillHaveQuestions.title}
            </h2>
            <p className="text-gray-100 mb-8 max-w-xl mx-auto">
              {t.faqPage.stillHaveQuestions.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate("contact")}
                className="bg-gold text-charcoal px-8 py-3.5 font-semibold uppercase text-sm tracking-wider hover:bg-gold-light transition-all flex items-center gap-2"
              >
                <MessageCircle size={16} />
                {t.faqPage.stillHaveQuestions.contactUs}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
