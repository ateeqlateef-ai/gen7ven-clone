export type PageType = 'HOME' | 'SERVICES' | 'ABOUT' | 'CONTACT';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  businessValue: string;
  problemSolved: string;
  deliverables: string[];
  technologies: string[];
  iconName: string;
}

export interface ProcessStep {
  step: string;
  name: string;
  summary: string;
  details: string;
}

export interface ProjectShowcase {
  id: string;
  title: string;
  category: string;
  servicesProvided: string[];
  description: string;
  outcomes: string[];
  techStack: string[];
  featuredImageGradient: string;
}

export interface ValueProp {
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface TechCapability {
  category: string;
  technologies: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}
