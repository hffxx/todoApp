import React, { FC, useState, useEffect } from "react";
import { GlobalStyle } from "./styles/global";
import Clock from "./components/Clock";
import Board from "./components/Board";
import Modal from "./components/Modal/Modal";
import "./App.css";
const App: FC = () => {
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
  return (
    <>
      <GlobalStyle />
      <Clock time={time.toLocaleTimeString()} />
      <Modal text="Add Deadline" />
      <div className="display">
        <Board title="In progress" />
        <Board title="Done" />
      </div>
      <Board title="Expired" />
    </>
  );
};

export default App;
