import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: .25rem .5rem;
  border: 1px solid ${props => props.theme.colours.red};
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1rem;
  color: white;
  background-color: ${props => props.theme.colours.red};
  cursor: pointer;
`

const Button = props => <StyledButton {...props} />

export default Button
