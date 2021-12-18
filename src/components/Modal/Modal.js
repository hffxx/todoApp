import React, { useState, useContext } from "react";
import { ApplicationContext } from "../../App";
import Button from "../Button";
import Board from "../Board";
import "./Modal.css";

const Modal = ({ text }) => {
  const { modal, setModal } = useContext(ApplicationContext);
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
            <Board isModal title={text} />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
