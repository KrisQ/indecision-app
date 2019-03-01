import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './Styles'

const AddOption = props => {
  const [error, setError] = useState(undefined)

  const handleAddOption = e => {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = props.handleAddOption(option)
    setError(() => ({ error }))
    if (!error) {
      e.target.elements.option.value = ''
    }
  }
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
    border-bottom: 0.3rem solid #333;
    flex-grow: 1;
    margin-right: 0.5rem;
    color: ghostwhite;
    padding: 0.4rem;
  `
  return (
    <div>
      {error && <OptionError>{error}</OptionError>}
      <AddOption onSubmit={handleAddOption}>
        <GrowInput type="text" name="option" />
        <Button>Add Option</Button>
      </AddOption>
    </div>
  )
}

export default AddOption
