import React from 'react'
import { createPortal } from 'react-dom'
import "./index.styl"

const Modal = (props) => {
  const { addModalToDOM, children, isVisible, closeModal } = props

  const renderModal = () => {
    return (
      <div className={ `${isVisible || addModalToDOM ? 'Modal isVisible' : ''}` }>
        <div className="ModalContainer">
          <button onClick={ closeModal }>close</button>
          { children }
        </div>
      </div>
    )
  }

  return createPortal(
    renderModal(),
    document.body
  )
}

export default Modal