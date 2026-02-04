import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@utils/index';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
  fullWidth?: boolean;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  fullWidth = false,
  className,
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={cn(
        'btn',
        `btn--${variant}`,
        fullWidth && 'btn--full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}