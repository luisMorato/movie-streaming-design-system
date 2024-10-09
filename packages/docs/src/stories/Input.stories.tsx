import { Meta, StoryObj } from '@storybook/react'

import { Input, InputProps } from '@movie-streaming-ui/react'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'lg'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<InputProps>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    type: 'email',
    placeholder: 'Email',
  },
}

// Fix the logic to add the icon
export const primaryWithIcon: Story = {
  args: {
    type: 'password',
    placeholder: 'Password',
  },
}

export const secondary: Story = {
  args: {
    size: 'sm',
    variant: 'secondary',
    placeholder: 'Search...',
  },
}
