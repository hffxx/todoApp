import React, { FC } from "react";
import StyledClock from "../styles/Clock.style";
type Props = {
  time: string;
};
const Clock: FC<Props> = ({ time }) => {
  return <StyledClock>{time}</StyledClock>;
};

export default Clock;
