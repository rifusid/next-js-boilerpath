import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './index';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

export const Default: Story = {
  args: {
    options: options,
    placeholder: 'Select an option',
  },
};

export const Multiple: Story = {
  args: {
    mode: 'multiple',
    options: options,
    placeholder: 'Select multiple options',
  },
};

export const Disabled: Story = {
  args: {
    options: options,
    disabled: true,
    placeholder: 'Disabled select',
  },
};

export const Loading: Story = {
  args: {
    options: options,
    loading: true,
    placeholder: 'Loading...',
  },
};
