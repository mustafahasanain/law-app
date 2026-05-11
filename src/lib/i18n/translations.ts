export type Language = 'en' | 'ar';

export const LANGUAGES: { code: Language; label: string; nativeLabel: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', dir: 'ltr' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية', dir: 'rtl' },
];

export const translations = {
  en: {
    // Header
    header: {
      logo: 'D.Baraa A. Khaleel',
      freeConsultation: 'Free Consultation',
      home: 'Home',
      about: 'About Us',
      practiceAreas: 'Practice Areas',
      faq: 'FAQ',
      blog: 'Blog',
      contact: 'Contact',
    },
    // Hero
    hero: {
      badge: 'Get a Free Consultation',
      name: 'D.Baraa A. Khaleel',
      subtitles: [
        'Criminal Justice Attorney',
        'Trusted Legal Advisor',
        'Your Advocate in Court',
      ],
      descriptions: [
        'Dedicated to providing exceptional legal representation and fighting for justice in every case.',
        'Over 25 years of experience defending clients with passion, integrity, and unwavering commitment.',
        'When your future is at stake, you need an attorney who will fight relentlessly for your rights.',
      ],
      contactUs: 'Contact Us',
      callFree: 'Call Free',
    },
    // Emergency Banner
    emergency: {
      title: 'Emergency Legal Service 24/7',
      callFree: 'Call Free',
    },
    // Counter Stats
    counter: {
      casesWon: 'Cases Won',
      yearsExperience: 'Years Experience',
      successRate: 'Success Rate',
      expertLawyers: 'Expert Lawyers',
    },
    // Practice Areas
    practiceAreas: {
      subtitle: 'Practice Areas',
      title: 'Our Practice Areas',
      viewAll: 'View All Departments',
      items: [
        { title: 'Legal Advices', desc: 'Expert counsel for complex legal matters and strategic planning.' },
        { title: 'Litigation', desc: 'Aggressive courtroom representation to protect your interests.' },
        { title: 'Lawsuits', desc: 'Skilled handling of civil lawsuits from filing to resolution.' },
        { title: 'Business Law', desc: 'Comprehensive legal solutions for corporate and business needs.' },
        { title: 'Criminal Defense', desc: 'Vigorous defense strategies to safeguard your freedom and rights.' },
        { title: 'Disputes', desc: 'Effective resolution through mediation, arbitration, or trial.' },
        { title: 'Copyrights', desc: 'Protection and enforcement of your intellectual property rights.' },
        { title: 'Criminal Law', desc: 'Dedicated advocacy in all areas of criminal justice proceedings.' },
      ],
      learnMore: 'Learn More',
    },
    // How It Works
    howItWorks: {
      subtitle: 'How it Works',
      title: '3 Easy Steps to Get Legal Help',
      items: [
        { title: 'Request a quote', subtitle: 'Send Us your Request', btnText: 'Send Request' },
        { title: 'Investigation', subtitle: 'We will investigate about your case', btnText: 'Learn more' },
        { title: 'Case Fight', subtitle: 'We will fight your case in court', btnText: 'See Results' },
      ],
    },
    // Case Types
    cases: {
      subtitle: 'Case Studies',
      title: 'Case Like Yours',
      items: [
        { title: 'Spousal Assault', category: 'Family Law' },
        { title: 'Drinking and Driving', category: 'Civil Disobedience' },
        { title: 'Social Offences', category: 'Drug Offences' },
        { title: 'Sexual Offenses', category: 'Criminal' },
        { title: 'Shoplifting', category: 'Civil Disobedience' },
        { title: 'Fraud', category: 'Business Law' },
        { title: 'Money Laundering', category: 'Business Law' },
        { title: 'Child Abuse', category: 'Criminal' },
      ],
      viewCase: 'View Case',
    },
    // Free Case Evaluation
    freeEvaluation: {
      subtitle: 'Free Case Evaluation',
      title: 'Submit Your Request & Get a Free Consultation',
      description: 'We will review your case and get back to you within 24 hours with a comprehensive legal assessment.',
      submitRequest: 'Submit Your Request',
    },
    // Attorney Quote
    attorneyQuote: {
      quote: "Justice is not a passive concept — it requires dedicated advocates who are willing to fight tirelessly for the rights of every individual, regardless of the circumstances.",
      name: 'D.Baraa A. Khaleel',
      title: 'Senior Partner, Criminal Justice Attorney',
    },
    // Testimonials
    testimonials: {
      subtitle: 'Testimonials',
      title: 'What Our Clients Say',
      viewAll: 'View All Reviews',
      clientReviews: 'Client Reviews',
      reviewsVerified: 'Reviews verified on Google',
      onGoogle: 'on Google Reviews',
    },
    // Practice List
    practiceList: {
      title: 'Practice Areas',
      subtitle: 'Our Expertise',
      items: [
        'Business organizations law', 'Civil law or common law', 'Communications law',
        'Constitutional law', 'Cultural property law', 'Mergers & acquisitions law',
        'Native American law', 'Product liability litigation', 'Real estate law',
        'Obscenity law', 'Nationality law', 'Procedural law',
        'International human rights law', 'Health law', 'Immigration law',
        'Environmental law', 'Cyber law', 'Consumer law',
      ],
    },
    // Immigration Section
    immigration: {
      title: 'Immigration Law',
      description: 'Our immigration attorneys assist with visa applications, green cards, citizenship, deportation defense, asylum claims, and family-based petitions. We provide personalized guidance through every step of the immigration process.',
      learnMore: 'Learn More',
    },
    // Verdicts
    verdicts: {
      subtitle: 'Our Results',
      title: 'Verdicts & Settlements',
      items: [
        { caseType: 'Personal Injury', amount: '$2.5M', description: 'Multi-vehicle collision resulting in permanent disability. Secured maximum compensation for medical expenses and lost wages.', outcome: 'Settlement' },
        { caseType: 'Medical Malpractice', amount: '$4.8M', description: 'Surgical error causing severe complications. Achieved one of the largest verdicts in the county for medical negligence.', outcome: 'Verdict' },
        { caseType: 'Workplace Accident', amount: '$1.9M', description: 'Construction site fall due to safety violations. Recovered full damages including future medical care and rehabilitation.', outcome: 'Settlement' },
        { caseType: 'Wrongful Death', amount: '$6.2M', description: 'Fatal trucking accident caused by driver negligence. Obtained justice for the family with substantial wrongful death damages.', outcome: 'Verdict' },
        { caseType: 'Product Liability', amount: '$3.1M', description: 'Defective product causing serious injury. Held manufacturer accountable with a significant product liability settlement.', outcome: 'Settlement' },
        { caseType: 'Business Dispute', amount: '$5.5M', description: 'Breach of contract threatening company survival. Successfully recovered damages and protected business interests.', outcome: 'Verdict' },
      ],
      settlement: 'Settlement',
      verdict: 'Verdict',
    },
    // Trust Badges
    trustBadges: {
      items: [
        { title: 'Licensed & Insured', desc: 'Fully licensed to practice law with comprehensive professional liability insurance for your protection.' },
        { title: 'Award Winning', desc: 'Recognized by national legal organizations for excellence in client advocacy and courtroom results.' },
        { title: '24/7 Availability', desc: 'Our attorneys are available around the clock for emergencies and urgent legal matters.' },
        { title: 'Free Consultation', desc: 'Start with a no-obligation consultation. We review your case and explain your options at no cost.' },
      ],
    },
    // How We Can Help
    howWeCanHelp: {
      title: 'How We Can Help',
      subtitle: 'Our Services',
      items: [
        { title: 'Personal Injury Claims', description: 'If you have been injured due to someone else\'s negligence, our personal injury attorneys will fight to get you the compensation you deserve.' },
        { title: 'Criminal Defense', description: 'Facing criminal charges can be overwhelming. Our experienced criminal defense lawyers provide aggressive representation for all types of criminal charges.' },
        { title: 'Family Law Matters', description: 'Family legal issues require sensitivity and expertise. We handle divorce, child custody and support, alimony, adoption, and domestic violence cases.' },
        { title: 'Business Disputes', description: 'From contract disputes and partnership conflicts to intellectual property battles, our business law team provides comprehensive legal solutions.' },
        { title: 'Immigration Cases', description: 'Navigating immigration law can be complex. Our immigration attorneys assist with visa applications, green cards, citizenship, deportation defense, and more.' },
      ],
    },
    // Client Logos
    clientLogos: {
      title: 'Trusted By Leading Organizations',
      items: ['Apex Holdings', 'Sterling Corp', 'Guardian Group', 'Meridian Trust', 'Pacific Ventures', 'Atlas Capital', 'Summit Partners', 'Vanguard Legal', 'Pinnacle Finance', 'Ironclad Inc'],
    },
    // CTA Section
    cta: {
      title: 'Need Legal Assistance?',
      description: 'Contact us today for a free consultation and let our experienced attorneys fight for your rights.',
      contactUs: 'Contact Us Now',
      callUs: 'Call Us',
    },
    // About Page
    about: {
      hero: { title: 'About Us', breadcrumb: { home: 'Home', current: 'About Us' } },
      vision: {
        subtitle: 'Our Vision',
        title: 'Our Vision for Justice',
        description: 'We believe that every person deserves access to quality legal representation, regardless of their background or circumstances. Our vision is to create a more just society where the law serves as a shield for the vulnerable, not a weapon for the powerful.',
        stats: [
          { label: 'Client Satisfaction', value: 95 },
          { label: 'Case Success Rate', value: 98 },
          { label: 'Years of Experience', value: 25 },
        ],
      },
      quote: {
        text: "The law is not merely a set of rules — it is the foundation upon which we build a fair and equitable society.",
        author: 'D.Baraa A. Khaleel, Founding Partner',
      },
      mission: {
        subtitle: 'Our Mission',
        title: 'What We Stand For',
        description: 'Our mission is to provide exceptional legal representation that makes a real difference in the lives of our clients. We are committed to upholding the highest standards of professional ethics while delivering results that exceed expectations.',
        services: [
          'Personal Injury', 'Family Law', 'Criminal Defense',
          'Business Law', 'Immigration', 'Real Estate',
        ],
      },
      history: {
        subtitle: 'Milestones',
        title: 'Our History',
        items: [
          { year: '1998', title: 'Founded', description: 'D.Baraa A. Khaleel was established with a commitment to justice and client advocacy, starting with a small office and a team of three dedicated attorneys.' },
          { year: '2003', title: 'First Major Verdict', description: 'Secured a landmark $3.2M verdict in a medical malpractice case, establishing our reputation for aggressive and effective courtroom representation.' },
          { year: '2008', title: 'Expanded to 3 Offices', description: 'Grew our practice to serve clients across three major metropolitan areas, expanding our team and capabilities to meet growing demand.' },
          { year: '2013', title: '500th Case Won', description: 'Reached the milestone of 500 successful case outcomes, a testament to our unwavering dedication to achieving justice for our clients.' },
          { year: '2018', title: 'Named Top Law Firm', description: 'Recognized by the National Law Journal as one of the top 50 law firms in the country, a prestigious honor reflecting our commitment to excellence.' },
          { year: '2023', title: '25th Anniversary', description: 'Celebrated 25 years of legal excellence, having served over 10,000 clients and recovered more than $100M in verdicts and settlements.' },
        ],
      },
      history: {
        subtitle: 'Ù…Ø­Ø·Ø§ØªÙ†Ø§',
        title: 'ØªØ§Ø±ÙŠØ®Ù†Ø§',
        items: [
          { year: '1998', title: 'Ø§Ù„ØªØ£Ø³ÙŠØ³', description: 'ØªØ£Ø³Ø³Øª Ø´Ø±ÙƒØ© Ø§Ù„Ù…Ø­Ø§Ù…Ø§Ø© Ø¹Ù„Ù‰ Ø£Ø³Ø§Ø³ Ø§Ù„Ø§Ù„ØªØ²Ø§Ù… Ø¨Ø§Ù„Ø¹Ø¯Ø§Ù„Ø© ÙˆØ§Ù„Ø¯ÙØ§Ø¹ Ø¹Ù† Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ØŒ Ø¨Ø¯Ø¡Ø§Ù‹ Ù…Ù† Ù…ÙƒØªØ¨ ØµØºÙŠØ± ÙˆÙØ±ÙŠÙ‚ Ù…Ù† Ø«Ù„Ø§Ø«Ø© Ù…Ø­Ø§Ù…ÙŠÙ† Ù…ØªÙØ§Ù†ÙŠÙ†.' },
          { year: '2003', title: 'Ø£ÙˆÙ„ Ø­ÙƒÙ… ÙƒØ¨ÙŠØ±', description: 'Ø­Ù‚Ù‚Ù†Ø§ Ø­ÙƒÙ…Ø§Ù‹ Ø¨Ø§Ø±Ø²Ø§Ù‹ Ø¨Ù‚ÙŠÙ…Ø© 3.2 Ù…Ù„ÙŠÙˆÙ† Ø¯ÙˆÙ„Ø§Ø± ÙÙŠ Ù‚Ø¶ÙŠØ© Ø®Ø·Ø£ Ø·Ø¨ÙŠØŒ Ù…Ù…Ø§ Ø±Ø³Ø® Ø³Ù…Ø¹ØªÙ†Ø§ ÙÙŠ Ø§Ù„ØªÙ…Ø«ÙŠÙ„ Ø§Ù„Ù‚Ø¶Ø§Ø¦ÙŠ Ø§Ù„Ø­Ø§Ø²Ù… ÙˆØ§Ù„ÙØ¹Ø§Ù„.' },
          { year: '2008', title: 'Ø§Ù„ØªÙˆØ³Ø¹ Ø¥Ù„Ù‰ 3 Ù…ÙƒØ§ØªØ¨', description: 'ØªÙˆØ³Ø¹Ù†Ø§ Ù„Ø®Ø¯Ù…Ø© Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ ÙÙŠ Ø«Ù„Ø§Ø« Ù…Ù†Ø§Ø·Ù‚ Ø­Ø¶Ø±ÙŠØ© Ø±Ø¦ÙŠØ³ÙŠØ©ØŒ Ù…Ø¹ ØªÙˆØ³ÙŠØ¹ Ø§Ù„ÙØ±ÙŠÙ‚ ÙˆØ§Ù„Ù‚Ø¯Ø±Ø§Øª Ù„Ù…ÙˆØ§ÙƒØ¨Ø© Ø§Ù„Ø·Ù„Ø¨ Ø§Ù„Ù…ØªØ²Ø§ÙŠØ¯.' },
          { year: '2013', title: 'Ø§Ù„Ù‚Ø¶ÙŠØ© Ø§Ù„Ù€ 500 Ø§Ù„Ù†Ø§Ø¬Ø­Ø©', description: 'ÙˆØµÙ„Ù†Ø§ Ø¥Ù„Ù‰ Ù…Ø­Ø·Ø© 500 Ù†ØªÙŠØ¬Ø© Ù‚Ø¶Ø§Ø¦ÙŠØ© Ù†Ø§Ø¬Ø­Ø©ØŒ ÙÙŠ Ø¯Ù„ÙŠÙ„ Ø¹Ù„Ù‰ Ø§Ù„ØªØ²Ø§Ù…Ù†Ø§ Ø§Ù„Ø«Ø§Ø¨Øª Ø¨ØªØ­Ù‚ÙŠÙ‚ Ø§Ù„Ø¹Ø¯Ø§Ù„Ø© Ù„Ø¹Ù…Ù„Ø§Ø¦Ù†Ø§.' },
          { year: '2018', title: 'ØªØµÙ†ÙŠÙÙ†Ø§ ÙƒØ£Ø­Ø¯ Ø£ÙØ¶Ù„ Ø§Ù„Ø´Ø±ÙƒØ§Øª', description: 'ØªÙ… Ø§Ù„Ø§Ø¹ØªØ±Ø§Ù Ø¨Ù†Ø§ ÙƒÙˆØ§Ø­Ø¯Ø© Ù…Ù† Ø£ÙØ¶Ù„ 50 Ø´Ø±ÙƒØ© Ù…Ø­Ø§Ù…Ø§Ø© ÙÙŠ Ø§Ù„Ø¨Ù„Ø§Ø¯ØŒ ÙˆÙ‡Ùˆ ØªÙƒØ±ÙŠÙ… ÙŠØ¹ÙƒØ³ Ø§Ù„ØªØ²Ø§Ù…Ù†Ø§ Ø¨Ø§Ù„ØªÙ…ÙŠØ².' },
          { year: '2023', title: 'Ø§Ù„Ø°ÙƒØ±Ù‰ Ø§Ù„Ù€ 25', description: 'Ø§Ø­ØªÙÙ„Ù†Ø§ Ø¨Ù…Ø±ÙˆØ± 25 Ø¹Ø§Ù…Ø§Ù‹ Ù…Ù† Ø§Ù„ØªÙ…ÙŠØ² Ø§Ù„Ù‚Ø§Ù†ÙˆÙ†ÙŠØŒ Ø¨Ø¹Ø¯ Ø®Ø¯Ù…Ø© Ø£ÙƒØ«Ø± Ù…Ù† 10,000 Ø¹Ù…ÙŠÙ„ ÙˆØ§Ø³ØªØ±Ø¯Ø§Ø¯ Ù…Ø§ ÙŠØ²ÙŠØ¯ Ø¹Ù† 100 Ù…Ù„ÙŠÙˆÙ† Ø¯ÙˆÙ„Ø§Ø± ÙÙŠ Ø§Ù„Ø£Ø­ÙƒØ§Ù… ÙˆØ§Ù„ØªØ³ÙˆÙŠØ§Øª.' },
        ],
      },
      clients: {
        subtitle: 'Our Clients',
        title: 'Trusted by Leading Organizations',
        items: ['Apex Holdings', 'Sterling Corp', 'Guardian Group', 'Meridian Trust', 'Pacific Ventures', 'Atlas Capital'],
      },
      team: {
        subtitle: 'Our Team',
        title: 'Expert Team Members',
        members: [
          { name: 'Alex Thomson', role: 'Senior Partner', specialties: 'Criminal Law, Litigation', bio: 'Alex has over 20 years of experience in criminal defense and has successfully represented thousands of clients in state and federal courts.' },
          { name: 'Sarah Mitchell', role: 'Family Law Attorney', specialties: 'Family Law, Mediation', bio: 'Sarah specializes in complex family law matters, including high-asset divorces and contentious custody disputes.' },
          { name: 'David Chen', role: 'Corporate Counsel', specialties: 'Business Law, M&A', bio: 'David advises businesses of all sizes on corporate governance, mergers and acquisitions, and regulatory compliance.' },
        ],
        viewProfile: 'View Profile',
        closeProfile: 'Close Profile',
        education: 'Education',
        credentials: 'Credentials',
        practiceAreasLabel: 'Practice Areas',
        contactInfo: 'Contact Info',
      },
      legalAdvice: {
        subtitle: 'Get Advice',
        title: 'Get Your Legal Advice',
        items: [
          { title: 'Legal Consultation', desc: 'Schedule a one-on-one consultation with our experienced attorneys.' },
          { title: 'Case Evaluation', desc: 'Get a thorough evaluation of your case with clear next steps.' },
          { title: 'Document Review', desc: 'Have your legal documents reviewed by our expert team.' },
          { title: 'Court Representation', desc: 'Trust our attorneys to represent you effectively in court.' },
          { title: 'Settlement Negotiation', desc: 'Let us negotiate the best possible settlement for your case.' },
          { title: 'Appeal Assistance', desc: 'Get help with filing and pursuing legal appeals effectively.' },
        ],
      },
      freeEvaluation: {
        title: 'Free Case Evaluation',
        description: 'Get expert legal advice at no cost. Our attorneys will review your case and provide a comprehensive assessment.',
        contactUs: 'Contact Us',
        callFree: 'Call Free',
      },
    },
    // Practice Areas Page
    practiceAreasPage: {
      hero: { title: 'Practice Areas', breadcrumb: { home: 'Home', current: 'Practice Areas' } },
      intro: 'With over 25 years of experience, our attorneys specialize in a wide range of legal practice areas. We provide aggressive and dedicated representation to protect your rights and achieve the best possible outcomes.',
      subtitle: 'What We Do',
      title: 'Our Practice Areas',
      viewMore: 'Learn More',
      whyChoose: {
        subtitle: 'Why Choose Us',
        title: 'Why Choose Our Firm',
        items: [
          { title: 'Experienced Team', desc: 'Over 25 years of combined legal experience across multiple practice areas.' },
          { title: 'Proven Results', desc: 'A 98% success rate with millions recovered for our clients.' },
          { title: 'Personal Attention', desc: 'Every case receives dedicated attention from a senior attorney.' },
          { title: 'No Win, No Fee', desc: 'You pay nothing unless we win your case. Free initial consultation.' },
        ],
      },
      moreAreas: {
        title: 'More Practice Areas',
        description: 'In addition to our core practice areas, we also provide legal services in the following fields:',
        items: [
          'Employment Law', 'Real Estate Law', 'Tax Law',
          'Immigration Law', 'Environmental Law', 'Intellectual Property',
          'Bankruptcy Law', 'Estate Planning', 'Civil Rights',
        ],
      },
      cta: {
        title: 'Need Legal Help?',
        description: 'Schedule a free consultation with one of our experienced attorneys.',
        button: 'Contact Us Now',
      },
      hours: {
        title: 'Working Hours',
        weekdays: 'Monday to Friday',
        weekdayHours: '9:00 to 16:30',
        saturday: 'Saturday',
        saturdayHours: '9:00 to 15:30',
        sunday: 'Sunday',
        sundayHours: 'Only Emergency Calls',
      },
      contact: {
        title: 'Contact Info',
        address: 'بغداد, المنصور, شارع مطعم الساعة',
        phone: '07802233000',
        email: 'info@xtralawyer.com',
      },
    },
    // FAQ Page
    faqPage: {
      hero: { title: 'Frequently Asked Questions', breadcrumb: { home: 'Home', current: 'FAQ' } },
      askForm: {
        title: 'Ask Us a Question',
        subtitle: 'Get answers to your legal questions from our experienced attorneys.',
        nameLabel: 'Your Name',
        namePlaceholder: 'Enter your name',
        emailLabel: 'Your Email',
        emailPlaceholder: 'Enter your email',
        departmentLabel: 'Department',
        departmentPlaceholder: 'Select department',
        questionLabel: 'Your Question',
        questionPlaceholder: 'Type your question here...',
        submit: 'Submit Question',
        departments: ['General', 'Criminal Law', 'Family Law', 'Business Law', 'Immigration', 'Personal Injury'],
      },
      general: {
        subtitle: 'General',
        title: 'General Questions',
        items: [
          { q: 'What areas of law does your firm specialize in?', a: 'Our firm specializes in a wide range of legal areas including criminal defense, personal injury, family law, business law, immigration, and civil litigation. Each practice area is handled by experienced attorneys who focus specifically on that field.' },
          { q: 'How much does an initial consultation cost?', a: 'We offer free initial consultations for all potential clients. During this consultation, we will review your case, discuss your legal options, and provide an honest assessment of your situation at no cost to you.' },
          { q: 'What should I bring to my first meeting?', a: 'Bring any relevant documents such as police reports, medical records, contracts, correspondence, court notices, and identification. The more information you can provide, the better we can evaluate your case.' },
          { q: 'How long will my case take to resolve?', a: 'The timeline varies greatly depending on the complexity of the case, the court schedule, and the willingness of parties to negotiate. Simple cases may resolve in weeks, while complex litigation can take months or years.' },
          { q: 'Do you offer payment plans?', a: 'Yes, we offer flexible payment plans and work with clients to ensure cost is not a barrier to quality legal representation. We also handle many cases on a contingency fee basis.' },
          { q: 'Can I change attorneys mid-case?', a: 'Yes, you have the right to change attorneys at any point. However, we recommend discussing any concerns with your current attorney first, as transitions can sometimes cause delays in your case.' },
        ],
      },
      legal: {
        subtitle: 'Legal',
        title: 'Legal Questions',
        items: [
          { q: 'What are my rights if I am arrested?', a: 'If you are arrested, you have the right to remain silent, the right to an attorney, and the right to a phone call. Do not answer questions without an attorney present. Contact our office immediately for emergency legal assistance.' },
          { q: 'How is child custody determined?', a: 'Child custody is determined based on the best interests of the child. Courts consider factors such as the child\'s relationship with each parent, each parent\'s ability to provide care, the child\'s preferences (if old enough), and any history of abuse or neglect.' },
          { q: 'What compensation can I receive for a personal injury?', a: 'Compensation may include medical expenses, lost wages, pain and suffering, emotional distress, loss of enjoyment of life, and in some cases, punitive damages. The exact amount depends on the specifics of your case.' },
          { q: 'How do I start a business legally?', a: 'Starting a business involves choosing a legal structure, registering with the state, obtaining necessary licenses and permits, drafting operating agreements, and ensuring tax compliance. Our business law attorneys can guide you through every step.' },
        ],
      },
      search: {
        placeholder: 'Search questions...',
        noResults: 'No results found',
        clearSearch: 'Clear',
      },
      stillHaveQuestions: {
        title: 'Still Have Questions?',
        description: 'Our team is ready to help. Contact us for a free consultation.',
        contactUs: 'Contact Us for Help',
        callFree: 'Call Free',
      },
      feedback: {
        helpful: 'Helpful',
        notHelpful: 'Not helpful',
        thanksPositive: 'Thank you for your feedback!',
        thanksNegative: 'We\'ll work on improving this answer.',
      },
    },
    // Blog Page
    blogPage: {
      hero: { title: 'Blog & News', breadcrumb: { home: 'Home', current: 'Blog' } },
      featured: 'Featured',
      search: {
        placeholder: 'Search articles...',
        noResults: 'No articles found matching your search.',
        clearSearch: 'Clear',
      },
      recentPosts: 'Recent Posts',
      categories: 'Categories',
      tags: 'Tags',
      workingHours: 'Working Hours',
      posts: [
        {
          title: 'Understanding Your Rights: A Guide to Criminal Defense',
          excerpt: 'Learn about your constitutional rights when facing criminal charges and how an experienced attorney can help protect them.',
          category: 'Criminal Law',
          date: 'January 15, 2026',
          author: 'D.Baraa A. Khaleel',
          readTime: '5 min read',
          content: 'When facing criminal charges, understanding your constitutional rights is the first and most critical step in protecting yourself. The United States Constitution provides several fundamental protections that apply to every person accused of a crime, regardless of the nature or severity of the charges.\n\n## Your Right to Remain Silent\nThe Fifth Amendment protects you from being compelled to be a witness against yourself. This means you have the absolute right to refuse to answer questions from law enforcement. Exercise this right politely but firmly — simply state that you wish to speak with an attorney before answering any questions.\n\n## Your Right to Legal Representation\nThe Sixth Amendment guarantees your right to have an attorney present during any questioning. If you cannot afford an attorney, one will be appointed for you. Having legal representation is not an admission of guilt — it is a smart exercise of your constitutional rights.\n\n## Your Right to Due Process\nThe Fourteenth Amendment ensures that no state can deprive you of life, liberty, or property without due process of law. This means the government must follow fair procedures before taking away your freedom, including proper notice of charges and a fair hearing.\n\n## Protecting Your Rights\nIf you or a loved one is facing criminal charges, it is essential to consult with an experienced criminal defense attorney as soon as possible. The earlier you involve legal counsel, the better protected your rights will be throughout the criminal justice process.',
        },
        {
          title: 'The Impact of Recent Legislation on Business Owners',
          excerpt: 'New regulatory changes are affecting businesses across the country. Here\'s what you need to know to stay compliant.',
          category: 'Business Law',
          date: 'January 10, 2026',
          author: 'David Chen',
          readTime: '7 min read',
          content: 'Recent legislative changes have introduced new compliance requirements that affect businesses of all sizes. Understanding these changes is critical for avoiding penalties and maintaining smooth operations.\n\n## Key Changes in Corporate Compliance\nThe new regulations require businesses to implement more robust compliance programs, including enhanced reporting requirements and stricter oversight of financial transactions. Companies must now maintain detailed records of all transactions above certain thresholds and submit quarterly compliance reports.\n\n## Employment Law Updates\nSignificant changes to employment law include new requirements for workplace safety, updated anti-discrimination provisions, and revised guidelines for independent contractor classification. Employers should review their current policies and procedures to ensure compliance.\n\n## Tax Implications\nThe legislation introduces several changes to the tax code that affect business deductions, depreciation schedules, and international tax obligations. Business owners should work closely with their tax advisors to understand how these changes impact their specific situation.\n\n## Taking Action\nDon\'t wait until you receive a notice of non-compliance. Proactively reviewing your business practices and implementing necessary changes now can save significant time and expense in the future. Contact our business law team for a comprehensive compliance review.',
        },
        {
          title: 'Family Law: Navigating Child Custody Disputes',
          excerpt: 'Child custody can be one of the most emotionally challenging aspects of family law. Learn about the process and your options.',
          category: 'Family Law',
          date: 'January 5, 2026',
          author: 'Sarah Mitchell',
          readTime: '6 min read',
          content: 'Child custody disputes are among the most emotionally challenging legal matters that families face. Understanding the legal framework and process can help you navigate this difficult time more effectively.\n\n## Types of Custody\nCourts distinguish between legal custody (the right to make decisions about the child\'s upbringing) and physical custody (where the child lives). Both types can be awarded solely to one parent or jointly to both parents, depending on what the court determines is in the child\'s best interest.\n\n## The Best Interest Standard\nFamily courts make custody decisions based on the "best interest of the child" standard. Factors considered include the child\'s relationship with each parent, each parent\'s ability to provide a stable environment, the child\'s adjustment to school and community, and any history of domestic violence or substance abuse.\n\n## Modifying Custody Orders\nCustody orders are not set in stone. If circumstances have changed significantly since the original order was issued, you can petition the court for a modification. Common reasons for modification include relocation, changes in work schedule, or concerns about the child\'s safety and well-being.\n\n## Getting Help\nIf you are facing a custody dispute, having an experienced family law attorney on your side can make a significant difference. Our team is here to advocate for your parental rights while keeping your child\'s best interests at heart.',
        },
        {
          title: 'Personal Injury: What to Do After an Accident',
          excerpt: 'Knowing the right steps to take immediately after an accident can significantly impact your ability to recover compensation.',
          category: 'Personal Injury',
          date: 'December 28, 2025',
          author: 'Alex Thomson',
          readTime: '4 min read',
          content: 'The moments and days following an accident are crucial for protecting your health and your legal right to compensation. Here is a step-by-step guide on what to do after being involved in an accident.\n\n## Step 1: Seek Medical Attention\nYour health is the top priority. Even if you believe your injuries are minor, seek medical evaluation immediately. Some injuries, such as whiplash or internal injuries, may not present symptoms right away. Medical records also serve as important evidence for your claim.\n\n## Step 2: Document Everything\nTake photographs of the accident scene, your injuries, and any property damage. Collect contact information from witnesses. Write down your recollection of events as soon as possible while the details are fresh in your mind.\n\n## Step 3: Report the Accident\nFile a police report or incident report as required. Notify your insurance company, but be cautious about giving recorded statements without first consulting an attorney.\n\n## Step 4: Contact an Attorney\nBefore accepting any settlement offer or signing any documents from an insurance company, consult with a personal injury attorney. Insurance companies often try to settle quickly for less than you deserve. An experienced attorney will protect your rights and fight for full and fair compensation.',
        },
      ],
      categoriesList: [
        { name: 'Criminal Law', count: 12 },
        { name: 'Business Law', count: 8 },
        { name: 'Family Law', count: 6 },
        { name: 'Personal Injury', count: 10 },
        { name: 'Immigration', count: 4 },
      ],
      tagsList: ['Criminal', 'Business', 'Family', 'Injury', 'Defense', 'Rights', 'Legal', 'Court', 'Compensation'],
      shareArticle: 'Share this article',
      copyLink: 'Copy Link',
      copied: 'Copied!',
    },
    // Contact Page
    contactPage: {
      hero: { title: 'Contact Us', breadcrumb: { home: 'Home', current: 'Contact Us' } },
      info: {
        phone: { title: 'Phone', number: '07802233000' },
        email: { title: 'Email', address: 'info@yoursite.com' },
        address: { title: 'Address', full: 'بغداد, المنصور, شارع مطعم الساعة' },
      },
      form: {
        title: 'Send Us a Message',
        nameLabel: 'Your Name',
        namePlaceholder: 'Enter your full name',
        emailLabel: 'Your Email',
        emailPlaceholder: 'Enter your email address',
        phoneLabel: 'Your Phone',
        phonePlaceholder: 'Enter your phone number',
        subjectLabel: 'Subject',
        subjectPlaceholder: 'What is this regarding?',
        messageLabel: 'Your Message',
        messagePlaceholder: 'Tell us about your case...',
        send: 'Send Message',
        sending: 'Sending...',
      },
      hours: {
        title: 'Office Hours',
        weekdays: 'Monday to Friday',
        weekdayHours: '9:00 to 16:30',
        saturday: 'Saturday',
        saturdayHours: '9:00 to 15:30',
        sunday: 'Sunday',
        sundayHours: 'Only Emergency Calls',
      },
      emergency: {
        title: 'Emergency Contact',
        description: 'Available 24/7 for urgent legal matters',
        callFree: 'Call Free',
      },
      addressCard: {
        title: 'Our Offices',
        main: 'Main Office',
        mainAddress: 'بغداد, المنصور, شارع مطعم الساعة',
        branch: 'Branch Office',
        branchAddress: 'بغداد, المنصور, شارع مطعم الساعة',
      },
      appointment: {
        title: 'Book an Appointment',
        subtitle: 'Schedule a consultation with one of our attorneys.',
        nameLabel: 'Full Name',
        namePlaceholder: 'Enter your name',
        emailLabel: 'Email Address',
        emailPlaceholder: 'Enter your email',
        phoneLabel: 'Phone Number',
        phonePlaceholder: 'Enter your phone number',
        dateLabel: 'Preferred Date',
        timeLabel: 'Preferred Time',
        areaLabel: 'Practice Area',
        areaPlaceholder: 'Select practice area',
        messageLabel: 'Additional Notes',
        messagePlaceholder: 'Any additional information...',
        submit: 'Book Appointment',
        submitting: 'Booking...',
        times: ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'],
        areas: ['Criminal Defense', 'Personal Injury', 'Family Law', 'Business Law', 'Immigration', 'Real Estate'],
      },
    },
    // Footer
    footer: {
      hereToHelp: 'We\'re Here to Help',
      freeConsultation: 'Free Consultation • Available 24/7',
      newsletter: {
        title: 'Subscribe to Our Newsletter',
        description: 'Stay updated with the latest legal news, insights, and firm updates.',
        placeholder: 'Enter your email',
        subscribe: 'Subscribe',
        go: 'Go',
      },
      workingHours: {
        title: 'Working Hours',
        weekdays: 'Monday to Friday',
        weekdayHours: '9:00 to 16:30',
        saturday: 'Saturday',
        saturdayHours: '9:00 to 15:30',
        sunday: 'Sunday',
        sundayHours: 'Only Emergency Calls',
      },
      contact: {
        title: 'Contact',
        addressLabel: 'Address:',
        address: 'بغداد, المنصور, شارع مطعم الساعة',
        telLabel: 'Tel:',
        phone: '07802233000',
        emailLabel: 'Email:',
        email: 'info@xtralawyer.com',
      },
      quickLinks: {
        title: 'Quick Links',
        about: 'About Us',
        faq: 'FAQ',
        practiceArea: 'Practice Area',
        contact: 'Contact',
      },
      copyright: 'Copyright 2026 D.Baraa A. Khaleel. All Rights Reserved.',
      backToTop: 'Back to Top',
    },
    // Cookie Banner
    cookie: {
      title: 'We Value Your Privacy',
      description: 'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
      acceptAll: 'Accept All',
      decline: 'Decline',
    },
    // Live Chat
    chat: {
      title: 'Live Chat',
      openChat: 'Open chat',
      closeChat: 'Close chat',
      header: 'Legal Support Chat',
      subtitle: 'How can we help you today?',
      placeholder: 'Type your message...',
      send: 'Send',
      offlineTitle: 'We\'re Offline',
      offlineMessage: 'Leave us a message and we\'ll get back to you soon.',
    },
    // Case Evaluation Tab
    caseEvaluation: {
      title: 'Free Case Evaluation',
      nameLabel: 'Name',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      caseLabel: 'Case Type',
      submit: 'Get Evaluation',
      success: 'Thank you! We\'ll review your case and contact you shortly.',
    },
    // Common
    common: {
      readMore: 'Read More',
      learnMore: 'Learn More',
      contactUs: 'Contact Us',
      home: 'Home',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      send: 'Send',
      submit: 'Submit',
      close: 'Close',
      loading: 'Loading...',
      search: 'Search',
      share: 'Share',
      shareThis: 'Share this practice area:',
      copyLink: 'Copy Link',
      copied: 'Copied!',
    },
  },

  ar: {
    // Header
    header: {
      logo: 'د. براء عبدالكريم خليل',
      freeConsultation: 'استشارة مجانية',
      home: 'الرئيسية',
      about: 'من نحن',
      practiceAreas: 'مجالات الممارسة',
      faq: 'الأسئلة الشائعة',
      blog: 'المدونة',
      contact: 'اتصل بنا',
    },
    // Hero
    hero: {
      badge: 'احصل على استشارة مجانية',
      name: 'د. براء عبدالكريم خليل',
      subtitles: [
        'محامي العدالة الجنائية',
        'مستشار قانوني موثوق',
        'مدافعك في المحكمة',
      ],
      descriptions: [
        'مكرس لتقديم تمثيل قانوني استثنائي والقتال من أجل العدالة في كل قضية.',
        'أكثر من 25 عامًا من الخبرة في الدفاع عن العملاء بشغف ونزاهة والتزام لا يتزعزع.',
        'عندما يكون مستقبلك على المحك، تحتاج إلى محامٍ سيقاتل بلا هوادة من أجل حقوقك.',
      ],
      contactUs: 'اتصل بنا',
      callFree: 'اتصل مجاناً',
    },
    // Emergency Banner
    emergency: {
      title: 'خدمة قانونية طارئة على مدار الساعة',
      callFree: 'اتصل مجاناً',
    },
    // Counter Stats
    counter: {
      casesWon: 'قضايا ربحت',
      yearsExperience: 'سنوات خبرة',
      successRate: 'نسبة النجاح',
      expertLawyers: 'محامون خبراء',
    },
    // Practice Areas
    practiceAreas: {
      subtitle: 'مجالات الممارسة',
      title: 'مجالات ممارستنا',
      viewAll: 'عرض جميع الأقسام',
      items: [
        { title: 'استشارات قانونية', desc: 'مشورة خبيرة للمسائل القانونية المعقدة والتخطيط الاستراتيجي.' },
        { title: 'المحاكمات', desc: 'تمثيل عدواني في قاعة المحكمة لحماية مصالحك.' },
        { title: 'الدعاوى القضائية', desc: 'تعامل ماهر مع الدعاوى المدنية من التقديم إلى الحل.' },
        { title: 'قانون الأعمال', desc: 'حلول قانونية شاملة لاحتياجات الشركات والأعمال.' },
        { title: 'الدفاع الجنائي', desc: 'استراتيجيات دفاع قوية لحماية حريتك وحقوقك.' },
        { title: 'النزاعات', desc: 'حل فعال من خلال الوساطة أو التحكيم أو المحاكمة.' },
        { title: 'حقوق النشر', desc: 'حماية وإنفاذ حقوق الملكية الفكرية الخاصة بك.' },
        { title: 'القانون الجنائي', desc: 'مناصرة م dedication في جميع مجالات إجراءات العدالة الجنائية.' },
      ],
      learnMore: 'اعرف المزيد',
    },
    // How It Works
    howItWorks: {
      subtitle: 'كيف تعمل',
      title: '3 خطوات سهلة للحصول على مساعدة قانونية',
      items: [
        { title: 'اطلب عرض سعر', subtitle: 'أرسل لنا طلبك', btnText: 'أرسل الطلب' },
        { title: 'التحقيق', subtitle: 'سنحقق في قضيتك', btnText: 'اعرف المزيد' },
        { title: 'القتال القضائي', subtitle: 'سنقاتل قضيتك في المحكمة', btnText: 'شاهد النتائج' },
      ],
    },
    // Case Types
    cases: {
      subtitle: 'دراسات الحالة',
      title: 'قضايا مثل قضيتك',
      items: [
        { title: 'الاعتداء الزوجي', category: 'قانون الأسرة' },
        { title: 'القيادة تحت تأثير الكحول', category: 'العصيان المدني' },
        { title: 'الجرائم الاجتماعية', category: 'جرائم المخدرات' },
        { title: 'الجرائم الجنسية', category: 'جنائي' },
        { title: 'سرقة المتاجر', category: 'العصيان المدني' },
        { title: 'الاحتيال', category: 'قانون الأعمال' },
        { title: 'غسل الأموال', category: 'قانون الأعمال' },
        { title: 'إساءة معاملة الأطفال', category: 'جنائي' },
      ],
      viewCase: 'عرض القضية',
    },
    // Free Case Evaluation
    freeEvaluation: {
      subtitle: 'تقييم مجاني للقضية',
      title: 'أرسل طلبك واحصل على استشارة مجانية',
      description: 'سنراجع قضيتك ونعود إليك خلال 24 ساعة بتقييم قانوني شامل.',
      submitRequest: 'أرسل طلبك',
    },
    // Attorney Quote
    attorneyQuote: {
      quote: 'العدالة ليست مفهوماً سلبياً — بل تتطلب مناصرين متفانين على استعداد للقتال بلا كلل من أجل حقوق كل فرد، بغض النظر عن الظروف.',
      name: 'د. براء عبدالكريم خليل',
      title: 'شريك أول، محامي العدالة الجنائية',
    },
    // Testimonials
    testimonials: {
      subtitle: 'شهادات العملاء',
      title: 'ماذا يقول عملاؤنا',
      viewAll: 'عرض جميع التقييمات',
      clientReviews: 'تقييمات العملاء',
      reviewsVerified: 'تقييمات موثقة على جوجل',
      onGoogle: 'على تقييمات جوجل',
    },
    // Practice List
    practiceList: {
      title: 'مجالات الممارسة',
      subtitle: 'خبراتنا',
      items: [
        'قانون المنظمات التجارية', 'القانون المدني أو العام', 'قانون الاتصالات',
        'القانون الدستوري', 'قانون الممتلكات الثقافية', 'قانون الاندماج والاستحواذ',
        'قانون الأمريكيين الأصليين', 'دعاوى مسؤولية المنتج', 'قانون العقارات',
        'قانون الفحش', 'قانون الجنسية', 'القانون الإجرائي',
        'قانون حقوق الإنسان الدولي', 'قانون الصحة', 'قانون الهجرة',
        'قانون البيئة', 'القانون الإلكتروني', 'قانون حماية المستهلك',
      ],
    },
    // Immigration Section
    immigration: {
      title: 'قانون الهجرة',
      description: 'يساعد محامو الهجرة لدينا في طلبات التأشيرات والبطاقات الخضراء والجنسية والدفاع عن الترحيل وطلبات اللجوء والالتماسات القائمة على الأسرة. نقدم إرشادات شخصية في كل خطوة من عملية الهجرة.',
      learnMore: 'اعرف المزيد',
    },
    // Verdicts
    verdicts: {
      subtitle: 'نتائجنا',
      title: 'الأحكام والتسويات',
      items: [
        { caseType: 'إصابة شخصية', amount: '2.5 مليون $', description: 'حادث متعدد المركبات أدى إلى إعاقة دائمة. حصلنا على تعويض أقصى عن النفقات الطاسية والأجور المفقودة.', outcome: 'تسوية' },
        { caseType: 'إهمال طبي', amount: '4.8 مليون $', description: 'خطأ جراحي تسبب في مضاعفات شديدة. حققنا أحد أكبر الأحكام في المحافظة للإهمال الطبي.', outcome: 'حكم' },
        { caseType: 'حادث عمل', amount: '1.9 مليون $', description: 'سقوط في موقع بناء بسبب انتهاكات السلامة. استردنا التعويضات الكاملة بما في ذلك الرعاية الطبية المستقبلية.', outcome: 'تسوية' },
        { caseType: 'وفاة خطأ', amount: '6.2 مليون $', description: 'حادث شحن مميت بسبب إهمال السائق. حصلنا على العدالة للعائلة مع تعويضات وفاة خطأ كبيرة.', outcome: 'حكم' },
        { caseType: 'مسؤولية المنتج', amount: '3.1 مليون $', description: 'منتج معيب تسبب في إصابة خطيرة. حملنا الشركة المصنعة المسؤولية بتسوية كبيرة.', outcome: 'تسوية' },
        { caseType: 'نزاع تجاري', amount: '5.5 مليون $', description: 'خرق عقد يهدد بقاء الشركة. استعدنا بنجاح التعويضات وحماية المصالح التجارية.', outcome: 'حكم' },
      ],
      settlement: 'تسوية',
      verdict: 'حكم',
    },
    // Trust Badges
    trustBadges: {
      items: [
        { title: 'مرخص ومؤمن', desc: 'مرخص بالكامل لممارسة القانون مع تأمين شامل للمسؤولية المهنية لحمايتك.' },
        { title: 'حائز على جوائز', desc: 'معترف به من قبل المنظمات القانونية الوطنية للتميز في الدفاع عن العملاء ونتائج المحكمة.' },
        { title: 'متاح على مدار الساعة', desc: 'محامونا متاحون على مدار الساعة لحالات الطوارئ والمسائل القانونية العاجلة.' },
        { title: 'استشارة مجانية', desc: 'ابدأ باستشارة بدون التزام. نراجع قضيتك ونشرح خياراتك بدون تكلفة.' },
      ],
    },
    // How We Can Help
    howWeCanHelp: {
      title: 'كيف يمكننا المساعدة',
      subtitle: 'خدماتنا',
      items: [
        { title: 'دعاوى الإصابة الشخصية', description: 'إذا أصبت بسبب إهمال شخص آخر، سيقاتل محامو الإصابة الشخصية لدينا للحصول على التعويض الذي تستحقه.' },
        { title: 'الدفاع الجنائي', description: 'مواجهة تهم جنائية يمكن أن تكون مرهقة. يقدم محامو الدفاع الجنائي ذوو الخبرة لدينا تمثيلاً عدوانياً لجميع أنواع التهم الجنائية.' },
        { title: 'مسائل قانون الأسرة', description: 'تتطلب المسائل القانونية الأسرية حساسية وخبرة. نتعامل مع الطلاق وحضانة الأطفال والنفقة والتبني وقضايا العنف المنزلي.' },
        { title: 'النزاعات التجارية', description: 'من نزاعات العقود والصراعات الشراكة إلى معارك الملكية الفكرية، يقدم فريق قانون الأعمال لدينا حلولاً قانونية شاملة.' },
        { title: 'قضايا الهجرة', description: 'التنقل في قانون الهجرة يمكن أن يكون معقداً. يساعد محامو الهجرة لدينا في طلبات التأشيرات والبطاقات الخضراء والجنسية والدفاع عن الترحيل والمزيد.' },
      ],
    },
    // Client Logos
    clientLogos: {
      title: 'موثوق من قبل المؤسسات الرائدة',
      items: ['أبيكس القابضة', 'سترلينغ كورب', 'مجموعة الحارس', 'ميريديان تراست', 'باسيفيك فينشرز', 'أطلس كابيتال', 'شركاء القمة', 'فانغارد القانونية', 'بيناكيل للمالية', 'آيرونكلاد'],
    },
    // CTA Section
    cta: {
      title: 'هل تحتاج مساعدة قانونية؟',
      description: 'اتصل بنا اليوم للحصول على استشارة مجانية ودع محامينا ذوي الخبرة يقاتلون من أجل حقوقك.',
      contactUs: 'اتصل بنا الآن',
      callUs: 'اتصل بنا',
    },
    // About Page
    about: {
      hero: { title: 'من نحن', breadcrumb: { home: 'الرئيسية', current: 'من نحن' } },
      vision: {
        subtitle: 'رؤيتنا',
        title: 'رؤيتنا للعدالة',
        description: 'نؤمن أن كل شخص يستحق الوصول إلى تمثيل قانوني عالي الجودة، بغض النظر عن خلفيته أو ظروفه. رؤيتنا هي خلق مجتمع أكثر عدالة حيث يعمل القانون كدرع للضعفاء، وليس سلاحاً للأقوياء.',
        stats: [
          { label: 'رضا العملاء', value: 95 },
          { label: 'نسبة نجاح القضايا', value: 98 },
          { label: 'سنوات الخبرة', value: 25 },
        ],
      },
      quote: {
        text: 'القانون ليس مجرد مجموعة من القواعد — إنه الأساس الذي نبني عليه مجتمعاً عادلاً ومنصفاً.',
        author: 'د. براء عبدالكريم خليل، الشريك المؤسس',
      },
      mission: {
        subtitle: 'مهمتنا',
        title: 'ماذا نمثل',
        description: 'مهمتنا هي تقديم تمثيل قانوني استثنائي يحدث فرقاً حقيقياً في حياة عملائنا. نحن ملتزمون بالتمسك بأعلى معايير الأخلاقيات المهنية مع تحقيق نتائج تفوق التوقعات.',
        services: [
          'إصابة شخصية', 'قانون الأسرة', 'الدفاع الجنائي',
          'قانون الأعمال', 'الهجرة', 'العقارات',
        ],
      },
      clients: {
        subtitle: 'عملاؤنا',
        title: 'موثوق من قبل المؤسسات الرائدة',
        items: ['أبيكس القابضة', 'سترلينغ كورب', 'مجموعة الحارس', 'ميريديان تراست', 'باسيفيك فينشرز', 'أطلس كابيتال'],
      },
      team: {
        subtitle: 'فريقنا',
        title: 'أعضاء الفريق الخبراء',
        members: [
          { name: 'أليكس تومسون', role: 'شريك أول', specialties: 'القانون الجنائي، المحاكمات', bio: 'أليكس لديه أكثر من 20 عاماً من الخبرة في الدفاع الجنائي ومثل بنجاح آلاف العملاء في المحاكم الفيدرالية والولائية.' },
          { name: 'سارة ميتشل', role: 'محامية قانون الأسرة', specialties: 'قانون الأسرة، الوساطة', bio: 'سارة متخصصة في مسائل قانون الأسرة المعقدة، بما في ذلك حالات الطلاق عالية الأصول ونزاعات الحضانة.' },
          { name: 'ديفيد تشن', role: 'مستشار الشركات', specialties: 'قانون الأعمال، الاندماج والاستحواذ', bio: 'ديفيد يستشير الشركات من جميع الأحجام حول الحوكمة المؤسسية والاندماجات والاستحواذ والامتثال التنظيمي.' },
        ],
        viewProfile: 'عرض الملف',
        closeProfile: 'إغلاق الملف',
        education: 'التعليم',
        credentials: 'الشهادات',
        practiceAreasLabel: 'مجالات الممارسة',
        contactInfo: 'معلومات الاتصال',
      },
      legalAdvice: {
        subtitle: 'احصل على مشورة',
        title: 'احصل على مشورتك القانونية',
        items: [
          { title: 'استشارة قانونية', desc: 'حدد موعداً لاستشارة فردية مع محامينا ذوي الخبرة.' },
          { title: 'تقييم القضية', desc: 'احصل على تقييم شامل لقضيتك مع خطوات واضحة تالية.' },
          { title: 'مراجعة المستندات', desc: 'دع فريقنا الخبير يراجع مستنداتك القانونية.' },
          { title: 'التمثيل في المحكمة', desc: 'ثق بمحامينا لتمثيلك بفعالية في المحكمة.' },
          { title: 'تفاوض التسوية', desc: 'دعنا نتفاوض على أفضل تسوية ممكنة لقضيتك.' },
          { title: 'مساعدة الاستئناف', desc: 'احصل على مساعدة في تقديم ومتابعة الاستئنافات القانونية بفعالية.' },
        ],
      },
      freeEvaluation: {
        title: 'تقييم مجاني للقضية',
        description: 'احصل على مشورة قانونية متخصصة بدون تكلفة. سيقوم محامونا بمراجعة قضيتك وتقديم تقييم شامل.',
        contactUs: 'اتصل بنا',
        callFree: 'اتصل مجاناً',
      },
    },
    // Practice Areas Page
    practiceAreasPage: {
      hero: { title: 'مجالات الممارسة', breadcrumb: { home: 'الرئيسية', current: 'مجالات الممارسة' } },
      intro: 'مع أكثر من 25 عاماً من الخبرة، يتخصص محامونا في مجموعة واسعة من مجالات الممارسة القانونية. نقدم تمثيلاً عدوانياً ومتفانياً لحماية حقوقك وتحقيق أفضل النتائج الممكنة.',
      subtitle: 'ماذا نفعل',
      title: 'مجالات ممارستنا',
      viewMore: 'اعرف المزيد',
      whyChoose: {
        subtitle: 'لماذا تختارنا',
        title: 'لماذا تختار شركتنا',
        items: [
          { title: 'فريق ذو خبرة', desc: 'أكثر من 25 عاماً من الخبرة القانونية المشتركة عبر مجالات ممارسة متعددة.' },
          { title: 'نتائج مثبتة', desc: 'نسبة نجاح 98% مع ملايين المستردة لعملائنا.' },
          { title: 'اهتمام شخصي', desc: 'كل قضية تحظى باهتمام مخصص من محامٍ أول.' },
          { title: 'بدون رسوم بدون فوز', desc: 'لا تدفع شيئاً ما لم نفز بقضيتك. استشارة أولية مجانية.' },
        ],
      },
      moreAreas: {
        title: 'مجالات ممارسة إضافية',
        description: 'بالإضافة إلى مجالات ممارستنا الأساسية، نقدم أيضاً خدمات قانونية في المجالات التالية:',
        items: [
          'قانون العمل', 'قانون العقارات', 'القانون الضريبي',
          'قانون الهجرة', 'قانون البيئة', 'الملكية الفكرية',
          'قانون الإفلاس', 'تخطيط التركة', 'الحقوق المدنية',
        ],
      },
      cta: {
        title: 'هل تحتاج مساعدة قانونية؟',
        description: 'حدد موعداً لاستشارة مجانية مع أحد محامينا ذوي الخبرة.',
        button: 'اتصل بنا الآن',
      },
      hours: {
        title: 'ساعات العمل',
        weekdays: 'الاثنين إلى الجمعة',
        weekdayHours: '9:00 إلى 16:30',
        saturday: 'السبت',
        saturdayHours: '9:00 إلى 15:30',
        sunday: 'الأحد',
        sundayHours: 'مكالمات الطوارئ فقط',
      },
      contact: {
        title: 'معلومات الاتصال',
        address: 'بغداد, المنصور, شارع مطعم الساعة',
        phone: '07802233000',
        email: 'info@xtralawyer.com',
      },
    },
    // FAQ Page
    faqPage: {
      hero: { title: 'الأسئلة الشائعة', breadcrumb: { home: 'الرئيسية', current: 'الأسئلة الشائعة' } },
      askForm: {
        title: 'اسألنا سؤالاً',
        subtitle: 'احصل على إجابات لأسئلتك القانونية من محامينا ذوي الخبرة.',
        nameLabel: 'اسمك',
        namePlaceholder: 'أدخل اسمك',
        emailLabel: 'بريدك الإلكتروني',
        emailPlaceholder: 'أدخل بريدك الإلكتروني',
        departmentLabel: 'القسم',
        departmentPlaceholder: 'اختر القسم',
        questionLabel: 'سؤالك',
        questionPlaceholder: 'اكتب سؤالك هنا...',
        submit: 'أرسل السؤال',
        departments: ['عام', 'القانون الجنائي', 'قانون الأسرة', 'قانون الأعمال', 'الهجرة', 'إصابة شخصية'],
      },
      general: {
        subtitle: 'عام',
        title: 'أسئلة عامة',
        items: [
          { q: 'ما هي مجالات القانون التي تتخصص فيها شركتكم؟', a: 'تتخصص شركتنا في مجموعة واسعة من المجالات القانونية بما في ذلك الدفاع الجنائي والإصابة الشخصية وقانون الأسرة وقانون الأعمال والهجرة والدعاوى المدنية.' },
          { q: 'كم تكلف الاستشارة الأولية؟', a: 'نقدم استشارات أولية مجانية لجميع العملاء المحتملين. خلال هذه الاستشارة، سنراجع قضيتك ونناقش خياراتك القانونية ونقدم تقييماً صادقاً لموقفك بدون أي تكلفة.' },
          { q: 'ماذا يجب أن أحضر لاجتماعي الأول؟', a: 'أحضر أي مستندات ذات صلة مثل تقارير الشراسة والسجلات الطبية والعقود والمراسلات وإشارات المحكمة والهوية.' },
          { q: 'كم من الوقت ستستغرق قضيتي للحل؟', a: 'تختلف الجدول الزمني بشكل كبير اعتماداً على تعقيد القضية وجدول المحكمة ورغبة الأطراف في التفاوض.' },
          { q: 'هل تقدمون خطط دفع؟', a: 'نعم، نقدم خطط دفع مرنة ونعمل مع العملاء لضمان أن التكلفة ليست عائقاً أمام التمثيل القانوني عالي الجودة.' },
          { q: 'هل يمكنني تغيير المحامي في منتصف القضية؟', a: 'نعم، لديك الحق في تغيير المحامين في أي وقت. ومع ذلك، نوصي بمناقشة أي مخاوف مع محاميك الحالي أولاً.' },
        ],
      },
      legal: {
        subtitle: 'قانوني',
        title: 'أسئلة قانونية',
        items: [
          { q: 'ما هي حقوقي إذا تم القبض علي؟', a: 'إذا تم القبض عليك، لديك الحق في الصمت والحق في محامٍ والحق في إجراء مكالمة هاتفية. لا تجب على الأسئلة بدون محامٍ. اتصل بمكتبنا فوراً للحصول على مساعدة قانونية طارئة.' },
          { q: 'كيف يتم تحديد حضانة الطفل؟', a: 'يتم تحديد حضانة الطفل بناءً على مصلحة الطفل الفضلى. تنظر المحاكم في عوامل مثل علاقة الطفل مع كل والد وقدرة كل والد على توفير الرعاية.' },
          { q: 'ما التعويض الذي يمكنني الحصول عليه لإصابة شخصية؟', a: 'قد يشمل التعويض النفقات الطاسية والأجور المفقودة والألم والمعاناة والضيق العاطفي. يعتمد المبلغ الدقيق على تفاصيل قضيتك.' },
          { q: 'كيف أبدأ عمل تجاري بشكل قانوني؟', a: 'يتضمن بدء عمل تجاري اختيار هيكل قانوني والتسجيل في الولاية والحصول على التراخيص اللازمة وصياغة اتفاقات التشغيل وضمان الامتثال الضريبي.' },
        ],
      },
      search: {
        placeholder: 'ابحث في الأسئلة...',
        noResults: 'لم يتم العثور على نتائج',
        clearSearch: 'مسح',
      },
      stillHaveQuestions: {
        title: 'لا تزال لديك أسئلة؟',
        description: 'فريقنا مستعد للمساعدة. اتصل بنا للحصول على استشارة مجانية.',
        contactUs: 'اتصل بنا للمساعدة',
        callFree: 'اتصل مجاناً',
      },
      feedback: {
        helpful: 'مفيد',
        notHelpful: 'غير مفيد',
        thanksPositive: 'شكراً لملاحظاتك!',
        thanksNegative: 'سنعمل على تحسين هذه الإجابة.',
      },
    },
    // Blog Page
    blogPage: {
      hero: { title: 'المدونة والأخبار', breadcrumb: { home: 'الرئيسية', current: 'المدونة' } },
      featured: 'مميز',
      search: {
        placeholder: 'ابحث في المقالات...',
        noResults: 'لم يتم العثور على مقالات تطابق بحثك.',
        clearSearch: 'مسح',
      },
      recentPosts: 'المقالات الأخيرة',
      categories: 'التصنيفات',
      tags: 'الوسوم',
      workingHours: 'ساعات العمل',
      posts: [
        {
          title: 'فهم حقوقك: دليل الدفاع الجنائي',
          excerpt: 'تعرف على حقوقك الدستورية عند مواجهة تهم جنائية وكيف يمكن للمحامي ذوي الخبرة المساعدة في حمايتها.',
          category: 'القانون الجنائي',
          date: '15 يناير 2026',
          author: 'د. براء عبدالكريم خليل',
          readTime: '5 دقائق قراءة',
          content: 'عند مواجهة تهم جنائية، فهم حقوقك الدستورية هو الخطوة الأولى والأكثر أهمية في حماية نفسك. يوفر دستور الولايات المتحدة عدة حمايات أساسية تنطبق على كل شخص متهم بجريمة.\n\n## حقك في الصمت\nيحميك التعديل الخامس من الإجبار على أن تكون شاهداً ضد نفسك. مارس هذا الحق بأدب ولكن بحزم — ببساطة اذكر أنك ترغب في التحدث مع محامٍ قبل الإجابة على أي أسئلة.\n\n## حقك في التمثيل القانوني\nيضمن التعديل السادس حقك في وجود محامٍ أثناء أي استجواب. إذا لم تستطع تحمل تكاليف محامٍ، سيتم تعيين واحد لك.\n\n## حماية حقوقك\nإذا كنت أو أحد أحبائك يواجه تهم جنائية، من الضروري استشارة محامي دفاع جنائي ذي خبرة في أقرب وقت ممكن.',
        },
        {
          title: 'تأثير التشريعات الأخيرة على أصحاب الأعمال',
          excerpt: 'التغييرات التنظيمية الجديدة تؤثر على الشركات في جميع أنحاء البلاد. إليك ما تحتاج لمعرفته.',
          category: 'قانون الأعمال',
          date: '10 يناير 2026',
          author: 'ديفيد تشن',
          readTime: '7 دقائق قراءة',
          content: 'أدخلت التغييرات التشريعية الأخيرة متطلبات امتثال جديدة تؤثر على الشركات من جميع الأحجام. فهم هذه التغييرات أمر بالغ الأهمية لتجنب العقوبات والحفاظ على عمليات سلسة.\n\n## تغييرات رئيسية في الامتثال المؤسسي\nتتطلب اللوائح الجديدة من الشركات تنفيذ برامج امتثال أكثر قوة.\n\n## تحديثات قانون العمل\nتشمل التغييرات الكبيرة في قانون العمل متطلبات جديدة لسلامة مكان العمل.\n\n## اتخاذ إجراء\nلا تنتظر حتى تتلقى إشعار عدم الامتثال. المراجعة الاستباقية لممارساتك التجارية الآن يمكن أن توفر وقتاً ونفقات كبيرة.',
        },
        {
          title: 'قانون الأسرة: التنقل في نزاعات حضانة الأطفال',
          excerpt: 'حضانة الأطفال يمكن أن تكون واحدة من أكثر جوانب قانون الأسرة تحدياً عاطفياً.',
          category: 'قانون الأسرة',
          date: '5 يناير 2026',
          author: 'سارة ميتشل',
          readTime: '6 دقائق قراءة',
          content: 'نزاعات حضانة الأطفال هي من أصعب المسائل القانونية عاطفياً التي تواجهها الأسر. فهم الإطار القانوني والعملية يمكن أن يساعدك على التنقل في هذا الوقت الصعب بشكل أكثر فعالية.\n\n## أنواع الحضانة\nتميز المحاكم بين الحضانة القانونية والحضانة الجسدية.\n\n## معيار المصلحة الفضلى\nتتخذ محاكم الأسرة قرارات الحضانة بناءً على معيار "مصلحة الطفل الفضلى".\n\n## الحصول على المساعدة\nإذا كنت تواجه نزاع حضانة، وجود محامي قانون أسرة ذي خبرة بجانبك يمكن أن يحدث فرقاً كبيراً.',
        },
        {
          title: 'إصابة شخصية: ماذا تفعل بعد حادث',
          excerpt: 'معرفة الخطوات الصحيحة فوراً بعد الحادث يمكن أن تؤثر بشكل كبير على قدرتك على استرداد التعويض.',
          category: 'إصابة شخصية',
          date: '28 ديسمبر 2025',
          author: 'أليكس تومسون',
          readTime: '4 دقائق قراءة',
          content: 'اللحظات والأيام التي تلي الحادث حاسمة لحماية صحتك وحقك القانوني في التعويض.\n\n## الخطوة 1: اطلب الرعاية الطبية\nصحتك هي الأولوية القصوى. حتى لو تعتقد أن إصاباتك طفيفة، اطلب تقييماً طبياً فوراً.\n\n## الخطوة 2: وثق كل شيء\nالتقط صوراً لموقع الحادث وإصاباتك وأي أضرار في الممتلكات.\n\n## الخطوة 3: اتصل بمحامٍ\nقبل قبول أي عرض تسوية أو توقيع أي مستندات من شركة التأمين، استشر محامي إصابة شخصية.',
        },
      ],
      categoriesList: [
        { name: 'القانون الجنائي', count: 12 },
        { name: 'قانون الأعمال', count: 8 },
        { name: 'قانون الأسرة', count: 6 },
        { name: 'إصابة شخصية', count: 10 },
        { name: 'الهجرة', count: 4 },
      ],
      tagsList: ['جنائي', 'أعمال', 'أسرة', 'إصابة', 'دفاع', 'حقوق', 'قانوني', 'محكمة', 'تعويض'],
      shareArticle: 'شارك هذا المقال',
      copyLink: 'نسخ الرابط',
      copied: 'تم النسخ!',
    },
    // Contact Page
    contactPage: {
      hero: { title: 'اتصل بنا', breadcrumb: { home: 'الرئيسية', current: 'اتصل بنا' } },
      info: {
        phone: { title: 'الهاتف', number: '07802233000' },
        email: { title: 'البريد الإلكتروني', address: 'info@yoursite.com' },
        address: { title: 'العنوان', full: 'بغداد, المنصور, شارع مطعم الساعة' },
      },
      form: {
        title: 'أرسل لنا رسالة',
        nameLabel: 'اسمك',
        namePlaceholder: 'أدخل اسمك الكامل',
        emailLabel: 'بريدك الإلكتروني',
        emailPlaceholder: 'أدخل بريدك الإلكتروني',
        phoneLabel: 'رقم هاتفك',
        phonePlaceholder: 'أدخل رقم هاتفك',
        subjectLabel: 'الموضوع',
        subjectPlaceholder: 'بخصوص ماذا؟',
        messageLabel: 'رسالتك',
        messagePlaceholder: 'أخبرنا عن قضيتك...',
        send: 'أرسل الرسالة',
        sending: 'جاري الإرسال...',
      },
      hours: {
        title: 'ساعات العمل',
        weekdays: 'الاثنين إلى الجمعة',
        weekdayHours: '9:00 إلى 16:30',
        saturday: 'السبت',
        saturdayHours: '9:00 إلى 15:30',
        sunday: 'الأحد',
        sundayHours: 'مكالمات الطوارئ فقط',
      },
      emergency: {
        title: 'اتصال الطوارئ',
        description: 'متاح على مدار الساعة للمسائل القانونية العاجلة',
        callFree: 'اتصل مجاناً',
      },
      addressCard: {
        title: 'مكاتبنا',
        main: 'المكتب الرئيسي',
        mainAddress: 'بغداد, المنصور, شارع مطعم الساعة',
        branch: 'المكتب الفرعي',
        branchAddress: 'بغداد, المنصور, شارع مطعم الساعة',
      },
      appointment: {
        title: 'احجز موعداً',
        subtitle: 'حدد موعداً لاستشارة مع أحد محامينا.',
        nameLabel: 'الاسم الكامل',
        namePlaceholder: 'أدخل اسمك',
        emailLabel: 'البريد الإلكتروني',
        emailPlaceholder: 'أدخل بريدك الإلكتروني',
        phoneLabel: 'رقم الهاتف',
        phonePlaceholder: 'أدخل رقم هاتفك',
        dateLabel: 'التاريخ المفضل',
        timeLabel: 'الوقت المفضل',
        areaLabel: 'مجال الممارسة',
        areaPlaceholder: 'اختر مجال الممارسة',
        messageLabel: 'ملاحظات إضافية',
        messagePlaceholder: 'أي معلومات إضافية...',
        submit: 'احجز الموعد',
        submitting: 'جاري الحجز...',
        times: ['9:00 صباحاً', '10:00 صباحاً', '11:00 صباحاً', '1:00 مساءً', '2:00 مساءً', '3:00 مساءً', '4:00 مساءً'],
        areas: ['الدفاع الجنائي', 'إصابة شخصية', 'قانون الأسرة', 'قانون الأعمال', 'الهجرة', 'العقارات'],
      },
    },
    // Footer
    footer: {
      hereToHelp: 'نحن هنا للمساعدة',
      freeConsultation: 'استشارة مجانية • متاح على مدار الساعة',
      newsletter: {
        title: 'اشترك في نشرتنا الإخبارية',
        description: 'ابق على اطلاع بأحدث الأخبار القانونية والرؤى وتحديثات الشركة.',
        placeholder: 'أدخل بريدك الإلكتروني',
        subscribe: 'اشترك',
        go: 'اذهب',
      },
      workingHours: {
        title: 'ساعات العمل',
        weekdays: 'الاثنين إلى الجمعة',
        weekdayHours: '9:00 إلى 16:30',
        saturday: 'السبت',
        saturdayHours: '9:00 إلى 15:30',
        sunday: 'الأحد',
        sundayHours: 'مكالمات الطوارئ فقط',
      },
      contact: {
        title: 'اتصل',
        addressLabel: 'العنوان:',
        address: 'بغداد, المنصور, شارع مطعم الساعة',
        telLabel: 'هاتف:',
        phone: '07802233000',
        emailLabel: 'بريد إلكتروني:',
        email: 'info@xtralawyer.com',
      },
      quickLinks: {
        title: 'روابط سريعة',
        about: 'من نحن',
        faq: 'الأسئلة الشائعة',
        practiceArea: 'مجال الممارسة',
        contact: 'اتصل بنا',
      },
      copyright: 'حقوق النشر 2026 موضوع القانون. جميع الحقوق محفوظة.',
      backToTop: 'العودة للأعلى',
    },
    // Cookie Banner
    cookie: {
      title: 'نحن نقدر خصوصيتك',
      description: 'نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح لديك وتقديم محتوى مخصص وتحليل حركة المرور لدينا. بالنقر على "قبول الكل"، فإنك توافق على استخدامنا لملفات تعريف الارتباط.',
      acceptAll: 'قبول الكل',
      decline: 'رفض',
    },
    // Live Chat
    chat: {
      title: 'دردشة مباشرة',
      openChat: 'فتح الدردشة',
      closeChat: 'إغلاق الدردشة',
      header: 'دردشة الدعم القانوني',
      subtitle: 'كيف يمكننا مساعدتك اليوم؟',
      placeholder: 'اكتب رسالتك...',
      send: 'أرسل',
      offlineTitle: 'نحن غير متصلين',
      offlineMessage: 'اترك لنا رسالة وسنعود إليك قريباً.',
    },
    // Case Evaluation Tab
    caseEvaluation: {
      title: 'تقييم مجاني للقضية',
      nameLabel: 'الاسم',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      caseLabel: 'نوع القضية',
      submit: 'احصل على التقييم',
      success: 'شكراً لك! سنراجع قضيتك ونتواصل معك قريباً.',
    },
    // Common
    common: {
      readMore: 'اقرأ المزيد',
      learnMore: 'اعرف المزيد',
      contactUs: 'اتصل بنا',
      home: 'الرئيسية',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      address: 'العنوان',
      send: 'أرسل',
      submit: 'أرسل',
      close: 'إغلاق',
      loading: 'جاري التحميل...',
      search: 'بحث',
      share: 'شارك',
      shareThis: 'شارك هذا المجال:',
      copyLink: 'نسخ الرابط',
      copied: 'تم النسخ!',
    },
  },
} as const;

type WidenTranslationValues<T> =
  T extends string ? string :
  T extends readonly (infer U)[] ? readonly WidenTranslationValues<U>[] :
  T extends object ? { [K in keyof T]: WidenTranslationValues<T[K]> } :
  T;

export type TranslationKeys = WidenTranslationValues<typeof translations.en>;
