import React, { ReactNode } from 'react'
import { Button as ButtonComponent } from './Button.styled'

type Props = {
  variant: 'primary' | 'secondary',
  children: ReactNode
}

export const Button: React.FC<Props> = ({ variant, children }) => {
  return (
    <ButtonComponent variant={variant} >{children}</ButtonComponent>
  )
}
