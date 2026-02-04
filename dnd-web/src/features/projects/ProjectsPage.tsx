import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { fetchProjectsRequest } from '@/store/slices/projectsSlice';
import ProjectFilter from './ProjectFilter';
import ProjectGrid from './ProjectGrid';
import './ProjectsPage.css';

export default function ProjectsPage() {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjectsRequest());
  }, [dispatch]);

  return (
    <div className="projects-page">
      {/* Hero */}
      <div className="projects-page__hero">
        <div className="container">
          <h1 className="projects-page__title">Our Projects</h1>
          <p className="projects-page__subtitle">
            Explore our portfolio of luxury villas, commercial complexes, and premium renovations
          </p>
        </div>
      </div>

      {/* Filter */}
      <section className="projects-page__filter section-pad-sm">
        <div className="container">
          <ProjectFilter />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-page__grid section-pad">
        <div className="container">
          {loading ? (
            <div className="projects-page__loading">Loading projects...</div>
          ) : (
            <ProjectGrid />
          )}
        </div>
      </section>
    </div>
  );
}