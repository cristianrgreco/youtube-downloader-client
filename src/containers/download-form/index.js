import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {Input, Button, RadioGroup} from '../../components'
import {setUrl, setType, download} from '../../actions/download-form'

const StyledRadioGroup = styled.div`
  margin: auto 0.5rem;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
    align-items: center;
    flex-direction: column;

    ${StyledRadioGroup} {
      margin: 0.5rem auto;
    }
  }
`

const DownloadForm = ({url, setUrl, type, setType, download}) => (
  <StyledForm
    onSubmit={e => {
      download({url, type})
      e.preventDefault()
    }}
  >
    <Input
      type="text"
      value={url}
      onChange={e => setUrl(e.target.value)}
      placeholder="https://www.youtube.com/watch?v=VIDEO-CODE"
      required
    />
    <StyledRadioGroup>
      <RadioGroup
        selectedValue={type}
        onChange={value => setType(value)}
        entries={[
          {
            label: <FontAwesomeIcon icon={['fas', 'video']} fixedWidth />,
            value: 'VIDEO',
            title: 'Video'
          },
          {
            label: <FontAwesomeIcon icon={['fas', 'music']} fixedWidth />,
            value: 'AUDIO',
            title: 'Audio'
          }
        ]}
      />
    </StyledRadioGroup>
    <Button>Download</Button>
  </StyledForm>
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
