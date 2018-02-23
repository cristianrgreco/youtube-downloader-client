import React from 'react'
import styled from 'styled-components'
import {lighten} from 'polished'

const StyledInput = styled.input`
  outline: none;
  color: ${props => props.theme.colours.black};
  font-size: 1rem;
  padding: .25rem .5rem;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => lighten(.5, props.theme.colours.black)};
  transition: border ${props => props.theme.transitionSpeed};
 
  &::placeholder {
    color: ${props => lighten(.5, props.theme.colours.black)};
    transition: color ${props => props.theme.transitionSpeed}
  } 
  
  &:focus {
    &::placeholder {
      color: ${props => lighten(.75, props.theme.colours.black)};
    }
  }
`

const Input = props => <StyledInput {...props} />

export default Input
