import React from "react";
import styled from "styled-components";
const StyledInput = styled.input`
  height: 5.5vh;
  padding-left: 20px;
  font-size: 2vw;
  border-radius: 15px;
  background: none;
  width: 20vw;
  color: #16cc86;
  text-shadow: 2px 2px 5px green;
  border: none;
  box-shadow: 0 0 15px green;
  ::placeholder {
    color: #16cc86;
    opacity: 0.2;
  }
  :focus::placeholder {
    opacity: 0;
  }
  @media only screen and (max-width: 992px) {
    font-size: 5vw;
    width: 40vw;
  }
`;

const Input = ({ placeholder = "" }) => {
  return <StyledInput placeholder={placeholder}></StyledInput>;
};

export default Input;
