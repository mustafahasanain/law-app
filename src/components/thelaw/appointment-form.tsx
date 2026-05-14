'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Scale, Phone, Loader2, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { SectionTitle } from './section-title';
import { AnimatedSection } from './scroll-animation';
import { useLanguage } from '@/lib/i18n/language-context';

export function AppointmentForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    practiceArea: '',
    message: '',
  });
  const { toast } = useToast();

  const PRACTICE_AREA_OPTIONS = t.contactPage.appointment.areas as string[];
  const TIME_OPTIONS = (t.contactPage.appointment.times as string[]).map((time) => ({
    value: time,
    label: time,
  }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.preferredDate || !formData.preferredTime || !formData.practiceArea) {
      toast({
        title: 'Missing Fields',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Appointment Requested!',
          description: data.message,
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
          practiceArea: '',
          message: '',
        });
      } else {
        toast({
          title: 'Error',
          description: data.error || 'Something went wrong.',
          variant: 'destructive',
        });
      }
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to submit your appointment request. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="book-appointment"
      className="scroll-mt-28 py-12 md:py-20 bg-light-gray dark:bg-charcoal relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <AnimatedSection>
          <SectionTitle title={t.contactPage.appointment.title} subtitle={t.contactPage.appointment.subtitle} />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-4xl mx-auto mt-10">
            <div className="bg-white dark:bg-charcoal-dark border border-border-gray dark:border-gray-700 shadow-sm overflow-hidden">
              {/* Gold top bar */}
              <div className="h-1 bg-gold" />

              {/* Header */}
              <div className="flex items-center gap-3 px-6 py-4 bg-charcoal text-white">
                <Calendar size={24} className="text-gold" />
                <div>
                  <h3 className="font-bold text-lg" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    {t.contactPage.appointment.subtitle}
                  </h3>
                  <p className="text-gray-400 text-sm">{t.contactPage.appointment.title}</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
                {/* Name and Email row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                      {t.contactPage.appointment.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="name"
                      placeholder={t.contactPage.appointment.namePlaceholder}
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-border-gray dark:border-gray-600 bg-white dark:bg-charcoal text-charcoal dark:text-white focus:border-gold focus:ring-1 focus:ring-gold h-11"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                      {t.contactPage.appointment.emailLabel} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="email"
                      placeholder={t.contactPage.appointment.emailPlaceholder}
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-border-gray dark:border-gray-600 bg-white dark:bg-charcoal text-charcoal dark:text-white focus:border-gold focus:ring-1 focus:ring-gold h-11"
                    />
                  </div>
                </div>

                {/* Phone and Date row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                      {t.contactPage.appointment.phoneLabel}
                    </label>
                    <Input
                      name="phone"
                      placeholder={t.contactPage.appointment.phonePlaceholder}
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-border-gray dark:border-gray-600 bg-white dark:bg-charcoal text-charcoal dark:text-white focus:border-gold focus:ring-1 focus:ring-gold h-11"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                      {t.contactPage.appointment.dateLabel} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="preferredDate"
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="border-border-gray dark:border-gray-600 bg-white dark:bg-charcoal text-charcoal dark:text-white focus:border-gold focus:ring-1 focus:ring-gold h-11"
                    />
                  </div>
                </div>

                {/* Time and Practice Area row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                      {t.contactPage.appointment.timeLabel} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold pointer-events-none" />
                      <select
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full p-2.5 pl-9 border border-border-gray dark:border-gray-600 text-sm text-charcoal dark:text-white bg-white dark:bg-charcoal focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold h-11 rounded-md appearance-none"
                      >
                        <option value="">{t.contactPage.appointment.timeLabel}</option>
                        {TIME_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                      {t.contactPage.appointment.areaLabel} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Scale size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold pointer-events-none" />
                      <select
                        name="practiceArea"
                        required
                        value={formData.practiceArea}
                        onChange={handleInputChange}
                        className="w-full p-2.5 pl-9 border border-border-gray dark:border-gray-600 text-sm text-charcoal dark:text-white bg-white dark:bg-charcoal focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold h-11 rounded-md appearance-none"
                      >
                        <option value="">{t.contactPage.appointment.areaPlaceholder}</option>
                        {PRACTICE_AREA_OPTIONS.map((area) => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                    {t.contactPage.appointment.messageLabel}
                  </label>
                  <Textarea
                    name="message"
                    placeholder={t.contactPage.appointment.messagePlaceholder}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-border-gray dark:border-gray-600 bg-white dark:bg-charcoal text-charcoal dark:text-white focus:border-gold focus:ring-1 focus:ring-gold min-h-[100px]"
                  />
                </div>

                {/* Features row */}
                <div className="flex flex-wrap gap-4 text-sm text-medium-gray dark:text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-gold" />
                    {t.header.freeConsultation}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-gold" />
                    No Obligation
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-gold" />
                    Confidential
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold text-charcoal hover:bg-gold-dark font-semibold uppercase tracking-wider h-12 text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      {t.contactPage.appointment.submitting}
                    </>
                  ) : (
                    <>
                      <Calendar size={16} className="mr-2" />
                      {t.contactPage.appointment.submit}
                    </>
                  )}
                </Button>

                {/* Emergency note */}
                <div className="flex items-center gap-2 text-sm text-medium-gray dark:text-gray-400 pt-2">
                  <Phone size={14} className="text-gold shrink-0" />
                  <span>For emergencies, call <a href="tel:07802233000" dir="ltr" className="phone-ltr text-gold font-semibold hover:text-gold-dark transition-colors">07802233000</a> (24/7)</span>
                </div>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
