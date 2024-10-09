import type { Meta, StoryObj } from '@storybook/react'

import { MovieCard, movieCardProps } from '@movie-streaming-ui/react'

const meta = {
  title: 'Components/Movie Poster',
  component: MovieCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<movieCardProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    imgSrc:
      'https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/01/IMG_2893-482x713.jpeg',
    movieName: 'The Joker',
    movieLaunchDate: '2022',
    movieRating: 8.6,
  },
}
