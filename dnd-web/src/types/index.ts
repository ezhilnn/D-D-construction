// ─────────────────────────────────────────────
// BRAND & COMPANY
// ─────────────────────────────────────────────

export type CompanyId = 'dnd-construction' | 'danish-design';

export interface Company {
  id: CompanyId;
  name: string;
  tagline: string;
  description: string;
  logoPlaceholder: string; // path to logo asset
  primaryColor: string;
}

// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────

export interface NavLink {
  id: string;
  label: string;
  path: string;
  previewImage?: string; // for the full-screen overlay nav
}

// ─────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────

export interface Service {
  id: string;
  icon: string;           // SVG icon name or inline path
  title: string;
  description: string;
  companyId: CompanyId;
}

// ─────────────────────────────────────────────
// PROJECTS / PORTFOLIO
// ─────────────────────────────────────────────

export type ProjectType = 'villa' | 'commercial' | 'renovation' | 'apartment';
export type ProjectStatus = 'completed' | 'ongoing' | 'upcoming';

export interface Project {
  id: string;
  title: string;
  location: string;
  type: ProjectType;
  status: ProjectStatus;
  companyId: CompanyId;
  thumbnail: string;       // placeholder image URL
  beforeImage?: string;    // for Before & After slider
  afterImage?: string;
  description: string;
  year: number;
  area?: string;           // e.g. "3,200 sq.ft"
}

// ─────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  companyId: CompanyId;
}

// ─────────────────────────────────────────────
// GOVERNMENT APPROVALS TRACKER
// ─────────────────────────────────────────────

export type ApprovalStage = 'approval' | 'site-prep' | 'foundation' | 'construction' | 'completion';

export interface ApprovalStep {
  stage: ApprovalStage;
  label: string;
  description: string;
  estimatedDays: number;
  icon: string;
}

// ─────────────────────────────────────────────
// SERVICE AREAS
// ─────────────────────────────────────────────

export interface ServiceArea {
  city: string;
  state: string;
}

// ─────────────────────────────────────────────
// CONTACT FORM
// ─────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  companyInterest: CompanyId;
}

// ─────────────────────────────────────────────
// REDUX STATE SHAPE (top-level)
// ─────────────────────────────────────────────

export interface RootState {
  nav: NavState;
  projects: ProjectsState;
  contact: ContactState;
}

export interface NavState {
  isMenuOpen: boolean;
  activeLink: string;
}

export interface ProjectsState {
  items: Project[];
  loading: boolean;
  error: string | null;
  filter: ProjectType | 'all';
}

export interface ContactState {
  formData: ContactFormData;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
}