import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './index';
import { Button } from '../Button';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'Card content goes here',
  },
};

export const WithHeaderContent: Story = {
  args: {
    headerContent: <div className="text-right">Custom Header</div>,
    children: 'Card content with custom header',
  },
};

export const WithFooterContent: Story = {
  args: {
    title: 'Card with Footer',
    children: 'Card content',
    footerContent: (
      <div className="flex justify-end gap-2">
        <Button>Cancel</Button>
        <Button type="primary">Submit</Button>
      </div>
    ),
  },
}; 