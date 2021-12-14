import React, { FC } from "react";
import Input from "./Input";
import styled from "styled-components";
const StyledBoardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  background-color: inherit;
  width: 100%;
  height: 100%;
  & div {
    color: white;
  }
`;

const ModalForm: FC = () => {
  return (
    <>
      <Input placeholder="Title" />
      <Input placeholder="Time" />
    </>
  );
};

interface Props {
  isModal?: boolean;
}

const BoardContent: FC<Props> = ({ isModal }) => {
  return (
    <StyledBoardContent>{isModal ? <ModalForm /> : <></>}</StyledBoardContent>
  );
};

export default BoardContent;
