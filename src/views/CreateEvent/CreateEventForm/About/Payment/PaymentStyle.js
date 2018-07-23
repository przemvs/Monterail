import styled from 'styled-components'

const PaymentStyle = styled.div`
  display: flex;
  align-items: center;
`

const PaymentItem = styled.div`
  &:not(:first-child) {
    margin-left: 1em;
  }
`

export {PaymentStyle, PaymentItem}
