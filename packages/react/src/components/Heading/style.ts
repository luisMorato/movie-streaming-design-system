import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles/index'

export const Heading = styled('h2', {
  color: '$white',
  fontFamily: '$default',

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
      '4xl': {
        fontSize: '$4xl',
      },
      '5xl': {
        fontSize: '$5xl',
      },
      '6xl': {
        fontSize: '$6xl',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

Heading.displayName = 'Heading'

export type headingProps = ComponentProps<typeof Heading> & {
  as?: ElementType
}
