import React from 'react'
import styled from 'styled-components'
import Logo from '../components/logo'
import DownloadForm from './download-form'

const StyledLogo = styled.div`
  margin-bottom: 2rem;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App = () => (
  <StyledContainer>
    <StyledLogo>
      <Logo />
    </StyledLogo>
    <DownloadForm />
  </StyledContainer>
)

export default App
