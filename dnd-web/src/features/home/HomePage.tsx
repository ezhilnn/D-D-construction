import HeroSection from './HeroSection';
import ExpertiseSection from './ExpertiseSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}