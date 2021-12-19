import React from "react";
import styled from "styled-components";
import BoardListElement from "./BoardListElement";

const StyledBoardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  .data-missing {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25vh;
  }
`;
const BoardContent = ({ data }) => {
  return (
    <StyledBoardContent>
      {data.map((el, index) => (
        <BoardListElement todo={el} key={index} />
      ))}
      {data.length === 0 && (
        <div className="data-missing">No data to display</div>
      )}
    </StyledBoardContent>
  );
};

export default BoardContent;
