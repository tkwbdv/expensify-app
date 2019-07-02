import React from "react"
import Modal from "react-modal";

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root'); // prevents error when testing

const LoginModal = ({ showModal, onCloseModal, children }) => {
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={onCloseModal}
      contentLabel="confirm Remove"
      overlayClassName="overlay"
      closeTimeoutMS={200}
      className="modal__login"
    >
      {children}
    </Modal>
  );
};

export { LoginModal as default };