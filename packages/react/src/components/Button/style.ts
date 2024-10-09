import { ComponentProps } from 'react'
import { styled } from '../../styles/index'

export const Button = styled('button', {
  color: '$white',
  border: '1px solid transparent',
  fontWeight: '$medium',
  cursor: 'pointer',
  transition: 'ease-in-out 0.2s',
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  gap: 8,

  '&>span': {
    flexGrow: 1,
    textAlign: 'center',
  },

  variants: {
    size: {
      sm: {
        paddingBlock: '$2',
        paddingInline: '$6',
      },
      lg: {
        paddingBlock: '$3',
        paddingInline: '$6',
      },
      xl: {
        paddingBlock: '$2',
        paddingInline: '$4',
        width: '$100',
      },
    },
    rounded: {
      sm: {
        borderRadius: 6,
      },
      md: {
        borderRadius: 24,
      },
    },
    textSize: {
      sm: {
        fontSize: '$xs',
      },
      xl: {
        fontSize: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
      },
    },
    variant: {
      primary: {
        backgroundColor: '$red600',

        '&:hover': {
          backgroundColor: 'transparent',
          border: '1px solid $red600',
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        border: '1px solid $red600',

        '&:hover': {
          backgroundColor: '$red600',
        },
      },
      terciary: {
        backgroundColor: 'transparent',
        border: '1px solid #FFF',
      },
      quaternary: {
        backgroundColor: '$white-opc30',
        border: '1px solid #FFF',
      },
    },
    isSelected: {
      true: {
        backgroundColor: '$red600',
      },
    },
  },

  defaultVariants: {
    size: 'lg',
    rounded: 'sm',
    textSize: '2xl',
    variant: 'primary',
    isSelected: false,
  },
})

Button.displayName = 'Button'

export type ButtonProps = ComponentProps<typeof Button> & {
  isSelected?: boolean
}
