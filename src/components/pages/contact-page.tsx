"use client";

import React, { useState } from "react";
import { PageHero } from "../thelaw/page-hero";
import { AnimatedSection } from "../thelaw/scroll-animation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  AlertCircle,
  Loader2,
  Shield,
  Award,
  Users,
  Heart,
  Navigation,
  Maximize2,
  Minimize2,
  ExternalLink,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/i18n/language-context";

export function ContactPage() {
  const { t } = useLanguage();
  const [department, setDepartment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const WORKING_HOURS = [
    {
      day: t.contactPage.hours.weekdays,
      hours: t.contactPage.hours.weekdayHours,
    },
    {
      day: t.contactPage.hours.saturday,
      hours: t.contactPage.hours.saturdayHours,
    },
    { day: t.contactPage.hours.sunday, hours: t.contactPage.hours.sundayHours },
  ];

  const OFFICE_LOCATIONS = [
    {
      name: "Baghdad",
      address: "بغداد, المنصور, شارع مطعم الساعة",
      phone: "07802233000",
      email: "info@baraa-alsamraie.com",
      hours: "Mon-Fri: 9:00 - 16:30",
      mapQuery: "Baghdad+Al+Mansour+مطعم+الساعة",
      lat: "34.0407",
      lng: "-118.2468",
    },
  ];

  const MAP_URL = "https://maps.app.goo.gl/RQeASwKQCc7GjLXR9";
  const MAP_EMBED_URL =
    "https://www.google.com/maps?q=33.31889435385042,44.33300254490547&z=17&hl=en&output=embed";

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          department,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent!",
          description: data.message,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setDepartment("");
      } else {
        toast({
          title: "Error",
          description: data.error || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-x-hidden max-w-full">
      <PageHero
        title={t.contactPage.hero.title}
        breadcrumb={t.contactPage.hero.breadcrumb.current}
      />
      {/* Contact Form & Sidebar */}
      <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-charcoal-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form - takes 2 cols */}
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-left">
                <h2
                  className="text-3xl font-bold text-charcoal dark:text-white mb-2"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {t.contactPage.form.title}
                </h2>
                <p className="text-medium-gray dark:text-gray-400 mb-8">
                  {t.contactPage.appointment.subtitle}
                </p>
              </AnimatedSection>

              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatedSection delay={100}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                        {t.contactPage.form.nameLabel}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <Input
                        name="name"
                        placeholder={t.contactPage.form.namePlaceholder}
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-border-gray dark:border-gray-600 bg-white dark:bg-charcoal-dark text-charcoal dark:text-white focus:border-gold focus:ring-2 focus:ring-gold/20 h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                        {t.contactPage.form.emailLabel}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <Input
                        name="email"
                        placeholder={t.contactPage.form.emailPlaceholder}
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-border-gray dark:border-gray-600 bg-white dark:bg-charcoal-dark text-charcoal dark:text-white focus:border-gold focus:ring-2 focus:ring-gold/20 h-12"
                      />
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={150}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                        {t.contactPage.form.phoneLabel}
                      </label>
                      <Input
                        name="phone"
                        placeholder={t.contactPage.form.phonePlaceholder}
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-border-gray dark:border-gray-600 bg-white dark:bg-charcoal-dark text-charcoal dark:text-white focus:border-gold focus:ring-2 focus:ring-gold/20 h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                        {t.contactPage.form.subjectLabel}
                      </label>
                      <Input
                        name="subject"
                        placeholder={t.contactPage.form.subjectPlaceholder}
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="border-border-gray dark:border-gray-600 bg-white dark:bg-charcoal-dark text-charcoal dark:text-white focus:border-gold focus:ring-2 focus:ring-gold/20 h-12"
                      />
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={200}>
                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                      {t.faqPage.askForm.departmentLabel}
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full p-2.5 border border-border-gray dark:border-gray-600 text-sm text-charcoal dark:text-white bg-white dark:bg-charcoal-dark focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 h-12 rounded-md"
                    >
                      <option value="">
                        {t.faqPage.askForm.departmentPlaceholder}
                      </option>
                      {(t.faqPage.askForm.departments as string[]).map(
                        (dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={250}>
                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                      {t.contactPage.form.messageLabel}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      name="message"
                      placeholder={t.contactPage.form.messagePlaceholder}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-border-gray dark:border-gray-600 bg-white dark:bg-charcoal-dark text-charcoal dark:text-white focus:border-gold focus:ring-2 focus:ring-gold/20 min-h-[160px]"
                    />
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={300}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gold text-charcoal hover:bg-gold-dark font-semibold uppercase tracking-wider px-10 h-14 text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed btn-ripple btn-primary-hover"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="mr-2 animate-spin" />
                        {t.contactPage.form.sending}
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        {t.contactPage.form.send}
                      </>
                    )}
                  </Button>
                </AnimatedSection>
              </form>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Office Hours Widget */}
              <AnimatedSection delay={100}>
                <div className="bg-charcoal dark:bg-charcoal-dark border border-gray-700 p-6 text-white">
                  <h4 className="text-gold font-bold mb-5 flex items-center gap-2 text-lg">
                    <Clock size={20} />
                    {t.contactPage.hours.title}
                  </h4>
                  <div className="space-y-4">
                    {WORKING_HOURS.map((wh) => (
                      <div key={wh.day} className="border-l-2 border-gold pl-4">
                        <p className="text-gold font-medium text-sm">
                          {wh.day}
                        </p>
                        <p className="text-gray-300 text-sm">{wh.hours}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Emergency Contact Box */}
              <AnimatedSection delay={200}>
                <div className="bg-charcoal-dark dark:bg-charcoal border border-gray-700 p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertCircle size={20} className="text-gold" />
                      <h4 className="text-gold font-bold text-lg">
                        {t.contactPage.emergency.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                      {t.contactPage.emergency.description}
                    </p>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gold flex items-center justify-center shrink-0">
                        <Phone size={22} className="text-charcoal" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-300 uppercase tracking-wider">
                          24/7 Emergency Line
                        </p>
                        <a
                          href="tel:07802233000"
                          dir="ltr"
                          className="phone-ltr text-gold text-xl font-bold hover:text-gold-light transition-colors"
                        >
                          07802233000
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Address Card */}
              <AnimatedSection delay={300}>
                <div className="bg-light-gray dark:bg-charcoal border border-border-gray dark:border-gray-700 p-6 transition-colors">
                  <h4 className="text-charcoal dark:text-white font-bold mb-4 flex items-center gap-2">
                    <MapPin size={18} className="text-gold" />
                    {t.contactPage.addressCard.title}
                  </h4>
                  <div className="space-y-4">
                    <div className="border-l-2 border-gold pl-4">
                      <p className="text-charcoal dark:text-white font-medium text-sm">
                        {t.contactPage.addressCard.main}
                      </p>
                      <p className="text-medium-gray dark:text-gray-400 text-sm">
                        {t.contactPage.addressCard.mainAddress}
                      </p>
                    </div>
                    <div className="border-l-2 border-gold pl-4">
                      <p className="text-charcoal dark:text-white font-medium text-sm">
                        {t.contactPage.addressCard.branch}
                      </p>
                      <p className="text-medium-gray dark:text-gray-400 text-sm">
                        {t.contactPage.addressCard.branchAddress}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border-gray dark:border-gray-700">
                    <a
                      href={`mailto:${t.contactPage.info.email.address}`}
                      className="text-gold text-sm font-medium flex items-center gap-2 hover:text-gold-dark transition-colors"
                    >
                      <Mail size={14} />
                      {t.contactPage.info.email.address}
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>

      {/* Map Section with Location Card Overlay */}
      <section className="relative">
        <div className="h-4 bg-gold" />
        <div
          className={`relative bg-light-gray dark:bg-charcoal transition-all duration-500 ease-in-out ${isMapExpanded ? "h-[40rem]" : "h-96"}`}
        >
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${OFFICE_LOCATIONS[selectedOffice].name} Office Location`}
            className="w-full h-full"
          />

          {/* Location Card Overlay */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
            <div className="bg-white dark:bg-charcoal-dark p-5 md:p-6 shadow-xl border border-border-gray dark:border-gray-700 max-w-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gold flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-charcoal" />
                </div>
                <div>
                  <h4 className="text-charcoal dark:text-white font-bold text-sm">
                    {OFFICE_LOCATIONS[selectedOffice].name}
                  </h4>
                  <p className="text-gold text-xs uppercase tracking-wider">
                    Office
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                  <span className="text-medium-gray dark:text-gray-300">
                    {OFFICE_LOCATIONS[selectedOffice].address}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-gold shrink-0" />
                  <a
                    href={`tel:${OFFICE_LOCATIONS[selectedOffice].phone.replace(/\s/g, "")}`}
                    dir="ltr"
                    className="phone-ltr text-charcoal dark:text-gray-300 hover:text-gold transition-colors"
                  >
                    {OFFICE_LOCATIONS[selectedOffice].phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-gold shrink-0" />
                  <a
                    href={`mailto:${OFFICE_LOCATIONS[selectedOffice].email}`}
                    className="text-charcoal dark:text-gray-300 hover:text-gold transition-colors"
                  >
                    {OFFICE_LOCATIONS[selectedOffice].email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-gold shrink-0" />
                  <span className="text-medium-gray dark:text-gray-300">
                    {OFFICE_LOCATIONS[selectedOffice].hours}
                  </span>
                </div>
              </div>

              {/* Direction Buttons */}
              <div className="mt-4 pt-3 border-t border-border-gray dark:border-gray-700 space-y-2">
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gold text-charcoal px-4 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-gold-dark transition-all"
                >
                  <Navigation size={14} />
                  Get Directions
                </a>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-gold text-gold px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-gold hover:text-charcoal transition-all"
                >
                  <ExternalLink size={14} />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Expand/Collapse Map Button */}
          <button
            onClick={() => setIsMapExpanded(!isMapExpanded)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 bg-white dark:bg-charcoal-dark border border-border-gray dark:border-gray-700 shadow-lg flex items-center justify-center hover:border-gold transition-colors min-w-[44px] min-h-[44px]"
            aria-label={isMapExpanded ? "Collapse map" : "Expand map"}
          >
            {isMapExpanded ? (
              <Minimize2
                size={18}
                className="text-charcoal dark:text-gray-300"
              />
            ) : (
              <Maximize2
                size={18}
                className="text-charcoal dark:text-gray-300"
              />
            )}
          </button>
        </div>
      </section>
    </div>
  );
}
