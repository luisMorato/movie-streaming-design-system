import { styled } from '../../styles/index'

export const UserProfileCardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',
  height: '440px',
  width: '$80',

  backgroundColor: 'transparent',
  border: '2px solid $zinc600',
  borderRadius: '$sm',
  color: '$white',
  fontFamily: '$default',
})

export const CoverImage = styled('img', {
  width: '100%',
  maxHeight: '$52',
  objectFit: 'cover',
})

export const CoverWithoutImage = styled('div', {
  backgroundColor: '$neutral600',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '$52',
})

export const UserProfileCardContent = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$8',
  transform: 'translateY(-72px)',

  '&>div:last-of-type': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$2',
  },

  h2: {
    margin: 0,
  },

  p: {
    color: '$neutral400',
    margin: 0,
  },

  'p:first-of-type': {
    fontSize: '$lg',
    marginBottom: '$2',
  },

  'p:last-of-type': {
    fontSize: '$2xl',
  },
})

UserProfileCardContainer.displayName = 'UserProfileCard'
