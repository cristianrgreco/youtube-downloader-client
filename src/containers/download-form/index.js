import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {
  Input,
  Button,
  RadioGroup
} from '../../components'

import {
  setUrl,
  setType,
  download
} from '../../actions/download-form'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledRadioGroup = styled.div`
  margin: auto .25rem;
`

const DownloadForm = ({url, setUrl, type, setType, download}) => (
  <StyledContainer>
    <Input
      type="text"
      value={url}
      onChange={e => setUrl(e.target.value)}
      placeholder="https://www.youtube.com/watch?v=VIDEO-CODE"
    />
    <StyledRadioGroup>
      <RadioGroup
        selectedValue={type}
        onChange={value => setType(value)}
        entries={[
          {label: <FontAwesomeIcon icon={["fas", "video"]} fixedWidth />, value: 'VIDEO'},
          {label: <FontAwesomeIcon icon={["fas", "music"]} fixedWidth />, value: 'AUDIO'}
        ]}
      />
    </StyledRadioGroup>
    <Button type="button" onClick={() => download({url, type})}>Download</Button>
  </StyledContainer>
)

const mapStateToProps = state => ({
  url: state.form.url,
  type: state.form.type
})

const mapDispatchToProps = dispatch => ({
  setUrl: payload => dispatch(setUrl(payload)),
  setType: payload => dispatch(setType(payload)),
  download: payload => dispatch(download(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(DownloadForm)
