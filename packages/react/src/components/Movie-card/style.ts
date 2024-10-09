import { styled } from '../../styles/index'

export const MovieInfo = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  transform: 'translateY(100%)',

  backgroundColor: '$black-opc80',
  boxSizing: 'border-box',
  paddingBlock: '$2',
  paddingInline: '$4',
  color: '$white',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  fontWeight: '$semiBold',
  fontFamily: '$default',
  width: '100%',

  transition: 'transform 0.3s ease-in-out',

  p: {
    fontSize: '$xl',
    margin: 0,
  },
})

export const MovieCardContainer = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '$sm',

  cursor: 'pointer',
  maxWidth: '$80',
  maxHeight: '28rem',

  '&>img': {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },

  '&:hover': {
    [`${MovieInfo}`]: {
      transform: 'translateY(0)',
    },
  },
})

export const MovieDetails = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  '&>span': {
    color: '$neutral600',
  },

  '&>div': {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',

    svg: {
      color: '$red600',
    },
  },
})

MovieCardContainer.displayName = 'MovieCard'
