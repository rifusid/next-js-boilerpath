import { Space as AntSpace, SpaceProps } from 'antd';
import { FC } from 'react';

export interface CustomSpaceProps extends SpaceProps {
  children: React.ReactNode;
}

export const Space: FC<CustomSpaceProps> = ({ children, ...props }) => {
  return <AntSpace {...props}>{children}</AntSpace>;
};
