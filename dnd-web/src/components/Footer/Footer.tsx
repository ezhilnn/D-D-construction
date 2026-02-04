import { Link } from 'react-router-dom';
import { NAV_LINKS, SERVICE_AREAS, CONTACT_INFO, WORKING_HOURS } from '@/config';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">

        {/* ─── Column 1: Brand & Description ─── */}
        <div className="footer__brand">
          {/* D&D Construction */}
          <div className="footer__company">
            <h3 className="footer__company-name">D&D Construction</h3>
            <p className="footer__company-tag">Built with Vision. Delivered with Excellence.</p>
            <p className="footer__company-desc">
              Premium construction and real estate solutions — from conceptual planning
              and statutory approvals to flawless execution. Transforming visionary concepts
              into enduring landmarks across Tamil Nadu.
            </p>
          </div>

          {/* Danish Design Studio */}
          <div className="footer__company footer__company--design">
            <h4 className="footer__company-name footer__company-name--design">Danish Design Studio</h4>
            <p className="footer__company-tag footer__company-tag--design">Design That Breathes Life Into Spaces.</p>
          </div>
        </div>

        {/* ─── Column 2: Quick Links ─── */}
        <div className="footer__links">
          <h5 className="footer__col-title">Quick Links</h5>
          <ul className="footer__list">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <Link to={link.path} className="footer__link">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ─── Column 3: Service Areas ─── */}
        <div className="footer__areas">
          <h5 className="footer__col-title">Service Areas</h5>
          <ul className="footer__list">
            {SERVICE_AREAS.map((area) => (
              <li key={area.city}>
                <span className="footer__link footer__link--static">{area.city}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ─── Column 4: Contact & Hours ─── */}
        <div className="footer__contact">
          <h5 className="footer__col-title">Get In Touch</h5>

          <div className="footer__contact-item">
            <svg className="footer__contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <a href={CONTACT_INFO.phoneHref} className="footer__link">{CONTACT_INFO.phoneFormatted}</a>
          </div>

          <div className="footer__contact-item">
            <svg className="footer__contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            <a href={`mailto:${CONTACT_INFO.email}`} className="footer__link">{CONTACT_INFO.email}</a>
          </div>

          <div className="footer__hours">
            <h6 className="footer__hours-title">Working Hours</h6>
            <p className="footer__hours-line">
              <span>{WORKING_HOURS.weekdays.days}</span>
              <span>{WORKING_HOURS.weekdays.open} – {WORKING_HOURS.weekdays.close}</span>
            </p>
            <p className="footer__hours-line">
              <span>{WORKING_HOURS.sunday.days}</span>
              <span>{WORKING_HOURS.sunday.note}</span>
            </p>
          </div>
        </div>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copyright">
            © {new Date().getFullYear()} D&D Construction & Danish Design Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}