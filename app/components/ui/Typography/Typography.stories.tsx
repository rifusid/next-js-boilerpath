import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './index';
import type { TitleProps, TextProps, ParagraphProps } from './index';

const meta = {
  title: 'Components/Typography',
  component: Typography.Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography.Title>;

export default meta;

type TitleStory = StoryObj<TitleProps>;
type TextStory = StoryObj<TextProps>;
type ParagraphStory = StoryObj<ParagraphProps>;

export const Title: TitleStory = {
  args: {
    children: 'This is a title',
    level: 1,
  },
  render: (args) => <Typography.Title {...args} />,
};

export const Text: TextStory = {
  args: {
    children: 'This is regular text',
  },
  render: (args) => <Typography.Text {...args} />,
};

export const Paragraph: ParagraphStory = {
  args: {
    children: 'This is a paragraph with some long text. It can contain multiple sentences and will wrap automatically when it reaches the edge of its container.',
  },
  render: (args) => <Typography.Paragraph {...args} />,
};

export const AllVariants = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Typography.Title level={1}>Heading 1</Typography.Title>
        <Typography.Title level={2}>Heading 2</Typography.Title>
        <Typography.Title level={3}>Heading 3</Typography.Title>
      </div>
      
      <div className="space-y-2">
        <Typography.Text>Regular Text</Typography.Text>
        <br />
        <Typography.Text strong>Bold Text</Typography.Text>
        <br />
        <Typography.Text italic>Italic Text</Typography.Text>
      </div>

      <div className="space-y-2">
        <Typography.Text type="secondary">Secondary Text</Typography.Text>
        <br />
        <Typography.Text type="success">Success Text</Typography.Text>
        <br />
        <Typography.Text type="warning">Warning Text</Typography.Text>
        <br />
        <Typography.Text type="danger">Danger Text</Typography.Text>
      </div>

      <Typography.Paragraph>
        This is a paragraph component that can contain long text with multiple sentences.
        It will automatically handle text wrapping and spacing.
      </Typography.Paragraph>
    </div>
  ),
};
