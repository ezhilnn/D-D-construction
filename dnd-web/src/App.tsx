import { Routes, Route} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from '@/layouts/MainLayout';
import CustomCursor from '@/components/Cursor/CustomCursor';

// ─── Lazy-loaded pages ───
const HomePage     = lazy(() => import('@/features/home/HomePage'));
const AboutPage    = lazy(() => import('@/features/about/AboutPage'));
const ServicesPage = lazy(() => import('@/features/services/ServicesPage'));
const ProjectsPage = lazy(() => import('@/features/projects/ProjectsPage'));
const ContactPage  = lazy(() => import('@/features/contact/ContactPage'));
const LegalPage    = lazy(() => import('@/features/legal/LegalPage'));

// ─── Loading Fallback ───
function LoadingFallback() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--color-alabaster)',
    }}>
      <div style={{
        width: 40,
        height: 40,
        border: '2px solid var(--color-laurel-green)',
        borderTop: '2px solid transparent',
        borderRadius: '50%',
        animation: 'spin 0.6s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  return (
    <>
      <CustomCursor />
      
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={
            <Suspense fallback={<LoadingFallback />}>
              <HomePage />
            </Suspense>
          } />
          <Route path="about" element={
            <Suspense fallback={<LoadingFallback />}>
              <AboutPage />
            </Suspense>
          } />
          <Route path="services" element={
            <Suspense fallback={<LoadingFallback />}>
              <ServicesPage />
            </Suspense>
          } />
          <Route path="projects" element={
            <Suspense fallback={<LoadingFallback />}>
              <ProjectsPage />
            </Suspense>
          } />
          <Route path="contact" element={
            <Suspense fallback={<LoadingFallback />}>
              <ContactPage />
            </Suspense>
          } />
          <Route path="legal" element={
            <Suspense fallback={<LoadingFallback />}>
              <LegalPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </>
  );
}