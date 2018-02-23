import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'

const StyledLogo = styled.img`
  width: 16rem;
`

const Logo = () => <StyledLogo src={logo} alt="YouTube"/>

export default Logo
