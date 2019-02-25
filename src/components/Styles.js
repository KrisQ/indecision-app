import styled from 'styled-components'

const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 1.6rem;
`

const Button = styled.button`
  background: #8358c5;
  border: none;
  border-bottom: 0.3rem solid #6c49a3;
  color: ghostwhite;
  font-weight: 500;
  padding: 0.7rem;
`

const Link = styled.button`
  background: none;
  border: none;
  color: #a5afd7;
  padding: 0;
  cursor: pointer;
`

export { Container, Button, Link }
