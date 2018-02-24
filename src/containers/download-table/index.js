import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {Table} from '../../components'

const StyledContainer = styled.div``

const formatData = data => {
  return data
}

const DownloadTable = ({data}) => (
  <StyledContainer>
    <Table data={formatData(data)} />
  </StyledContainer>
)

const mapStateToProps = state => ({
  data: {
    headers: [
      {
        key: row => row.url,
        label: 'URL'
      },
      {
        key: row => row.type,
        label: 'Type'
      },
      {
        key: row => row.name,
        label: 'Name'
      },
      {
        key: row => row.progress,
        label: 'Progress'
      },
      {
        key: row => row.status,
        label: 'Status'
      },
      {
        key: row => row.download,
        label: 'Download'
      }
    ],
    rows: [
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
  }
})

export default connect(mapStateToProps)(DownloadTable)
