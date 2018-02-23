import React from 'react'
import styled from 'styled-components'
import Input from '../../components/input'
import Button from '../../components/button'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledInput = styled.div`
  margin-right: .25rem;
`

const DownloadForm = () => (
  <StyledContainer>
    <StyledInput>
      <Input
        type="text"
        placeholder="https://www.youtube.com/watch?v=VIDEO-CODE"
      />
    </StyledInput>
    <Button type="button">Download</Button>
  </StyledContainer>
)

export default DownloadForm
