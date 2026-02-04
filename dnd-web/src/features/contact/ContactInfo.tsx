import { CONTACT_INFO, WORKING_HOURS, SERVICE_AREAS } from '@/config';
import './ContactInfo.css';

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <h3 className="contact-info__title">Contact Information</h3>

      {/* Phone */}
      <div className="contact-info__item">
        <div className="contact-info__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
        </div>
        <div>
          <div className="contact-info__label">Phone</div>
          <a href={CONTACT_INFO.phoneHref} className="contact-info__value">
            {CONTACT_INFO.phoneFormatted}
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="contact-info__item">
        <div className="contact-info__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </div>
        <div>
          <div className="contact-info__label">Email</div>
          <a href={`mailto:${CONTACT_INFO.email}`} className="contact-info__value">
            {CONTACT_INFO.email}
          </a>
        </div>
      </div>

      {/* Working Hours */}
      <div className="contact-info__section">
        <h4 className="contact-info__section-title">Working Hours</h4>
        <div className="contact-info__hours">
          <div className="contact-info__hour">
            <span>{WORKING_HOURS.weekdays.days}</span>
            <span>{WORKING_HOURS.weekdays.open} – {WORKING_HOURS.weekdays.close}</span>
          </div>
          <div className="contact-info__hour">
            <span>{WORKING_HOURS.sunday.days}</span>
            <span>{WORKING_HOURS.sunday.note}</span>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="contact-info__section">
        <h4 className="contact-info__section-title">Service Areas</h4>
        <ul className="contact-info__areas">
          {SERVICE_AREAS.map((area) => (
            <li key={area.city}>{area.city}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}