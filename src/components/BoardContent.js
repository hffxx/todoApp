import React from "react";
import styled from "styled-components";
import BoardListElement from "./BoardListElement";

const StyledBoardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  height: 100%;
`;

// interface Props {
//   data: {
//     todoTitle: string;
//     todoStatus: string;
//     todoTimeLeft: number;
//   }[];
// }

const BoardContent = ({ data }) => {
  return (
    <StyledBoardContent>
      {data.map((el, index) => (
        <BoardListElement todo={el} key={index} id={index} />
      ))}
    </StyledBoardContent>
  );
};

export default BoardContent;
