import { Button as AntButton, ButtonProps } from 'antd';
import { ReactNode } from 'react';

interface BaseButtonProps extends ButtonProps {
  children: ReactNode;
  buttonVariant?: 'primary' | 'secondary' | 'danger';
}

export const Button = ({ 
  children, 
  buttonVariant = 'primary',
  className,
  ...props 
}: BaseButtonProps) => {
  const getButtonType = () => {
    switch (buttonVariant) {
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'default';
      case 'danger':
        return 'primary';
      default:
        return 'default';
    }
  };

  return (
    <AntButton
      type={getButtonType()}
      danger={buttonVariant === 'danger'}
      className={`rounded-md ${className}`}
      {...props}
    >
      {children}
    </AntButton>
  );
}; 