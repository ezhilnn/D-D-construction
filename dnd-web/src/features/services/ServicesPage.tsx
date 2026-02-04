import ServiceCard from './ServiceCard';
import ApprovalTracker from './ApprovalTracker';
import './ServicesPage.css';

const CONSTRUCTION_SERVICES = [
  {
    id: 'luxury-construction',
    title: 'Luxury Residential & Commercial Construction',
    description: 'End-to-end construction services for villas, independent residences, and commercial complexes. From foundation to finishing, we deliver excellence.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    features: ['Custom villa construction', 'Commercial buildings', 'High-rise apartments', 'Premium materials'],
  },
  {
    id: 'real-estate',
    title: 'Premium Real Estate Development',
    description: 'Strategic land acquisition, planning, and development of luxury real estate projects across Tamil Nadu.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    features: ['Land development', 'Project planning', 'Investment consulting', 'Property management'],
  },
  {
    id: 'structural',
    title: 'Structural Engineering & Design',
    description: 'Precision structural engineering ensuring safety, longevity, and compliance with all building codes.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
    features: ['Load calculations', 'Foundation design', 'Seismic analysis', 'BIM modeling'],
  },
  {
    id: 'approvals',
    title: 'Government Approvals & Legal Documentation',
    description: 'Complete assistance with building permits, statutory clearances, and legal compliance.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    features: ['Building permits', 'DTCP approvals', 'Legal documentation', 'NOC processing'],
  },
  {
    id: 'renovation',
    title: 'High-End Renovation & Remodeling',
    description: 'Transform existing spaces into modern luxury homes with expert renovation and remodeling services.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    features: ['Heritage restoration', 'Modern upgrades', 'Space optimization', 'Interior remodeling'],
  },
  {
    id: 'turnkey',
    title: 'Turnkey Construction Solutions',
    description: 'Complete project management from concept to handover. We handle everything, you move in.',
    icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z',
    features: ['Full project oversight', 'Timeline management', 'Quality assurance', 'Handover support'],
  },
];

const DESIGN_SERVICES = [
  {
    id: 'architectural',
    title: 'Architectural Planning & Space Design',
    description: 'Bespoke architectural design by Danish Design Studio—blending aesthetics with functionality.',
    icon: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z',
    features: ['3D visualization', 'Space planning', 'Vastu compliance', 'Sustainable design'],
  },
  {
    id: 'interior',
    title: 'Interior Design & Styling',
    description: 'Curated interior design that transforms spaces into breathtaking, personalized environments.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    features: ['Material selection', 'Lighting design', 'Furniture curation', 'Color consultation'],
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* Hero */}
      <div className="services-page__hero">
        <div className="container">
          <h1 className="services-page__title">Our Services</h1>
          <p className="services-page__subtitle">
            Comprehensive construction and design solutions tailored to your vision
          </p>
        </div>
      </div>

      {/* Construction Services */}
      <section className="services-page__section section-pad">
        <div className="container">
          <h2 className="services-page__section-title">
            D&D Construction Services
          </h2>
          <div className="services-page__grid">
            {CONSTRUCTION_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="services-page__section services-page__section--alt section-pad">
        <div className="container">
          <h2 className="services-page__section-title services-page__section-title--design">
            Danish Design Studio Services
          </h2>
          <div className="services-page__grid services-page__grid--design">
            {DESIGN_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} design />
            ))}
          </div>
        </div>
      </section>

      {/* Approval Tracker */}
      <section className="services-page__section section-pad">
        <div className="container">
          <ApprovalTracker />
        </div>
      </section>
    </div>
  );
}