import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')
const ReactModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div>
        <button onClick={() => setModalIsOpen(true)}>Open modal</button>
      <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} 
      onRequestClose={() => setModalIsOpen(false)}
      style={
        {
            overlay: {
            background: 'gray',
        },
        content: {
            color: 'orange'
        }
    }
      }>
        <h2>Modal title</h2>
        <p>Modal Body</p>
        <div>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  )
}

export default ReactModal
