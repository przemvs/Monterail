import styled from 'styled-components'

const FormGroup = styled.div`
  background: ${props => (props.success ? 'rgba(222, 255, 222, 0.35)' : '#fff')};
  border-radius: 0.25em;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 1.25em 2.5em;
  margin-top: 1.5em;
`

const Title = styled.h2`
  border-bottom: ${props => !props.success && '1px solid #d8d8da'};
  color: ${props => (props.success ? '#59de59' : '#355990')};
  font-weight: 400;
  padding-bottom: ${props => !props.success && '0.5em'};
  margin-bottom: ${props => (props.success ? '0.5em' : '1em')};
`

export { FormGroup, Title }
