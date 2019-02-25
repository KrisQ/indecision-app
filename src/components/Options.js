import React from 'react'
import Option from './Option'
import { Link } from './Styles'

const Options = props => (
  <div>
    <Link onClick={props.handleDeleteOptions}>Remove All</Link>
    {props.options.length < 1 && <p>Please add an option to get started</p>}
    {props.options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
)

export default Options
