import { PageType } from '../types';

export interface PageSEOMetadata {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  breadcrumbs: { name: string; url: string }[];
}

export const PAGE_SEO: Record<PageType, PageSEOMetadata> = {
  HOME: {
    title: 'Novexa Solutions | Flutter App Development for Brands & Agencies',
    description:
      'Novexa Solutions builds Flutter apps for Android and iOS — for D2C and subscription brands, and for agencies that need mobile development capacity. Founder-led, based in Lahore, working with clients in the UK, USA and Europe.',
    canonical: 'https://www.novexasolutions.uk/',
    ogTitle: 'Novexa Solutions | Flutter App Development for Brands & Agencies',
    ogDescription:
      'Novexa Solutions builds Flutter apps for Android and iOS — for D2C and subscription brands, and for agencies that need mobile development capacity. Founder-led, based in Lahore, working with clients in the UK, USA and Europe.',
    ogUrl: 'https://www.novexasolutions.uk/',
    breadcrumbs: [{ name: 'Home', url: 'https://www.novexasolutions.uk/' }]
  },
  SERVICES: {
    title: 'Flutter App Development & Web Development Services | Novexa Solutions',
    description:
      'Flutter mobile app development, e-commerce websites, API and backend integration, and app maintenance — from a founder-led studio working with UK, US and European clients.',
    canonical: 'https://www.novexasolutions.uk/services',
    ogTitle: 'Flutter App Development & Web Development Services | Novexa Solutions',
    ogDescription:
      'Flutter mobile app development, e-commerce websites, API and backend integration, and app maintenance — from a founder-led studio working with UK, US and European clients.',
    ogUrl: 'https://www.novexasolutions.uk/services',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.novexasolutions.uk/' },
      { name: 'Services', url: 'https://www.novexasolutions.uk/services' }
    ]
  },
  PRICING: {
    title: 'Pricing | Websites, App Audits & Custom App Quotes | Novexa Solutions',
    description:
      'Website packages from $799. Mobile apps are quoted individually after a short scoping call. App and website audit $499, credited against a full project.',
    canonical: 'https://www.novexasolutions.uk/pricing',
    ogTitle: 'Pricing | Websites, App Audits & Custom App Quotes | Novexa Solutions',
    ogDescription:
      'Website packages from $799. Mobile apps are quoted individually after a short scoping call. App and website audit $499, credited against a full project.',
    ogUrl: 'https://www.novexasolutions.uk/pricing',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.novexasolutions.uk/' },
      { name: 'Pricing', url: 'https://www.novexasolutions.uk/pricing' }
    ]
  },
  PORTFOLIO: {
    title: 'Portfolio | Real Flutter Apps & Websites | Novexa Solutions',
    description:
      'Real Flutter mobile apps live on Google Play and 100 categorized websites, built by founder Ateeq Lateef for clients in the UK, USA and Europe.',
    canonical: 'https://www.novexasolutions.uk/portfolio',
    ogTitle: 'Portfolio | Real Flutter Apps & Websites | Novexa Solutions',
    ogDescription:
      'Real Flutter mobile apps live on Google Play and 100 categorized websites, built by founder Ateeq Lateef for clients in the UK, USA and Europe.',
    ogUrl: 'https://www.novexasolutions.uk/portfolio',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.novexasolutions.uk/' },
      { name: 'Portfolio', url: 'https://www.novexasolutions.uk/portfolio' }
    ]
  },
  ABOUT: {
    title: 'About | Ateeq Lateef, Founder of Novexa Solutions',
    description:
      'Novexa Solutions is a founder-led Flutter development studio run by Ateeq Lateef, based in Lahore, Pakistan, working with clients in the UK, USA and Europe.',
    canonical: 'https://www.novexasolutions.uk/about',
    ogTitle: 'About | Ateeq Lateef, Founder of Novexa Solutions',
    ogDescription:
      'Novexa Solutions is a founder-led Flutter development studio run by Ateeq Lateef, based in Lahore, Pakistan, working with clients in the UK, USA and Europe.',
    ogUrl: 'https://www.novexasolutions.uk/about',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.novexasolutions.uk/' },
      { name: 'About', url: 'https://www.novexasolutions.uk/about' }
    ]
  },
  CONTACT: {
    title: 'Contact Novexa Solutions | Start a Project',
    description:
      'Start a Flutter app or website project with Novexa Solutions. Email contact@novexasolutions.uk — replies within 24 business hours.',
    canonical: 'https://www.novexasolutions.uk/contact',
    ogTitle: 'Contact Novexa Solutions | Start a Project',
    ogDescription:
      'Start a Flutter app or website project with Novexa Solutions. Email contact@novexasolutions.uk — replies within 24 business hours.',
    ogUrl: 'https://www.novexasolutions.uk/contact',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.novexasolutions.uk/' },
      { name: 'Contact', url: 'https://www.novexasolutions.uk/contact' }
    ]
  },
  PRIVACY: {
    title: 'Privacy Policy | Novexa Solutions',
    description:
      'Privacy notice for Novexa Solutions: how contact form details are used, retained, and never shared or used for marketing.',
    canonical: 'https://www.novexasolutions.uk/privacy',
    ogTitle: 'Privacy Policy | Novexa Solutions',
    ogDescription:
      'Privacy notice for Novexa Solutions: how contact form details are used, retained, and never shared or used for marketing.',
    ogUrl: 'https://www.novexasolutions.uk/privacy',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.novexasolutions.uk/' },
      { name: 'Privacy', url: 'https://www.novexasolutions.uk/privacy' }
    ]
  }
};

/**
 * Updates DOM head elements dynamically on page transitions:
 * - Document title
 * - Meta description
 * - Canonical link
 * - Open Graph tags (og:title, og:description, og:url)
 * - Twitter/X tags (twitter:title, twitter:description)
 */
export function updatePageSEO(page: PageType) {
  if (typeof document === 'undefined') return;

  const seo = PAGE_SEO[page] || PAGE_SEO.HOME;

  // 1. Title
  document.title = seo.title;

  // 2. Helper to set or create meta tag
  const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
    let el = document.querySelector<HTMLMetaElement>(selector);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // 3. Meta description
  setMetaTag('meta[name="description"]', 'name', 'description', seo.description);

  // 4. OpenGraph tags
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', seo.ogTitle);
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', seo.ogDescription);
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', seo.ogUrl);

  // 5. Twitter Card tags
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', seo.ogTitle);
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', seo.ogDescription);

  // 6. Canonical link
  let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', seo.canonical);
}
