import React from 'react'
import Option from './Option'
import styled from 'styled-components'
import { Link, WidgetHeader } from './Styles'

const Message = styled.p`
  color: #a5afd7;
  padding: 1.7em;
  margin: 0;
  text-align: center;
  border-bottom: 1px solid #a5afd7;
`

const Options = props => (
  <div>
    <WidgetHeader>
      <h3 style={{ margin: 0 }}>Your Options</h3>
      <Link onClick={props.handleDeleteOptions}>Remove All</Link>
    </WidgetHeader>
    {props.options.length < 1 && <Message>Please add an option to get started</Message>}
    {props.options.map((option, index) => (
      <Option
        key={option}
        optionText={option}
        count={index + 1}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
)

export default Options
