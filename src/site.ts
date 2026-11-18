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
  // Waitlist form target. Leave empty to fall back to a pre-filled email to `email` above.
  // To collect sign-ups without email, paste a form endpoint here, e.g. a Formspree URL
  // like 'https://formspree.io/f/abcdwxyz'. It receives a POST with name, email, chambers, role, notes.
  waitlistEndpoint: '',
  platform: 'Windows only',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/about', label: 'About us' },
  { href: '/contact', label: 'Contact' },
];
