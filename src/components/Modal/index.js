import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import "./index.styl"

export const useModal = (initialIsVisible = false) => {
  const [ isVisible, setIsVisible ] = useState(initialIsVisible)
  
  const closeModal = () => {
    setIsVisible(false)
  }
  
  const openModal = () => {
    setIsVisible(true)
  }
  
  return [ { isVisible, closeModal }, openModal ]
}

const Modal = (props) => {
  const {  children, isVisible, closeModal } = props

  const renderModal = () => {
    return (
      <div className={ `${isVisible ? 'Modal isVisible' : 'Modal'}` }>
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