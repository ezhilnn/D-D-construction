import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Hero */}
      <div className="contact-page__hero">
        <div className="container">
          <h1 className="contact-page__title">Get In Touch</h1>
          <p className="contact-page__subtitle">
            Let's discuss your project and bring your vision to life
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="contact-page__content section-pad">
        <div className="container">
          <div className="contact-page__grid">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
}