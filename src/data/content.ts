import { ServiceItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Local Web Solutions',
  tagline: 'Your Ideas, Our Solutions, Your Success.',
  supportingMessage: 'Beautiful websites, student projects & portfolios, and smarter digital solutions that deliver real results.',
  phone: '+91 8660921597',
  phoneRaw: '+918660921597',
  phoneHref: 'tel:+918660921597',
  email: 'vgurukiran79@gmail.com',
  emailHref: 'mailto:vgurukiran79@gmail.com',
  whatsappBaseUrl: 'https://wa.me/918660921597',
  whatsappDefaultMsg: "Hi Local Web Solutions! I'm interested in building a website/portfolio/student project. Can we discuss?",
};

export interface WebsiteTypeItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  description: string;
  colorScheme: {
    primary: string;
    gradient: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    glow: string;
  };
  features: string[];
  includedPages: string[];
  conversionTools: string[];
  interactivePreview: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryAction: string;
    secondaryAction: string;
    previewMetrics: { label: string; value: string }[];
  };
}

export const WEBSITE_TYPES_WE_BUILD: WebsiteTypeItem[] = [
  {
    id: 'student-solutions',
    title: 'Student Projects, Portfolios & Resumes',
    category: 'Students & College Graduates',
    badge: 'Special Student Focus',
    tagline: 'Final-year project websites, stunning personal portfolios & interactive web resumes',
    description:
      'We help college students and recent graduates shine with impressive final-year project web apps, standout developer/designer portfolios for placement drives, and modern interactive web resumes with 1-click PDF downloads.',
    colorScheme: {
      primary: '#6366F1',
      gradient: 'from-indigo-600 via-blue-600 to-purple-600',
      border: 'border-indigo-400/40',
      badgeBg: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      badgeText: 'text-indigo-600',
      glow: 'rgba(99, 102, 241, 0.25)',
    },
    features: [
      'Final-year project websites with clean responsive UI & project documentation',
      'Personal developer/creator portfolios highlighting GitHub repositories & skills',
      'Modern interactive web resume with downloadable PDF & recruiter contact links',
      'Fast, reliable live deployment on custom domain or free hosting (Vercel/GitHub)',
    ],
    includedPages: ['Project Demo & Features', 'Personal Portfolio', 'Interactive Web Resume', 'GitHub & Contact Links'],
    conversionTools: ['Student WhatsApp Chat', 'Placement Ready Review', 'Direct Project Discussion'],
    interactivePreview: {
      badge: 'Student Showcase',
      headline: 'Full-Stack Project Showcase & Placement-Ready Portfolio',
      subheadline: 'Computer Science & Engineering · Live Demos · Clean Architecture',
      primaryAction: 'Discuss Student Project',
      secondaryAction: 'Explore Portfolio Features',
      previewMetrics: [
        { label: 'Recruiter Ready', value: '100%' },
        { label: 'Interactive Resume', value: 'Included' },
        { label: 'Student Friendly', value: 'Budget' },
      ],
    },
  },
  {
    id: 'restaurants-cafes',
    title: 'Restaurant & Café Websites',
    category: 'Food & Hospitality',
    badge: 'Popular Local Choice',
    tagline: 'Mouth-watering digital menus with direct WhatsApp table & order bookings',
    description:
      'We build enticing, mobile-first websites for food businesses where hungry local patrons can browse your menu effortlessly, find your hours, and place an order or table booking in one tap.',
    colorScheme: {
      primary: '#EA580C',
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      border: 'border-orange-400/40',
      badgeBg: 'bg-orange-100 text-orange-800 border-orange-300',
      badgeText: 'text-orange-600',
      glow: 'rgba(234, 88, 12, 0.25)',
    },
    features: [
      'Visual digital menu categorized by Starters, Mains & Beverages',
      'One-tap WhatsApp table booking and takeaway orders',
      'Real-time Open/Closed indicator based on your working hours',
      'Embedded Google Map location & parking information',
    ],
    includedPages: ['Home & Specials', 'Complete Digital Menu', 'About the Chef / Story', 'Location & Hours'],
    conversionTools: ['Direct WhatsApp Food Order', 'Click-to-Call Table Reservations', 'Map Directions'],
    interactivePreview: {
      badge: 'Live Preview Concept',
      headline: 'Fresh Sourdough Bakes & Specialty Roast Coffee',
      subheadline: 'Open 7:30 AM to 10:30 PM • Pet Friendly Garden Seating',
      primaryAction: 'Book Table via WhatsApp',
      secondaryAction: 'View Full Digital Menu',
      previewMetrics: [
        { label: 'Menu Load', value: '< 0.8s' },
        { label: 'WhatsApp Tap', value: '1-Click' },
        { label: 'Directions', value: 'Google Maps' },
      ],
    },
  },
  {
    id: 'retail-stores',
    title: 'Retail Stores & Local Shops',
    category: 'Retail & Commercial',
    badge: 'Drive Store Walk-Ins',
    tagline: 'Showcase your product inventory and direct customers to your store',
    description:
      'We build sleek showcase websites for clothing boutiques, electronics shops, hardware vendors, and furniture showrooms so local shoppers discover your stock before visiting.',
    colorScheme: {
      primary: '#0284C7',
      gradient: 'from-blue-600 via-cyan-500 to-teal-400',
      border: 'border-cyan-400/40',
      badgeBg: 'bg-cyan-100 text-cyan-800 border-cyan-300',
      badgeText: 'text-cyan-600',
      glow: 'rgba(2, 132, 199, 0.25)',
    },
    features: [
      'Curated product collections & new arrivals catalog',
      '“Ask on WhatsApp” button linked to every single product',
      'Store hours, landmark directions, and parking details',
      'Festival promotions and seasonal sale announcements banner',
    ],
    includedPages: ['Featured Collections', 'Product Catalog', 'Store Visit Guide', 'Contact & WhatsApp Support'],
    conversionTools: ['Product WhatsApp Inquiries', 'Directions to Store', 'Call Store Manager'],
    interactivePreview: {
      badge: 'Retail Showcase',
      headline: 'Handcrafted Solid Wood Furniture & Modern Living',
      subheadline: 'Visit our 3,000 sq.ft showroom on Ring Road or enquire online',
      primaryAction: 'Enquire via WhatsApp',
      secondaryAction: 'Explore Collections',
      previewMetrics: [
        { label: 'Mobile Optimized', value: '100%' },
        { label: 'Photo Gallery', value: 'Ultra Fast' },
        { label: 'Catalog Browsing', value: 'Zero Lag' },
      ],
    },
  },
  {
    id: 'clinics-doctors',
    title: 'Clinics, Doctors & Dental Practices',
    category: 'Healthcare & Wellness',
    badge: 'Build Deep Trust',
    tagline: 'Calm, reassuring websites that make booking consultation appointments easy',
    description:
      'We build professional healthcare websites for general physicians, dental clinics, pediatricians, and wellness centers that highlight qualifications, explain treatments, and enable quick appointment requests.',
    colorScheme: {
      primary: '#059669',
      gradient: 'from-emerald-600 via-teal-500 to-green-400',
      border: 'border-emerald-400/40',
      badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      badgeText: 'text-emerald-600',
      glow: 'rgba(5, 150, 105, 0.25)',
    },
    features: [
      'Simple appointment request form sent straight to phone',
      'Doctor credentials, degrees, specialization & clinic hygiene tour',
      'Treatment guides with clear FAQs so patients feel comfortable',
      'Urgent care / emergency clinic calling priority button',
    ],
    includedPages: ['Doctor Profile & Credentials', 'Treatments & Procedures', 'Clinic Timings', 'Appointment Request'],
    conversionTools: ['Direct Appointment Request', 'Emergency Dial Button', 'Patient Treatment FAQs'],
    interactivePreview: {
      badge: 'Healthcare Portal',
      headline: 'Gentle, Advanced Family Dental & Orthodontic Care',
      subheadline: 'Dr. Kavita Mehta (BDS, MDS) • Advanced Painless Technology',
      primaryAction: 'Request Appointment',
      secondaryAction: 'View Treatment Details',
      previewMetrics: [
        { label: 'Online Request', value: 'Instant' },
        { label: 'Doctor Degrees', value: 'Verified' },
        { label: 'Emergency Call', value: '1-Tap' },
      ],
    },
  },
  {
    id: 'gyms-fitness',
    title: 'Gyms, Fitness Studios & Salons',
    category: 'Fitness & Lifestyle',
    badge: 'High Member Signups',
    tagline: 'High-energy websites that turn neighbourhood visitors into paying members',
    description:
      'We build dynamic websites for fitness clubs, crossfit boxes, yoga studios, and beauty salons featuring class schedules, transparent fee tiers, and instant 1-Day Trial passes.',
    colorScheme: {
      primary: '#D97706',
      gradient: 'from-amber-500 via-orange-600 to-red-500',
      border: 'border-amber-400/40',
      badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
      badgeText: 'text-amber-600',
      glow: 'rgba(217, 119, 6, 0.25)',
    },
    features: [
      'Weekly batch timetable with morning and evening slots',
      'Trainer and stylist profiles with specializations',
      '1-Day Free Trial pass or consultation lead capture',
      'Transparent membership packages without hidden fees',
    ],
    includedPages: ['Class Schedule & Batches', 'Membership Plans', 'Trainer Highlights', 'Book Free Trial'],
    conversionTools: ['Free Trial Pass Form', 'WhatsApp Membership Inquiry', 'Trainer Schedule View'],
    interactivePreview: {
      badge: 'Fitness Studio',
      headline: 'Strength, Functional Conditioning & Yoga Batches',
      subheadline: 'Morning 6:00 AM to 10:00 AM • Evening 5:00 PM to 9:30 PM',
      primaryAction: 'Claim 1-Day Trial Pass',
      secondaryAction: 'View Timetable',
      previewMetrics: [
        { label: 'Batch Schedules', value: 'Live' },
        { label: 'Trial Booking', value: 'Automated' },
        { label: 'WhatsApp', value: 'Integrated' },
      ],
    },
  },
  {
    id: 'services-consultants',
    title: 'Service Providers & Professionals',
    category: 'Consulting & Trade Services',
    badge: 'Authority & Leads',
    tagline: 'Authoritative websites for accountants, lawyers, contractors & consultants',
    description:
      'We build structured, credible websites for local service businesses — electricians, interior designers, tax consultants, and architects — showcasing their expertise and generating steady client leads.',
    colorScheme: {
      primary: '#2563EB',
      gradient: 'from-blue-600 via-indigo-600 to-cyan-500',
      border: 'border-blue-400/40',
      badgeBg: 'bg-blue-100 text-blue-800 border-blue-300',
      badgeText: 'text-blue-600',
      glow: 'rgba(37, 99, 235, 0.25)',
    },
    features: [
      'Detailed services list with clear explanations of deliverables',
      'Free consultation / site-visit quotation request form',
      'Client recommendations and past experience showcase',
      'Direct WhatsApp and phone hotline for urgent inquiries',
    ],
    includedPages: ['Services & Capabilities', 'Past Case Studies', 'Client FAQs', 'Get a Free Quote'],
    conversionTools: ['Quote Calculator / Request', 'Direct WhatsApp Consultation', 'Download Service Brochure'],
    interactivePreview: {
      badge: 'Professional Practice',
      headline: 'Architectural Design, Structural Planning & Interior Renovations',
      subheadline: 'Sustainable residences & commercial offices crafted with precision',
      primaryAction: 'Request Free Consultation',
      secondaryAction: 'View Capabilities',
      previewMetrics: [
        { label: 'Quote Request', value: 'Direct' },
        { label: 'Project Portfolio', value: 'Interactive' },
        { label: 'Direct Hotline', value: 'Active' },
      ],
    },
  },
];

export const CLIENT_SECTORS = [
  {
    name: 'College Students & Graduates',
    desc: 'Final-year project websites, developer portfolios, and interactive resumes built to impress recruiters and faculty.',
    icon: 'GraduationCap',
    accent: 'from-indigo-600 to-blue-500',
  },
  {
    name: 'Retail Shops & Boutiques',
    desc: 'Clothing, jewellery, electronics, grocery, and specialty local stores.',
    icon: 'ShoppingBag',
    accent: 'from-blue-500 to-cyan-400',
  },
  {
    name: 'Restaurants & Cafés',
    desc: 'Bistros, coffee roasters, bakeries, cloud kitchens, and family dining.',
    icon: 'UtensilsCrossed',
    accent: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Clinics & Healthcare',
    desc: 'Dental clinics, physiotherapists, eye care, diagnostics, and wellness.',
    icon: 'Stethoscope',
    accent: 'from-emerald-500 to-teal-400',
  },
  {
    name: 'Fitness, Gyms & Salons',
    desc: 'Crossfit studios, yoga centers, unisex salons, and spa studios.',
    icon: 'Dumbbell',
    accent: 'from-orange-500 to-red-500',
  },
  {
    name: 'Professional Services',
    desc: 'Chartered accountants, architects, legal advisors, and consultants.',
    icon: 'Briefcase',
    accent: 'from-blue-600 to-indigo-500',
  },
];

export const CLIENT_GUARANTEES = [
  {
    title: '100% Mobile-First Responsive',
    desc: 'Every button, menu, and font size is optimized so phone users convert with zero pinch-zooming.',
    badge: 'Mobile Standard',
    color: 'border-cyan-400 bg-cyan-50/80 text-cyan-900',
  },
  {
    title: 'One-Tap WhatsApp Linking',
    desc: 'Direct WhatsApp integration configured so inquiries arrive straight on your phone with zero delay.',
    badge: 'Instant Conversion',
    color: 'border-emerald-400 bg-emerald-50/80 text-emerald-900',
  },
  {
    title: 'Fast Google PageSpeed',
    desc: 'Built with clean modern code without slow page builders, ensuring pages open instantly.',
    badge: 'Lightning Fast',
    color: 'border-amber-400 bg-amber-50/80 text-amber-900',
  },
  {
    title: 'Student & Startup Friendly',
    desc: 'Direct personal collaboration, clean documented code, and approachable budget-friendly support.',
    badge: 'Direct Collaboration',
    color: 'border-blue-400 bg-blue-50/80 text-blue-900',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'student-websites-resumes',
    title: 'Student Projects & Web Resumes',
    subtitle: 'Capstones, Portfolios & Interactive CVs',
    description:
      'Tailored websites for college students: final-year project web apps, modern developer portfolios, and interactive resumes with 1-click PDF download.',
    highlights: [
      'Final-year project websites with clean UI & documentation',
      'Personal portfolio highlighting GitHub repos & tech skills',
      'Interactive web resume designed to catch recruiter attention',
      'Live deployment ready on Vercel, Netlify, or custom domain',
    ],
    idealFor: 'College students, engineering graduates, job seekers & freelance beginners',
    badge: 'Student Special',
    iconName: 'GraduationCap',
  },
  {
    id: 'business-websites',
    title: 'Business Websites',
    subtitle: 'Build Credibility & Connect With Customers',
    description:
      'Professional websites that explain your business, showcase your services, and help customers contact you quickly.',
    highlights: [
      'Tailored company overview & services showcase',
      'One-tap WhatsApp & phone calling buttons',
      'Interactive location map & working hours',
      'Google Search & local SEO-friendly structure',
    ],
    idealFor: 'Retail shops, local boutiques, service providers, consultancy & corporate offices',
    badge: 'Popular for Local Shops',
    iconName: 'Building2',
  },
  {
    id: 'restaurant-hotel',
    title: 'Restaurant & Hotel Websites',
    subtitle: 'Digital Menus & Easy Enquiries',
    description:
      'Beautiful digital menus, business information, location details, and seamless customer reservations and enquiries.',
    highlights: [
      'Mobile-friendly visual food & drink menu',
      'Direct table reservation & WhatsApp orders',
      'Location, parking, and opening hours info',
      'High-impact food gallery & customer guides',
    ],
    idealFor: 'Restaurants, cafés, bakeries, cloud kitchens, boutique stays & hotels',
    badge: 'High Conversion',
    iconName: 'Utensils',
  },
  {
    id: 'portfolio-websites',
    title: 'Professional Portfolios',
    subtitle: 'Showcase Your Craft & Expertise',
    description:
      'Professional personal portfolios for freelancers, students, creators, architects, photographers, and independent professionals.',
    highlights: [
      'Visual project galleries & case studies',
      'Downloadable credentials & services overview',
      'Customer recommendations showcase & direct contact',
      'Direct contact & project enquiry forms',
    ],
    idealFor: 'Freelancers, consultants, architects, photographers, designers & creators',
    badge: 'Personal Branding',
    iconName: 'UserCheck',
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    subtitle: 'Laser-Focused Campaign Pages',
    description:
      'Focused, fast-loading single pages designed for promoting a specific product, seasonal service, advertising campaign, or new launch.',
    highlights: [
      'Persuasive, clean single-page narrative',
      'Strategically placed call-to-action triggers',
      'Speed-optimized for Google & Meta ads traffic',
      'Lead capture form with instant notifications',
    ],
    idealFor: 'Special offers, course launches, real estate projects & ad campaigns',
    badge: 'Fast Turnaround',
    iconName: 'Rocket',
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    subtitle: 'Modern Makeover & Mobile Overhaul',
    description:
      'Improve an existing website’s appearance, usability, mobile experience, loading speed, and modern presentation.',
    highlights: [
      'Transform outdated layouts into modern designs',
      'Fix mobile responsiveness & layout glitches',
      'Drastically improve page load speeds',
      'Retain existing domain and essential branding',
    ],
    idealFor: 'Businesses with outdated, slow, or broken mobile websites',
    badge: 'Fresh Look',
    iconName: 'RefreshCw',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Your Ideas, Our Solutions, Your Success',
    description: 'We turn your thoughts into functional, high-performance websites tailored to your specific business or career goals.',
    iconName: 'Target',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Mobile-Friendly Experience',
    description: 'Over 80% of local customers and recruiters browse on phones. We ensure every page loads fast and looks natural on any screen.',
    iconName: 'Smartphone',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'Clear Communication',
    description: 'No technical jargon or guesswork. We keep the entire process understandable, collaborative, and straightforward.',
    iconName: 'MessageSquareText',
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Practical Digital Solutions',
    description: 'We focus on features that genuinely help your business grow or your portfolio stand out, without unnecessary complexity.',
    iconName: 'Wrench',
    color: 'from-emerald-500 to-teal-500',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Share Your Ideas',
    summary: 'Tell us about your business, shop, or student project goals.',
    details: 'We start with a friendly conversation to understand what you need, your target audience or professor/recruiter expectations, and essential features.',
  },
  {
    step: '02',
    title: 'Plan the Solution',
    summary: 'Agree on the structure, content, and visual direction.',
    details: 'We map out the pages, key actions (WhatsApp link, resume download, catalog, etc.), and clean visual direction.',
  },
  {
    step: '03',
    title: 'Design and Build',
    summary: 'Develop a responsive website tailored to your project.',
    details: 'We craft a modern, high-speed website optimized for phones, tablets, and computers, equipped with working contact tools.',
  },
  {
    step: '04',
    title: 'Review and Launch',
    summary: 'Review together, make refinements, and launch to your success.',
    details: 'We test across devices, finalize agreed revisions, hook up domain or hosting, and deliver the completed project.',
  },
];

export const FAQS = [
  {
    q: 'Do you make websites and portfolios for college students?',
    a: 'Yes! We specialize in final-year college project websites, developer and designer portfolios, and interactive web resumes with downloadable PDFs at student-friendly pricing.',
  },
  {
    q: 'How long does it take to build a website or project?',
    a: 'Timelines depend on project requirements. Student portfolios and single landing pages can take a few days, while comprehensive business websites typically take 1 to 2 weeks.',
  },
  {
    q: 'Can customers contact me directly on WhatsApp from the website?',
    a: 'Yes! We configure direct WhatsApp buttons with prefilled messages so prospective clients or recruiters can start a conversation in one tap.',
  },
  {
    q: 'Will my website work well on mobile phones?',
    a: 'Absolutely. We design mobile-first so that text is legible, buttons are easy to tap, and images load fast on smartphones, tablets, and computers.',
  },
  {
    q: 'How do we get started?',
    a: 'Just send a quick message on WhatsApp or through our contact form. Tell us a bit about your idea or project and we will take it from there!',
  },
];
