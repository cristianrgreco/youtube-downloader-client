import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import queryString from 'query-string'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {Table, Button, ProgressBar} from '../../components'

const StyledContainer = styled.div``

const getVideoId = url => queryString.parseUrl(url).query.v

const getType = type =>
  type === 'AUDIO' ? (
    <FontAwesomeIcon icon={['fas', 'music']} fixedWidth />
  ) : (
    <FontAwesomeIcon icon={['fas', 'video']} fixedWidth />
  )

const getProgress = (state, progress) =>
  (progress === null || state !== 'DOWNLOADING') && state !== 'COMPLETE' ? (
    <ProgressBar indeterminate />
  ) : (
    <ProgressBar min={0} max={100} value={progress} />
  )

const getDownload = downloadUrl => (
  <a type="download" href={downloadUrl}>
    <Button secondary small disabled={downloadUrl === null}>
      <FontAwesomeIcon icon={['fas', 'download']} fixedWidth />
    </Button>
  </a>
)

const formatData = downloads => ({
  headers: [
    {
      key: row => row.id,
      label: 'Video ID'
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
      label: 'Status'
    },
    {
      key: row => row.download,
      label: '',
      size: 'small'
    }
  ],
  rows: downloads.map(download => ({
    ...download,
    id: getVideoId(download.url),
    type: getType(download.type),
    progress: getProgress(download.state, download.progress),
    download: getDownload(download.download)
  }))
})

const DownloadTable = ({downloads}) => (
  <StyledContainer>{downloads.length > 0 && <Table data={formatData(downloads)} />}</StyledContainer>
)

const mapStateToProps = state => ({
  downloads: state.downloads
})

export default connect(mapStateToProps)(DownloadTable)
