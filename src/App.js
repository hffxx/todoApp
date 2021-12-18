import React, { FC, createContext, useState } from "react";
import { GlobalStyle } from "./styles/global";
import Clock from "./components/Clock";
import Board from "./components/Board";
import Modal from "./components/Modal/Modal";
import "./App.css";

export const ApplicationContext = createContext(null);
const App = () => {
  const [data, setData] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Clock />
      <ApplicationContext.Provider value={{ data, setData }}>
        <Modal text="Add Deadline" />
        <div className="display__doubleboard">
          <Board title="Done" />
          <Board title="In progress" />
        </div>
        <Board title="Expired" />
      </ApplicationContext.Provider>
    </>
  );
};

export default App;
