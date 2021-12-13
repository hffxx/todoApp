import React, { FC } from "react";
import StyledBoard from "../styles/Board.style";
import BoardList from "./BoardList";
import Button from "./Button";
type Props = {
  title: string;
  func?: any;
  className?: string;
};
const Board: FC<Props> = ({ title, func, className }) => {
  return (
    <StyledBoard className={className}>
      <div className="board__title">{title}</div>
      {!func && <BoardList />}
      {!!func && (
        <Button className="btn__modal--close" text="x" func={func}></Button>
      )}
    </StyledBoard>
  );
};

export default Board;
