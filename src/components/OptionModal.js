import React from 'react'
import Modal from 'react-modal'
import { ModalStyles } from './Styles'

const OptionModal = props => (
  <ModalStyles>
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleCloseModal}
      contentLabel="Selected Option"
    >
      <h3>Selected Option:</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleCloseModal}>Okay</button>
    </Modal>
  </ModalStyles>
)

export default OptionModal
