import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles/index'

export const Text = styled('p', {
  color: '$white',
  fontFamily: '$default',
  lineHeight: 1.6,
  margin: 0,

  variants: {
    size: {
      xs: {
        fontSize: '$xs',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
      xl: {
        fontSize: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
      },
      '3xl': {
        fontSize: '$3xl',
      },
    },
    variant: {
      primary: { color: '$white' },
      secondary: { color: '$neutral400' },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})

Text.displayName = 'Text'

export type textProps = ComponentProps<typeof Text> & {
  as?: ElementType
}
