export type PageType = 'HOME' | 'SERVICES' | 'PRICING' | 'PORTFOLIO' | 'ABOUT' | 'CONTACT' | 'PRIVACY';

export interface ContactFormData {
  fullName: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}
