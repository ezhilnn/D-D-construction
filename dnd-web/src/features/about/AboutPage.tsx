import CompanyHistory from './CompanyHistory';
import TeamSection from './TeamSection';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero */}
      <div className="about-page__hero">
        <div className="container">
          <h1 className="about-page__title">About Us</h1>
          <p className="about-page__subtitle">
            Building excellence since 2011 — 15+ years of trusted construction and design
          </p>
        </div>
      </div>

      <CompanyHistory />
      <TeamSection />
    </div>
  );
}