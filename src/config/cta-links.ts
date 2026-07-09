/**
 * CTA Links Configuration
 */

export const CTA_LINKS = {
  BOOK_MEETING: 'https://calendar.app.google/TA9Xv89TnJkJidm78',

  FREE_AUDIT: '/demo',

  PLATFORM_ACCESS: '/signup',

  CONTACT_EMAIL: 'mailto:william@carve.ac',

  // Carve's LinkedIn company page.
  LINKEDIN: 'https://www.linkedin.com/company/carve-ai/',
} as const;

// Helper function to get CTA link
export function getCTALink(type: keyof typeof CTA_LINKS): string {
  return CTA_LINKS[type];
}
