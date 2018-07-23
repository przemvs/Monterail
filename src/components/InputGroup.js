import styled from 'styled-components'

const InputGroup = styled.div`
  display: flex;
  align-items: ${props => (props.onStart ? 'flex-start' : 'center')};
  margin-top: 1em;
`

const Label = styled.div`
  color: #9aadc9;
  font-size: 0.875rem;
  font-weight: 500;
  
  text-transform: uppercase;
  
  flex: 1 0 15%;
  max-width: 15%;
  margin: 0.625em 0;
  
  span {
    color: red;
  }
`

const Value = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1 0 85%;
  max-width: 85%;
  
  > div:first-child {
    flex: 1 0 75%;
    max-width: 75%;
    width: 100%;
  }
`

const ValueGroup = styled.div`  
  display: flex;
  align-items: center;
  
  input[type=text] {
    max-width: 5.25em;
    margin-right: 1em;
  }
  
  input[type=date] {
    margin-right: 0.5em;
    max-width: 11em;
  }
  
  input[type=time] {
    max-width: 6.5em;
    margin: 0 0.5em;
  }
`

export { InputGroup, Label, Value, ValueGroup }
