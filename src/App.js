import React, { FC, createContext, useState } from "react";
import { GlobalStyle } from "./styles/global";
import Clock from "./components/Clock";
import Board from "./components/Board";
import Modal from "./components/Modal/Modal";
import "./App.css";

export const ApplicationContext = createContext(null);
const App = () => {
  const dataTest = [
    { todoTitle: "Wash dishes", todoStatus: "In progress", todoTimeLeft: 100 },
    { todoTitle: "Clean Room", todoStatus: "Expired", todoTimeLeft: 0 },
    { todoTitle: "Grocery Store", todoStatus: "Done", todoTimeLeft: 50 },
    { todoTitle: "Wash dishes", todoStatus: "In progress", todoTimeLeft: 100 },
    { todoTitle: "Clean Room", todoStatus: "Expired", todoTimeLeft: 0 },
    { todoTitle: "Grocery Store", todoStatus: "Done", todoTimeLeft: 50 },
    { todoTitle: "Wash dishes", todoStatus: "In progress", todoTimeLeft: 100 },
    { todoTitle: "Clean Room", todoStatus: "Expired", todoTimeLeft: 0 },
    { todoTitle: "Grocery Store", todoStatus: "Done", todoTimeLeft: 50 },
    { todoTitle: "Wash dishes", todoStatus: "In progress", todoTimeLeft: 100 },
    { todoTitle: "Clean Room", todoStatus: "Expired", todoTimeLeft: 0 },
    { todoTitle: "Grocery Store", todoStatus: "Done", todoTimeLeft: 50 },
  ];
  const [state, setState] = useState(dataTest);

  return (
    <>
      <GlobalStyle />
      <Clock />
      <ApplicationContext.Provider value={{ state, setState }}>
        <Modal text="Add Deadline" />
        <div className="display__doubleboard">
          <Board title="In progress" />
          <Board title="Done" />
        </div>
        <Board title="Expired" />
      </ApplicationContext.Provider>
    </>
  );
};

export default App;
