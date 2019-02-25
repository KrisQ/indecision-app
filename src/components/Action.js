import React from 'react'
import styled from 'styled-components'

const Action = props => {
  const BigButton = styled.button`
    background-color: ${props.styleProps.purple};
    border: none;
    border-bottom: .3rem solid #6c49a3;
    color: ghostwhite;
    font-weight: bold;
    font-size: 2.2rem;
    width: 100%;
    margin-bottom: 3rem;
    padding: 1.5rem;
    cursor: pointer;
    :disabled {
      opacity: .5;
    }
  `
  return (
    <div>
      <BigButton onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </BigButton>
    </div>
  )
}

export default Action
