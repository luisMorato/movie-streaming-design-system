import { styled } from '../../styles/index'

export const InputWrapper = styled('div', {
  position: 'relative',
  width: 'fit-content',
})

export const InputContainer = styled('input', {
  paddingInline: '$4',
  borderRadius: '$sm',
  outline: 'none',
  border: 'none',
  fontSize: '$lg',
  color: '$white',
  position: 'relative',

  variants: {
    size: {
      sm: {
        paddingBlock: '$2',
        width: '22.5rem',
      },
      lg: {
        paddingBlock: '$4',
        width: '26.25rem',
      },
    },
    variant: {
      primary: {
        backgroundColor: '$zinc950',

        '&::placeholder': {
          color: '$white',
          fontWeight: '$medium',
          fontSize: '$lg',
        },

        '&:focus': {
          outline: '1px solid $red600',
        },
      },
      secondary: {
        backgroundColor: '$black-opc30',

        '&::placeholder': {
          fontWeight: '$regular',
        },
      },
    },
  },

  defaultVariants: {
    size: 'lg',
    variant: 'primary',
  },
})

export const InputIcon = styled('span', {
  color: '$white',
  cursor: 'pointer',

  position: 'absolute',
  right: 20,
  top: '50%',
  transform: 'translateY(-50%)',
  width: 'fit-content',
})

InputWrapper.displayName = 'Input'
