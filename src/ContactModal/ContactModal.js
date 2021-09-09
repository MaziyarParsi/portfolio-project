import React, { useState } from "react"
import Modal from "react-modal"

const ContactModal = ({ status }) => {
  const [isopen, setIsOpen] = useState(status)

  return (
    <Modal isOpen={isopen}>
      <h2>this is a contact modal</h2>
      <p>this is paragraph</p>
    </Modal>
  )
}

export default ContactModal
