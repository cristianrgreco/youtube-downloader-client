import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import {connect} from 'react-redux'
import Input from '../../components/input'
import Button from '../../components/button'
import RadioGroup from '../../components/radio-group'

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
          {label: <i className={classNames('fa', 'fa-fw', 'fa-video')} />, value: 'VIDEO'},
          {label: <i className={classNames('fa', 'fa-fw', 'fa-music')} />, value: 'AUDIO'}
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
