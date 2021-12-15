import React, { FC } from "react";
import styled from "styled-components";
const StyledBoardListElement = styled.div``;

interface Props {
  todo: {
    todoTitle: string;
    todoStatus: string;
    todoTimeLeft: number;
  };
}

const BoardListElement: FC<Props> = ({ todo }) => {
  return <StyledBoardListElement>{todo.todoTitle}</StyledBoardListElement>;
};

export default BoardListElement;
