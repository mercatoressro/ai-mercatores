// Lightweight GA4 helper. gtag.js is loaded in index.html.
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, unknown>;

export const trackEvent = (eventName: string, params: EventParams = {}) => {
  try {
    if (typeof window === "undefined") return;
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    } else {
      // Fallback: push to dataLayer so events aren't lost if gtag isn't ready yet.
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: eventName, ...params });
    }
  } catch {
    // Never break the UI for analytics failures.
  }
};

export const trackCtaClick = (location: string, label: string) =>
  trackEvent("cta_click", { cta_location: location, cta_label: label });

export const trackFormSubmit = (formName: string, params: EventParams = {}) =>
  trackEvent("form_submit", { form_name: formName, ...params });

export const trackBookingClick = (source: string) =>
  trackEvent("booking_click", { source, conversion_type: "ai_audit_booking" });

/**
 * Tracks scroll depth milestones (25/50/75/90/100%) once each per page view.
 */
export const initScrollDepthTracking = () => {
  if (typeof window === "undefined") return () => {};
  const milestones = [25, 50, 75, 90, 100];
  const fired = new Set<number>();

  const onScroll = () => {
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop;
    const height = (doc.scrollHeight - doc.clientHeight) || 1;
    const percent = Math.min(100, Math.round((scrollTop / height) * 100));

    for (const m of milestones) {
      if (percent >= m && !fired.has(m)) {
        fired.add(m);
        trackEvent("scroll_depth", { percent: m });
      }
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  // Run once in case page loads already scrolled.
  onScroll();
  return () => window.removeEventListener("scroll", onScroll);
};
