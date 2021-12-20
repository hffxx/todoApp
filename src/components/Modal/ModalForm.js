import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";
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
  const addTodo = () => {
    const { todoTitle, todoTimeLeft } = todo;
    if (!!todoTitle && !!todoTimeLeft) {
      setData([...data, todo]);
      closeModal();
    }
  };
  const setTodoTitle = (title) => {
    setTodo({ ...todo, todoTitle: title });
  };
  const setTodoTime = (time) => {
    setTodo({
      ...todo,
      todoTimeLeft: Date.now() + time * 60 * 60 * 1000,
    });
  };

  return (
    <StyledModal>
      <Input placeholder="Title" func={setTodoTitle} />
      <Input placeholder="Time (Hours)" func={setTodoTime} />
      <Button text="Add " func={addTodo} />
    </StyledModal>
  );
};
export default ModalForm;
