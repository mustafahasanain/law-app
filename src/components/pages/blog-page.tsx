'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { PageHero } from '../thelaw/page-hero';
import { AnimatedSection } from '../thelaw/scroll-animation';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Search, ArrowRight, ArrowLeft, Tag, Calendar, ChevronRight, X, Share2, Copy, Twitter, Linkedin, Check, Bookmark, BookmarkCheck, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/lib/i18n/language-context';

interface BlogPost {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  img: string;
  content: string;
  author: string;
  readTime: string;
}

const POSTS_PER_PAGE = 6;

const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Understanding Your Rights After a Car Accident',
    category: 'Personal Injury',
    date: '15 February 2025',
    excerpt: 'Being involved in a car accident can be a life-altering experience. Knowing your legal rights immediately after a collision is crucial to protecting your interests and securing fair compensation for your injuries and losses.',
    img: '/images/blog-1.png',
    author: 'Sarah Mitchell',
    readTime: '7 min read',
    content: `Being involved in a car accident can be a life-altering experience. Knowing your legal rights immediately after a collision is crucial to protecting your interests and securing fair compensation for your injuries and losses.

**Immediate Steps After an Accident**

The moments following a car accident are critical. First and foremost, seek medical attention for any injuries, even those that may not be immediately apparent. Many injuries, including whiplash and internal trauma, can take hours or days to manifest symptoms. Call law enforcement to the scene and ensure a police report is filed, as this document will be essential for any subsequent legal claims.

**Understanding Fault and Liability**

Determining fault in a car accident is rarely straightforward. Most states follow either a fault-based or no-fault insurance system. In fault-based states, the at-fault driver's insurance is responsible for covering damages. In no-fault states, each driver's own insurance covers their injuries regardless of fault. Understanding which system applies in your state is essential for pursuing the right type of claim.

**Types of Compensation Available**

If you have been injured in a car accident, you may be entitled to several types of compensation:

1. **Medical Expenses** — Both current and future medical costs related to your injuries, including hospitalization, surgery, rehabilitation, and medication.

2. **Lost Wages** — Compensation for income lost due to your inability to work during recovery, as well as diminished earning capacity if your injuries result in long-term disability.

3. **Pain and Suffering** — Non-economic damages for physical pain, emotional distress, and reduced quality of life resulting from the accident.

4. **Property Damage** — Costs to repair or replace your vehicle and any personal property damaged in the collision.

**The Importance of Legal Representation**

Insurance companies are businesses focused on minimizing payouts. Having an experienced personal injury attorney on your side levels the playing field and ensures your rights are protected. Studies show that accident victims who hire attorneys typically receive significantly higher settlements than those who handle claims on their own.

**Statute of Limitations**

Every state imposes a deadline—known as the statute of limitations—for filing a car accident lawsuit. Missing this deadline can permanently bar you from seeking compensation. It is crucial to consult with an attorney as soon as possible after your accident to ensure your claim is filed within the required timeframe.`,
  },
  {
    title: 'The Impact of New Tax Laws on Small Businesses',
    category: 'Business Law',
    date: '28 January 2025',
    excerpt: 'Recent changes to tax legislation have significant implications for small business owners. Understanding these new provisions is essential for maintaining compliance and optimizing your tax strategy in an evolving regulatory landscape.',
    img: '/images/blog-2.png',
    author: 'James Robertson',
    readTime: '8 min read',
    content: `Recent changes to tax legislation have significant implications for small business owners. Understanding these new provisions is essential for maintaining compliance and optimizing your tax strategy in an evolving regulatory landscape.

**Key Changes in the New Tax Law**

The latest tax reforms introduce several provisions that directly affect small businesses. These changes modify deduction rules, alter reporting requirements, and create new opportunities for tax savings. Business owners must understand these changes to avoid costly penalties and take advantage of available benefits.

1. **Modified Deduction Thresholds** — The new law adjusts the thresholds for various business deductions, including those for home offices, vehicle expenses, and equipment purchases. Understanding these new limits is critical for accurate tax planning.

2. **Changes to Pass-Through Deductions** — For businesses structured as sole proprietorships, partnerships, or S-corporations, changes to the qualified business income deduction can significantly impact your tax liability. The new provisions modify eligibility requirements and calculation methods.

3. **Updated Reporting Requirements** — Enhanced reporting obligations mean small businesses must maintain more detailed records and submit additional documentation. Non-compliance can result in substantial penalties.

**Planning Strategies for Small Business Owners**

Proactive tax planning is more important than ever under the new legislation. Consider these strategies:

- Review your business structure to ensure it still provides optimal tax benefits under the new rules
- Maximize available deductions by keeping detailed records of all business expenses
- Consider timing major purchases to take advantage of enhanced depreciation provisions
- Consult with a tax attorney or CPA who specializes in small business taxation

**Compliance Considerations**

Failing to comply with the new tax law provisions can result in audits, penalties, and interest charges. Our business law team helps small business owners navigate these complex regulations, ensuring full compliance while minimizing tax liability.

**Looking Ahead**

Tax law continues to evolve, and further changes are likely. Staying informed and working with experienced legal counsel is the best way to protect your business and optimize your financial position.`,
  },
  {
    title: 'How to Protect Your Intellectual Property in 2025',
    category: 'Copyrights',
    date: '12 January 2025',
    excerpt: 'In an increasingly digital world, protecting your intellectual property has never been more critical. From AI-generated content to online infringement, the IP landscape is evolving rapidly and creators must adapt their strategies accordingly.',
    img: '/images/blog-3.png',
    author: 'Michael Torres',
    readTime: '9 min read',
    content: `In an increasingly digital world, protecting your intellectual property has never been more critical. From AI-generated content to online infringement, the IP landscape is evolving rapidly and creators must adapt their strategies accordingly.

**The Changing IP Landscape in 2025**

The rise of artificial intelligence, digital content platforms, and global e-commerce has fundamentally transformed how intellectual property is created, shared, and infringed.

**Types of Intellectual Property Protection**

1. **Copyrights** — Protect original works of authorship including literary, musical, and artistic works.
2. **Trademarks** — Protect brand identifiers such as names, logos, and slogans.
3. **Patents** — Protect inventions and processes for a limited period.
4. **Trade Secrets** — Protect confidential business information that provides a competitive advantage.

**Digital Protection Strategies**

Online infringement is a growing concern for all IP owners. Effective strategies include registering copyrights and trademarks, implementing DRM technologies, and monitoring online marketplaces.`,
  },
  {
    title: 'What to Do If You\'re Facing Criminal Charges',
    category: 'Criminal Law',
    date: '5 January 2025',
    excerpt: 'Being charged with a crime is one of the most stressful experiences anyone can face. Taking the right steps immediately after being charged can make a profound difference in the outcome of your case and your future.',
    img: '/images/blog-4.png',
    author: 'Rebecca Chambers',
    readTime: '10 min read',
    content: `Being charged with a crime is one of the most stressful experiences anyone can face. Taking the right steps immediately after being charged can make a profound difference in the outcome of your case and your future.

**Your Constitutional Rights**

The United States Constitution provides critical protections for anyone accused of a crime.

1. **The Right to Remain Silent** — Under the Fifth Amendment, you cannot be compelled to incriminate yourself.
2. **The Right to an Attorney** — The Sixth Amendment guarantees your right to legal counsel.
3. **The Right to a Speedy Trial** — You have the right to be tried without unnecessary delay.
4. **The Right to Confront Witnesses** — You have the right to cross-examine witnesses who testify against you.

**Immediate Steps to Take**

- Do not speak to law enforcement without an attorney present
- Do not discuss your case with anyone except your attorney
- Preserve all potential evidence
- Document everything

Our criminal defense team has successfully defended thousands of clients. We are available 24/7 and offer free initial consultations.`,
  },
  {
    title: 'Spousal Assault',
    category: 'Family Law',
    date: '10 June 2024',
    excerpt: 'Spousal assault remains one of the most complex and sensitive areas of family law. Victims often face significant emotional, psychological, and legal hurdles when seeking protection and justice.',
    img: '/images/blog-2.png',
    author: 'Sarah Mitchell',
    readTime: '8 min read',
    content: `Spousal assault remains one of the most complex and sensitive areas of family law. Victims often face significant emotional, psychological, and legal hurdles when seeking protection and justice. Understanding your rights is the first step toward safety and recovery.

**Legal Protections Available**

1. **Restraining Orders** — A court order that prohibits your abuser from contacting you.
2. **Protective Orders** — More comprehensive than restraining orders, including provisions for child custody and support.
3. **Criminal Charges** — Assault, battery, and other criminal charges can be filed.

At D.Baraa A. Khaleel, we believe every person deserves to live free from fear and abuse. Our dedicated team of family law attorneys has helped hundreds of clients navigate the legal system.`,
  },
  {
    title: 'Drinking and Driving',
    category: 'Civil Disobedience',
    date: '10 June 2024',
    excerpt: 'Drinking and driving charges carry severe consequences that can impact every aspect of your life. Understanding the legal landscape and having experienced representation is essential.',
    img: '/images/blog-2.png',
    author: 'James Robertson',
    readTime: '6 min read',
    content: `Drinking and driving charges carry severe consequences that can impact every aspect of your life. Understanding the legal landscape and having experienced representation is essential for protecting your rights and your future.

**Consequences of a DUI Conviction**

1. **Criminal Penalties** — Including fines, jail time, and mandatory community service.
2. **License Suspension** — Your driving privileges may be suspended for months or years.
3. **Insurance Consequences** — SR-22 insurance requirements can triple your premiums.
4. **Professional Impact** — Many professional licenses can be affected.

Our criminal defense team has successfully defended thousands of DUI cases.`,
  },
  {
    title: 'Drug Offences',
    category: 'Criminal',
    date: '10 June 2024',
    excerpt: 'Drug offenses represent some of the most serious charges in the criminal justice system, carrying penalties that can include decades of imprisonment.',
    img: '/images/blog-3.png',
    author: 'Michael Torres',
    readTime: '7 min read',
    content: `Drug offenses represent some of the most serious charges in the criminal justice system, carrying penalties that can include decades of imprisonment and life-altering consequences.

**Types of Drug Offenses**

1. **Possession** — Having controlled substances for personal use.
2. **Possession with Intent to Distribute** — A more serious charge based on quantity and other evidence.
3. **Manufacturing** — Involvement in the production of illegal substances.
4. **Trafficking** — The most serious drug offense involving transportation and distribution.

The Fourth Amendment provides critical protections against unreasonable searches and seizures. Many drug cases hinge on whether law enforcement conducted a lawful search.`,
  },
  {
    title: 'Sexual Offenses',
    category: 'Criminal',
    date: '10 June 2024',
    excerpt: 'Sexual offense cases are among the most complex and consequential in the criminal justice system. Experienced legal representation is essential.',
    img: '/images/blog-4.png',
    author: 'Rebecca Chambers',
    readTime: '9 min read',
    content: `Sexual offense cases are among the most complex and consequential in the criminal justice system. Whether you are a survivor seeking justice or someone facing accusations, experienced legal representation is essential.

Every person accused of a crime is entitled to a vigorous defense. Our firm is committed to ensuring that the legal process is fair and that the rights of all parties are protected.`,
  },
];

/* ===== Bookmark Hook ===== */
function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem('thelaw-bookmarks');
      if (saved) return JSON.parse(saved);
    } catch { /* ignore */ }
    return [];
  });

  const toggleBookmark = useCallback((title: string) => {
    setBookmarks((prev) => {
      const next = prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title];
      try { localStorage.setItem('thelaw-bookmarks', JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  }, []);

  const isBookmarked = useCallback((title: string) => bookmarks.includes(title), [bookmarks]);

  return { bookmarks, toggleBookmark, isBookmarked };
}

/* ===== Blog Detail Modal ===== */
function BlogDetailModal({ post, open, onOpenChange, isBookmarked, onToggleBookmark, t }: {
  post: BlogPost | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  t: Record<string, unknown>;
}) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const blogPage = t.blogPage as Record<string, unknown>;
  const isArabic = typeof blogPage?.hero === 'object' && blogPage.hero !== null
    ? ((blogPage.hero as Record<string, unknown>).title === 'المدونة والأخبار')
    : false;
  const ui = {
    bookmarked: isArabic ? 'المحفوظة' : 'Bookmarked',
    bookmarkThisPost: isArabic ? 'حفظ هذا المقال' : 'Bookmark this post',
    removeBookmark: isArabic ? 'إزالة الحفظ' : 'Remove bookmark',
    by: isArabic ? 'بواسطة' : 'By',
    twitter: isArabic ? 'تويتر' : 'Twitter',
    linkedin: isArabic ? 'لينكدإن' : 'LinkedIn',
    failedToCopy: isArabic ? 'فشل النسخ' : 'Failed to copy',
    couldNotCopyLink: isArabic ? 'تعذر نسخ الرابط.' : 'Could not copy the link.',
  };

  if (!post) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast({ title: t.blogPage.copied, description: '' });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: ui.failedToCopy, description: ui.couldNotCopyLink, variant: 'destructive' });
    }
  };

  const handleShareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShareLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-white dark:bg-charcoal-dark border-border-gray dark:border-gray-700">
        <DialogTitle className="sr-only">{post.title}</DialogTitle>
        <DialogDescription className="sr-only">Blog post about {post.category}</DialogDescription>

        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
          <img
            src={post.img}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center gap-2">
            <span className="bg-gold text-charcoal text-xs font-semibold px-3 py-1 uppercase tracking-wider">
              {post.category}
            </span>
            {isBookmarked && (
              <span className="bg-gold/90 text-charcoal text-xs font-semibold px-3 py-1 uppercase tracking-wider flex items-center gap-1">
                <BookmarkCheck size={12} />
                {ui.bookmarked}
              </span>
            )}
          </div>
          {/* Bookmark button overlay */}
          <button
            onClick={(e) => { e.stopPropagation(); onToggleBookmark(); }}
            className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 min-w-[44px] min-h-[44px] ${
              isBookmarked
                ? 'border-gold bg-gold text-charcoal'
                : 'border-white/50 bg-black/30 text-white hover:border-gold hover:text-gold'
            }`}
            aria-label={isBookmarked ? ui.removeBookmark : ui.bookmarkThisPost}
          >
            {isBookmarked ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10">
          <div className="flex items-center gap-3 text-medium-gray dark:text-gray-400 text-sm mb-4">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-gold" />
              {post.date}
            </div>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{ui.by} {post.author}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            {post.title}
          </h1>

          {/* Article content */}
          <div className="prose prose-lg max-w-none text-medium-gray dark:text-gray-300 leading-relaxed">
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h2 key={i} className="text-xl font-bold text-charcoal dark:text-white mt-8 mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>{paragraph.replace(/\*\*/g, '')}</h2>;
              }
              if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                return <div key={i} className="my-4 space-y-2">{paragraph.split('\n').map((line, j) => (
                  <p key={j} className="pl-4 border-l-2 border-gold py-1">{line.replace(/^\d+\.\s|\-\s/, '')}</p>
                ))}</div>;
              }
              return <p key={i} className="mb-4">{paragraph.replace(/\*\*/g, '')}</p>;
            })}
          </div>

          {/* Share buttons */}
          <div className="mt-10 pt-6 border-t border-border-gray dark:border-gray-700">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-charcoal dark:text-gray-300 font-semibold text-sm flex items-center gap-2">
                <Share2 size={16} className="text-gold" />
                {t.blogPage.shareArticle}
              </span>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 px-3 py-2 text-sm border border-border-gray dark:border-gray-600 rounded-md hover:border-gold hover:text-gold transition-colors text-charcoal dark:text-gray-300"
              >
                {copied ? <Check size={14} className="text-gold" /> : <Copy size={14} />}
                {copied ? t.blogPage.copied : t.blogPage.copyLink}
              </button>
              <button
                onClick={handleShareTwitter}
                className="flex items-center gap-1.5 px-3 py-2 text-sm border border-border-gray dark:border-gray-600 rounded-md hover:border-gold hover:text-gold transition-colors text-charcoal dark:text-gray-300"
              >
                <Twitter size={14} />
                {ui.twitter}
              </button>
              <button
                onClick={handleShareLinkedIn}
                className="flex items-center gap-1.5 px-3 py-2 text-sm border border-border-gray dark:border-gray-600 rounded-md hover:border-gold hover:text-gold transition-colors text-charcoal dark:text-gray-300"
              >
                <Linkedin size={14} />
                {ui.linkedin}
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function BlogPage() {
  const { t, isRTL } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [animatingPosts, setAnimatingPosts] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { bookmarks, toggleBookmark, isBookmarked } = useBookmarks();

  // Get translated sidebar data
  const translatedPosts = (t.blogPage.posts as Array<Omit<BlogPost, 'img'> & { img?: string }>).map((post, index) => ({
    ...post,
    img: post.img || BLOG_POSTS[index]?.img || '/images/blog-1.png',
  }));
  const ui = {
    all: isRTL ? 'الكل' : 'All',
    bookmarked: isRTL ? 'المحفوظة' : 'Bookmarked',
    bookmarkThisPost: isRTL ? 'حفظ هذا المقال' : 'Bookmark this post',
    removeBookmark: isRTL ? 'إزالة الحفظ' : 'Remove bookmark',
    prev: isRTL ? 'السابق' : 'Prev',
    next: isRTL ? 'التالي' : 'Next',
  };
  const recentPosts = translatedPosts.slice(0, 4).map((p) => ({
    title: p.title,
    date: p.date,
    img: p.img,
  }));
  const translatedTags = t.blogPage.tagsList as string[];
  const translatedCategories = t.blogPage.categoriesList as Array<{ name: string; count: number }>;

  const WORKING_HOURS = [
    { day: t.contactPage.hours.weekdays, hours: t.contactPage.hours.weekdayHours },
    { day: t.contactPage.hours.saturday, hours: t.contactPage.hours.saturdayHours },
    { day: t.contactPage.hours.sunday, hours: t.contactPage.hours.sundayHours },
  ];

  // Debounced search
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

  // Filter blog posts
  const filteredPosts = translatedPosts.filter((post) => {
    // Category filter
    if (activeCategory === 'Bookmarked' && !isBookmarked(post.title)) return false;
    if (activeCategory !== 'All' && activeCategory !== 'Bookmarked' && post.category !== activeCategory) return false;
    // Search filter
    if (!debouncedSearch) return true;
    return (
      post.title.toLowerCase().includes(debouncedSearch) ||
      post.content.toLowerCase().includes(debouncedSearch) ||
      post.category.toLowerCase().includes(debouncedSearch) ||
      post.excerpt.toLowerCase().includes(debouncedSearch)
    );
  });

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  // Pagination
  const totalPages = Math.ceil(regularPosts.length / (POSTS_PER_PAGE - 1));
  const safeCurrentPage = Math.min(currentPage, totalPages || 1);
  const paginatedPosts = regularPosts.slice(
    (safeCurrentPage - 1) * (POSTS_PER_PAGE - 1),
    safeCurrentPage * (POSTS_PER_PAGE - 1)
  );

  const openPostModal = (post: BlogPost) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const handleToggleBookmark = (title: string) => {
    const wasBookmarked = isBookmarked(title);
    toggleBookmark(title);
  };

  return (
    <div className="overflow-x-hidden max-w-full">
      <BlogDetailModal
        post={selectedPost}
        open={modalOpen}
        onOpenChange={setModalOpen}
        isBookmarked={selectedPost ? isBookmarked(selectedPost.title) : false}
        onToggleBookmark={() => { if (selectedPost) handleToggleBookmark(selectedPost.title); }}
        t={t}
      />

      <PageHero title={t.blogPage.hero.title} breadcrumb={t.blogPage.hero.breadcrumb.current} />

      <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-charcoal-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Category Tabs */}
              <AnimatedSection>
                <div className="flex flex-wrap gap-2 mb-8">
                  <button
                    onClick={() => { setAnimatingPosts(true); setActiveCategory('All'); setCurrentPage(1); setTimeout(() => setAnimatingPosts(false), 300); }}
                    className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider border-2 transition-all duration-300 min-h-[44px] ${
                      activeCategory === 'All'
                        ? 'bg-gold text-charcoal border-gold'
                        : 'bg-transparent text-charcoal dark:text-gray-300 border-border-gray dark:border-gray-600 hover:border-gold hover:text-gold'
                    }`}
                  >
                    {ui.all}
                  </button>
                  <button
                    onClick={() => { setAnimatingPosts(true); setActiveCategory('Bookmarked'); setCurrentPage(1); setTimeout(() => setAnimatingPosts(false), 300); }}
                    className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider border-2 transition-all duration-300 min-h-[44px] flex items-center gap-1.5 ${
                      activeCategory === 'Bookmarked'
                        ? 'bg-gold text-charcoal border-gold'
                        : 'bg-transparent text-charcoal dark:text-gray-300 border-border-gray dark:border-gray-600 hover:border-gold hover:text-gold'
                    }`}
                  >
                    <Bookmark size={14} className={activeCategory === 'Bookmarked' ? 'fill-charcoal' : ''} />
                    {ui.bookmarked} ({bookmarks.length})
                  </button>
                  {translatedCategories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => { setAnimatingPosts(true); setActiveCategory(cat.name); setCurrentPage(1); setTimeout(() => setAnimatingPosts(false), 300); }}
                      className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider border-2 transition-all duration-300 min-h-[44px] ${
                        activeCategory === cat.name
                          ? 'bg-gold text-charcoal border-gold'
                          : 'bg-transparent text-charcoal dark:text-gray-300 border-border-gray dark:border-gray-600 hover:border-gold hover:text-gold'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </AnimatedSection>

              {filteredPosts.length === 0 ? (
                <AnimatedSection>
                  <div className="text-center py-20">
                    <Search size={48} className="text-medium-gray dark:text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-charcoal dark:text-white mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                      {t.blogPage.search.noResults}
                    </h3>
                    <p className="text-medium-gray dark:text-gray-400 mb-6">
                      {t.blogPage.search.noResults}
                    </p>
                    <button
                      onClick={() => { handleSearchChange(''); setActiveCategory('All'); }}
                      className="text-gold font-semibold hover:text-gold-dark transition-colors"
                    >
                      {t.blogPage.search.clearSearch}
                    </button>
                  </div>
                </AnimatedSection>
              ) : (
                <div className={`transition-all duration-300 ${animatingPosts ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                  {/* Featured Post */}
                  {featuredPost && (
                    <AnimatedSection animation="fade-left">
                      <article className="practice-card group cursor-pointer mb-12 border border-border-gray dark:border-gray-700 overflow-hidden bg-white dark:bg-charcoal gold-accent-line relative hover-gold-shadow transition-all duration-300">
                        <div className="h-1 bg-gold" />
                        <div className="md:flex">
                          <div className="relative overflow-hidden md:w-1/2" onClick={() => openPostModal(featuredPost)}>
                            <img
                              src={featuredPost.img}
                              alt={featuredPost.title}
                              loading="lazy"
                              className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3">
                              <span className="bg-gold text-charcoal text-xs font-bold px-3 py-1.5 uppercase tracking-wider shadow-md">
                                {featuredPost.category}
                              </span>
                            </div>
                          </div>
                          <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2 text-medium-gray dark:text-gray-400 text-sm">
                                <Calendar size={14} className="text-gold" />
                                {featuredPost.date}
                                <span>•</span>
                                <span>{featuredPost.readTime}</span>
                              </div>
                              <button
                                onClick={(e) => { e.stopPropagation(); handleToggleBookmark(featuredPost.title); }}
                                className={`p-2 rounded-md transition-all min-w-[44px] min-h-[44px] flex items-center justify-center ${
                                  isBookmarked(featuredPost.title)
                                    ? 'text-gold'
                                    : 'text-medium-gray dark:text-gray-500 hover:text-gold'
                                }`}
                                aria-label={isBookmarked(featuredPost.title) ? ui.removeBookmark : ui.bookmarkThisPost}
                              >
                                {isBookmarked(featuredPost.title) ? <BookmarkCheck size={20} className="fill-gold" /> : <Bookmark size={20} />}
                              </button>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-charcoal dark:text-white mb-3 group-hover:text-gold transition-colors cursor-pointer" style={{ fontFamily: 'var(--font-playfair), serif' }} onClick={() => openPostModal(featuredPost)}>
                              {featuredPost.title}
                            </h3>
                            <p className="text-medium-gray dark:text-gray-400 text-sm leading-relaxed mb-4">
                              {featuredPost.excerpt}
                            </p>
                            <button className="text-gold text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all" onClick={() => openPostModal(featuredPost)}>
                              {t.common.readMore} <ArrowRight size={14} />
                            </button>
                          </div>
                        </div>
                      </article>
                    </AnimatedSection>
                  )}

                  {/* Regular Posts Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {paginatedPosts.map((post, index) => (
                      <AnimatedSection key={post.title} delay={index * 100}>
                        <article className="practice-card group cursor-pointer border border-border-gray dark:border-gray-700 overflow-hidden bg-white dark:bg-charcoal gold-accent-line relative hover-gold-shadow hover:scale-[1.01] transition-all duration-300">
                          <div className="h-1 bg-gold" />
                          <div className="relative overflow-hidden" onClick={() => openPostModal(post)}>
                            <img
                              src={post.img}
                              alt={post.title}
                              loading="lazy"
                              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3">
                              <span className="bg-gold text-charcoal text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 uppercase tracking-wider shadow-md">
                                {post.category}
                              </span>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2 text-medium-gray dark:text-gray-400 text-sm">
                                <Calendar size={14} className="text-gold" />
                                {post.date}
                              </div>
                              <button
                                onClick={(e) => { e.stopPropagation(); handleToggleBookmark(post.title); }}
                                className={`p-1.5 rounded-md transition-all min-w-[44px] min-h-[44px] flex items-center justify-center ${
                                  isBookmarked(post.title)
                                    ? 'text-gold'
                                    : 'text-medium-gray dark:text-gray-500 hover:text-gold'
                                }`}
                                aria-label={isBookmarked(post.title) ? ui.removeBookmark : ui.bookmarkThisPost}
                              >
                                {isBookmarked(post.title) ? <BookmarkCheck size={18} className="fill-gold" /> : <Bookmark size={18} />}
                              </button>
                            </div>
                            <h3 className="text-lg font-bold text-charcoal dark:text-white mb-3 group-hover:text-gold transition-colors cursor-pointer leading-snug" style={{ fontFamily: 'var(--font-playfair), serif' }} onClick={() => openPostModal(post)}>
                              {post.title}
                            </h3>
                            <p className="text-medium-gray dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            <button className="text-gold text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all" onClick={() => openPostModal(post)}>
                              {t.common.readMore} <ArrowRight size={14} />
                            </button>
                          </div>
                        </article>
                      </AnimatedSection>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-10">
                      <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={safeCurrentPage === 1}
                        className="flex items-center gap-1 px-4 py-2 text-sm font-medium border border-border-gray dark:border-gray-600 text-charcoal dark:text-gray-300 hover:border-gold hover:text-gold transition-colors disabled:opacity-40 disabled:cursor-not-allowed min-h-[44px]"
                      >
                        <ArrowLeft size={14} /> {ui.prev}
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 text-sm font-medium transition-all min-w-[44px] min-h-[44px] ${
                            page === safeCurrentPage
                              ? 'bg-gold text-charcoal'
                              : 'border border-border-gray dark:border-gray-600 text-charcoal dark:text-gray-300 hover:border-gold hover:text-gold'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                      <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={safeCurrentPage === totalPages}
                        className="flex items-center gap-1 px-4 py-2 text-sm font-medium border border-border-gray dark:border-gray-600 text-charcoal dark:text-gray-300 hover:border-gold hover:text-gold transition-colors disabled:opacity-40 disabled:cursor-not-allowed min-h-[44px]"
                      >
                        {ui.next} <ArrowRight size={14} />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Search */}
              <AnimatedSection>
                <div className="bg-light-gray dark:bg-charcoal p-6 border border-border-gray/50 dark:border-gray-700/50">
                  <h4 className="text-charcoal dark:text-white font-bold mb-4 flex items-center gap-2">
                    <Search size={18} className="text-gold" />
                    {t.common.search}
                  </h4>
                  <div className="relative">
                    <Input
                      placeholder={t.blogPage.search.placeholder}
                      value={searchTerm}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      className="border-border-gray dark:border-gray-600 bg-white dark:bg-charcoal-dark text-charcoal dark:text-white focus:border-gold focus:ring-2 focus:ring-gold/20 pr-10 h-11"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => handleSearchChange('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-medium-gray hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </AnimatedSection>

              {/* Categories */}
              <AnimatedSection delay={100}>
                <div className="bg-light-gray dark:bg-charcoal p-6 border border-border-gray/50 dark:border-gray-700/50">
                  <h4 className="text-charcoal dark:text-white font-bold mb-4 flex items-center gap-2">
                    <ChevronRight size={18} className="text-gold" />
                    {t.blogPage.categories}
                  </h4>
                  <div className="space-y-2">
                    {translatedCategories.map((cat) => (
                      <button
                        key={cat.name}
                        onClick={() => { setAnimatingPosts(true); setActiveCategory(cat.name); setCurrentPage(1); setTimeout(() => setAnimatingPosts(false), 300); }}
                        className="flex items-center justify-between w-full py-2 text-sm text-medium-gray dark:text-gray-400 hover:text-gold transition-colors group"
                      >
                        <span className="flex items-center gap-2">
                          <ChevronRight size={12} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                          {cat.name}
                        </span>
                        <span className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded-full">{cat.count}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Recent Posts */}
              <AnimatedSection delay={200}>
                <div className="bg-light-gray dark:bg-charcoal p-6 border border-border-gray/50 dark:border-gray-700/50">
                  <h4 className="text-charcoal dark:text-white font-bold mb-4 flex items-center gap-2">
                    <Clock size={18} className="text-gold" />
                    {t.blogPage.recentPosts}
                  </h4>
                  <div className="space-y-4">
                    {recentPosts.map((rp) => (
                      <div key={rp.title} className="flex items-start gap-3 group cursor-pointer" onClick={() => {
                        const post = translatedPosts.find(p => p.title === rp.title);
                        if (post) openPostModal(post);
                      }}>
                        <img src={rp.img} alt={rp.title} className="w-16 h-16 object-cover border border-border-gray dark:border-gray-600 shrink-0" loading="lazy" />
                        <div>
                          <h5 className="text-sm font-medium text-charcoal dark:text-white group-hover:text-gold transition-colors leading-snug line-clamp-2">{rp.title}</h5>
                          <p className="text-xs text-medium-gray dark:text-gray-400 mt-1 flex items-center gap-1">
                            <Calendar size={10} className="text-gold" />
                            {rp.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Tags */}
              <AnimatedSection delay={300}>
                <div className="bg-light-gray dark:bg-charcoal p-6 border border-border-gray/50 dark:border-gray-700/50">
                  <h4 className="text-charcoal dark:text-white font-bold mb-4 flex items-center gap-2">
                    <Tag size={18} className="text-gold" />
                    {t.blogPage.tags}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {translatedTags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 text-xs border border-border-gray dark:border-gray-600 text-medium-gray dark:text-gray-400 hover:border-gold hover:text-gold transition-colors cursor-pointer rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Working Hours */}
              <AnimatedSection delay={400}>
                <div className="bg-charcoal dark:bg-charcoal-dark border border-gray-700 p-6 text-white">
                  <h4 className="text-gold font-bold mb-5 flex items-center gap-2 text-lg">
                    <Clock size={20} />
                    {t.blogPage.workingHours}
                  </h4>
                  <div className="space-y-4">
                    {WORKING_HOURS.map((wh) => (
                      <div key={wh.day} className="border-l-2 border-gold pl-4">
                        <p className="text-gold font-medium text-sm">{wh.day}</p>
                        <p className="text-gray-300 text-sm">{wh.hours}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
