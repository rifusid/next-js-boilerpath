import { Card as AntCard, CardProps } from 'antd';
import { ReactNode } from 'react';

interface BaseCardProps extends CardProps {
  children: ReactNode;
  headerContent?: ReactNode;
  footerContent?: ReactNode;
}

export const Card = ({
  children,
  headerContent,
  footerContent,
  className,
  ...props
}: BaseCardProps) => {
  return (
    <AntCard
      className={`rounded-lg shadow-md ${className}`}
      {...props}
    >
      {headerContent && (
        <div className="mb-4">
          {headerContent}
        </div>
      )}
      
      {children}
      
      {footerContent && (
        <div className="mt-4 pt-4 border-t">
          {footerContent}
        </div>
      )}
    </AntCard>
  );
}; 