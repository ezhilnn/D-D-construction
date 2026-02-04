import { ReactNode } from 'react';
import { cn } from '@utils/index';
import './Card.css';

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
  glass?: boolean;
}

export default function Card({ children, hover = false, glass = false, className }: CardProps) {
  return (
    <div 
      className={cn(
        'card',
        hover && 'card--hover',
        glass && 'card--glass',
        className
      )}
    >
      {children}
    </div>
  );
}