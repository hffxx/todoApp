import React, { FC } from "react";
import styled from "styled-components";
import ModalForm from "./Modal/ModalForm";
const StyledBoardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  background-color: inherit;
  width: 100%;
  height: 100%;
  color: white;
`;

interface Props {}

const BoardContent: FC<Props> = ({}) => {
  return <StyledBoardContent>Hello</StyledBoardContent>;
};

export default BoardContent;
