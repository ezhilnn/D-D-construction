import { useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import BeforeAfterSlider from './BeforeAfterSlider';
import Modal from '@/components/Modal/Modal';
import type { Project } from '@/types';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });
  const [showSlider, setShowSlider] = useState(false);

  const hasBeforeAfter = project.beforeImage && project.afterImage;

  return (
    <>
      <div
        ref={ref}
        className={`project-card ${isVisible ? 'project-card--visible' : ''}`}
        data-cursor={hasBeforeAfter ? 'view' : undefined}
      >
        {/* Image */}
        <div className="project-card__image-wrap">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="project-card__image"
            loading="lazy"
          />
          {hasBeforeAfter && (
            <button
              className="project-card__ba-btn"
              onClick={() => setShowSlider(true)}
              aria-label="View before and after"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12H3M21 12l-6-6M21 12l-6 6M3 12l6-6M3 12l6 6" />
              </svg>
              Before & After
            </button>
          )}
          <div className="project-card__status">{project.status}</div>
        </div>

        {/* Content */}
        <div className="project-card__content">
          <div className="project-card__meta">
            <span className="project-card__type">{project.type}</span>
            <span className="project-card__location">{project.location}</span>
          </div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__desc">{project.description}</p>
          <div className="project-card__footer">
            {project.area && <span className="project-card__area">{project.area}</span>}
            <span className="project-card__year">{project.year}</span>
          </div>
        </div>
      </div>

      {/* Before/After Modal */}
      {hasBeforeAfter && (
        <Modal isOpen={showSlider} onClose={() => setShowSlider(false)} title={project.title}>
          <BeforeAfterSlider
            beforeImage={project.beforeImage!}
            afterImage={project.afterImage!}
            title={project.title}
          />
        </Modal>
      )}
    </>
  );
}