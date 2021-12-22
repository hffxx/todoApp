import React from "react";
import styled, { css } from "styled-components";

const ModalCloseButton = css`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0;
  width: 2vw;
  height: 2vw;
  font-size: 1vw;
  border-radius: 50%;
  @media only screen and (max-width: 1200px) {
    width: 5vw;
    height: 5vw;
    font-size: 2.5vw;
  }
`;
const ListElementButton = css`
  padding: 0;
  width: 2vw;
  height: 2vw;
  font-size: 1vw;
  border-radius: 25%;
  color: inherit;
  box-shadow: none;
  :hover {
    color: ${({ color }) => (color === "green" ? "green" : "red")};
    box-shadow: none;
    text-shadow: ${({ color }) =>
      color === "green" ? "2px 2px 5px green" : "2px 2px 5px red"};
  }
  @media only screen and (max-width: 1200px) {
    width: 5vw;
    height: 5vw;
    font-size: 2.5vw;
  }
`;
const AddModalButton = css`
  font-size: 2vw;
  margin: 20px;
  @media only screen and (max-width: 1200px) {
    font-size: 5vw;
  }
`;

const StyledButton = styled.button`
  margin: 15px;
  padding: 5px 15px;
  text-align: center;
  background: linear-gradient(
    225deg,
    rgba(3, 1, 15, 1) 0%,
    rgba(4, 2, 36, 1) 50%,
    rgba(7, 2, 32, 1) 100%
  );
  color: #16cc86;
  border: none;
  border-radius: 15px;
  font-size: 3.5vw;
  box-shadow: 0 0 15px green;
  text-shadow: 2px 2px 5px green;
  transition-property: box-shadow, color, text-shadow;
  transition-duration: 0.3s;
  :hover {
    box-shadow: 0 0 15px cyan;
    color: cyan;
    text-shadow: 2px 2px 5px cyan;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 7vw;
  }

  ${({ placement }) => placement === "modal" && ModalCloseButton}
  ${({ placement }) => placement === "list-element" && ListElementButton}
  ${({ placement }) => placement === "add-modal" && AddModalButton}
`;

const Button = ({ placement, func, text, color }) => {
  return (
    <StyledButton placement={placement} onClick={func} color={color}>
      {text}
    </StyledButton>
  );
};

export default Button;
