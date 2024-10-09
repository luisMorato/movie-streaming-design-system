import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, avatarProps } from '@movie-streaming-ui/react'

const meta = {
  title: 'Display Data/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'lg'],
      control: { type: 'inline-radio' },
    },
    rounded: {
      options: ['md', 'lg'],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<avatarProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    userProfileImgSrc: 'https://github.com/luisMorato.png',
  },
}

export const PrimaryWithoutImage: Story = {
  args: {
    userProfileImgSrc: undefined,
  },
}

export const Secondary: Story = {
  args: {
    userProfileImgSrc: 'https://github.com/luisMorato.png',
    size: 'sm',
    rounded: 'lg',
  },
}

export const SecondaryWithoutImage: Story = {
  args: {
    userProfileImgSrc: undefined,
    size: 'sm',
    rounded: 'lg',
  },
}
