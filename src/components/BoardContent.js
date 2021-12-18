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
  .data-missing {
    padding: 30px;
  }
`;
const BoardContent = ({ data }) => {
  return (
    <StyledBoardContent>
      {data.map((el, index) => (
        <BoardListElement todo={el} key={index} id={index} />
      ))}
      {data.length === 0 && (
        <div className="data-missing">No data to display</div>
      )}
    </StyledBoardContent>
  );
};

export default BoardContent;
