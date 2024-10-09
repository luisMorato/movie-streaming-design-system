import { Meta, StoryObj } from '@storybook/react'

import { DragAndDrop, dragAndDropProps } from '@movie-streaming-ui/react'

const meta = {
  title: 'Components/Drag and Drop',
  component: DragAndDrop,
  tags: ['autodocs'],
} satisfies Meta<dragAndDropProps>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    handleDrop: (files: File[]) => {
      console.log(files)
    },
  },
}
