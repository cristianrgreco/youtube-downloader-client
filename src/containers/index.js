import React from 'react'
import styled, {injectGlobal} from 'styled-components'
import {Logo} from '../components'
import DownloadForm from './download-form'
import DownloadTable from './download-table'

injectGlobal`
  html {
    font-size: 26px;
    min-width: 320px;
    
    @media (max-width: 670px) {
      font-size: 22px;
    }
    
    @media (max-width: 570px) {
      font-size: 18px;
    }
    
    @media (max-width: 470px) {
      font-size: 14px;
    }
    
    @media (max-width: 370px) {
      font-size: 12px;
    }
  }
  
  body {
    margin: 2rem;
    padding: 0;
  }
  
  body, input, button {
    color: #111;
    font-family: Arial, sans-serif;
  }
`

const StyledLogo = styled.div`
  margin-bottom: 2rem;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledDownloadForm = styled.div`
  margin-bottom: 2rem;
`

const App = () => (
  <StyledContainer>
    <StyledLogo>
      <Logo />
    </StyledLogo>
    <StyledDownloadForm>
      <DownloadForm />
    </StyledDownloadForm>
    <DownloadTable />
  </StyledContainer>
)

export default App
