import React, { FC } from "react";
import BoardList from "./BoardList";
import Button from "./Button";
import styled from "styled-components";

const StyledBoard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  padding: 0px 50px 50px 50px;
  min-height: 60vh;
  margin: 50px;
  background: linear-gradient(
    225deg,
    rgba(3, 1, 15, 1) 0%,
    rgba(4, 2, 36, 1) 50%,
    rgba(7, 2, 32, 1) 100%
  );
  box-shadow: 0 0 15px green;
  border-radius: 30px;

  .board__title {
    margin: 15px;
    color: #16cc86;
    font-size: 3.5vw;
    text-shadow: 2px 2px 5px green;
  }

  @media only screen and (max-width: 992px) {
    width: 60vw;
    .board__title {
      font-size: 7vw;
    }
  }
`;
type Props = {
  title: string;
  func?: Function;
};
const Board: FC<Props> = ({ title, func }) => {
  return (
    <StyledBoard>
      {!!func && <Button task="modal-close" text="x" func={func}></Button>}
      <div className="board__title">{title}</div>
      {!func && <BoardList />}
    </StyledBoard>
  );
};

export default Board;
