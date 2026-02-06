import useScrollReveal from '@/hooks/useScrollReveal';
import './ExpertiseSection.css';

const SERVICES = [
  {
    id: 'construction',
    title: 'Luxury Construction',
    description: 'End-to-end residential and commercial construction with uncompromising quality.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    id: 'design',
    title: 'Architectural Design',
    description: 'Bespoke architectural planning and interior design by Danish Design Studio.',
    icon: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z',
  },
  {
    id: 'engineering',
    title: 'Structural Engineering',
    description: 'Precision structural engineering ensuring safety, longevity, and compliance.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
  },
  {
    id: 'approvals',
    title: 'Legal & Approvals',
    description: 'Full government approvals, documentation, and regulatory compliance support.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    id: 'renovation',
    title: 'High-End Renovation',
    description: 'Transform existing spaces into modern luxury homes with expert remodeling.',
    icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
  },
  {
    id: 'turnkey',
    title: 'Turnkey Solutions',
    description: 'Complete project management from concept to handover—worry-free execution.',
    icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z',
  },
  {
    id: '3d-visualization',
    title: '3D Visualization & Rendering',
    description: 'Photorealistic 3D renders and walkthroughs bringing your project to life before construction.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  },
];

export default function ExpertiseSection() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="expertise section-pad" ref={ref}>
      <div className="container">
        <div className="expertise__header">
          <h2 className={`expertise__title ${isVisible ? 'expertise__title--visible' : ''}`}>
            Our Expertise
          </h2>
          <p className={`expertise__subtitle ${isVisible ? 'expertise__subtitle--visible' : ''}`}>
            Comprehensive construction and design solutions tailored to your vision
          </p>
        </div>

        <div className="expertise__grid">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`expertise__card ${isVisible ? 'expertise__card--visible' : ''}`}
              style={{ '--card-index': index } as React.CSSProperties}
            >
              {/* Blueprint SVG Icon */}
              <div className="expertise__icon">
                <svg
                  className="expertise__icon-svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={service.icon} />
                </svg>
              </div>

              <h3 className="expertise__card-title">{service.title}</h3>
              <p className="expertise__card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}