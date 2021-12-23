import React, { useContext, useState } from "react";
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
  const setTodoTime = (time) => {
    setTodo({
      ...todo,
      todoTimeLeft: Date.now() + time * 60 * 60 * 1000,
    });
  };
  console.log(todo.todoTimeLeft);

  return (
    <StyledModal>
      <Input placeholder="Title" func={setTodoTitle} />
      <Input placeholder="Time (Hours)" func={setTodoTime} />
      <Radio />
      <Button text="Add " func={addTodo} placement="add-modal" />
    </StyledModal>
  );
};
export default ModalForm;
