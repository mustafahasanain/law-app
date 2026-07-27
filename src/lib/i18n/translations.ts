export type Language = "en" | "ar";

export const LANGUAGES: {
  code: Language;
  label: string;
  nativeLabel: string;
  dir: "ltr" | "rtl";
}[] = [
  { code: "en", label: "English", nativeLabel: "English", dir: "ltr" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية", dir: "rtl" },
];

export const translations = {
  en: {
    // Header
    header: {
      logo: "Dr. Baraa Abdulhakim Khalil",
      freeConsultation: "Legal Consultation",
      home: "Home",
      about: "About Us",
      practiceAreas: "Practice Areas",
      faq: "FAQ",
      blog: "Blog",
      contact: "Contact",
    },
    // Hero
    hero: {
      badge: "Get a Legal Consultation",
      name: "Dr. Baraa Abdulhakim Khalil",
      subtitles: [
        "Criminal Justice Attorney",
        "Trusted Legal Advisor",
        "Your Advocate in Court",
      ],
      descriptions: [
        "Committed to providing dependable legal representation that protects your rights in every case.",
        "More than 12 years of experience serving clients with care, integrity, and professional dedication.",
        "When you need legal support, we stand beside you with clarity and experience to safeguard your rights.",
      ],
      contactUs: "Contact Us",
      callFree: "Get Legal Advice",
    },
    // Emergency Banner
    emergency: {
      title: "Emergency Legal Service Around the Clock",
      callFree: "Get Legal Advice",
    },
    // Counter Stats
    counter: {
      casesWon: "Cases Won",
      yearsExperience: "Years Experience",
      successRate: "Success Rate",
      expertLawyers: "Expert Lawyers",
    },
    // Practice Areas
    practiceAreas: {
      subtitle: "Practice Areas",
      title: "Our Practice Areas",
      viewAll: "View All Sections",
      items: [
        {
          title: "Legal Consultations",
          desc: "Accurate legal advice for a wide range of matters and disputes.",
        },
        {
          title: "Foreign Company Registration",
          desc: "Professional handling of foreign company registration procedures.",
        },
        {
          title: "Litigation",
          desc: "Legal representation before all courts and judicial authorities.",
        },
        {
          title: "Labor and Social Security Law",
          desc: "Legal solutions for labor, employment, and social security matters.",
        },
        {
          title: "Foreign and Local Organization Registration",
          desc: "Efficient establishment and registration of organizations.",
        },
        {
          title: "Disputes",
          desc: "Effective resolution of legal and commercial disputes.",
        },
        {
          title: "Investment Affairs",
          desc: "Completion of transactions and investment approvals at the National Investment Commission.",
        },
        {
          title: "Commercial Contract Drafting",
          desc: "Precise drafting and review of commercial contracts.",
        },
        {
          title: "Legal Partnerships",
          desc: "Local and international legal partnerships.",
        },
      ],
      learnMore: "Learn More",
    },
    // How It Works
    howItWorks: {
      subtitle: "How It Works",
      title: "3 Easy Steps to Get Legal Help",
      items: [
        {
          title: "Request a Consultation",
          subtitle: "Send us the details of your case",
          btnText: "Send Request",
        },
        {
          title: "Book an Appointment",
          subtitle: "We will review your case",
          btnText: "Learn More",
        },
        {
          title: "Receive a Fee Quote",
          subtitle: "We will represent your case in court",
          btnText: "See Results",
        },
      ],
    },
    // Case Types
    cases: {
      subtitle: "Case Studies",
      title: "Case Like Yours",
      items: [
        { title: "Money Laundering", category: "Criminal Law" },
        { title: "Property Disputes", category: "Civil Law" },
        { title: "Criminal Lawsuit", category: "Criminal Cases" },
        { title: "Integrity Cases", category: "Integrity Law" },
        {
          title: "Legal Representation of Companies Before Courts",
          category: "Corporate Law",
        },
      ],
      viewCase: "View Case",
    },
    // Free Case Evaluation
    freeEvaluation: {
      subtitle: "Get Legal Advice",
      title: "Submit Your Request and Get a Consultation",
      description:
        "We will review your case and get back to you within 24 hours with a comprehensive legal assessment.",
      submitRequest: "Submit Your Request",
    },
    // Attorney Quote
    attorneyQuote: {
      quote:
        "Justice is not a passive concept — it requires dedicated advocates who are willing to fight tirelessly for the rights of every individual, regardless of the circumstances.",
      name: "Dr. Baraa Abdulhakim Khalil",
      title: "Senior Partner, Criminal Justice Attorney",
    },
    // Testimonials
    testimonials: {
      subtitle: "Testimonials",
      title: "What Our Clients Say",
      viewAll: "View All Reviews",
      clientReviews: "Client Reviews",
      reviewsVerified: "Reviews verified on Google",
      onGoogle: "on Google Reviews",
    },
    // Practice List
    practiceList: {
      title: "Practice Areas",
      subtitle: "Our Expertise",
      items: [
        "Commercial Organizations Law",
        "Civil and Common Law",
        "Telecommunications Law",
        "Constitutional law",
        "Cultural Property Law",
        "Mergers and Acquisitions Law",
        "Native American Law",
        "Product Liability Litigation",
        "Real Estate Law",
        "Obscenity Law",
        "Nationality Law",
        "Procedural Law",
        "International Human Rights Law",
        "Health Law",
        "Immigration Law",
        "Environmental Law",
        "Cyber Law",
        "Consumer Protection Law",
      ],
    },
    // Immigration Section
    immigration: {
      title: "Immigration Law",
      description:
        "Our immigration attorneys assist with visa applications, green cards, citizenship, deportation defense, asylum claims, and family-based petitions. We provide personalized guidance through every step of the immigration process.",
      learnMore: "Learn More",
    },
    // Verdicts
    verdicts: {
      subtitle: "Our Results",
      title: "Verdicts & Settlements",
      items: [
        {
          caseType: "Personal Injury",
          amount: "$2.5M",
          description:
            "Multi-vehicle collision resulting in permanent disability. Secured maximum compensation for medical expenses and lost wages.",
          outcome: "Settlement",
        },
        {
          caseType: "Medical Malpractice",
          amount: "$4.8M",
          description:
            "Surgical error causing severe complications. Achieved one of the largest verdicts in the county for medical negligence.",
          outcome: "Verdict",
        },
        {
          caseType: "Workplace Accident",
          amount: "$1.9M",
          description:
            "Construction site fall due to safety violations. Recovered full damages including future medical care and rehabilitation.",
          outcome: "Settlement",
        },
        {
          caseType: "Wrongful Death",
          amount: "$6.2M",
          description:
            "Fatal trucking accident caused by driver negligence. Obtained justice for the family with substantial wrongful death damages.",
          outcome: "Verdict",
        },
        {
          caseType: "Product Liability",
          amount: "$3.1M",
          description:
            "Defective product causing serious injury. Held manufacturer accountable with a significant product liability settlement.",
          outcome: "Settlement",
        },
        {
          caseType: "Business Dispute",
          amount: "$5.5M",
          description:
            "Breach of contract threatening company survival. Successfully recovered damages and protected business interests.",
          outcome: "Verdict",
        },
      ],
      settlement: "Settlement",
      verdict: "Verdict",
    },
    // Trust Badges
    trustBadges: {
      title: "Why Trust Us",
      subtitle: "Our Credentials",
      items: [
        {
          title: "Licensed and Insured",
          desc: "Fully licensed to practice law with comprehensive professional liability insurance for your protection.",
        },
        {
          title: "Award-Winning",
          desc: "Recognized by national legal organizations for excellence in client advocacy and courtroom results.",
        },
        {
          title: "24/7 Availability",
          desc: "Our attorneys are available around the clock for emergencies and urgent legal matters.",
        },
        {
          title: "Legal Consultation",
          desc: "Start with a no-obligation consultation. We review your case and explain your options at no cost.",
        },
      ],
    },
    // How We Can Help
    howWeCanHelp: {
      title: "Related Questions",
      subtitle: "Legal Answers",
      items: [
        {
          title: "When should I request legal advice?",
          description:
            "Request legal advice before signing contracts, answering official notices, filing a lawsuit, giving statements, or making decisions that may affect your rights or business obligations.",
        },
        {
          title: "Can the office represent me before court?",
          description:
            "Yes. The office handles litigation, lawsuits, criminal defense, company disputes, property matters, and representation before courts and official authorities.",
        },
        {
          title: "Do companies need ongoing legal support?",
          description:
            "Ongoing legal support helps companies review contracts, manage compliance, handle disputes early, prepare official documents, and reduce risks before problems reach court.",
        },
        {
          title: "What documents help in a property or contract dispute?",
          description:
            "Useful documents include contracts, title deeds, receipts, correspondence, notices, court papers, company records, photographs, and any proof showing each party's rights and obligations.",
        },
        {
          title: "Can disputes be resolved without a lawsuit?",
          description:
            "Many disputes can be handled through negotiation, formal legal notices, settlement discussions, or mediation. If these options are not effective, litigation may be recommended.",
        },
      ],
    },
    // Client Logos
    clientLogos: {
      title: "Trusted By Leading Organizations",
      items: [
        "Apex Holdings",
        "Sterling Corp",
        "Guardian Group",
        "Meridian Trust",
        "Pacific Ventures",
        "Atlas Capital",
        "Summit Partners",
        "Vanguard Legal",
        "Pinnacle Finance",
        "Ironclad Inc",
      ],
    },
    // CTA Section
    cta: {
      title: "Need Legal Assistance?",
      description: "Contact us today for a legal consultation.",
      contactUs: "Contact Us Now",
      callUs: "Call Us",
    },
    // About Page
    about: {
      hero: {
        title: "About Us",
        breadcrumb: { home: "Home", current: "About Us" },
      },
      vision: {
        subtitle: "Our Vision",
        title: "Our Vision for Justice",
        description:
          "We believe that every person deserves access to quality legal representation, regardless of their background or circumstances. Our vision is to create a more just society where the law serves as a shield for the vulnerable, not a weapon for the powerful.",
        stats: [
          { label: "Client Satisfaction", value: 95 },
          { label: "Case Success Rate", value: 98 },
          { label: "Years of Experience", value: 25 },
        ],
      },
      quote: {
        text: "The law is not merely a set of rules — it is the foundation upon which we build a fair and equitable society.",
        author: "Dr. Baraa Abdulhakim Khalil, Founding Partner",
      },
      mission: {
        subtitle: "Our Mission",
        title: "What We Stand For",
        description:
          "Our mission is to provide exceptional legal representation that makes a real difference in the lives of our clients. We are committed to upholding the highest standards of professional ethics while delivering results that exceed expectations.",
        services: [
          "Personal Injury",
          "Family Law",
          "Criminal Defense",
          "Business Law",
          "Immigration",
          "Real Estate",
        ],
      },
      history: {
        subtitle: "Milestones",
        title: "Our History",
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
              "Recognized by the National Law Journal as one of the top 50 law firms in the country, a prestigious honor reflecting our commitment to excellence.",
          },
          {
            year: "2023",
            title: "25th Anniversary",
            description:
              "Celebrated 25 years of legal excellence, having served over 10,000 clients and recovered more than $100M in verdicts and settlements.",
          },
        ],
      },
      clients: {
        subtitle: "Our Clients",
        title: "Trusted by Leading Institutions",
        items: [
          "Apex Holdings",
          "Sterling Corp",
          "Guardian Group",
          "Meridian Trust",
          "Pacific Ventures",
          "Atlas Capital",
        ],
      },
      team: {
        subtitle: "Our Team",
        title: "Expert Team Members",
        members: [
          {
            name: "Alex Thomson",
            role: "Senior Partner",
            specialties: "Criminal Law, Litigation",
            bio: "Alex has over 20 years of experience in criminal defense and has successfully represented thousands of clients in state and federal courts.",
          },
          {
            name: "Sarah Mitchell",
            role: "Family Law Attorney",
            specialties: "Family Law, Mediation",
            bio: "Sarah specializes in complex family law matters, including high-asset divorces and contentious custody disputes.",
          },
          {
            name: "David Chen",
            role: "Corporate Counsel",
            specialties: "Business Law, M&A",
            bio: "David advises businesses of all sizes on corporate governance, mergers and acquisitions, and regulatory compliance.",
          },
        ],
        viewProfile: "View Profile",
        closeProfile: "Close Profile",
        education: "Education",
        credentials: "Credentials",
        practiceAreasLabel: "Practice Areas",
        contactInfo: "Contact Info",
      },
      legalAdvice: {
        subtitle: "Get Advice",
        title: "Get Your Legal Consultation",
        items: [
          {
            title: "Legal Consultation",
            desc: "Schedule a one-on-one consultation with our experienced attorneys.",
          },
          {
            title: "Case Evaluation",
            desc: "Get a thorough evaluation of your case with clear next steps.",
          },
          {
            title: "Document Review",
            desc: "Have your legal documents reviewed by our expert team.",
          },
          {
            title: "Court Representation",
            desc: "Trust our attorneys to represent you effectively in court.",
          },
          {
            title: "Settlement Negotiation",
            desc: "Let us negotiate the best possible settlement for your case.",
          },
          {
            title: "Appeal Assistance",
            desc: "Get help with filing and pursuing legal appeals effectively.",
          },
        ],
      },
      freeEvaluation: {
        title: "Get Legal Advice",
        description:
          "Get expert legal advice at no cost. Our attorneys will review your case and provide a comprehensive assessment.",
        contactUs: "Contact Us",
        callFree: "Get Legal Advice",
      },
    },
    // Practice Areas Page
    practiceAreasPage: {
      hero: {
        title: "Practice Areas",
        breadcrumb: { home: "Home", current: "Practice Areas" },
      },
      intro:
        "With more than 25 years of experience, our attorneys handle a broad range of legal practice areas. We provide dedicated and assertive representation to protect your rights and pursue the best possible outcome.",
      subtitle: "What We Do",
      title: "Our Practice Areas",
      viewMore: "Learn More",
      whyChoose: {
        subtitle: "Why Choose Us",
        title: "Why Choose Our Firm",
        items: [
          {
            title: "Experienced Team",
            desc: "Over 25 years of combined legal experience across multiple practice areas.",
          },
          {
            title: "Proven Results",
            desc: "A 98% success rate and millions recovered for our clients.",
          },
          {
            title: "Personal Attention",
            desc: "Every case receives dedicated attention from a senior attorney.",
          },
          {
            title: "No Fee Unless We Win",
            desc: "You pay nothing unless we win your case. Your initial consultation is free.",
          },
        ],
      },
      moreAreas: {
        title: "More Practice Areas",
        description:
          "In addition to our core practice areas, we also provide legal services in the following fields:",
        items: [
          "Employment Law",
          "Real Estate Law",
          "Tax Law",
          "Immigration Law",
          "Environmental Law",
          "Intellectual Property",
          "Bankruptcy Law",
          "Estate Planning",
          "Civil Rights",
        ],
      },
      cta: {
        title: "Need Legal Help?",
        description:
          "Schedule a Legal Consultation with one of our experienced attorneys.",
        button: "Contact Us Now",
      },
      hours: {
        title: "Working Hours",
        weekdays: "Monday to Friday",
        weekdayHours: "9:00 to 16:30",
        saturday: "Saturday",
        saturdayHours: "9:00 to 15:30",
        sunday: "Sunday",
        sundayHours: "Only Emergency Calls",
      },
      contact: {
        title: "Contact Info",
        address: "Baghdad, Al-Mansour, Clock Restaurant Street",
        phone: "07802233000",
        email: "info@baraa-alsamraie.com",
      },
    },
    // FAQ Page
    faqPage: {
      hero: {
        title: "Frequently Asked Questions",
        breadcrumb: { home: "Home", current: "FAQ" },
      },
      askForm: {
        title: "Ask Us a Question",
        subtitle:
          "Get answers to your legal questions from our experienced attorneys.",
        nameLabel: "Your Name",
        namePlaceholder: "Enter your name",
        emailLabel: "Your Email",
        emailPlaceholder: "Enter your email",
        departmentLabel: "Section",
        departmentPlaceholder: "Select a section",
        questionLabel: "Your Question",
        questionPlaceholder: "Type your question here...",
        submit: "Submit Question",
        departments: [
          "General",
          "Legal Consultation",
          "Litigation",
          "Company Registration",
          "Contracts",
          "Criminal Cases",
          "Property Disputes",
        ],
      },
      general: {
        subtitle: "General",
        title: "General Questions",
        items: [
          {
            q: "What legal services does Dr. Baraa A. Khaleel provide?",
            a: "The office provides legal consultations, litigation, representation for companies and individuals before the courts, commercial law services, criminal defense, dispute resolution, intellectual property matters, company registration, contract review, and property disputes.",
          },
          {
            q: "How can I book an appointment?",
            a: "You can book an appointment through the appointment form on the home page or contact the office by phone. Please include your name, contact information, preferred date and time, and a short description of the legal matter.",
          },
          {
            q: "What should I bring to my first meeting?",
            a: "Bring your identification and any documents related to the matter, such as court papers, contracts, company documents, correspondence, property records, official notices, police reports, or prior legal decisions.",
          },
          {
            q: "Can the office review my documents before starting a case?",
            a: "Yes. Document review is an important first step. The lawyer can examine contracts, notices, court papers, company files, and evidence to explain your legal position and recommend the next procedure.",
          },
          {
            q: "Do you represent companies and organizations?",
            a: "Yes. The office assists companies and organizations with registration, legal compliance, contracts, disputes, court representation, investment licensing matters, and ongoing legal advisory work.",
          },
          {
            q: "Where is the office located and when is it open?",
            a: "The main office is in Baghdad, Al-Mansour. Regular working hours are Monday to Friday from 9:00 to 16:30 and Saturday from 9:00 to 15:30. Emergency calls are available on Sunday.",
          },
        ],
      },
      legal: {
        subtitle: "Legal",
        title: "Legal Questions",
        items: [
          {
            q: "What should I do if I receive a court notice or lawsuit?",
            a: "Do not ignore the notice. Contact a lawyer quickly, keep the original papers, write down the date you received them, and avoid signing or submitting any response before the documents are reviewed.",
          },
          {
            q: "Can the office represent me in criminal complaints or investigations?",
            a: "Yes. The office handles criminal defense and criminal law matters, including legal advice before giving statements, review of investigation papers, preparation of a defense strategy, and representation before the competent authorities and the courts.",
          },
          {
            q: "How can a property dispute be handled?",
            a: "Property disputes usually begin with reviewing title deeds, contracts, notices, maps, payment records, and possession documents. The lawyer can then advise whether negotiation, official complaints, or court action is the proper path.",
          },
          {
            q: "Can you draft or review commercial contracts?",
            a: "Yes. The office reviews and drafts commercial contracts, partnership agreements, service agreements, settlement documents, and related legal correspondence to reduce risk and clarify obligations before signing.",
          },
          {
            q: "Do you help with company or NGO registration?",
            a: "Yes. The office assists with local and foreign company registration, organization registration, required paperwork, legal procedures, and follow-up with the relevant official authorities.",
          },
          {
            q: "What is the first step in a dispute between partners or businesses?",
            a: "The first step is to review the agreement, correspondence, financial records, and evidence of each party's obligations. After that, the lawyer can recommend negotiation, formal notice, mediation, or litigation.",
          },
        ],
      },
      search: {
        placeholder: "Search questions...",
        noResults: "No results found",
        clearSearch: "Clear",
      },
      stillHaveQuestions: {
        title: "Still Have Questions?",
        description:
          "Our team is ready to help. Contact us for a consultation.",
        contactUs: "Contact Us for Help",
        callFree: "Get Legal Advice",
      },
      feedback: {
        helpful: "Helpful",
        notHelpful: "Not helpful",
        thanksPositive: "Thank you for your feedback!",
        thanksNegative: "We'll work on improving this answer.",
      },
    },
    // Blog Page
    blogPage: {
      hero: {
        title: "Blog and News",
        breadcrumb: { home: "Home", current: "Blog" },
      },
      featured: "Featured",
      search: {
        placeholder: "Search articles...",
        noResults: "No articles found matching your search.",
        clearSearch: "Clear",
      },
      recentPosts: "Recent Posts",
      categories: "Categories",
      tags: "Tags",
      workingHours: "Working Hours",
      posts: [
        {
          title: "Understanding Your Rights: A Guide to Criminal Defense",
          excerpt:
            "Learn about your constitutional rights when facing criminal charges and how an experienced attorney can help protect them.",
          category: "Criminal Law",
          date: "January 15, 2026",
          author: "Dr. Baraa Abdulhakim Khalil",
          readTime: "5 min read",
          content:
            "When facing criminal charges, understanding your constitutional rights is the first and most important step in protecting yourself. The United States Constitution provides several core safeguards that apply to every person accused of a crime.\n\n## Your Right to Remain Silent\nThe Fifth Amendment protects you from being compelled to testify against yourself. Exercise this right politely but firmly by stating that you want to speak with an attorney before answering any questions.\n\n## Your Right to Legal Representation\nThe Sixth Amendment guarantees your right to have a lawyer present during questioning. If you cannot afford one, counsel will be appointed for you.\n\n## Protecting Your Rights\nIf you or someone close to you is facing criminal charges, speak with an experienced criminal defense attorney as early as possible.",
        },
        {
          title: "The Impact of Recent Legislation on Business Owners",
          excerpt:
            "New regulatory changes are affecting businesses across the country. Here is what you need to know.",
          category: "Business Law",
          date: "January 10, 2026",
          author: "David Chen",
          readTime: "7 min read",
          content:
            "Recent legislative changes have introduced new compliance requirements that affect businesses of every size. Understanding these changes is essential to avoid penalties and maintain smooth operations.\n\n## Key Compliance Changes\nThe new regulations require companies to implement stronger compliance programs.\n\n## Employment Law Updates\nMajor labor law changes include new workplace safety requirements.\n\n## Take Action\nDo not wait for a notice of non-compliance. A proactive review of your business practices now can save significant time and expense later.",
        },
        {
          title: "Family Law: Navigating Child Custody Disputes",
          excerpt:
            "Child custody can be one of the most emotionally challenging aspects of family law.",
          category: "Family Law",
          date: "January 5, 2026",
          author: "Sarah Mitchell",
          readTime: "6 min read",
          content:
            'Child custody disputes are among the most emotionally difficult legal matters families face. Understanding the legal framework and the process can help you navigate this period more effectively.\n\n## Types of Custody\nCourts distinguish between legal custody and physical custody.\n\n## The Best Interest Standard\nFamily courts make custody decisions based on the "best interests of the child."\n\n## Getting Help\nIf you are facing a custody dispute, having an experienced family law attorney by your side can make a meaningful difference.',
        },
        {
          title: "Personal Injury: What to Do After an Accident",
          excerpt:
            "Knowing the right steps to take immediately after an accident can significantly affect your ability to recover compensation.",
          category: "Personal Injury",
          date: "December 28, 2025",
          author: "Alex Thomson",
          readTime: "4 min read",
          content:
            "The moments and days after an accident are critical to protecting both your health and your legal right to compensation.\n\n## Step 1: Seek Medical Care\nYour health comes first. Even if you think your injuries are minor, get medical attention immediately.\n\n## Step 2: Document Everything\nTake photographs of the accident scene, your injuries, and any property damage.\n\n## Step 3: Contact a Lawyer\nBefore accepting any settlement offer or signing documents from an insurance company, consult a personal injury attorney.",
        },
      ],
      categoriesList: [
        { name: "Criminal Law", count: 12 },
        { name: "Business Law", count: 8 },
        { name: "Family Law", count: 6 },
        { name: "Personal Injury", count: 10 },
        { name: "Immigration", count: 4 },
      ],
      tagsList: [
        "Criminal",
        "Business",
        "Family",
        "Injury",
        "Defense",
        "Rights",
        "Legal",
        "Court",
        "Compensation",
      ],
      shareArticle: "Share this article",
      copyLink: "Copy Link",
      copied: "Copied!",
    },
    // Contact Page
    contactPage: {
      hero: {
        title: "Contact Us",
        breadcrumb: { home: "Home", current: "Contact Us" },
      },
      info: {
        phone: { title: "Phone", number: "07802233000" },
        email: { title: "Email", address: "info@baraa-alsamraie.com" },
        address: {
          title: "Address",
          full: "Baghdad, Al-Mansour, Clock Restaurant Street",
        },
      },
      form: {
        title: "Send Us a Message",
        nameLabel: "Your Name",
        namePlaceholder: "Enter your full name",
        emailLabel: "Your Email",
        emailPlaceholder: "Enter your email address",
        phoneLabel: "Your Phone",
        phonePlaceholder: "Enter your phone number",
        subjectLabel: "Subject",
        subjectPlaceholder: "What is this regarding?",
        messageLabel: "Your Message",
        messagePlaceholder: "Tell us about your case...",
        send: "Send Message",
        sending: "Sending...",
      },
      hours: {
        title: "Office Hours",
        weekdays: "Monday to Friday",
        weekdayHours: "9:00 to 16:30",
        saturday: "Saturday",
        saturdayHours: "9:00 to 15:30",
        sunday: "Sunday",
        sundayHours: "Only Emergency Calls",
      },
      emergency: {
        title: "Emergency Contact",
        description: "Available 24/7 for urgent legal matters",
        callFree: "Get Legal Advice",
      },
      addressCard: {
        title: "Our Offices",
        main: "Main Office",
        mainAddress: "Baghdad, Al-Mansour, Clock Restaurant Street",
        branch: "Branch Office",
        branchAddress: "Baghdad, Al-Mansour, Clock Restaurant Street",
      },
      appointment: {
        title: "Book an Appointment",
        subtitle: "Schedule a consultation with one of our attorneys.",
        nameLabel: "Full Name",
        namePlaceholder: "Enter your name",
        emailLabel: "Email Address",
        emailPlaceholder: "Enter your email",
        phoneLabel: "Phone Number",
        phonePlaceholder: "Enter your phone number",
        dateLabel: "Preferred Date",
        timeLabel: "Preferred Time",
        areaLabel: "Practice Area",
        areaPlaceholder: "Select practice area",
        messageLabel: "Additional Notes",
        messagePlaceholder: "Any additional information...",
        submit: "Book Appointment",
        submitting: "Booking...",
        times: [
          "9:00 AM",
          "10:00 AM",
          "11:00 AM",
          "1:00 PM",
          "2:00 PM",
          "3:00 PM",
          "4:00 PM",
        ],
        areas: [
          "Criminal Defense",
          "Personal Injury",
          "Family Law",
          "Business Law",
          "Immigration",
          "Real Estate",
        ],
      },
    },
    // Footer
    footer: {
      hereToHelp: "We Are Here to Help",
      freeConsultation: "Legal Consultation • Available 24/7",
      newsletter: {
        title: "Subscribe to Our Newsletter",
        description:
          "Stay updated with the latest legal news, insights, and firm updates.",
        placeholder: "Enter your email",
        subscribe: "Subscribe",
        go: "Go",
      },
      workingHours: {
        title: "Working Hours",
        weekdays: "Monday to Friday",
        weekdayHours: "9:00 to 16:30",
        saturday: "Saturday",
        saturdayHours: "9:00 to 15:30",
        sunday: "Sunday",
        sundayHours: "Only Emergency Calls",
      },
      contact: {
        title: "Contact",
        addressLabel: "Address:",
        address: "Baghdad, Al-Mansour, Clock Restaurant Street",
        telLabel: "Tel:",
        phone: "07802233000",
        emailLabel: "Email:",
        email: "info@baraa-alsamraie.com",
      },
      quickLinks: {
        title: "Quick Links",
        about: "About Us",
        faq: "FAQ",
        practiceArea: "Practice Areas",
        contact: "Contact",
      },
      copyright: "© 2026 E2NEXT. All rights reserved.",
      backToTop: "Back to Top",
    },
    // Cookie Banner
    cookie: {
      title: "We Value Your Privacy",
      description:
        'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
      acceptAll: "Accept All",
      decline: "Decline",
    },
    // Live Chat
    chat: {
      title: "Live Chat",
      openChat: "Open chat",
      closeChat: "Close chat",
      header: "Legal Support Chat",
      subtitle: "How can we help you today?",
      placeholder: "Type your message...",
      send: "Send",
      offlineTitle: "We're Offline",
      offlineMessage: "Leave us a message and we'll get back to you soon.",
    },
    // Case Evaluation Tab
    caseEvaluation: {
      title: "Free Case Evaluation",
      nameLabel: "Name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      caseLabel: "Case Type",
      submit: "Get Evaluation",
      success: "Thank you! We'll review your case and contact you shortly.",
    },
    // Common
    common: {
      readMore: "Read More",
      learnMore: "Learn More",
      contactUs: "Contact Us",
      home: "Home",
      phone: "Phone",
      email: "Email",
      address: "Address",
      send: "Send",
      submit: "Submit",
      close: "Close",
      loading: "Loading...",
      search: "Search",
      share: "Share",
      shareThis: "Share this practice area:",
      copyLink: "Copy Link",
      copied: "Copied!",
    },
  },

  ar: {
    // Header
    header: {
      logo: "د. براء عبدالحكيم خليل",
      freeConsultation: "استشارة قانونية",
      home: "الرئيسية",
      about: "من نحن",
      practiceAreas: "مجالات الممارسة",
      faq: "الأسئلة الشائعة",
      blog: "المدونة",
      contact: "اتصل بنا",
    },
    // Hero
    hero: {
      badge: "احصل على استشارة قانونية",
      name: "د. براء عبدالحكيم خليل",
      subtitles: [
        "محامي العدالة الجنائية",
        "مستشار قانوني موثوق",
        "مدافعك في المحكمة",
      ],
      descriptions: [
        "ملتزم بتقديم تمثيل قانوني موثوق يحفظ حقوقك في كل قضية.",
        "أكثر من 12 عامًا من الخبرة في خدمة العملاء باهتمام ونزاهة والتزام مهني.",
        "عندما تحتاج إلى دعم قانوني، نكون إلى جانبك بخبرة ووضوح لحماية حقوقك.",
      ],
      contactUs: "اتصل بنا",
      callFree: "احصل عل استشارة قانونية",
    },
    // Emergency Banner
    emergency: {
      title: "خدمة قانونية طارئة على مدار الساعة",
      callFree: "احصل عل استشارة قانونية",
    },
    // Counter Stats
    counter: {
      casesWon: "قضايا ربحت",
      yearsExperience: "سنوات خبرة",
      successRate: "نسبة النجاح",
      expertLawyers: "محامون خبراء",
    },
    // Practice Areas
    practiceAreas: {
      subtitle: "مجالات الممارسة",
      title: "مجالات ممارستنا",
      viewAll: "عرض جميع الأقسام",
      items: [
        {
          title: "استشارات قانونية",
          desc: "استشارات قانونية دقيقة لمختلف القضايا.",
        },
        {
          title: "تسجيل الشركات الأجنبية",
          desc: "إجراءات تسجيل الشركات الأجنبية باحترافية.",
        },
        {
          title: "الدعاوى القضائية",
          desc: "تمثيل قانوني أمام جميع المحاكم.",
        },
        {
          title: "قانون العمل والضمان الاجتماعي",
          desc: "حلول قانونية لقضايا العمل والضمان.",
        },
        {
          title: "تسجيل المنظمات الأجنبية والمحلية",
          desc: "تأسيس وتسجيل المنظمات بكفاءة عالية.",
        },
        {
          title: "النزاعات",
          desc: "حل النزاعات القانونية والتجارية بفعالية.",
        },
        {
          title: "شؤون الاستثمار",
          desc: "انجار المعاملات والموافقات الاستثمارية في الهيئة الوطنية للاستثمار.",
        },
        {
          title: "صياغة العقود التجارية",
          desc: "صياغة ومراجعة العقود التجارية بدقة.",
        },
        {
          title: "شراكات قانونية",
          desc: "شراكة قانونية ودولية",
        },
      ],
      learnMore: "اعرف المزيد",
    },
    // How It Works
    howItWorks: {
      subtitle: "كيف تعمل",
      title: "3 خطوات سهلة للحصول على مساعدة قانونية",
      items: [
        {
          title: "طلب استشارة",
          subtitle: "أرسل تفاصيل قضيتك",
          btnText: "أرسل الطلب",
        },
        {
          title: "حجز موعد",
          subtitle: "سنحقق في قضيتك",
          btnText: "اعرف المزيد",
        },
        {
          title: "عرض السعر",
          subtitle: "احصل على عرض يناسب قضيتك",
          btnText: "شاهد النتائج",
        },
      ],
    },
    // Case Types
    cases: {
      subtitle: "دراسات الحالة",
      title: "قضايا مثل قضيتك",
      items: [
        { title: "غسيل الأموال", category: "قانون جنائي" },
        { title: "نزاعات الملكية", category: "القانون المدني" },
        { title: "دعوى جنائية", category: "قضايا جنائية" },
        { title: "قضايا النزاهة", category: "قانون النزاهة" },
        {
          title: "التمثيل القانوني للشركات أمام المحاكم",
          category: "قانون الشركات",
        },
      ],
      viewCase: "عرض القضية",
    },
    // Free Case Evaluation
    freeEvaluation: {
      subtitle: "احصل على استشارة قانونية ",
      title: "أرسل طلبك واحصل على استشارة ",
      description: "سنراجع قضيتك ونعود إليك خلال 24 ساعة بتقييم قانوني شامل.",
      submitRequest: "أرسل طلبك",
    },
    // Attorney Quote
    attorneyQuote: {
      quote:
        "العدالة ليست مفهوماً سلبياً — بل تتطلب مناصرين متفانين على استعداد للقتال بلا كلل من أجل حقوق كل فرد، بغض النظر عن الظروف.",
      name: "د. براء عبدالحكيم خليل",
      title: "شريك أول، محامي العدالة الجنائية",
    },
    // Testimonials
    testimonials: {
      subtitle: "شهادات العملاء",
      title: "ماذا يقول عملاؤنا",
      viewAll: "عرض جميع التقييمات",
      clientReviews: "تقييمات العملاء",
      reviewsVerified: "تقييمات موثقة على جوجل",
      onGoogle: "على تقييمات جوجل",
    },
    // Practice List
    practiceList: {
      title: "مجالات الممارسة",
      subtitle: "خبراتنا",
      items: [
        "قانون المنظمات التجارية",
        "القانون المدني أو العام",
        "قانون الاتصالات",
        "القانون الدستوري",
        "قانون الممتلكات الثقافية",
        "قانون الاندماج والاستحواذ",
        "قانون الأمريكيين الأصليين",
        "دعاوى مسؤولية المنتج",
        "قانون العقارات",
        "قانون الفحش",
        "قانون الجنسية",
        "القانون الإجرائي",
        "قانون حقوق الإنسان الدولي",
        "قانون الصحة",
        "قانون الهجرة",
        "قانون البيئة",
        "القانون الإلكتروني",
        "قانون حماية المستهلك",
      ],
    },
    // Immigration Section
    immigration: {
      title: "قانون الهجرة",
      description:
        "يساعد محامو الهجرة لدينا في طلبات التأشيرات والبطاقات الخضراء والجنسية والدفاع عن الترحيل وطلبات اللجوء والالتماسات القائمة على الأسرة. نقدم إرشادات شخصية في كل خطوة من عملية الهجرة.",
      learnMore: "اعرف المزيد",
    },
    // Verdicts
    verdicts: {
      subtitle: "نتائجنا",
      title: "الأحكام والتسويات",
      items: [
        {
          caseType: "إصابة شخصية",
          amount: "2.5 مليون $",
          description:
            "حادث متعدد المركبات أدى إلى إعاقة دائمة. حصلنا على تعويض أقصى عن النفقات الطاسية والأجور المفقودة.",
          outcome: "تسوية",
        },
        {
          caseType: "إهمال طبي",
          amount: "4.8 مليون $",
          description:
            "خطأ جراحي تسبب في مضاعفات شديدة. حققنا أحد أكبر الأحكام في المحافظة للإهمال الطبي.",
          outcome: "حكم",
        },
        {
          caseType: "حادث عمل",
          amount: "1.9 مليون $",
          description:
            "سقوط في موقع بناء بسبب انتهاكات السلامة. استردنا التعويضات الكاملة بما في ذلك الرعاية الطبية المستقبلية.",
          outcome: "تسوية",
        },
        {
          caseType: "وفاة خطأ",
          amount: "6.2 مليون $",
          description:
            "حادث شحن مميت بسبب إهمال السائق. حصلنا على العدالة للعائلة مع تعويضات وفاة خطأ كبيرة.",
          outcome: "حكم",
        },
        {
          caseType: "مسؤولية المنتج",
          amount: "3.1 مليون $",
          description:
            "منتج معيب تسبب في إصابة خطيرة. حملنا الشركة المصنعة المسؤولية بتسوية كبيرة.",
          outcome: "تسوية",
        },
        {
          caseType: "نزاع تجاري",
          amount: "5.5 مليون $",
          description:
            "خرق عقد يهدد بقاء الشركة. استعدنا بنجاح التعويضات وحماية المصالح التجارية.",
          outcome: "حكم",
        },
      ],
      settlement: "تسوية",
      verdict: "حكم",
    },
    // Trust Badges
    trustBadges: {
      title: "لماذا تثق بنا",
      subtitle: "مؤهلاتنا",
      items: [
        {
          title: "مرخص ومؤمن",
          desc: "مرخص بالكامل لممارسة القانون مع تأمين شامل للمسؤولية المهنية لحمايتك.",
        },
        {
          title: "حائز على جوائز",
          desc: "معترف به من قبل المنظمات القانونية الوطنية للتميز في الدفاع عن العملاء ونتائج المحكمة.",
        },
        {
          title: "متاح على مدار الساعة",
          desc: "محامونا متاحون على مدار الساعة لحالات الطوارئ والمسائل القانونية العاجلة.",
        },
        {
          title: "استشارة قانونية",
          desc: "ابدأ باستشارة بدون التزام. نراجع قضيتك ونشرح خياراتك بدون تكلفة.",
        },
      ],
    },
    // How We Can Help
    howWeCanHelp: {
      title: "أسئلة ذات صلة",
      subtitle: "إجابات قانونية",
      items: [
        {
          title: "متى أحتاج إلى استشارة قانونية؟",
          description:
            "تحتاج إلى استشارة قانونية قبل توقيع العقود، أو الرد على التبليغات الرسمية، أو إقامة دعوى، أو الإدلاء بأقوال، أو اتخاذ قرار قد يؤثر في حقوقك أو التزاماتك التجارية.",
        },
        {
          title: "هل يمكن للمكتب تمثيلي أمام المحكمة؟",
          description:
            "نعم. يتولى المكتب الدعاوى القضائية، والقضايا الجنائية، ونزاعات الشركات، والقضايا العقارية، وتمثيل الموكلين أمام المحاكم والجهات الرسمية المختصة.",
        },
        {
          title: "هل تحتاج الشركات إلى دعم قانوني مستمر؟",
          description:
            "الدعم القانوني المستمر يساعد الشركات على مراجعة العقود، وإدارة الامتثال، ومعالجة النزاعات مبكراً، وتجهيز المستندات الرسمية، وتقليل المخاطر قبل وصولها إلى المحكمة.",
        },
        {
          title: "ما المستندات المهمة في نزاع عقاري أو تعاقدي؟",
          description:
            "تشمل المستندات المهمة العقود، وسندات الملكية، والوصولات، والمراسلات، والتبليغات، وأوراق المحكمة، وملفات الشركات، والصور، وأي دليل يوضح حقوق والتزامات الأطراف.",
        },
        {
          title: "هل يمكن حل النزاع دون دعوى قضائية؟",
          description:
            "يمكن حل كثير من النزاعات من خلال التفاوض، أو الإنذارات القانونية، أو التسوية، أو الوساطة. وإذا لم تكن هذه الخيارات مناسبة، فقد يكون التقاضي هو الإجراء الأفضل.",
        },
      ],
    },
    // Client Logos
    clientLogos: {
      title: "موثوق من قبل المؤسسات الرائدة",
      items: [
        "أبيكس القابضة",
        "سترلينغ كورب",
        "مجموعة الحارس",
        "ميريديان تراست",
        "باسيفيك فينشرز",
        "أطلس كابيتال",
        "شركاء القمة",
        "فانغارد القانونية",
        "بيناكيل للمالية",
        "آيرونكلاد",
      ],
    },
    // CTA Section
    cta: {
      title: "هل تحتاج مساعدة قانونية؟",
      description: "اتصل بنا اليوم للحصول على استشارة قانونية.",
      contactUs: "اتصل بنا الآن",
      callUs: "اتصل بنا",
    },
    // About Page
    about: {
      hero: {
        title: "من نحن",
        breadcrumb: { home: "الرئيسية", current: "من نحن" },
      },
      vision: {
        subtitle: "رؤيتنا",
        title: "رؤيتنا للعدالة",
        description:
          "نؤمن أن كل شخص يستحق الوصول إلى تمثيل قانوني عالي الجودة، بغض النظر عن خلفيته أو ظروفه. رؤيتنا هي خلق مجتمع أكثر عدالة حيث يعمل القانون كدرع للضعفاء، وليس سلاحاً للأقوياء.",
        stats: [
          { label: "رضا العملاء", value: 95 },
          { label: "نسبة نجاح القضايا", value: 98 },
          { label: "سنوات الخبرة", value: 25 },
        ],
      },
      quote: {
        text: "القانون ليس مجرد مجموعة من القواعد — إنه الأساس الذي نبني عليه مجتمعاً عادلاً ومنصفاً.",
        author: "د. براء عبدالحكيم خليل، الشريك المؤسس",
      },
      mission: {
        subtitle: "مهمتنا",
        title: "ماذا نمثل",
        description:
          "مهمتنا هي تقديم تمثيل قانوني استثنائي يحدث فرقاً حقيقياً في حياة عملائنا. نحن ملتزمون بالتمسك بأعلى معايير الأخلاقيات المهنية مع تحقيق نتائج تفوق التوقعات.",
        services: [
          "إصابة شخصية",
          "قانون الأسرة",
          "الدفاع الجنائي",
          "قانون الأعمال",
          "الهجرة",
          "العقارات",
        ],
      },
      clients: {
        subtitle: "عملاؤنا",
        title: "موثوق من قبل المؤسسات الرائدة",
        items: [
          "أبيكس القابضة",
          "سترلينغ كورب",
          "مجموعة الحارس",
          "ميريديان تراست",
          "باسيفيك فينشرز",
          "أطلس كابيتال",
        ],
      },
      team: {
        subtitle: "فريقنا",
        title: "أعضاء الفريق الخبراء",
        members: [
          {
            name: "أليكس تومسون",
            role: "شريك أول",
            specialties: "القانون الجنائي، المحاكمات",
            bio: "أليكس لديه أكثر من 20 عاماً من الخبرة في الدفاع الجنائي ومثل بنجاح آلاف العملاء في المحاكم الفيدرالية والولائية.",
          },
          {
            name: "سارة ميتشل",
            role: "محامية قانون الأسرة",
            specialties: "قانون الأسرة، الوساطة",
            bio: "سارة متخصصة في مسائل قانون الأسرة المعقدة، بما في ذلك حالات الطلاق عالية الأصول ونزاعات الحضانة.",
          },
          {
            name: "ديفيد تشن",
            role: "مستشار الشركات",
            specialties: "قانون الأعمال، الاندماج والاستحواذ",
            bio: "ديفيد يستشير الشركات من جميع الأحجام حول الحوكمة المؤسسية والاندماجات والاستحواذ والامتثال التنظيمي.",
          },
        ],
        viewProfile: "عرض الملف",
        closeProfile: "إغلاق الملف",
        education: "التعليم",
        credentials: "الشهادات",
        practiceAreasLabel: "مجالات الممارسة",
        contactInfo: "معلومات الاتصال",
      },
      legalAdvice: {
        subtitle: "احصل على مشورة",
        title: "احصل على مشورتك القانونية",
        items: [
          {
            title: "استشارة قانونية",
            desc: "حدد موعداً لاستشارة فردية مع محامينا ذوي الخبرة.",
          },
          {
            title: "تقييم القضية",
            desc: "احصل على تقييم شامل لقضيتك مع خطوات واضحة تالية.",
          },
          {
            title: "مراجعة المستندات",
            desc: "دع فريقنا الخبير يراجع مستنداتك القانونية.",
          },
          {
            title: "التمثيل في المحكمة",
            desc: "ثق بمحامينا لتمثيلك بفعالية في المحكمة.",
          },
          {
            title: "تفاوض التسوية",
            desc: "دعنا نتفاوض على أفضل تسوية ممكنة لقضيتك.",
          },
          {
            title: "مساعدة الاستئناف",
            desc: "احصل على مساعدة في تقديم ومتابعة الاستئنافات القانونية بفعالية.",
          },
        ],
      },
      freeEvaluation: {
        title: "احصل على استشارة قانونية ",
        description:
          "احصل على مشورة قانونية متخصصة بدون تكلفة. سيقوم محامونا بمراجعة قضيتك وتقديم تقييم شامل.",
        contactUs: "اتصل بنا",
        callFree: "احصل عل استشارة قانونية",
      },
    },
    // Practice Areas Page
    practiceAreasPage: {
      hero: {
        title: "مجالات الممارسة",
        breadcrumb: { home: "الرئيسية", current: "مجالات الممارسة" },
      },
      intro:
        "مع أكثر من 25 عاماً من الخبرة، يتخصص محامونا في مجموعة واسعة من مجالات الممارسة القانونية. نقدم تمثيلاً عدوانياً ومتفانياً لحماية حقوقك وتحقيق أفضل النتائج الممكنة.",
      subtitle: "ماذا نفعل",
      title: "مجالات ممارستنا",
      viewMore: "اعرف المزيد",
      whyChoose: {
        subtitle: "لماذا تختارنا",
        title: "لماذا تختار شركتنا",
        items: [
          {
            title: "فريق ذو خبرة",
            desc: "أكثر من 25 عاماً من الخبرة القانونية المشتركة عبر مجالات ممارسة متعددة.",
          },
          {
            title: "نتائج مثبتة",
            desc: "نسبة نجاح 98% مع ملايين المستردة لعملائنا.",
          },
          {
            title: "اهتمام شخصي",
            desc: "كل قضية تحظى باهتمام مخصص من محامٍ أول.",
          },
          {
            title: "بدون رسوم بدون فوز",
            desc: "لا تدفع شيئاً ما لم نفز بقضيتك. استشارة أولية مجانية.",
          },
        ],
      },
      moreAreas: {
        title: "مجالات ممارسة إضافية",
        description:
          "بالإضافة إلى مجالات ممارستنا الأساسية، نقدم أيضاً خدمات قانونية في المجالات التالية:",
        items: [
          "قانون العمل",
          "قانون العقارات",
          "القانون الضريبي",
          "قانون الهجرة",
          "قانون البيئة",
          "الملكية الفكرية",
          "قانون الإفلاس",
          "تخطيط التركة",
          "الحقوق المدنية",
        ],
      },
      cta: {
        title: "هل تحتاج مساعدة قانونية؟",
        description: "حدد موعداً لاستشارة قانونية مع أحد محامينا ذوي الخبرة.",
        button: "اتصل بنا الآن",
      },
      hours: {
        title: "ساعات العمل",
        weekdays: "الاثنين إلى الجمعة",
        weekdayHours: "9:00 إلى 16:30",
        saturday: "السبت",
        saturdayHours: "9:00 إلى 15:30",
        sunday: "الأحد",
        sundayHours: "مكالمات الطوارئ فقط",
      },
      contact: {
        title: "معلومات الاتصال",
        address: "بغداد, المنصور, شارع مطعم الساعة",
        phone: "07802233000",
        email: "info@baraa-alsamraie.com",
      },
    },
    // FAQ Page
    faqPage: {
      hero: {
        title: "الأسئلة الشائعة",
        breadcrumb: { home: "الرئيسية", current: "الأسئلة الشائعة" },
      },
      askForm: {
        title: "اسألنا سؤالاً",
        subtitle: "احصل على إجابات لأسئلتك القانونية من محامينا ذوي الخبرة.",
        nameLabel: "اسمك",
        namePlaceholder: "أدخل اسمك",
        emailLabel: "بريدك الإلكتروني",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        departmentLabel: "القسم",
        departmentPlaceholder: "اختر القسم",
        questionLabel: "سؤالك",
        questionPlaceholder: "اكتب سؤالك هنا...",
        submit: "أرسل السؤال",
        departments: [
          "عام",
          "استشارة قانونية",
          "الدعاوى القضائية",
          "تسجيل الشركات",
          "العقود",
          "القضايا الجنائية",
          "النزاعات العقارية",
        ],
      },
      general: {
        subtitle: "عام",
        title: "أسئلة عامة",
        items: [
          {
            q: "ما هي الخدمات القانونية التي يقدمها مكتب الدكتور براء عبد الحكيم خليل؟",
            a: "يقدم المكتب الاستشارات القانونية، والدعاوى القضائية، وتمثيل الشركات والأفراد أمام المحاكم، وقضايا القانون التجاري، والدفاع الجنائي، وتسوية النزاعات، وحقوق الملكية الفكرية، وتسجيل الشركات، ومراجعة العقود، والنزاعات العقارية.",
          },
          {
            q: "كيف يمكنني حجز موعد مع المحامي؟",
            a: "يمكنك حجز موعد من خلال نموذج المواعيد في الصفحة الرئيسية أو التواصل مع المكتب هاتفياً. يرجى ذكر الاسم ومعلومات الاتصال والوقت المناسب وشرح مختصر للموضوع القانوني.",
          },
          {
            q: "ماذا يجب أن أحضر لاجتماعي الأول؟",
            a: "يفضل إحضار الهوية وأي مستندات مرتبطة بالموضوع، مثل أوراق المحكمة، العقود، مستندات الشركة، المراسلات، قيود العقار، التبليغات الرسمية، محاضر الشرطة، أو القرارات السابقة.",
          },
          {
            q: "هل يمكن مراجعة المستندات قبل البدء بالقضية؟",
            a: "نعم. مراجعة المستندات خطوة أساسية قبل اتخاذ أي إجراء. يمكن للمحامي فحص العقود، والتبليغات، وأوراق الدعوى، وملفات الشركات، والأدلة لتوضيح الموقف القانوني واقتراح الإجراء المناسب.",
          },
          {
            q: "هل يمثل المكتب الشركات والمنظمات؟",
            a: "نعم. يساعد المكتب الشركات والمنظمات في التسجيل، والامتثال القانوني، والعقود، والنزاعات، والتمثيل أمام المحاكم، وإجراءات إجازات الاستثمار، والاستشارات القانونية المستمرة.",
          },
          {
            q: "أين يقع المكتب وما هي أوقات العمل؟",
            a: "يقع المكتب الرئيسي في بغداد، المنصور. أوقات العمل من الاثنين إلى الجمعة من 9:00 إلى 16:30، ويوم السبت من 9:00 إلى 15:30. أما يوم الأحد فهو مخصص للاتصالات الطارئة.",
          },
        ],
      },
      legal: {
        subtitle: "قانوني",
        title: "أسئلة قانونية",
        items: [
          {
            q: "ماذا أفعل إذا وصلتني دعوى أو تبليغ من المحكمة؟",
            a: "لا تهمل التبليغ. تواصل مع محامٍ بسرعة، واحتفظ بالأوراق الأصلية، وسجل تاريخ الاستلام، ولا توقع أو تقدم أي جواب قبل مراجعة المستندات قانونياً.",
          },
          {
            q: "هل يتولى المكتب القضايا الجنائية والتحقيقات؟",
            a: "نعم. يتعامل المكتب مع قضايا الدفاع الجنائي والقانون الجنائي، بما في ذلك المشورة قبل الإدلاء بالأقوال، ومراجعة أوراق التحقيق، وإعداد خطة الدفاع، والتمثيل أمام الجهات المختصة والمحاكم.",
          },
          {
            q: "كيف يتم التعامل مع النزاعات العقارية؟",
            a: "تبدأ النزاعات العقارية عادة بمراجعة سندات الملكية، والعقود، والتبليغات، والخرائط، وسجلات الدفع، ووثائق الحيازة. بعد ذلك يحدد المحامي هل الأنسب التفاوض أو الشكوى الرسمية أو إقامة الدعوى.",
          },
          {
            q: "هل يمكن صياغة أو مراجعة العقود التجارية؟",
            a: "نعم. يقوم المكتب بمراجعة وصياغة العقود التجارية، واتفاقيات الشراكة، وعقود الخدمات، ومحاضر التسوية، والمراسلات القانونية المرتبطة بها لتقليل المخاطر وتوضيح الالتزامات قبل التوقيع.",
          },
          {
            q: "هل يساعد المكتب في تسجيل الشركات أو المنظمات؟",
            a: "نعم. يساعد المكتب في تسجيل الشركات المحلية والأجنبية، وتسجيل المنظمات، وتجهيز المتطلبات القانونية، ومتابعة الإجراءات لدى الجهات الرسمية المختصة.",
          },
          {
            q: "ما هي الخطوة الأولى في نزاع بين شركاء أو شركات؟",
            a: "الخطوة الأولى هي مراجعة الاتفاق، والمراسلات، والسجلات المالية، والأدلة التي تثبت التزامات كل طرف. بعد ذلك يمكن للمحامي اقتراح التفاوض، أو الإنذار الرسمي، أو الوساطة، أو التقاضي.",
          },
        ],
      },
      search: {
        placeholder: "ابحث في الأسئلة...",
        noResults: "لم يتم العثور على نتائج",
        clearSearch: "مسح",
      },
      stillHaveQuestions: {
        title: "لا تزال لديك أسئلة؟",
        description: "فريقنا مستعد للمساعدة. اتصل بنا للحصول على استشارة.",
        contactUs: "اتصل بنا للمساعدة",
        callFree: "احصل عل استشارة قانونية",
      },
      feedback: {
        helpful: "مفيد",
        notHelpful: "غير مفيد",
        thanksPositive: "شكراً لملاحظاتك!",
        thanksNegative: "سنعمل على تحسين هذه الإجابة.",
      },
    },
    // Blog Page
    blogPage: {
      hero: {
        title: "المدونة والأخبار",
        breadcrumb: { home: "الرئيسية", current: "المدونة" },
      },
      featured: "مميز",
      search: {
        placeholder: "ابحث في المقالات...",
        noResults: "لم يتم العثور على مقالات تطابق بحثك.",
        clearSearch: "مسح",
      },
      recentPosts: "المقالات الأخيرة",
      categories: "التصنيفات",
      tags: "الوسوم",
      workingHours: "ساعات العمل",
      posts: [
        {
          title: "فهم حقوقك: دليل الدفاع الجنائي",
          excerpt:
            "تعرف على حقوقك الدستورية عند مواجهة تهم جنائية وكيف يمكن للمحامي ذوي الخبرة المساعدة في حمايتها.",
          category: "القانون الجنائي",
          date: "15 يناير 2026",
          author: "د. براء عبدالحكيم خليل",
          readTime: "5 دقائق قراءة",
          content:
            "عند مواجهة تهم جنائية، فهم حقوقك الدستورية هو الخطوة الأولى والأكثر أهمية في حماية نفسك. يوفر دستور الولايات المتحدة عدة حمايات أساسية تنطبق على كل شخص متهم بجريمة.\n\n## حقك في الصمت\nيحميك التعديل الخامس من الإجبار على أن تكون شاهداً ضد نفسك. مارس هذا الحق بأدب ولكن بحزم — ببساطة اذكر أنك ترغب في التحدث مع محامٍ قبل الإجابة على أي أسئلة.\n\n## حقك في التمثيل القانوني\nيضمن التعديل السادس حقك في وجود محامٍ أثناء أي استجواب. إذا لم تستطع تحمل تكاليف محامٍ، سيتم تعيين واحد لك.\n\n## حماية حقوقك\nإذا كنت أو أحد أحبائك يواجه تهم جنائية، من الضروري استشارة محامي دفاع جنائي ذي خبرة في أقرب وقت ممكن.",
        },
        {
          title: "تأثير التشريعات الأخيرة على أصحاب الأعمال",
          excerpt:
            "التغييرات التنظيمية الجديدة تؤثر على الشركات في جميع أنحاء البلاد. إليك ما تحتاج لمعرفته.",
          category: "قانون الأعمال",
          date: "10 يناير 2026",
          author: "ديفيد تشن",
          readTime: "7 دقائق قراءة",
          content:
            "أدخلت التغييرات التشريعية الأخيرة متطلبات امتثال جديدة تؤثر على الشركات من جميع الأحجام. فهم هذه التغييرات أمر بالغ الأهمية لتجنب العقوبات والحفاظ على عمليات سلسة.\n\n## تغييرات رئيسية في الامتثال المؤسسي\nتتطلب اللوائح الجديدة من الشركات تنفيذ برامج امتثال أكثر قوة.\n\n## تحديثات قانون العمل\nتشمل التغييرات الكبيرة في قانون العمل متطلبات جديدة لسلامة مكان العمل.\n\n## اتخاذ إجراء\nلا تنتظر حتى تتلقى إشعار عدم الامتثال. المراجعة الاستباقية لممارساتك التجارية الآن يمكن أن توفر وقتاً ونفقات كبيرة.",
        },
        {
          title: "قانون الأسرة: التنقل في نزاعات حضانة الأطفال",
          excerpt:
            "حضانة الأطفال يمكن أن تكون واحدة من أكثر جوانب قانون الأسرة تحدياً عاطفياً.",
          category: "قانون الأسرة",
          date: "5 يناير 2026",
          author: "سارة ميتشل",
          readTime: "6 دقائق قراءة",
          content:
            'نزاعات حضانة الأطفال هي من أصعب المسائل القانونية عاطفياً التي تواجهها الأسر. فهم الإطار القانوني والعملية يمكن أن يساعدك على التنقل في هذا الوقت الصعب بشكل أكثر فعالية.\n\n## أنواع الحضانة\nتميز المحاكم بين الحضانة القانونية والحضانة الجسدية.\n\n## معيار المصلحة الفضلى\nتتخذ محاكم الأسرة قرارات الحضانة بناءً على معيار "مصلحة الطفل الفضلى".\n\n## الحصول على المساعدة\nإذا كنت تواجه نزاع حضانة، وجود محامي قانون أسرة ذي خبرة بجانبك يمكن أن يحدث فرقاً كبيراً.',
        },
        {
          title: "إصابة شخصية: ماذا تفعل بعد حادث",
          excerpt:
            "معرفة الخطوات الصحيحة فوراً بعد الحادث يمكن أن تؤثر بشكل كبير على قدرتك على استرداد التعويض.",
          category: "إصابة شخصية",
          date: "28 ديسمبر 2025",
          author: "أليكس تومسون",
          readTime: "4 دقائق قراءة",
          content:
            "اللحظات والأيام التي تلي الحادث حاسمة لحماية صحتك وحقك القانوني في التعويض.\n\n## الخطوة 1: اطلب الرعاية الطبية\nصحتك هي الأولوية القصوى. حتى لو تعتقد أن إصاباتك طفيفة، اطلب تقييماً طبياً فوراً.\n\n## الخطوة 2: وثق كل شيء\nالتقط صوراً لموقع الحادث وإصاباتك وأي أضرار في الممتلكات.\n\n## الخطوة 3: اتصل بمحامٍ\nقبل قبول أي عرض تسوية أو توقيع أي مستندات من شركة التأمين، استشر محامي إصابة شخصية.",
        },
      ],
      categoriesList: [
        { name: "القانون الجنائي", count: 12 },
        { name: "قانون الأعمال", count: 8 },
        { name: "قانون الأسرة", count: 6 },
        { name: "إصابة شخصية", count: 10 },
        { name: "الهجرة", count: 4 },
      ],
      tagsList: [
        "جنائي",
        "أعمال",
        "أسرة",
        "إصابة",
        "دفاع",
        "حقوق",
        "قانوني",
        "محكمة",
        "تعويض",
      ],
      shareArticle: "شارك هذا المقال",
      copyLink: "نسخ الرابط",
      copied: "تم النسخ!",
    },
    // Contact Page
    contactPage: {
      hero: {
        title: "اتصل بنا",
        breadcrumb: { home: "الرئيسية", current: "اتصل بنا" },
      },
      info: {
        phone: { title: "الهاتف", number: "07802233000" },
        email: { title: "البريد الإلكتروني", address: "info@yoursite.com" },
        address: { title: "العنوان", full: "بغداد, المنصور, شارع مطعم الساعة" },
      },
      form: {
        title: "أرسل لنا رسالة",
        nameLabel: "اسمك",
        namePlaceholder: "أدخل اسمك الكامل",
        emailLabel: "بريدك الإلكتروني",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        phoneLabel: "رقم هاتفك",
        phonePlaceholder: "أدخل رقم هاتفك",
        subjectLabel: "الموضوع",
        subjectPlaceholder: "بخصوص ماذا؟",
        messageLabel: "رسالتك",
        messagePlaceholder: "أخبرنا عن قضيتك...",
        send: "أرسل الرسالة",
        sending: "جاري الإرسال...",
      },
      hours: {
        title: "ساعات العمل",
        weekdays: "الاثنين إلى الجمعة",
        weekdayHours: "9:00 إلى 16:30",
        saturday: "السبت",
        saturdayHours: "9:00 إلى 15:30",
        sunday: "الأحد",
        sundayHours: "مكالمات الطوارئ فقط",
      },
      emergency: {
        title: "اتصال الطوارئ",
        description: "متاح على مدار الساعة للمسائل القانونية العاجلة",
        callFree: "احصل عل استشارة قانونية",
      },
      addressCard: {
        title: "مكاتبنا",
        main: "المكتب الرئيسي",
        mainAddress: "بغداد, المنصور, شارع مطعم الساعة",
        branch: "المكتب الفرعي",
        branchAddress: "بغداد, المنصور, شارع مطعم الساعة",
      },
      appointment: {
        title: "احجز موعداً",
        subtitle: "حدد موعداً لاستشارة مع أحد محامينا.",
        nameLabel: "الاسم الكامل",
        namePlaceholder: "أدخل اسمك",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        phoneLabel: "رقم الهاتف",
        phonePlaceholder: "أدخل رقم هاتفك",
        dateLabel: "التاريخ المفضل",
        timeLabel: "الوقت المفضل",
        areaLabel: "مجال الممارسة",
        areaPlaceholder: "اختر مجال الممارسة",
        messageLabel: "ملاحظات إضافية",
        messagePlaceholder: "أي معلومات إضافية...",
        submit: "احجز الموعد",
        submitting: "جاري الحجز...",
        times: [
          "9:00 صباحاً",
          "10:00 صباحاً",
          "11:00 صباحاً",
          "1:00 مساءً",
          "2:00 مساءً",
          "3:00 مساءً",
          "4:00 مساءً",
        ],
        areas: [
          "الدفاع الجنائي",
          "إصابة شخصية",
          "قانون الأسرة",
          "قانون الأعمال",
          "الهجرة",
          "العقارات",
        ],
      },
    },
    // Footer
    footer: {
      hereToHelp: "نحن هنا للمساعدة",
      freeConsultation: "استشارة قانونية • متاح على مدار الساعة",
      newsletter: {
        title: "اشترك في نشرتنا الإخبارية",
        description:
          "ابق على اطلاع بأحدث الأخبار القانونية والرؤى وتحديثات الشركة.",
        placeholder: "أدخل بريدك الإلكتروني",
        subscribe: "اشترك",
        go: "اذهب",
      },
      workingHours: {
        title: "ساعات العمل",
        weekdays: "الاثنين إلى الجمعة",
        weekdayHours: "9:00 إلى 16:30",
        saturday: "السبت",
        saturdayHours: "9:00 إلى 15:30",
        sunday: "الأحد",
        sundayHours: "مكالمات الطوارئ فقط",
      },
      contact: {
        title: "اتصل",
        addressLabel: "العنوان:",
        address: "بغداد, المنصور, شارع مطعم الساعة",
        telLabel: "هاتف:",
        phone: "07802233000",
        emailLabel: "بريد إلكتروني:",
        email: "info@baraa-alsamraie.com",
      },
      quickLinks: {
        title: "روابط سريعة",
        about: "من نحن",
        faq: "الأسئلة الشائعة",
        practiceArea: "مجال الممارسة",
        contact: "اتصل بنا",
      },
      copyright: "حقوق النشر 2026 موضوع القانون. جميع الحقوق محفوظة.",
      backToTop: "العودة للأعلى",
    },
    // Cookie Banner
    cookie: {
      title: "نحن نقدر خصوصيتك",
      description:
        'نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح لديك وتقديم محتوى مخصص وتحليل حركة المرور لدينا. بالنقر على "قبول الكل"، فإنك توافق على استخدامنا لملفات تعريف الارتباط.',
      acceptAll: "قبول الكل",
      decline: "رفض",
    },
    // Live Chat
    chat: {
      title: "دردشة مباشرة",
      openChat: "فتح الدردشة",
      closeChat: "إغلاق الدردشة",
      header: "دردشة الدعم القانوني",
      subtitle: "كيف يمكننا مساعدتك اليوم؟",
      placeholder: "اكتب رسالتك...",
      send: "أرسل",
      offlineTitle: "نحن غير متصلين",
      offlineMessage: "اترك لنا رسالة وسنعود إليك قريباً.",
    },
    // Case Evaluation Tab
    caseEvaluation: {
      title: "تقييم مجاني للقضية",
      nameLabel: "الاسم",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      caseLabel: "نوع القضية",
      submit: "احصل على التقييم",
      success: "شكراً لك! سنراجع قضيتك ونتواصل معك قريباً.",
    },
    // Common
    common: {
      readMore: "اقرأ المزيد",
      learnMore: "اعرف المزيد",
      contactUs: "اتصل بنا",
      home: "الرئيسية",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      address: "العنوان",
      send: "أرسل",
      submit: "أرسل",
      close: "إغلاق",
      loading: "جاري التحميل...",
      search: "بحث",
      share: "شارك",
      shareThis: "شارك هذا المجال:",
      copyLink: "نسخ الرابط",
      copied: "تم النسخ!",
    },
  },
} as const;

type WidenTranslationValues<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly WidenTranslationValues<U>[]
    : T extends object
      ? { [K in keyof T]: WidenTranslationValues<T[K]> }
      : T;

export type TranslationKeys = WidenTranslationValues<typeof translations.en>;
