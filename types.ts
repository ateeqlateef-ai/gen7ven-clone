
export type PageType = 'HOME' | 'SERVICES' | 'ABOUT' | 'CONTACT';

export interface SiteConfig {
  name: string;
  theme: 'dark' | 'light';
  navigation: {
    label: string;
    path: string;
  }[];
}
