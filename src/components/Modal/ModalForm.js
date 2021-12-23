import React, { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";
import Radio from "../Radio";
import { ApplicationContext } from "../../App";
const StyledModal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 15px;
`;
const ModalForm = ({ func }) => {
  const closeModal = func;
  const { data, setData } = useContext(ApplicationContext);
  const [todo, setTodo] = useState({
    todoTitle: undefined,
    todoStatus: "In progress",
    todoTimeLeft: undefined,
    todoId: uuidv4(),
  });
  const [timeData, setTimeData] = useState({ unit: "hours", timeAdded: 0 });
  const addTodo = () => {
    const { todoTitle, todoTimeLeft } = todo;
    if (!!todoTitle && todoTimeLeft >= new Date()) {
      setData([...data, todo]);
      closeModal();
    }
  };
  const setTodoTitle = (title) => {
    setTodo({ ...todo, todoTitle: title });
  };
  const setTodoTime = () => {
    const { unit, timeAdded } = timeData;
    let multiplier = 0;
    if (unit === "hours") multiplier = 3600000;
    else if (unit === "minutes") {
      multiplier = 60000;
    }
    setTodo({
      ...todo,
      todoTimeLeft: Date.now() + timeAdded * multiplier,
    });
  };
  useEffect(() => {
    setTodoTime();
  }, [timeData]);
  const setTimeUnit = (unit) => {
    setTimeData({ ...timeData, unit });
  };
  const setTimeAdded = (timeAdded) => {
    setTimeData({ ...timeData, timeAdded });
  };
  return (
    <StyledModal>
      <Input placeholder="Title" func={setTodoTitle} />
      <Input placeholder="Time" func={setTimeAdded} />
      <Radio func={setTimeUnit} unit={timeData.unit} />
      <Button text="Add " func={addTodo} placement="add-modal" />
    </StyledModal>
  );
};
export default ModalForm;
