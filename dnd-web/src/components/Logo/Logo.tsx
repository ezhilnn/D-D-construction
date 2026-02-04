import { CompanyId } from '@/types/index';
import './Logo.css';

interface LogoProps {
  company?: CompanyId;
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ company = 'dnd-construction', size = 'medium' }: LogoProps) {
  const isDND = company === 'dnd-construction';
  
  return (
    <div className={`logo logo--${size} logo--${company}`}>
      <span className="logo__text">
        {isDND ? 'D&D' : 'Danish'}
      </span>
      <span className="logo__sub">
        {isDND ? 'Construction' : 'Design Studio'}
      </span>
    </div>
  );
}