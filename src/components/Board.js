import React, { FC, useState } from "react";
import BoardContent from "./BoardContent";
import ModalForm from "./Modal/ModalForm";
import Button from "./Button";
import styled from "styled-components";

const StyledBoard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  min-height: ${({ isModal }) => (isModal ? "30vh" : "60vh")};
  padding: 0px 50px;
  margin: 50px;
  color: #16cc86;
  text-shadow: 2px 2px 5px green;
  box-shadow: 0 0 15px green;
  background: linear-gradient(
    225deg,
    rgba(3, 1, 15, 1) 0%,
    rgba(4, 2, 36, 1) 50%,
    rgba(7, 2, 32, 1) 100%
  );
  border-radius: 30px;
  .board__title {
    margin: 15px;
    ${({ title }) =>
      (title === "Expired" && {
        color: "#ff073a",
        textShadow: "2px 2px 5px red",
      }) ||
      (title === "Done" && {
        color: "#16cc86",
        textShadow: "2px 2px 5px green",
      }) ||
      (title === "In progress" && {
        color: "#FFF01F",
        textShadow: "2px 2px 5px yellow",
      })}
    font-size: 3.5vw;
  }

  @media only screen and (max-width: 992px) {
    width: 60vw;
    .board__title {
      font-size: 7vw;
    }
  }
  ${({ title }) =>
    (title === "Expired" && { boxShadow: " 0 0 15px red" }) ||
    (title === "Done" && { boxShadow: " 0 0 15px green" }) ||
    (title === "In progress" && { boxShadow: " 0 0 15px yellow" })}
`;

const dataTest = [
  { todoTitle: "Wash dishes", todoStatus: "In progress", todoTimeLeft: 100 },
  { todoTitle: "Clean Room", todoStatus: "Expired", todoTimeLeft: 0 },
  { todoTitle: "Grocery Store", todoStatus: "Done", todoTimeLeft: 50 },
  { todoTitle: "Wash dishes", todoStatus: "In progress", todoTimeLeft: 100 },
  { todoTitle: "Clean Room", todoStatus: "Expired", todoTimeLeft: 0 },
  { todoTitle: "Grocery Store", todoStatus: "Done", todoTimeLeft: 50 },
  { todoTitle: "Wash dishes", todoStatus: "In progress", todoTimeLeft: 100 },
  { todoTitle: "Clean Room", todoStatus: "Expired", todoTimeLeft: 0 },
  { todoTitle: "Grocery Store", todoStatus: "Done", todoTimeLeft: 50 },
  { todoTitle: "Wash dishes", todoStatus: "In progress", todoTimeLeft: 100 },
  { todoTitle: "Clean Room", todoStatus: "Expired", todoTimeLeft: 0 },
  { todoTitle: "Grocery Store", todoStatus: "Done", todoTimeLeft: 50 },
  { todoTitle: "Grocery Store", todoStatus: "Expired", todoTimeLeft: 50 },
];

const Board = ({ title = "", func = null, isModal = false }) => {
  const data = dataTest.filter((el) => el.todoStatus === title);
  return (
    <StyledBoard isModal={isModal} title={title}>
      {isModal && <Button isModal text="x" func={func}></Button>}
      <div className="board__title">{title}</div>
      {isModal ? <ModalForm /> : <BoardContent data={data} />}
    </StyledBoard>
  );
};

export default Board;
