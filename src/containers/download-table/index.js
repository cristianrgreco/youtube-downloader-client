import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import queryString from 'query-string'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {
  Table,
  Button,
  ProgressBar
} from '../../components'

const StyledContainer = styled.div``

const StyledDownloadButtonLabel = styled.span`
  margin-left: .25em;
`

const getVideoId = url => queryString.parseUrl(url).query.v

const getType = type => type === 'AUDIO'
  ? <FontAwesomeIcon icon={["fas", "music"]} fixedWidth />
  : <FontAwesomeIcon icon={["fas", "video"]} fixedWidth />

const getProgress = progress => progress === null
  ? <ProgressBar indeterminate />
  : <ProgressBar min={0} max={100} value={progress} />

const getDownload = downloadUrl => (
  <a type="download" href={downloadUrl}>
    <Button small disabled={downloadUrl === null}>
      <FontAwesomeIcon icon={["fas", "download"]} fixedWidth />
      <StyledDownloadButtonLabel>Download</StyledDownloadButtonLabel>
    </Button>
  </a>
)

const formatData = rows => ({
  headers: [
    {
      key: row => row.id,
      label: 'Video ID',
    },
    {
      key: row => row.type,
      label: '',
      size: 'small'
    },
    {
      key: row => row.name,
      label: 'Name',
      size: 'large'
    },
    {
      key: row => row.progress,
      label: 'Status',
    },
    {
      key: row => row.download,
      label: ''
    }
  ],
  rows: rows.map(row => ({
    ...row,
    id: getVideoId(row.url),
    type: getType(row.type),
    progress: getProgress(row.progress),
    download: getDownload(row.download)
  }))
})

const DownloadTable = ({data}) => (
  <StyledContainer>
    <Table data={formatData(data)} />
  </StyledContainer>
)

const mapStateToProps = state => ({
  data: [
    {
      url: 'https://www.youtube.com/watch?v=LsoLEjrDogU',
      name: null,
      type: 'VIDEO',
      progress: null,
      status: 'RESOLVING',
      download: null
    },
    {
      url: 'https://www.youtube.com/watch?v=pjTj-_55WZ8',
      name: 'Rudimental - These Days feat. Jess Glynne',
      type: 'AUDIO',
      progress: 35.8,
      status: 'DOWNLOADING',
      download: null
    },
    {
      url: 'https://www.youtube.com/watch?v=xpVfcZ0ZcFM',
      name: 'Drake - God’s Plan',
      type: 'VIDEO',
      progress: 100,
      status: 'CONVERTING',
      download: null
    },
    {
      url: 'https://www.youtube.com/watch?v=XataOVgLvEQ',
      name: 'Not3s, Mabel - My Lover (Radio Edit) (Official Video)',
      type: 'AUDIO',
      progress: 100,
      status: 'COMPLETE',
      download: 'https://www.youtube.com/watch?v=XataOVgLvEQ'
    }
  ]
})

export default connect(mapStateToProps)(DownloadTable)
