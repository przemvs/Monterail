import React from 'react'
import styled from 'styled-components'
import {Container} from 'components'

const Wrapper = styled.header`
  background: #355990;
  border-top: 1em solid #1e3b68;
  width: 100%;
`

const Title = styled.h1`
  color: #fff;
  font-weight: 300;
  padding: 0.625em;
`

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          New event
        </Title>
      </Container>
    </Wrapper>
  )
}

export default Header
