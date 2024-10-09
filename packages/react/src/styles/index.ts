import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  radii,
  spacing,
} from '@movie-streaming-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
    maxWidth: 'space',
    maxHeight: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    radii,
    space: spacing,
  },
})
