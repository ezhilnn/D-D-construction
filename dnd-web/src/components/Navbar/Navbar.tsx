import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';
import { toggleMenu, closeMenu, setActiveLink } from '@store/slices/navSlice';
import { NAV_LINKS } from '@config/index';
import './Navbar.css';

export default function Navbar() {
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector((state) => state.nav.isMenuOpen);
  const location = useLocation();

  // Sync active link with current route
  useEffect(() => {
    const match = NAV_LINKS.find((link) => link.path === location.pathname);
    if (match) dispatch(setActiveLink(match.id));
  }, [location.pathname, dispatch]);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleLinkClick = (id: string) => {
    dispatch(setActiveLink(id));
    dispatch(closeMenu());
  };

  return (
    <>
      {/* ─── Top Bar (always visible, glassmorphism) ─── */}
      <nav className="navbar" aria-label="Main navigation">
        <div className="navbar__inner container">

          {/* Logo — placeholder text for now, swap with <Logo /> component later */}
          <Link to="/" className="navbar__logo" onClick={() => handleLinkClick('home')}>
            <span className="navbar__logo-text">D&D</span>
            <span className="navbar__logo-sub">Construction</span>
          </Link>

          {/* Phone CTA (desktop only) */}
          <a href="tel:+919159913330" className="navbar__phone" aria-label="Call us">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span>+91 915 991 3330</span>
          </a>

          {/* Menu Toggle Button */}
          <button
            className={`navbar__menu-btn ${isMenuOpen ? 'navbar__menu-btn--open' : ''}`}
            onClick={() => dispatch(toggleMenu())}
            aria-expanded={isMenuOpen}
            aria-controls="nav-overlay"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="navbar__menu-label">Menu</span>
            <div className="navbar__menu-icon">
              <span className="navbar__menu-line navbar__menu-line--top" />
              <span className="navbar__menu-line navbar__menu-line--bottom" />
            </div>
          </button>
        </div>
      </nav>

      {/* ─── Full-Screen Contextual Overlay ─── */}
      <div
        id="nav-overlay"
        className={`nav-overlay ${isMenuOpen ? 'nav-overlay--open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        {/* Close button inside overlay */}
        <button className="nav-overlay__close" onClick={() => dispatch(closeMenu())} aria-label="Close menu">
          <span className="nav-overlay__close-icon" />
        </button>

        {/* Navigation links with image previews */}
        <ul className="nav-overlay__list">
          {NAV_LINKS.map((link, index) => (
            <li
              key={link.id}
              className="nav-overlay__item"
              style={{ '--nav-delay': `${index * 0.08}s` } as React.CSSProperties}
            >
              <Link
                to={link.path}
                className="nav-overlay__link"
                onClick={() => handleLinkClick(link.id)}
              >
                {/* Image preview card */}
                <div className="nav-overlay__preview">
                  <img
                    src={link.previewImage}
                    alt={`${link.label} preview`}
                    className="nav-overlay__preview-img"
                    loading="lazy"
                  />
                  <div className="nav-overlay__preview-overlay" />
                </div>

                {/* Link text */}
                <div className="nav-overlay__text-wrap">
                  <span className="nav-overlay__number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="nav-overlay__label">{link.label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom info bar */}
        <div className="nav-overlay__footer">
          <span>© 2025 D&D Construction</span>
          <span className="nav-overlay__footer-sep">·</span>
          <span>Danish Design Studio</span>
        </div>
      </div>
    </>
  );
}