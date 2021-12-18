import React from "react";
import styled, { css } from "styled-components";

const ModalClose = css`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0;
  width: 2vw;
  height: 2vw;
  font-size: 1vw;
  border-radius: 50%;
  @media only screen and (max-width: 992px) {
    width: 5vw;
    height: 5vw;
    font-size: 2.5vw;
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
    box-shadow: 0 0 15px #16ccab;
    color: #16ccab;
    text-shadow: 2px 2px 5px #119e85;
  }
  @media only screen and (max-width: 992px) {
    font-size: 7vw;
  }

  ${({ isModal }) => isModal && ModalClose}
`;

const Button = ({ isModal, func, text }) => {
  return (
    <StyledButton isModal={isModal} onClick={func}>
      {text}
    </StyledButton>
  );
};

export default Button;
