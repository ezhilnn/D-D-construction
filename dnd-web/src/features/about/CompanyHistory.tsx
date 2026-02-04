import useScrollReveal from '@/hooks/useScrollReveal';
import { COMPANIES, EXPERIENCE_YEARS } from '@/config';
import './CompanyHistory.css';

export default function CompanyHistory() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="company-history section-pad" ref={ref}>
      <div className="container">
        <div className="company-history__intro">
          <h2 className={`company-history__title ${isVisible ? 'company-history__title--visible' : ''}`}>
            Our Story
          </h2>
          <p className={`company-history__lead ${isVisible ? 'company-history__lead--visible' : ''}`}>
            At D&D Construction, we believe true luxury lies in precision, quality, and trust.
            Founded with a commitment to excellence, we offer comprehensive construction solutions —
            from conceptual planning and statutory approvals to flawless execution.
          </p>
        </div>

        {/* D&D Construction */}
        <div className={`company-history__company ${isVisible ? 'company-history__company--visible' : ''}`}>
          <div className="company-history__content">
            <h3 className="company-history__company-name">
              {COMPANIES['dnd-construction'].name}
            </h3>
            <p className="company-history__company-tag">
              {COMPANIES['dnd-construction'].tagline}
            </p>
            <p className="company-history__company-desc">
              With over {EXPERIENCE_YEARS} years of professional experience in planning and construction,
              we have delivered premium residential and commercial projects across Chennai, Kodaikanal,
              Coimbatore, Theni, Madurai, and Tirunelveli.
            </p>
            <p className="company-history__company-desc">
              Every project we undertake reflects our attention to detail, structural integrity,
              and dedication to timeless design. From bespoke villas to large-scale commercial complexes,
              we transform visionary concepts into enduring landmarks.
            </p>
          </div>
          <div className="company-history__image">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80"
              alt="D&D Construction site"
              loading="lazy"
            />
          </div>
        </div>

        {/* Danish Design Studio */}
        <div className={`company-history__company company-history__company--reverse ${isVisible ? 'company-history__company--visible' : ''}`}>
          <div className="company-history__image">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80"
              alt="Danish Design Studio interior"
              loading="lazy"
            />
          </div>
          <div className="company-history__content">
            <h3 className="company-history__company-name company-history__company-name--design">
              {COMPANIES['danish-design'].name}
            </h3>
            <p className="company-history__company-tag company-history__company-tag--design">
              {COMPANIES['danish-design'].tagline}
            </p>
            <p className="company-history__company-desc">
              Our design arm, Danish Design Studio, brings architectural vision and interior refinement
              to every project. We specialize in creating bespoke environments that blend timeless
              aesthetics with modern functionality.
            </p>
            <p className="company-history__company-desc">
              From 3D visualization and space planning to material curation and lighting design,
              we transform spaces into breathtaking, personalized sanctuaries.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className={`company-history__values ${isVisible ? 'company-history__values--visible' : ''}`}>
          <h3 className="company-history__values-title">Our Values</h3>
          <div className="company-history__values-grid">
            <div className="company-history__value">
              <h4>Precision</h4>
              <p>Meticulous planning and execution in every detail</p>
            </div>
            <div className="company-history__value">
              <h4>Quality</h4>
              <p>Premium materials and uncompromising craftsmanship</p>
            </div>
            <div className="company-history__value">
              <h4>Trust</h4>
              <p>Transparent communication and reliable delivery</p>
            </div>
            <div className="company-history__value">
              <h4>Innovation</h4>
              <p>Cutting-edge design and sustainable solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}