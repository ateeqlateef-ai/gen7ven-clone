import { PageType } from '../types';

/**
 * Maps a pathname (e.g. '/', '/about', '/services', '/contact') to the internal PageType.
 */
export function getPageFromPath(pathname: string): PageType {
  const normalized = (pathname || '').toLowerCase().replace(/\/+$/, '') || '/';
  if (normalized.startsWith('/services')) {
    return 'SERVICES';
  }
  if (normalized.startsWith('/about')) {
    return 'ABOUT';
  }
  if (normalized.startsWith('/contact')) {
    return 'CONTACT';
  }
  return 'HOME';
}

/**
 * Programmatic client-side navigation using HTML5 History API (pushState).
 * Triggers popstate so all reactive listeners update in real time.
 */
export function navigate(path: string) {
  if (typeof window === 'undefined') return;

  const current = window.location.pathname + window.location.search;
  if (current !== path) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
