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
const ModalForm = () => {
  const { data, setData, setModal } = useContext(ApplicationContext);
  const [todo, setTodo] = useState({
    todoTitle: "test",
    todoStatus: "In progress",
    todoTimeLeft: Math.random(),
    todoId: uuidv4(),
  });
  const addTodo = () => {
    setData([...data, todo]);
    setModal(false);
  };
  return (
    <StyledModal>
      <Input placeholder="Title" />
      <Input placeholder="Time (Hours)" />
      <Button text="Add " func={() => addTodo()} />
    </StyledModal>
  );
};
export default ModalForm;
