// Prefix an internal path with the deploy base, so links work both at a domain root
// (https://tureaid.co.nz/about) and in a GitHub Pages project folder (https://user.github.io/repo/about).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => `${BASE}${path}`;

// One place for the links and details that change. Replace the placeholders before going live.
export const SITE = {
  name: 'Ture Aid',
  tagline: 'On-device assistant for NZ criminal defence barristers',
  repo: 'https://github.com/Nano-233/Ture-Aid',
  releases: 'https://github.com/Nano-233/Ture-Aid/releases',
  issues: 'https://github.com/Nano-233/Ture-Aid/issues',
  // PLACEHOLDER: replace with your real contact address.
  email: 'hello@tureaid.example',
  status: 'Private beta',
  // Waitlist form target (used by src/pages/waitlist.astro).
  //
  // Empty (current): submitting opens the visitor's email app with a pre-filled message
  // to `email` above. Nothing is stored by the site, but the visitor has to press send.
  //
  // Set: the form POSTs directly to this URL and shows "You're on the list" on success.
  // Any service that accepts multipart form POSTs and returns 2xx works, e.g. a Formspree
  // URL like 'https://formspree.io/f/abcdwxyz', or your own backend.
  // Fields sent:
  //   name        Your name (required)
  //   email       Work email (required)
  //   role        "Barrister sole" | "Barrister in chambers" | "Defence law firm" | "Other"
  //   firm        Firm name, sent only when role is "Defence law firm"
  //   role_other  Free text, sent only when role is "Other"
  //   notes       What would help you most (optional)
  //
  // Before setting this: whichever service receives sign-ups holds personal information,
  // so name it in the privacy note (see the TODO in waitlist.astro).
  waitlistEndpoint: '',
  platform: 'Windows only',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/about', label: 'About us' },
  { href: '/contact', label: 'Contact' },
];
