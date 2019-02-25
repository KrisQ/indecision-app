import React from 'react'
import { Link } from './Styles'

const Option = props => (
  <div>
    {props.optionText}
    <Link onClick={() => props.handleDeleteOption(props.optionText)}>
      Remove
    </Link>
  </div>
)

export default Option
