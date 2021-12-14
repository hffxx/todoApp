import React, { useState } from "react";
import Button from "../Button";
import Board from "../Board";
import "./Modal.css";

const Modal = ({ text }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const disablePropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <Button text={text} func={toggleModal}></Button>
      {modal && (
        <div className="overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => disablePropagation(e)}>
            <Board title={text} func={toggleModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
