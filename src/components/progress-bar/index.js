import React from 'react'
import styled from 'styled-components'
import {lighten} from 'polished'

const height = '6px'

const StyledContainer = styled.div`
  width: 100%;
  height: ${height};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => lighten(.25, props.theme.colours.grey)};
  position: relative;
  overflow: hidden;
`

const StyledProgress = styled.div`
  width: ${props => `${props.value}%`};
  height: ${height};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colours.red};
`

const StyledIndeterminateProgress = styled.div`
  width: 75%;
  height: ${height};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colours.red};
  animation: indeterminate linear 1s infinite;
  position: absolute;
  
  @keyframes indeterminate {
    from {
      left: -100%;
    }
    to {
      left: 100%;
    }
  }
`

const percentageComplete = (min, max, value) => (value / (max - min)) * 100

const ProgressBar = ({min, max, value, indeterminate}) => (
  <StyledContainer>
    {indeterminate ? (
      <StyledIndeterminateProgress />
    ) : (
      <StyledProgress value={percentageComplete(min, max, value)} />
    )}
  </StyledContainer>
)

export default ProgressBar
