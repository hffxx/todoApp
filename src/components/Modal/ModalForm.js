import React, { FC } from "react";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";
const StyledModal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 15px;
`;
const ModalForm = () => {
  return (
    <StyledModal>
      <Input placeholder="Title" />
      <Input placeholder="Time (Hours)" />
      <Button text="Add " func />
    </StyledModal>
  );
};
export default ModalForm;
