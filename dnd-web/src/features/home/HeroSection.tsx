import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button/Button';
import { COMPANIES } from '@/config';
import './HeroSection.css';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    setIsLoaded(true);
  }, []);

  return (
    <section className="hero">
      {/* Parallax Background Image */}
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
          alt="Luxury villa construction"
          className="hero__bg-img"
        />
        <div className="hero__bg-overlay" />
      </div>

      {/* Content */}
      <div className="hero__content container">
        {/* Animated Headline - Character Slide Up */}
        <h1 className={`hero__title ${isLoaded ? 'hero__title--loaded' : ''}`}>
          <span className="hero__title-line">
            {'Built with Vision.'.split('').map((char, i) => (
              <span
                key={i}
                className="hero__title-char"
                style={{ '--char-index': i } as React.CSSProperties}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
          <span className="hero__title-line">
            {'Delivered with Excellence.'.split('').map((char, i) => (
              <span
                key={i}
                className="hero__title-char"
                style={{ '--char-index': i + 18 } as React.CSSProperties}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
        </h1>

        <p className={`hero__subtitle ${isLoaded ? 'hero__subtitle--loaded' : ''}`}>
          Premium construction and real estate solutions across Tamil Nadu.
          <br />
          Transforming visionary concepts into enduring landmarks.
        </p>

        {/* Dual CTA Buttons */}
        <div className={`hero__cta ${isLoaded ? 'hero__cta--loaded' : ''}`}>
          <Link to="/projects">
            <Button variant="primary">Explore Projects</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Get Started</Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className={`hero__scroll ${isLoaded ? 'hero__scroll--loaded' : ''}`}>
          <span className="hero__scroll-text">Scroll to Explore</span>
          <svg className="hero__scroll-icon" width="12" height="16" viewBox="0 0 12 16" fill="none">
            <path d="M6 0V14M6 14L1 9M6 14L11 9" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}