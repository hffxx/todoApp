import React from "react";
import styled from "styled-components";
const StyledInput = styled.input`
  width: 20vw;
  height: 5.5vh;
  padding-left: 20px;
  margin: 25px;
  font-size: 2vw;
  border-radius: 15px;
  background: none;
  color: #16cc86;
  text-shadow: 2px 2px 5px green;
  border: none;
  box-shadow: 0 0 15px green;
  ::placeholder {
    transition: opacity 0.5s;
    color: #16cc86;
    opacity: 0.2;
  }
  :focus::placeholder {
    transition: opacity 0.5s;
    opacity: 0;
  }
  @media only screen and (max-width: 992px) {
    font-size: 5vw;
    width: 40vw;
  }
`;

const Input = ({ placeholder = "", func }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={(e) => func(e.target.value)}
    ></StyledInput>
  );
};

export default Input;
