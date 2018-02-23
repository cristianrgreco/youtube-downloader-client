import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  padding: .25rem .5rem;
  border: 1px solid lightgrey;
  border-radius: .25rem;
  font-size: 1rem;
`

const Input = props => <StyledInput {...props} />

export default Input
