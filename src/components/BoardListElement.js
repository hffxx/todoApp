import React, { FC } from "react";
import styled from "styled-components";
const StyledBoardListElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25vw;
  margin-bottom: 25px;
  padding: 10px 30px;
  color: "#16cc86";
  border: 2px solid #16cc86;
  box-shadow: 0 0 15px green;
  text-shadow: 0 0 15px green;
  border-radius: 15px;
  font-size: 1vw;
  @media only screen and (max-width: 992px) {
    font-size: 2vw;
    width: 50vw;
  }
  ${({ status }) =>
    (status === "Expired" && {
      color: "#ff073a",
      textShadow: "2px 2px 5px red",
      border: "2px solid red",
      boxShadow: "0 0 15px red",
    }) ||
    (status === "Done" && {
      color: "#16cc86",
      textShadow: "2px 2px 5px green",
      border: "2px solid green",
      boxShadow: "0 0 15px green",
    }) ||
    (status === "In progress" && {
      color: "#FFF01F",
      textShadow: "2px 2px 5px yellow",
      border: "2px solid yellow",
      boxShadow: "0 0 15px ",
    })}
`;

// interface Props {
//   todo: {
//     todoTitle: string;
//     todoStatus: string;
//     todoTimeLeft: number;
//   };
// }

const BoardListElement = ({ todo }) => {
  return (
    <StyledBoardListElement status={todo.todoStatus}>
      <h2>{todo.todoTitle}</h2>
      <h2>{todo.todoTimeLeft}</h2>
    </StyledBoardListElement>
  );
};

export default BoardListElement;
