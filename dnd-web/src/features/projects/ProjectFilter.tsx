import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { setFilter } from '@/store/slices/projectsSlice';
import type { ProjectType } from '@/types';
import './ProjectFilter.css';

const FILTERS: Array<{ id: ProjectType | 'all'; label: string }> = [
  { id: 'all', label: 'All Projects' },
  { id: 'villa', label: 'Villas' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'apartment', label: 'Apartments' },
  { id: 'renovation', label: 'Renovations' },
];

export default function ProjectFilter() {
  const dispatch = useAppDispatch();
  const activeFilter = useAppSelector((state) => state.projects.filter);

  return (
    <div className="project-filter">
      {FILTERS.map((filter) => (
        <button
          key={filter.id}
          className={`project-filter__btn ${activeFilter === filter.id ? 'project-filter__btn--active' : ''}`}
          onClick={() => dispatch(setFilter(filter.id))}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}