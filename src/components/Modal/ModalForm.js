import React, { useContext, useState } from "react";
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
  const { setData } = useContext(ApplicationContext);
  return (
    <StyledModal>
      <Input placeholder="Title" />
      <Input placeholder="Time (Hours)" />
      <Button
        text="Add "
        func={() =>
          setData([
            {
              todoTitle: "Grocery Store",
              todoStatus: "In progress",
              todoTimeLeft: 50,
            },
          ])
        }
      />
    </StyledModal>
  );
};
export default ModalForm;
