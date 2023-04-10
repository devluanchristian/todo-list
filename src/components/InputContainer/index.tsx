import React, { ReactNode } from 'react'
import { InputContainerStyled } from './styled'

interface IInputContainer{
  children: ReactNode
}

const InputContainer = ({children}:IInputContainer) => {
  return (
    <InputContainerStyled>{children}</InputContainerStyled>
  )
}

export default InputContainer