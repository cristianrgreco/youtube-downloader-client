import React from 'react'
import styled from 'styled-components'
import {lighten} from 'polished'

const StyledContainer = styled.div``

const StyledHeaders = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid ${props => lighten(.25, props.theme.colours.grey)};
  padding: .5rem .25rem;
`

const StyledHeader = styled.span`
  min-width: ${props => getSize(props.size)};
  max-width: ${props => getSize(props.size)};
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 .75rem;
  font-weight: bold;
`

const StyledRows = styled.div`
  flex-direction: column;
`

const StyledRow = styled.div`
  font-size: .8rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${props => lighten(.25, props.theme.colours.grey)};
  padding: .5rem .25rem;
  
  &:last-child {
    border-bottom: none;
  }
`

const StyledCell = styled.div`
  min-width: ${props => getSize(props.size)};
  max-width: ${props => getSize(props.size)};
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 .75rem;
`

const range = length => new Array(length).fill(0)

const getSize = size => {
  switch (size) {
    case 'small':
      return '2rem'
    case 'large':
      return '10rem'
    default:
      return '6rem'
  }
}

const getCellTitle = value => typeof value === 'string' ? value : null

const Table = ({data: {headers, rows}}) => (
  <StyledContainer>
    <StyledHeaders>
      {headers.map((header, i) => (
        <StyledHeader
          key={`headerKey-${i}`}
          size={header.size}
        >{header.label}</StyledHeader>
      ))}
    </StyledHeaders>
    <StyledRows>
      {range(rows.length).map((_, i) => (
        <StyledRow key={`key-${i}`}>
          {headers.map((header, j) => (
            <StyledCell
              key={`key-${j}`}
              size={header.size}
              title={getCellTitle(header.key(rows[i]))}
            >
              {header.key(rows[i])}
            </StyledCell>
          ))}
        </StyledRow>
      ))}
    </StyledRows>
  </StyledContainer>
)

export default Table
