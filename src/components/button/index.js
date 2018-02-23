import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: .25rem .5rem;
  border: 1px solid lightgrey;
  border-radius: .25rem;
  font-size: 1rem;
  color: white;
  background-color: #D4252C;
  cursor: pointer;
`

const Button = props => <StyledButton {...props} />

export default Button
