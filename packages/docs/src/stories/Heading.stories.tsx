import { Meta, StoryObj } from '@storybook/react'

import { Heading, headingProps } from '@movie-streaming-ui/react'

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    docs: {
      description:
        'By default, the heading is always `h2`, but is possible to change this via the `as` property',
    },
  },
  tags: ['autodocs'],
  args: {
    children: 'Hello World',
  },
  argTypes: {
    size: {
      options: ['xs', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<headingProps>

export default meta
type Story = StoryObj<typeof meta>

export const extraLarge: Story = {
  args: {
    size: '5xl',
  },
}

export const large: Story = {
  args: {
    size: '4xl',
  },
}

export const medium: Story = {
  args: {
    size: '3xl',
  },
}
