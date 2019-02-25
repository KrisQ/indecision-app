import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'
import styled from 'styled-components'
import { Container } from './Styles'

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
      console.log('Component mounted 🚀')
    } catch (e) {
      console.log(`🤬 Error:  ${e}`)
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
      console.log('Saving data... ⚙️')
    }
  }
  componentWillUnmount() {
    console.log('DESTROY 🔥')
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }))
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    this.setState(() => ({ selectedOption: option }))
  }
  handleAddOption = option => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState(prevState => ({ options: [...prevState.options, option] }))
  }
  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer'
    const styleProps = {
      offBlack: '#20222b',
      offWhite: '#a5afd7',
      darkBlue: '#333745',
      sSize: '0.8rem',
      mSize: '1.6rem',
      lSize: '2.5rem'
    }
    const Wrapper = styled.div`
      font-family: 'Roboto', 'Helvetica Neue', 'sans-serif';
      background: ${styleProps.darkBlue};
      height: 100vh;
    `
    return (
      <Wrapper>
        <Header styleProps={styleProps} subtitle={subtitle} />
        <Container>
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption} />
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleCloseModal={this.handleCloseModal}
          />
        </Container>
      </Wrapper>
    )
  }
}

export default IndecisionApp
