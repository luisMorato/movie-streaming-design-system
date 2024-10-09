import { styled } from '../../styles/index'

export const AvatarContainer = styled('div', {
  backgroundColor: '$neutral600',
  color: '$white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  fontWeight: '$semiBold',
  fontFamily: '$default',

  img: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },

  variants: {
    size: {
      sm: {
        height: '$10',
        width: '$10',
        fontSize: '$xs',
      },
      lg: {
        height: '$36',
        width: '$36',
        fontSize: '$5xl',
      },
    },
    rounded: {
      md: {
        borderRadius: '$2xl',
      },
      lg: {
        borderRadius: '$full',
      },
    },
  },

  defaultVariants: {
    size: 'lg',
    rounded: 'md',
  },
})

AvatarContainer.displayName = 'Avatar'
