import { 
  Layout, 
  ShoppingCart, 
  Zap, 
  Search, 
  Code, 
  Globe, 
  Clock, 
  Star, 
  Award,
  ShieldCheck,
  BarChart3,
  Target,
  Database,
  CheckCircle2,
  MousePointerClick,
  MapPin,
  FileText,
  LineChart,
  Settings,
  Globe2
} from 'lucide-react';
import { ServiceItem, StatItem, ProcessStep, SkillItem, CertificationItem, FAQItem } from './types';

export const PERSONAL_INFO = {
  name: "Hamza Sarwar",
  title: "WordPress, SEO & Analytics Specialist",
  rate: "$20.00/hr",
  shortBio: "I build, rank, and track. With expertise in WordPress Development, End-to-End SEO, and Advanced Analytics, I provide a complete digital growth engine for your business.",
  email: "contact@hamzasarwar.com" 
};

export const STATS: StatItem[] = [
  { label: "Job Success Score", value: "100%", icon: Star },
  { label: "Hours on Upwork", value: "1100+", icon: Clock },
  { label: "Years Experience", value: "10+", icon: Award },
  { label: "SEO & Tracking", value: "Expert", icon: Target },
];

export const WEB_SERVICES: ServiceItem[] = [
  {
    title: "Custom WordPress Dev",
    description: "Tailor-made websites using Elementor Pro that perfectly align with your brand identity.",
    icon: Globe
  },
  {
    title: "WooCommerce Stores",
    description: "High-converting e-commerce setups with optimized checkout flows and payment integration.",
    icon: ShoppingCart
  },
  {
    title: "Speed Optimization",
    description: "Achieving 90+ PageSpeed scores via caching, CDN setup, and code minification.",
    icon: Zap
  },
  {
    title: "Landing Page Design",
    description: "Persuasive, high-retention landing pages designed specifically for marketing campaigns.",
    icon: Layout
  },
  {
    title: "Maintenance & Security",
    description: "Regular updates, malware removal, and security hardening to keep your site safe.",
    icon: ShieldCheck
  },
  {
    title: "Site Migration",
    description: "Securely moving your site from Wix, Shopify, or Squarespace to WordPress.",
    icon: Code
  }
];

export const SEO_SERVICES: ServiceItem[] = [
  {
    title: "Local SEO & GMB",
    description: "Ranking you locally with Google Business Profile optimization and citation building.",
    icon: MapPin
  },
  {
    title: "Global / International SEO",
    description: "Expanding your reach with Hreflang tags and multi-language SEO strategies.",
    icon: Globe2
  },
  {
    title: "Technical SEO Audits",
    description: "Fixing crawl errors, Core Web Vitals, schema markup, and indexing issues.",
    icon: Settings
  },
  {
    title: "On-Page Optimization",
    description: "Keyword research, content restructuring, and meta tag optimization for higher rank.",
    icon: FileText
  },
  {
    title: "Competitor Analysis",
    description: "Deep-dive analysis into competitor keywords and backlink strategies to outrank them.",
    icon: Target
  },
  {
    title: "Search Console Mastery",
    description: "Advanced monitoring and error fixing using Google Search Console and Analytics.",
    icon: LineChart
  }
];

export const ANALYTICS_SERVICES: ServiceItem[] = [
  {
    title: "GTM & GA4 Setup",
    description: "Complete Google Tag Manager and GA4 server-side configuration for accurate data.",
    icon: Database
  },
  {
    title: "Conversion Tracking",
    description: "Precise tracking for Google Ads and Facebook Ads to maximize your ROAS.",
    icon: Target
  },
  {
    title: "Meta Pixel (CAPI)",
    description: "Setting up Facebook Pixel and Conversion API to bypass browser tracking limitations.",
    icon: MousePointerClick
  },
  {
    title: "E-commerce Tracking",
    description: "Enhanced e-commerce implementation for Shopify and WooCommerce (Purchase, Add to Cart).",
    icon: ShoppingCart
  },
  {
    title: "GDPR Compliance",
    description: "Implementing Google Consent Mode to ensure your tracking complies with regulations.",
    icon: ShieldCheck
  },
  {
    title: "Data Layer Setup",
    description: "Custom DataLayer implementation to track specific user actions and funnel steps.",
    icon: BarChart3
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { title: "Google Ads Partner", issuer: "Google", icon: CheckCircle2 },
  { title: "Google Analytics Certified", issuer: "Google", icon: BarChart3 },
  { title: "Meta Certified Professional", issuer: "Meta", icon: Award },
  { title: "Search Advertising", issuer: "Google", icon: Search },
];

export const PROCESS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Audit & Strategy",
    description: "I analyze your current SEO standing, tracking setup, and site performance."
  },
  {
    stepNumber: "02",
    title: "Optimize & Build",
    description: "I develop the site, implement technical SEO fixes, and configure tracking tags."
  },
  {
    stepNumber: "03",
    title: "Verify & Test",
    description: "Rigorous testing of tracking accuracy, mobile responsiveness, and indexability."
  },
  {
    stepNumber: "04",
    title: "Launch & Grow",
    description: "Live launch with ongoing support to ensure rankings climb and data flows correctly."
  }
];

export const SKILLS: SkillItem[] = [
  {
    category: "Web Development",
    items: ["Elementor Pro", "WooCommerce", "WordPress", "Speed Optimization", "Security"]
  },
  {
    category: "SEO Services",
    items: ["Local SEO", "Technical SEO", "On-Page Optimization", "Keyword Research", "International SEO"]
  },
  {
    category: "Analytics & Tracking",
    items: ["Google Tag Manager", "GA4", "Meta Pixel", "Server-side Tracking", "Google Ads"]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is included in 'End-to-End' SEO?",
    answer: "My End-to-End SEO covers everything from the technical foundation (speed, schema, indexing) to on-page content optimization (keywords, headings) and off-page strategy (local listings, backlink advice). It ensures your site is healthy and ranking."
  },
  {
    question: "Why do I need Server-side Tracking?",
    answer: "Browser-based tracking is becoming less accurate due to ad blockers and iOS updates. Server-side tracking (via GTM/Stape.io) ensures you capture 99% of your conversion data, leading to better ad performance."
  },
  {
    question: "Can you fix my existing site's SEO?",
    answer: "Absolutely. I specialize in technical SEO audits. I can identify why your site isn't ranking, fix broken links, improve speed, and optimize your content structure to boost visibility."
  },
  {
    question: "Do you work with agencies?",
    answer: "Yes, I am open to long-term white-label collaborations with agencies. I integrate seamlessly into your team and deliver high-quality work under your brand."
  }
];