import styled from 'styled-components'

const TimeFormat = styled.div`
  display: flex;  
`

const TimeFormatItem = styled.div`
  &:not(:first-child) {
    margin-left: 1em;
  }
`

export {TimeFormat, TimeFormatItem}
