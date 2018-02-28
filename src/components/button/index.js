import React from 'react'
import ButtonPrimary from './primary'
import ButtonSecondary from './secondary'

const Button = props =>
  props.secondary ? (
    <ButtonSecondary {...props} />
  ) : (
    <ButtonPrimary {...props} />
  )

export default Button
