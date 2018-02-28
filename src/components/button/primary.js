import React from 'react'
import {lighten, darken} from 'polished'
import ButtonBase from './base'

const StyledButton = ButtonBase.extend`
  border: 1px solid ${props => props.theme.colours.red};
  color: ${props => props.theme.colours.white};
  background-color: ${props => props.theme.colours.red};

  &:hover {
    border: 1px solid ${props => darken(0.05, props.theme.colours.red)};
    background-color: ${props => darken(0.05, props.theme.colours.red)};
  }

  &:active {
    border: 1px solid ${props => darken(0.1, props.theme.colours.red)};
    background-color: ${props => darken(0.1, props.theme.colours.red)};
  }

  &:disabled {
    border: 1px solid ${props => lighten(0.45, props.theme.colours.red)};
    background-color: ${props => lighten(0.45, props.theme.colours.red)};
  }
`

const ButtonPrimary = props => <StyledButton {...props} />

export default ButtonPrimary
