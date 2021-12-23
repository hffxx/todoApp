import React, { useContext } from "react";
import BoardContent from "./BoardContent";
import ModalForm from "./Modal/ModalForm";
import Button from "./Button";
import styled from "styled-components";
import { ApplicationContext } from "../App";

const textShadowRed = "2px 2px 5px red";
const textShadowGreen = "2px 2px 5px green";
const textShadowYellow = "2px 2px 5px yellow";

const StyledBoard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  min-height: ${({ isModal }) => (isModal ? "30vh" : "50vh")};
  padding: 0px 10px 25px 10px;
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
    font-size: 3.5vw;
  }
  @media only screen and (max-width: 1200px) {
    width: 60vw;
    .board__title {
      font-size: 7vw;
    }
  }
  ${({ title }) =>
    (title === "Expired" && {
      boxShadow: " 0 0 15px red",
      color: "#ff073a",
      textShadow: textShadowRed,
    }) ||
    (title === "Done" && {
      boxShadow: " 0 0 15px green",
      color: "#16cc86",
      textShadow: textShadowGreen,
    }) ||
    (title === "In progress" && {
      boxShadow: " 0 0 15px yellow",
      color: "#FFF01F",
      textShadow: textShadowYellow,
    })}
`;

const Board = ({ title, isModal, func }) => {
  const { data } = useContext(ApplicationContext);
  const filteredData = data.filter((el) => el.todoStatus === title);
  return (
    <StyledBoard isModal={isModal} title={title}>
      {isModal && <Button placement="modal" text="x" func={func}></Button>}
      <div className="board__title">{title}</div>
      {isModal ? (
        <ModalForm func={func} />
      ) : (
        <BoardContent data={filteredData} />
      )}
    </StyledBoard>
  );
};

export default Board;
