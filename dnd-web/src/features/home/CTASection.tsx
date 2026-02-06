import { Link } from 'react-router-dom';
import Button from '@/components/Button/Button';
import useScrollReveal from '@/hooks/useScrollReveal';
import { COMPANIES, CONTACT_INFO } from '@/config';
import './CTASection.css';

export default function CTASection() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 });

  return (
    <section className="cta section-pad" ref={ref}>
      <div className="container">
        <div className="cta__content">
          <h2 className={`cta__title ${isVisible ? 'cta__title--visible' : ''}`}>
            Ready to Build Your Vision?
          </h2>
          <p className={`cta__subtitle ${isVisible ? 'cta__subtitle--visible' : ''}`}>
            Whether you need construction expertise or design innovation,
            <br />
            we're here to transform your dreams into reality.
          </p>

          {/* Dual Company CTAs */}
          <div className={`cta__companies ${isVisible ? 'cta__companies--visible' : ''}`}>
            {/* D&D Construction */}
            <div className="cta__company">
              <h3 className="cta__company-name">{COMPANIES['dnd-construction'].name}</h3>
              <p className="cta__company-tag">{COMPANIES['dnd-construction'].tagline}</p>
              <div className="cta__company-actions">
                <Link to="/projects">
                  <Button variant="primary">View Projects</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="ghost">Contact Us</Button>
                </Link>
              </div>
            </div>

            {/* Divider */}
            <div className="cta__divider" />

            {/* Danish Design Studio */}
            <div className="cta__company">
              <h3 className="cta__company-name cta__company-name--design">
                {COMPANIES['danish-design'].name}
              </h3>
              <p className="cta__company-tag cta__company-tag--design">
                {COMPANIES['danish-design'].tagline}
              </p>
              <div className="cta__company-actions">
                <Link to="/services">
                  <Button variant="secondary">Design Services</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary">Get Consultation</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Phone CTA */}
          <div className={`cta__phone ${isVisible ? 'cta__phone--visible' : ''}`}>
            <p className="cta__phone-label">Or call us directly:</p>
            <a href={CONTACT_INFO.phoneHref} className="cta__phone-number">
              {CONTACT_INFO.phoneFormatted}
            </a>
            <p>    </p>
            <a href={CONTACT_INFO.alternatephoneHref} className="cta__phone-number">
              {CONTACT_INFO.alternatephoneformatted}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}