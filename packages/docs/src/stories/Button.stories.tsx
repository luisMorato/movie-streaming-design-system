import type { Meta, StoryObj } from '@storybook/react'
import { CiCircleInfo } from 'react-icons/ci'
import { FiPlus } from 'react-icons/fi'
import { RiGoogleLine } from 'react-icons/ri'

import { Button, ButtonProps } from '@movie-streaming-ui/react'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    isSelected: false,
  },
  argTypes: {
    onClick: {
      action: 'click',
    },
    size: {
      options: ['sm', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
    rounded: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' },
    },
    textSize: {
      options: ['sm', 'xl', '2xl'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['primary', 'secondary', 'terciary', 'quaternary'],
      control: { type: 'inline-radio' },
    },
    isSelected: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Sign In',
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    children: (
      <>
        <FiPlus size={32} />
        My List
      </>
    ),
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Sign Up Now',
  },
}

export const SecondaryVariant: Story = {
  args: {
    variant: 'secondary',
    rounded: 'md',
    children: 'Adventure',
  },
}

export const SecondaryVariantSelected: Story = {
  args: {
    variant: 'secondary',
    rounded: 'md',
    isSelected: true,
    children: 'Adventure',
  },
}

// export const Terciary: Story = {
//   args: {
//     size: 'sm',
//     rounded: 'sm',
//     textSize: 'sm',
//     variant: 'terciary',
//   },
// }

export const LargeTerciary: Story = {
  args: {
    size: 'xl',
    rounded: 'sm',
    textSize: 'sm',
    variant: 'terciary',
    children: (
      <>
        <RiGoogleLine size={24} />
        <span>Sign in With Google</span>
      </>
    ),
  },
}

export const QuaternaryWithIcon: Story = {
  args: {
    size: 'lg',
    rounded: 'sm',
    textSize: 'sm',
    variant: 'quaternary',
    children: (
      <>
        <CiCircleInfo size={24} />
        <span>More Information</span>
      </>
    ),
  },
}
