import React from 'react'
import styled from 'styled-components'
import {lighten, darken} from 'polished'

const StyledButton = styled.button`
  outline: none;
  color: ${props => props.theme.colours.white};
  cursor: pointer;
  font-size: 1rem;
  padding: .25rem .5rem;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => lighten(.1, props.theme.colours.red)};
  background-color: ${props => lighten(.1, props.theme.colours.red)};
  transition: border, background-color ${props => props.theme.transitionSpeed};
  
  &:hover {
    border: 1px solid ${props => props.theme.colours.red};
    background-color: ${props => props.theme.colours.red};  
  }
  
  &:active {
    border: 1px solid ${props => darken(.1, props.theme.colours.red)};
    background-color: ${props => darken(.1, props.theme.colours.red)};  
  }
`

const Button = props => <StyledButton {...props} />

export default Button
