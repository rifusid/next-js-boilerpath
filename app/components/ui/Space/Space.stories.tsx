import type { Meta, StoryObj } from '@storybook/react';
import { Space } from './index';
import { Button } from '../Button';

const meta = {
  title: 'Components/Space',
  component: Space,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Space>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Button key="1">Button 1</Button>,
      <Button key="2">Button 2</Button>,
      <Button key="3">Button 3</Button>,
    ],
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    children: [
      <Button key="1">Button 1</Button>,
      <Button key="2">Button 2</Button>,
      <Button key="3">Button 3</Button>,
    ],
  },
};

export const WithSize: Story = {
  args: {
    size: 'large',
    children: [
      <Button key="1">Large</Button>,
      <Button key="2">Space</Button>,
      <Button key="3">Between</Button>,
    ],
  },
};
