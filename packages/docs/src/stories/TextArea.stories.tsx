import { Meta, StoryObj } from '@storybook/react'

import { TextArea, textAreaProps } from '@movie-streaming-ui/react'

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
} satisfies Meta<textAreaProps>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    placeholder: 'Add the movie description for the movie',
  },
}
