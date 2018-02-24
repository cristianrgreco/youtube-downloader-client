import React from 'react'
import styled from 'styled-components'
import {Logo} from '../components'
import DownloadForm from './download-form'
import DownloadTable from './download-table'

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
