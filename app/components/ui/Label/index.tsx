import { ReactNode } from 'react';

interface LabelProps {
  children: ReactNode;
  className?: string;
}

export const Label = ({ children, className = '' }: LabelProps) => {
  return (
    <label className={`text-sm font-medium ${className}`}>
      {children}
    </label>
  );
}; 