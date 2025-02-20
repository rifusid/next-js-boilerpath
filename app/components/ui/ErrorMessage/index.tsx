interface ErrorMessageProps {
  message?: string;
  className?: string;
}

export const ErrorMessage = ({ message, className = '' }: ErrorMessageProps) => {
  if (!message) return null;
  
  return (
    <span className={`text-xs text-red-500 ${className}`}>
      {message}
    </span>
  );
}; 