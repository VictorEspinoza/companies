import React from 'react'

import * as Styled from './index.styles'

interface Props {
  children: React.ReactNode
  onClick: () => void
  className?: string
}

const Button: React.FC<Props> = ({ children, onClick, className }) => (
  <Styled.Button className={className} onClick={onClick}>
    <Styled.Text>{children}</Styled.Text>
  </Styled.Button>
)

export default Button
