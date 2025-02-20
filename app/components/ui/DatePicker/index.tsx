import { DatePicker as AntDatePicker, DatePickerProps } from 'antd';
import { ReactNode } from 'react';
import dayjs from 'dayjs';
import { Label } from '../Label';
import { ErrorMessage } from '../ErrorMessage';

interface BaseDatePickerProps extends Omit<DatePickerProps, 'format' | 'onChange'> {
  label?: string;
  error?: string;
  format?: string;
  prefix?: ReactNode;
  onChange?: (date: dayjs.Dayjs | null, dateString: string) => void;
}

export const DatePicker = ({ 
  label, 
  error,
  format = 'DD/MM/YYYY',
  prefix,
  className,
  value,
  onChange,
  ...props 
}: BaseDatePickerProps) => {
  // Handle onChange untuk memastikan format yang konsisten
  const handleDateChange = (date: dayjs.Dayjs | null, dateString: string | string[]) => {
    if (onChange) {
      onChange(date, dateString as string);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      {label && <Label>{label}</Label>}
      <div className="flex items-center">
        {prefix && (
          <span className="mr-2">{prefix}</span>
        )}
        <AntDatePicker
          format={format}
          status={error ? 'error' : undefined}
          className={`rounded-md w-full ${className}`}
          value={value}
          onChange={handleDateChange}
          {...props}
        />
      </div>
      <ErrorMessage message={error} />
    </div>
  );
};

// Mengekspor sub-components dari AntDatePicker jika diperlukan
export const { RangePicker, MonthPicker, WeekPicker, TimePicker, QuarterPicker } = AntDatePicker; 