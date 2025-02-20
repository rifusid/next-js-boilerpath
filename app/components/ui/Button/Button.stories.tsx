import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    buttonVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    type: {
      control: 'select',
      options: ['primary', 'default', 'dashed', 'link', 'text'],
    },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    buttonVariant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Danger: Story = {
  args: {
    buttonVariant: 'danger',
    children: 'Danger Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
}; 