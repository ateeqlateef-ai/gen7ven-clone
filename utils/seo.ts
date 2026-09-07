import { PageType } from '../types';
import { SITE_INFO } from '../data/siteData';

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
    title: 'Novexa Solutions | Digital Technology & Web Development Agency UK',
    description: 'Novexa Solutions is a premier UK digital technology agency engineering resilient web applications, intuitive mobile apps, modern UI/UX, and enterprise AI solutions.',
    canonical: 'https://www.novexasolutions.uk/',
    ogTitle: 'Novexa Solutions | Digital Technology & Web Development Agency UK',
    ogDescription: 'Novexa Solutions is a premier UK digital technology agency engineering resilient web applications, intuitive mobile apps, modern UI/UX, and enterprise AI solutions.',
    ogUrl: 'https://www.novexasolutions.uk/',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.novexasolutions.uk/' }
    ]
  },
  SERVICES: {
    title: 'Digital Technology Services | Web, Mobile & AI Solutions | Novexa Solutions',
    description: 'Explore our six core digital disciplines: UI/UX design, custom web development, mobile app engineering, brand identity, SEO marketing, and enterprise AI systems.',
    canonical: 'https://www.novexasolutions.uk/services',
    ogTitle: 'Digital Technology Services | Web, Mobile & AI Solutions | Novexa Solutions',
    ogDescription: 'Explore our six core digital disciplines: UI/UX design, custom web development, mobile app engineering, brand identity, SEO marketing, and enterprise AI systems.',
    ogUrl: 'https://www.novexasolutions.uk/services',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.novexasolutions.uk/' },
      { name: 'Services', url: 'https://www.novexasolutions.uk/services' }
    ]
  },
  ABOUT: {
    title: 'About Novexa Solutions | UK Digital Technology & Software Agency',
    description: 'Learn about Novexa Solutions, an independent UK digital agency partnering with ambitious ventures through senior engineering leadership and commercial pragmatism.',
    canonical: 'https://www.novexasolutions.uk/about',
    ogTitle: 'About Novexa Solutions | UK Digital Technology & Software Agency',
    ogDescription: 'Learn about Novexa Solutions, an independent UK digital agency partnering with ambitious ventures through senior engineering leadership and commercial pragmatism.',
    ogUrl: 'https://www.novexasolutions.uk/about',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.novexasolutions.uk/' },
      { name: 'About Us', url: 'https://www.novexasolutions.uk/about' }
    ]
  },
  CONTACT: {
    title: 'Contact Novexa Solutions | Request Project Scoping & Technical Consultation',
    description: 'Get in touch with Novexa Solutions to discuss your digital product, request an architectural scope review, or schedule a consultation. Fast 24-hour response.',
    canonical: 'https://www.novexasolutions.uk/contact',
    ogTitle: 'Contact Novexa Solutions | Request Project Scoping & Technical Consultation',
    ogDescription: 'Get in touch with Novexa Solutions to discuss your digital product, request an architectural scope review, or schedule a consultation. Fast 24-hour response.',
    ogUrl: 'https://www.novexasolutions.uk/contact',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.novexasolutions.uk/' },
      { name: 'Contact Us', url: 'https://www.novexasolutions.uk/contact' }
    ]
  }
};

/**
 * Updates DOM head elements dynamically on clean page transitions:
 * - Document title
 * - Meta description
 * - Canonical link
 * - Open Graph tags (og:title, og:description, og:url)
 * - Twitter/X tags (twitter:title, twitter:description)
 * - BreadcrumbList & WebPage JSON-LD schema
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

  // 3. Meta Description
  setMetaTag('meta[name="description"]', 'name', 'description', seo.description);

  // 4. Open Graph Tags
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', seo.ogTitle);
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', seo.ogDescription);
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', seo.ogUrl);
  setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_INFO.name);
  setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');

  // 5. Twitter / X Tags
  setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', seo.ogTitle);
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', seo.ogDescription);

  // 6. Canonical URL
  let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', seo.canonical);

  // 7. Dynamic JSON-LD for WebPage & BreadcrumbList
  let scriptEl = document.getElementById('dynamic-page-schema') as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'dynamic-page-schema';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

  const breadcrumbItemList = seo.breadcrumbs.map((crumb, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: crumb.name,
    item: crumb.url
  }));

  const dynamicSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': seo.canonical,
        url: seo.canonical,
        name: seo.title,
        description: seo.description,
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.novexasolutions.uk/#website',
          name: SITE_INFO.name,
          url: 'https://www.novexasolutions.uk/'
        },
        breadcrumb: {
          '@id': `${seo.canonical}#breadcrumb`
        },
        inLanguage: 'en-GB'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${seo.canonical}#breadcrumb`,
        itemListElement: breadcrumbItemList
      }
    ]
  };

  scriptEl.textContent = JSON.stringify(dynamicSchema);
}
