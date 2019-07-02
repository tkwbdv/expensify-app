import React from "react"
import Modal from "react-modal";

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root'); // prevents error when testing

const ConfirmModal = ({ showModal, onCloseModal, onRemove }) => {
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={onCloseModal}
      overlayClassName="overlay"
      className="modal"
      closeTimeoutMS={200}
      contentLabel="confirm Remove"
    >
      <h3 className="modal__title">Remove this expense?</h3>
      <div className="modal__button-container">
        <button className="button button--secondary button--confirm" onClick={onRemove}>Yes</button>
        <button className="button button--confirm" onClick={onCloseModal}>No</button>
      </div>
    </Modal>
  );
};

export { ConfirmModal as default };