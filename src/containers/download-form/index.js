import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import Input from '../../components/input'
import Button from '../../components/button'

import {
  setUrl,
  download
} from '../../actions/download-form'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledInput = styled.div`
  margin-right: .25rem;
`

const DownloadForm = ({url, setUrl, type, download}) => (
  <StyledContainer>
    <StyledInput>
      <Input
        type="text"
        value={url}
        placeholder="https://www.youtube.com/watch?v=VIDEO-CODE"
        onChange={e => setUrl(e.target.value)}
      />
    </StyledInput>
    <Button type="button" onClick={() => download({url, type})}>Download</Button>
  </StyledContainer>
)

const mapStateToProps = state => ({
  url: state.form.url,
  type: state.form.type
})

const mapDispatchToProps = dispatch => ({
  setUrl: payload => dispatch(setUrl(payload)),
  download: payload => dispatch(download(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(DownloadForm)
