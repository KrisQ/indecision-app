import React from 'react'
import styled from 'styled-components'
import { Container } from './Styles'

const Header = props => {
  const HeaderWrapper = styled.div`
    background: ${props.styleProps.offBlack};
    margin-bottom: 4.8rem;
    padding: ${props.styleProps.mSize} 0;
    color: ghostwhite;
  `
  const Title = styled.h1`
    font-size: ${props.styleProps.lSize};
    margin: 0;
  `
  const Subtitle = styled.h2`
    color: ${props.styleProps.offWhite};
    font-size: ${props.styleProps.mSize};
    font-weight: 500;
    margin: 0;
  `
  return (
    <HeaderWrapper>
      <Container>
        <Title>{props.title}</Title>
        {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
      </Container>
    </HeaderWrapper>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

export default Header
