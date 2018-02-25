import React from 'react'
import styled from 'styled-components'
import {lighten} from 'polished'

const StyledInput = styled.input`
  outline: none;
  color: ${props => props.theme.colours.black};
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.colours.grey};
  transition: border ${props => props.theme.transitionSpeed};

  &::placeholder {
    color: ${props => props.theme.colours.grey};
    transition: color ${props => props.theme.transitionSpeed};
  }

  &:focus {
    &::placeholder {
      color: ${props => lighten(0.25, props.theme.colours.grey)};
    }
  }
`

const Input = props => <StyledInput {...props} />

export default Input
