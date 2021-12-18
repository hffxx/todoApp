import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { ApplicationContext } from "../App";
const StyledBoardListElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25vw;
  margin-bottom: 25px;
  padding: 10px 30px;
  color: "#16cc86";
  border: none;
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
      boxShadow: "0 0 15px red",
    }) ||
    (status === "Done" && {
      color: "#16cc86",
      textShadow: "2px 2px 5px green",
      boxShadow: "0 0 15px green",
    }) ||
    (status === "In progress" && {
      color: "#FFF01F",
      textShadow: "2px 2px 5px yellow",
      boxShadow: "0 0 15px yellow",
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
  const { data, setData } = useContext(ApplicationContext);
  const { todoStatus, todoTitle, todoTimeLeft, todoId } = todo;
  const deleteFromList = (id) => {
    setData(data.filter((el) => el.todoId !== id));
  };
  return (
    <StyledBoardListElement status={todoStatus}>
      <h2>{todoTitle}</h2>
      <h2>{todoTimeLeft}</h2>
      <Button
        status={todoStatus}
        text="del"
        placement="list-element"
        func={() => deleteFromList(todoId)}
      ></Button>
    </StyledBoardListElement>
  );
};

export default BoardListElement;
