import React, { FC, useState, useEffect } from "react";
import { GlobalStyle } from "./styles/global";
import Clock from "./components/Clock";
import Board from "./components/Board";
import Modal from "./components/Modal/Modal";
import "./App.css";
const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Clock />
      <Modal text="Add Deadline" />
      <div className="display__doubleboard">
        <Board title="In progress" />
        <Board title="Done" />
      </div>
      <Board title="Expired" />
    </>
  );
};

export default App;
