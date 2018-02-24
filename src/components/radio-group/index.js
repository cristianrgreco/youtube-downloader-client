import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import {lighten, darken} from 'polished'

const StyledContainer = styled.div`
  display: flex;
`

const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  padding: .25rem .5rem;
  border: 1px solid ${props => props.theme.colours.grey};
  background-color: ${props => props.theme.colours.white};
  transition: background-color ${props => props.theme.transitionSpeed};
  
  &:hover {
    background-color: ${props => darken(.02, props.theme.colours.white)};  
  }

  &:active {
    background-color: ${props => darken(.04, props.theme.colours.white)};  
  }
  
  &:not(.first) {
    border-left: none;
  }
  
  &.first {
    border-top-left-radius: ${props => props.theme.borderRadius};
    border-bottom-left-radius: ${props => props.theme.borderRadius};
  }
  
  &.last {
    border-top-right-radius: ${props => props.theme.borderRadius};
    border-bottom-right-radius: ${props => props.theme.borderRadius};
  }
`

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`

const StyledSpan = styled.span`
  cursor: pointer;
  color: ${props => lighten(.45, props.theme.colours.red)};
  transition: color ${props => props.theme.transitionSpeed};
`

const StyledInput = styled.input`
  display: none;
  
  &:checked + ${StyledSpan} {
    color: ${props => props.theme.colours.red};
  }
`

const RadioGroup = ({selectedValue, onChange, entries}) => (
  <StyledContainer>
    {entries.map(({label, value}, i) => (
      <StyledButton
        key={`key-${i}`}
        onClick={() => onChange(value)}
        className={classNames({first: i === 0, last: i === entries.length - 1})}
      >
        <StyledLabel>
          <StyledInput
            type="radio"
            value={value}
            checked={value === selectedValue}
            readOnly={true}
          />
          <StyledSpan>{label}</StyledSpan>
        </StyledLabel>
      </StyledButton>
    ))}
  </StyledContainer>
)

export default RadioGroup
