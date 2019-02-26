import React from 'react'
import styled from 'styled-components'
import { Link } from './Styles'

const OtionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.3rem;
  border-bottom: 1px solid #a5afd7;
`

const OptionParagraph = styled.p`
  color: ghostwhite;
  font-weight: 500;
  font-size: 1.4rem;
  margin: 0;
`

const Option = props => (
  <OtionWrapper>
    <OptionParagraph>
      {props.count}. {props.optionText}
    </OptionParagraph>
    <Link onClick={() => props.handleDeleteOption(props.optionText)}>
      Remove
    </Link>
  </OtionWrapper>
)

export default Option
