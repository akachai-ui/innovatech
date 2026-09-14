// Analytics event tracking helpers for Google Analytics & Facebook Pixel

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export const trackContactEvent = (channel: string = 'LINE') => {
  if (typeof window !== 'undefined') {
    // 1. Google Analytics 4 Event (Lead / Contact)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'contact_click', {
        event_category: 'Engagement',
        event_label: channel,
        channel: channel
      });
      window.gtag('event', 'generate_lead', {
        currency: 'THB',
        value: 1
      });
    }

    // 2. Facebook Pixel Event (Contact / Lead)
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Contact', {
        content_name: channel,
        status: 'clicked'
      });
      window.fbq('track', 'Lead');
    }
  }
};
