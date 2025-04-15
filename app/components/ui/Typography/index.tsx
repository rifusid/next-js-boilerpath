import { Typography as AntTypography } from 'antd';
import type { TitleProps as AntTitleProps } from 'antd/es/typography/Title';
import type { TextProps as AntTextProps } from 'antd/es/typography/Text';
import type { ParagraphProps as AntParagraphProps } from 'antd/es/typography/Paragraph';
import { ReactNode } from 'react';

const { Title: AntTitle, Text: AntText, Paragraph: AntParagraph } = AntTypography;

export interface TitleProps extends Omit<AntTitleProps, 'ref'> {
  children?: ReactNode;
}

export interface TextProps extends Omit<AntTextProps, 'ref'> {
  children?: ReactNode;
  strong?: boolean;
  italic?: boolean;
  type?: 'secondary' | 'success' | 'warning' | 'danger';
}

export interface ParagraphProps extends Omit<AntParagraphProps, 'ref'> {
  children?: ReactNode;
}

export const Title = ({ children, ...props }: TitleProps) => {
  return <AntTitle {...props}>{children}</AntTitle>;
};

export const Text = ({ children, ...props }: TextProps) => {
  return <AntText {...props}>{children}</AntText>;
};

export const Paragraph = ({ children, ...props }: ParagraphProps) => {
  return <AntParagraph {...props}>{children}</AntParagraph>;
};

export const Typography = {
  Title,
  Text,
  Paragraph,
} as const;
