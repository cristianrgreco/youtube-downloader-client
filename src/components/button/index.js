import React from 'react'
import styled, {css} from 'styled-components'
import {lighten, darken} from 'polished'

const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.colours.red};
  color: ${props => props.theme.colours.white};
  background-color: ${props => props.theme.colours.red};
  transition: border, background-color ${props => props.theme.transitionSpeed};

  ${props =>
    props.secondary &&
    css`
      border: 1px solid ${props => props.theme.colours.grey};
      background-color: ${props => props.theme.colours.white};
      color: ${props => props.theme.colours.red};
    `} ${props =>
      props.small &&
      css`
        font-size: 0.75rem;
        padding: 0.2rem 0.25rem;
        border-radius: calc(${props => props.theme.borderRadius} * 0.75);
      `} &:hover {
    border: 1px solid ${props => darken(0.05, props.theme.colours.red)};
    background-color: ${props => darken(0.05, props.theme.colours.red)};

    ${props =>
      props.secondary &&
      css`
        border: 1px solid ${props => props.theme.colours.grey};
        background-color: ${props => darken(0.01, props.theme.colours.white)};
      `};
  }

  &:active {
    border: 1px solid ${props => darken(0.1, props.theme.colours.red)};
    background-color: ${props => darken(0.1, props.theme.colours.red)};

    ${props =>
      props.secondary &&
      css`
        border: 1px solid ${props => props.theme.colours.grey};
        background-color: ${props => darken(0.02, props.theme.colours.white)};
      `};
  }

  &:disabled {
    cursor: not-allowed;
    border: 1px solid ${props => lighten(0.45, props.theme.colours.red)};
    background-color: ${props => lighten(0.45, props.theme.colours.red)};

    ${props =>
      props.secondary &&
      css`
        border: 1px solid ${props => lighten(0.25, props.theme.colours.grey)};
        background-color: ${props => props.theme.colours.white};
        color: ${props => lighten(0.45, props.theme.colours.red)};
      `};
  }
`

const Button = props => <StyledButton {...props} />

export default Button
