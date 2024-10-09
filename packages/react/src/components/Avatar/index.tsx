import { ComponentProps } from 'react'

import { AvatarContainer } from './style'

export type avatarProps = ComponentProps<typeof AvatarContainer> & {
  userProfileImgSrc?: string
}

export const Avatar = ({ userProfileImgSrc, ...props }: avatarProps) => {
  return (
    <AvatarContainer {...props}>
      {userProfileImgSrc ? (
        <img src={userProfileImgSrc} alt="User Profile Image" />
      ) : (
        <span>L</span>
      )}
    </AvatarContainer>
  )
}
