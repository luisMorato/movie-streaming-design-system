import type { Meta, StoryObj } from '@storybook/react'

import {
  UserProfileCard,
  userProfileCardProps,
} from '@movie-streaming-ui/react'

const meta = {
  title: 'Display Data/User Profile Card',
  component: UserProfileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<userProfileCardProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    src: 'https://img.freepik.com/vetores-gratis/laptop-com-icone-de-codigo-isometrico-de-programa-desenvolvimento-de-software-e-aplicacoes-de-programacao-neon-escuro_39422-971.jpg?t=st=1728157240~exp=1728160840~hmac=501c9b8b264c04d044e6669b91fcc1668447bf8b72bebfd3fa8b8877ed8fe44f&w=1060',
  },
}

export const PrimaryWithoutCoverImage: Story = {
  args: {
    src: undefined,
  },
}
