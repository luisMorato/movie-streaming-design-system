import { Meta, StoryObj } from '@storybook/react'

import { Text, textProps } from '@movie-streaming-ui/react'

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description:
        'By default, the heading is always `p`, but is possible to change this via the `as` property',
    },
  },
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nostrum placeat! Quae, velit quisquam recusandae impedit labore sunt? Hic, ea amet? Eos quae vero expedita fuga omnis voluptates, tenetur ut.',
  },
  argTypes: {
    size: {
      options: ['xs', 'md', 'lg', 'xl', '2xl', '3xl'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<textProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
