import type { Preview } from '@storybook/react'
import { themes } from 'storybook/internal/theming'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    darkMode: {
      dark: { ...themes.dark },
    },
  },
}

export default preview
