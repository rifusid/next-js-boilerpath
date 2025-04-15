import { Select as AntSelect, SelectProps } from 'antd';
import { FC } from 'react';

export interface CustomSelectProps extends SelectProps {
  options?: { label: string; value: string | number }[];
}

export const Select: FC<CustomSelectProps> = ({ options, ...props }) => {
  return <AntSelect options={options} {...props} />;
};
