import React, { FC } from "react";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";
const StyledModal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 15px;
  width: 100%;
  height: 100%;
`;
const ModalForm = () => {
  return (
    <StyledModal>
      <Input placeholder="Title" />
      <Input placeholder="Time" />
      <Button text="Add " func />
    </StyledModal>
  );
};
export default ModalForm;
