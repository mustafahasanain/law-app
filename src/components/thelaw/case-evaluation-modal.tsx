'use client';

import React, { useState } from 'react';
import {
  Dialog, DialogContent, DialogTitle, DialogDescription,
} from '@/components/ui/dialog';
import { Scale, Loader2, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CaseEvaluationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  context?: string;
}

const CASE_TYPES = [
  'Personal Injury',
  'Criminal Defense',
  'Family Law',
  'Business Disputes',
  'Immigration',
  'Employment Law',
  'Real Estate',
  'Intellectual Property',
  'Other',
];

export function CaseEvaluationModal({ open, onOpenChange, context }: CaseEvaluationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.caseType) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/case-evaluation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, context: context || 'website' }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        toast({
          title: 'Case Evaluation Submitted!',
          description: 'We will review your case and get back to you shortly.',
        });
        setTimeout(() => {
          setSuccess(false);
          setFormData({ name: '', email: '', phone: '', caseType: '', description: '' });
          onOpenChange(false);
        }, 2500);
      } else {
        toast({
          title: 'Submission Failed',
          description: data.error || 'Something went wrong. Please try again.',
          variant: 'destructive',
        });
      }
    } catch {
      toast({
        title: 'Network Error',
        description: 'Please check your connection and try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-white dark:bg-charcoal-dark border-gold/20 max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">
          Free Case Evaluation Form
        </DialogTitle>
        <DialogDescription className="sr-only">
          Submit your case details for a free legal evaluation from our experienced attorneys
        </DialogDescription>

        {success ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
              <CheckCircle size={32} className="text-gold" />
            </div>
            <h3 className="text-xl font-bold text-charcoal dark:text-white mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Thank You!
            </h3>
            <p className="text-medium-gray dark:text-gray-400 text-sm">
              Your case evaluation has been submitted. Our team will contact you shortly.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-gold/10 text-gold rounded-full">
                <Scale size={28} />
              </div>
              <h2 className="text-2xl font-bold text-charcoal dark:text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Free Case Evaluation
              </h2>
              <p className="text-medium-gray dark:text-gray-400 text-sm mt-1">
                Tell us about your case and get a free legal consultation
              </p>
              {context && (
                <p className="text-gold text-xs mt-1 uppercase tracking-wider">
                  From: {context}
                </p>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="eval-name" className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                  Full Name <span className="text-gold">*</span>
                </label>
                <input
                  id="eval-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 border border-border-gray dark:border-gray-600 bg-white dark:bg-charcoal text-charcoal dark:text-white rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="eval-email" className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    id="eval-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 border border-border-gray dark:border-gray-600 bg-white dark:bg-charcoal text-charcoal dark:text-white rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="eval-phone" className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                    Phone
                  </label>
                  <input
                    id="eval-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07802233000"
                    className="w-full px-4 py-2.5 border border-border-gray dark:border-gray-600 bg-white dark:bg-charcoal text-charcoal dark:text-white rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="eval-case-type" className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                  Case Type <span className="text-gold">*</span>
                </label>
                <select
                  id="eval-case-type"
                  name="caseType"
                  value={formData.caseType}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-border-gray dark:border-gray-600 bg-white dark:bg-charcoal text-charcoal dark:text-white rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors appearance-none"
                  required
                >
                  <option value="">Select a case type</option>
                  {CASE_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="eval-description" className="block text-sm font-medium text-charcoal dark:text-gray-300 mb-1.5">
                  Tell Us About Your Case
                </label>
                <textarea
                  id="eval-description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Briefly describe your legal situation..."
                  className="w-full px-4 py-2.5 border border-border-gray dark:border-gray-600 bg-white dark:bg-charcoal text-charcoal dark:text-white rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-ripple btn-primary-hover bg-gold text-charcoal px-6 py-3 font-semibold uppercase text-sm tracking-wider hover:bg-gold-dark transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Scale size={16} />
                    Get Free Evaluation
                  </>
                )}
              </button>

              <p className="text-center text-xs text-medium-gray dark:text-gray-500">
                Your information is confidential and protected by attorney-client privilege.
              </p>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
