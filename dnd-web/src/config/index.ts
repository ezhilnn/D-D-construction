import type { Company, ServiceArea, NavLink, ApprovalStep } from '@/types';

// ─────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────

export const COLORS = {
  alabaster: '#FDFCF8',        // Primary base background
  parchment: '#F2F0E9',        // Secondary surface / section backgrounds
  laurelGreen: '#4A6B7C',        // Hero accent — buttons, headings, footer (was laurelGreen)
        // Light blue variant
  ochreGold: '#D4A373',        // Luxury accent — highlights, active, icons
  charcoal: '#2C2C2C',         // Primary text
  white: '#FFFFFF',
  transparent: 'transparent',
} as const;

export const FONTS = {
  heading: "'Cormorant Garamond', serif",       // Elegant luxury headings
  subheading: "'Montserrat', sans-serif",       // Clean UI sub-headings
  body: "'Inter', sans-serif",                  // Readable body text
} as const;

export const SHADOWS = {
  ambient: '0 4px 30px rgba(74, 107, 124, 0.05)',      // Soft blue-tinted ambient occlusion
  ambientHover: '0 8px 40px rgba(74, 107, 124, 0.10)', // Slightly stronger on hover
  glass: '0 2px 20px rgba(74, 107, 124, 0.08)',        // For glassmorphism panels
} as const;

export const GLASS = {
  background: 'rgba(255, 255, 255, 0.70)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.30)',
} as const;

export const RADIUS = {
  base: '8px',
  small: '4px',
  large: '12px',
  none: '0px',
} as const;

export const TRANSITIONS = {
  slow: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',   // Slow & smooth (main)
  medium: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  fast: 'all 0.2s ease-out',
} as const;

// ─────────────────────────────────────────────
// BUSINESS DATA
// ─────────────────────────────────────────────

export const COMPANIES: Record<string, Company> = {
  'dnd-construction': {
    id: 'dnd-construction',
    name: 'D&D Construction',
    tagline: 'Built with Vision. Delivered with Excellence.',
    description:
      'D&D Construction is a premium construction and real estate firm delivering meticulously planned, structurally sound, and aesthetically refined spaces. We specialize in transforming visionary concepts into enduring landmarks.',
    logoPlaceholder: '/assets/logo-dnd.svg',
    primaryColor: COLORS.laurelGreen,
  },
  'danish-design': {
    id: 'danish-design',
    name: 'Danish Design Studio',
    tagline: 'Design That Breathes Life Into Spaces.',
    description:
      'Danish Design Studio is the premium design arm partnered with D&D Construction. We transform spaces into breathtaking, bespoke environments — blending timeless aesthetics with modern functionality and refined sensibility.',
    logoPlaceholder: '/assets/logo-danish.svg',
    primaryColor: COLORS.ochreGold,
  },
} as const;

export const SERVICE_AREAS: ServiceArea[] = [
  { city: 'Chennai', state: 'Tamil Nadu' },
  { city: 'Kodaikanal', state: 'Tamil Nadu' },
  { city: 'Coimbatore', state: 'Tamil Nadu' },
  { city: 'Theni', state: 'Tamil Nadu' },
  { city: 'Madurai', state: 'Tamil Nadu' },
  { city: 'Tirunelveli', state: 'Tamil Nadu' },
];

export const CONTACT_INFO = {
  phone: '9159913330',
  phoneFormatted: '+91 915 991 3330',
  phoneHref: 'tel:+919159913330',
  email: 'info@dndconstruction.com',
  designEmail: 'design@danishdesignstudio.com',
  alternatephone : '8220681330',
  alternatephoneformatted : '+91 822 068 1330',
  alternatephoneHref : 'tel:+918220681330'
} as const;

export const WORKING_HOURS = {
  weekdays: { days: 'Monday – Saturday', open: '9:00 AM', close: '7:00 PM' },
  sunday: { days: 'Sunday', note: 'Exclusive Appointments Only' },
} as const;

export const EXPERIENCE_YEARS = 15;

// ─────────────────────────────────────────────
// NAVIGATION LINKS
// ─────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', path: '/', previewImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80' },
  { id: 'about', label: 'About Us', path: '/about', previewImage: 'https://img.freepik.com/free-photo/about-as-service-contact-information-concept_53876-138509.jpg' },
  { id: 'services', label: 'Services', path: '/services', previewImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { id: 'projects', label: 'Projects', path: '/projects', previewImage: 'https://img.freepik.com/free-photo/business-people-are-brainstorming_53876-137640.jpg?semt=ais_hybrid&w=740&q=80' },
  { id: 'contact', label: 'Contact', path: '/contact', previewImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
  { id: 'legal', label: 'Legal', path: '/legal', previewImage: 'https://img.freepik.com/free-photo/top-view-career-guidance-items-judges_23-2149443473.jpg?semt=ais_user_personalization&w=740&q=80' },
];

// ─────────────────────────────────────────────
// APPROVAL TRACKER STEPS
// ─────────────────────────────────────────────

export const APPROVAL_STEPS: ApprovalStep[] = [
  {
    stage: 'approval',
    label: 'Government Approval',
    description: 'Statutory clearances and building permits',
    estimatedDays: 30,
    icon: 'approval',
  },
  {
    stage: 'site-prep',
    label: 'Site Preparation',
    description: 'Land survey, grading, and utility setup',
    estimatedDays: 15,
    icon: 'site-prep',
  },
  {
    stage: 'foundation',
    label: 'Foundation Work',
    description: 'Excavation, reinforcement, and concrete pour',
    estimatedDays: 25,
    icon: 'foundation',
  },
  {
    stage: 'construction',
    label: 'Construction',
    description: 'Structural build, walls, roofing, and MEP',
    estimatedDays: 120,
    icon: 'construction',
  },
  {
    stage: 'completion',
    label: 'Completion & Handover',
    description: 'Finishing, QA inspection, and delivery',
    estimatedDays: 30,
    icon: 'completion',
  },
];