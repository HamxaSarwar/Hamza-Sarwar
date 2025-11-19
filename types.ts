import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  title: string;
  description: string;
  stepNumber: string;
}

export interface SkillItem {
  category: string;
  items: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  icon: LucideIcon;
}

export interface FAQItem {
  question: string;
  answer: string;
}