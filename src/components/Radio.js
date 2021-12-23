import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25vw;
  padding: 15px;
  @media only screen and (max-width: 1200px) {
    font-size: 3vw;
  }
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const RadioButtonLabel = styled.label``;
const RadioButton = styled.input`
  height: 1.5vh;
  width: 1.5vw;
  margin: 10px;
  @media only screen and (max-width: 1200px) {
    height: 2vh;
    width: 2vw;
  }
`;
const Radio = ({ func, unit }) => {
  return (
    <Wrapper>
      <Item>
        <RadioButton
          type="radio"
          id="hours"
          name="time"
          value="hours"
          checked={unit === "hours"}
          onChange={(e) => func(e.target.value)}
        ></RadioButton>
        <RadioButtonLabel for="hours">Hours</RadioButtonLabel>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          id="minutes"
          name="time"
          value="minutes"
          checked={unit === "minutes"}
          onChange={(e) => func(e.target.value)}
        ></RadioButton>
        <RadioButtonLabel for="minutes">Minutes</RadioButtonLabel>
      </Item>
    </Wrapper>
  );
};

export default Radio;
