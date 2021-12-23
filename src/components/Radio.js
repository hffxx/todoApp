import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2vw;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 48px;
  border-radius: 2px;
`;
const RadioButtonLabel = styled.label``;
const RadioButton = styled.input`
  margin: 10px;
`;
const Radio = () => {
  return (
    <Wrapper>
      <Item>
        <RadioButton
          type="radio"
          id="hours"
          name="time"
          value="hours"
          checked
        ></RadioButton>
        <RadioButtonLabel for="hours">Hours</RadioButtonLabel>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          id="minutes"
          name="time"
          value="minutes"
          checked
        ></RadioButton>
        <RadioButtonLabel for="hours">Minutes</RadioButtonLabel>
      </Item>
    </Wrapper>
  );
};

export default Radio;
