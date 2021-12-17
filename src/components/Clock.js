import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledClock = styled.h1`
  display: flex;
  justify-content: center;
  margin: 15px;
  width: 30vw;
  text-align: center;
  color: #16cc86;
  font-size: 6vw;
  text-shadow: 2px 2px 5px green;
  @media only screen and (max-width: 992px) {
    font-size: 12vw;
  }
`;

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const refreshClock = () => {
    setTime(new Date());
  };
  useEffect(() => {
    const timer = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);
  return <StyledClock>{time.toLocaleTimeString()}</StyledClock>;
};

export default Clock;
