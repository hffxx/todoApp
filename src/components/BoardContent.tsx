import React, { FC } from "react";
import styled from "styled-components";
import BoardListElement from "./BoardListElement";

const StyledBoardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  background-color: inherit;
  width: 100%;
  height: 100%;
  color: white;
`;

interface Props {
  data: {
    todoTitle: string;
    todoStatus: string;
    todoTimeLeft: number;
  }[];
}

const BoardContent: FC<Props> = ({ data }) => {
  return (
    <StyledBoardContent>
      {data.map((el, index) => (
        <BoardListElement todo={el} key={index} />
      ))}
    </StyledBoardContent>
  );
};

export default BoardContent;
