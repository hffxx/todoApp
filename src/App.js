import React, { FC, createContext, useState, useEffect } from "react";
import { GlobalStyle } from "./styles/global";
import Clock from "./components/Clock";
import Board from "./components/Board";
import Modal from "./components/Modal/Modal";
import "./App.css";

const loadTodos = () => {
  try {
    return JSON.parse(localStorage.getItem("todos") || "[]");
  } catch (e) {
    console.error("err");
    localStorage.setItem("todos", "[]");
  }
};

export const ApplicationContext = createContext(null);
const App = () => {
  const [data, setData] = useState(loadTodos());
  const updateExpensesLocalStorage = (state) => {
    localStorage.setItem("todos", JSON.stringify(state));
  };
  useEffect(() => {
    updateExpensesLocalStorage(data);
  }, [data]);
  return (
    <>
      <GlobalStyle />
      <Clock />
      <ApplicationContext.Provider value={{ data, setData }}>
        <Modal text="Add Deadline" />
        <div className="display">
          <Board title="In progress" />
          <Board title="Done" />

          <Board title="Expired" />
        </div>
      </ApplicationContext.Provider>
    </>
  );
};

export default App;
