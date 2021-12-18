import React, { FC, createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalStyle } from "./styles/global";
import Clock from "./components/Clock";
import Board from "./components/Board";
import Modal from "./components/Modal/Modal";
import "./App.css";

export const ApplicationContext = createContext(null);
const App = () => {
  const dataTest = [
    {
      todoTitle: "Wash dishes",
      todoStatus: "In progress",
      todoTimeLeft: 100,
      todoId: uuidv4(),
    },
    {
      todoTitle: "Clean Room",
      todoStatus: "Expired",
      todoTimeLeft: 0,
      todoId: uuidv4(),
    },
    {
      todoTitle: "Grocery Store",
      todoStatus: "Done",
      todoTimeLeft: 50,
      todoId: uuidv4(),
    },
  ];
  const [data, setData] = useState(dataTest);

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
