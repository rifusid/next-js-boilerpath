import { Input as AntInput, InputProps } from 'antd';
import { ReactNode } from 'react';
import { Label } from '../Label';
import { ErrorMessage } from '../ErrorMessage';

interface BaseInputProps extends InputProps {
  label?: string;
  error?: string;
  prefix?: ReactNode;
}

export const Input = ({ 
  label, 
  error, 
  prefix,
  className,
  ...props 
}: BaseInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <Label>{label}</Label>}
      <AntInput
        prefix={prefix}
        status={error ? 'error' : undefined}
        className={`rounded-md ${className}`}
        {...props}
      />
      <ErrorMessage message={error} />
    </div>
  );
}; 