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
  width: 30vw;
  min-height: 30vh;
  padding: 0px 50px 2vh 50px;
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
    ${({ title }) =>
      (title === "Expired" && {
        color: "#ff073a",
        textShadow: textShadowRed,
      }) ||
      (title === "Done" && {
        color: "#16cc86",
        textShadow: textShadowGreen,
      }) ||
      (title === "In progress" && {
        color: "#FFF01F",
        textShadow: textShadowYellow,
      })}
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

const Board = ({ title, func, isModal }) => {
  const { data } = useContext(ApplicationContext);
  const filteredData = data.filter((el) => el.todoStatus === title);
  return (
    <StyledBoard isModal={isModal} title={title}>
      {isModal && <Button isModal text="x" func={func}></Button>}
      <div className="board__title">{title}</div>
      {isModal ? <ModalForm /> : <BoardContent data={filteredData} />}
    </StyledBoard>
  );
};

export default Board;
