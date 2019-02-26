import React from 'react'
import styled from 'styled-components'
import { Button } from './Styles'

class AddOption extends React.Component {
  state = {
    error: undefined
  }

  handleAddOption = e => {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    this.setState(() => ({ error }))
    if (!error) {
      e.target.elements.option.value = ''
    }
  }
  render() {
    const OptionError = styled.p`
      color: #a5afd7;
      font-style: italic;
      padding: 0 0.5rem;
      margin: 1.5rem;
    `
    const AddOption = styled.form`
      display: flex;
      padding: 0.5rem;
    `

    const GrowInput = styled.input`
      background: #333745;
      border: none;
      border-bottom: .3rem solid #333;
      flex-grow: 1;
      margin-right: .5rem;
      color: ghostwhite;
      padding: .4rem;
    `
    return (
      <div>
        {this.state.error && <OptionError>{this.state.error}</OptionError>}
        <AddOption onSubmit={this.handleAddOption}>
          <GrowInput type="text" name="option" />
          <Button>Add Option</Button>
        </AddOption>
      </div>
    )
  }
}

export default AddOption
