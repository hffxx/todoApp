import React from "react";
import styled from "styled-components";
import BoardListElement from "./BoardListElement";
import Countdown, { zeroPad } from "react-countdown";

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
const Completionist = () => <span>You are good to go!</span>;
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    );
  }
};
const BoardContent = ({ data }) => {
  return (
    <StyledBoardContent>
      {data.map((el, index) => (
        <BoardListElement todo={el} key={index} />
      ))}
      {data.length === 0 && (
        <div className="data-missing">No data to display</div>
      )}
      <Countdown date={Date.now() + 10000} renderer={renderer} />
    </StyledBoardContent>
  );
};

export default BoardContent;
