import React, { useState } from 'react'
import Modal from '../Modal'

const ModalContainer = (props) => {
    const { renderModal } = props
    const [ isModalVisible, setIsModalVisible ] = useState(false)

    const handleCloseModal = () => {
        setIsModalVisible(false)
    }

    return <Modal addModalToDOM={renderModal} isVisible={isModalVisible} closeModal={handleCloseModal} />
}

export default ModalContainer