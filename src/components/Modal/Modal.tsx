import React, { FC, useState } from "react";
import Button from "../Button";
import Board from "../Board";
import "./Modal.css";

type Props = {
  text: string;
};
const Modal: FC<Props> = ({ text }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Button text={text} func={toggleModal}></Button>
      {modal && (
        <div className="overlay">
          <div className="modal-content">
            <Board title={text} func={toggleModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
