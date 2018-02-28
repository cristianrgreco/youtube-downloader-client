import React from 'react'
import styled, {css} from 'styled-components'

const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.borderRadius};
  transition: border, background-color ${props => props.theme.transitionSpeed};

  &:disabled {
    cursor: not-allowed;
  }

  ${props =>
    props.small &&
    css`
      font-size: 0.75rem;
      padding: 0.2rem 0.25rem;
      border-radius: calc(${props => props.theme.borderRadius} * 0.75);
    `};
`

export default StyledButton
