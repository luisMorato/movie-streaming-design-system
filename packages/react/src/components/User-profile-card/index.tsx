import { ComponentProps } from 'react'
import {
  CoverImage,
  CoverWithoutImage,
  UserProfileCardContainer,
  UserProfileCardContent,
} from './style'

import { Avatar } from '../Avatar'
import { ClipLoader } from 'react-spinners'

export type userProfileCardProps = ComponentProps<typeof CoverImage>

export const UserProfileCard = ({ src, ...props }: userProfileCardProps) => {
  return (
    <UserProfileCardContainer>
      <header>
        {src ? (
          <CoverImage {...props} src={src} alt="User Profile Cover Image" />
        ) : (
          <CoverWithoutImage>
            <ClipLoader size={20} color="#FFF" />
          </CoverWithoutImage>
        )}
      </header>
      <UserProfileCardContent>
        <Avatar userProfileImgSrc="https://github.com/luisMorato.png" />
        <div>
          <h2>Luis Fernando Morato</h2>
          <p>luis@outlook.com</p>
          <p>User</p>
        </div>
      </UserProfileCardContent>
    </UserProfileCardContainer>
  )
}
