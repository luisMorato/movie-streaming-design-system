import { ComponentProps, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import { InputWrapper, InputContainer, InputIcon } from './style'

export interface InputProps extends ComponentProps<typeof InputContainer> {}

export const Input = ({ type, ...props }: InputProps) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const handletogglePasswordShow = () => {
    setIsPasswordShown((prevValue) => !prevValue)
  }

  return (
    <InputWrapper>
      <InputContainer {...props} type={!isPasswordShown ? type : 'text'} />
      {type === 'password' && (
        <InputIcon onClick={handletogglePasswordShow}>
          {isPasswordShown ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
        </InputIcon>
      )}
    </InputWrapper>
  )
}
