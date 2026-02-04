import { useAppSelector } from '@/hooks/useRedux';
import ProjectCard from './ProjectCard';
import './ProjectGrid.css';

export default function ProjectGrid() {
  const { items, filter } = useAppSelector((state) => state.projects);

  const filteredProjects = filter === 'all' 
    ? items 
    : items.filter((project) => project.type === filter);

  if (filteredProjects.length === 0) {
    return (
      <div className="project-grid__empty">
        <p>No projects found for this category.</p>
      </div>
    );
  }

  return (
    <div className="project-grid">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}