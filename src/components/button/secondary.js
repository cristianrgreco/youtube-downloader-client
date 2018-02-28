import React from 'react'
import {lighten, darken} from 'polished'
import ButtonBase from './base'

const StyledButton = ButtonBase.extend`
  border: 1px solid ${props => props.theme.colours.grey};
  color: ${props => props.theme.colours.red};
  background-color: ${props => props.theme.colours.white};

  &:hover {
    border: 1px solid ${props => props.theme.colours.grey};
    background-color: ${props => darken(0.01, props.theme.colours.white)};
  }

  &:active {
    border: 1px solid ${props => props.theme.colours.grey};
    background-color: ${props => darken(0.02, props.theme.colours.white)};
  }

  &:disabled {
    border: 1px solid ${props => lighten(0.25, props.theme.colours.grey)};
    background-color: ${props => props.theme.colours.white};
    color: ${props => lighten(0.45, props.theme.colours.red)};
  }
`

const ButtonSecondary = props => <StyledButton {...props} />

export default ButtonSecondary
