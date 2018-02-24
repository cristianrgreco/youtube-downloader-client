import React from 'react'
import styled from 'styled-components'
import {lighten} from 'polished'

const StyledContainer = styled.div``

const StyledHeaders = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid ${props => lighten(.45, props.theme.colours.red)};
  padding: .25rem 0;
`

const StyledHeader = styled.span`
  min-width: 6rem;
  max-width: 6rem;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 .25rem;
  font-weight: bold;
`

const StyledRows = styled.div`
  flex-direction: column;
`

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${props => lighten(.45, props.theme.colours.red)};
  padding: .25rem 0;
  font-size: .8rem;
`

const StyledCell = styled.div`
  min-width: 6rem;
  max-width: 6rem;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 .25rem;
`

const range = length => new Array(length).fill(0)

const Table = ({data: {headers, rows}}) => (
  <StyledContainer>
    <StyledHeaders>
      {headers.map((header, i) => (
        <StyledHeader key={`headerKey-${i}`}>{header.label}</StyledHeader>
      ))}
    </StyledHeaders>
    <StyledRows>
      {range(rows.length).map((_, i) => (
        <StyledRow key={`key-${i}`}>
          {headers.map((header, j) => (
            <StyledCell key={`key-${j}`}>
              {header.key(rows[i])}
            </StyledCell>
          ))}
        </StyledRow>
      ))}
    </StyledRows>
  </StyledContainer>
)

export default Table
