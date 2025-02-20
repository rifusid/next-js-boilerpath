import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
  },
};

export const WithIcon: Story = {
  args: {
    prefix: <UserOutlined />,
    placeholder: 'Username',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    prefix: <LockOutlined />,
    placeholder: 'Enter password',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    error: 'Please enter a valid email address',
  },
}; 