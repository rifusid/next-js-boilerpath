import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './index';
import { CalendarOutlined } from '@ant-design/icons';

const meta = {
  title: 'UI/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    format: 'DD/MM/YYYY',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Select Date',
    format: 'DD/MM/YYYY',
  },
};

export const WithPrefix: Story = {
  args: {
    prefix: <CalendarOutlined />,
    format: 'DD/MM/YYYY',
  },
};

export const WithError: Story = {
  args: {
    label: 'Birth Date',
    error: 'Please select a valid date',
    format: 'DD/MM/YYYY',
  },
}; 