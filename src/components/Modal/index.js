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
  const { children, isVisible, closeModal } = props

  const renderModal = () => {
    return (
      <div className={ `${isVisible ? 'Modal isVisible' : 'Modal'}` }>
        <div className="ModalContainer">
          <button className="ModalClose" onClick={ closeModal }><svg className="ModalCloseIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.976 51.976"><title>Close Modal</title><path fill="white" d="M44.373 7.603c-10.137-10.137-26.632-10.138-36.77 0-10.138 10.138-10.137 26.632 0 36.77s26.632 10.138 36.77 0c10.137-10.138 10.137-26.633 0-36.77zm-8.132 28.638a2 2 0 01-2.828 0l-7.425-7.425-7.778 7.778a2 2 0 11-2.828-2.828l7.778-7.778-7.425-7.425a2 2 0 112.828-2.828l7.425 7.425 7.071-7.071a2 2 0 112.828 2.828l-7.071 7.071 7.425 7.425a2 2 0 010 2.828z"/></svg></button>
          <div className="ButtonContainer">
            <h3>Meditation Level</h3>
            <ul className="ButtonList">
              <li><button class="Button" type="button">Light Meditation</button></li>
              <li><button class="Button" type="button">Average Meditation</button></li>
              <li><button class="Button" type="button">Deep Meditation</button></li>
              <li><button class="Button" type="button">Next Level</button></li>
            </ul>
          </div>
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