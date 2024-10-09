import { ComponentProps } from 'react'
import { styled } from '../../styles/index'

export const TextArea = styled('textarea', {
  backgroundColor: '$zinc950',
  color: '$white',
  borderRadius: '$sm',
  padding: '$4',
  fontSize: '$md',
  fontWeight: '$medium',
  border: 'none',
  outline: 'none',

  width: '100%',
  maxWidth: '560px',
  height: '$16',
  maxHeight: '$32',

  '&::placeholder': {
    color: '$white',
  },
})

TextArea.displayName = 'TextArea'

export type textAreaProps = ComponentProps<typeof TextArea>
