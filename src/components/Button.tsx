import React, { FC } from "react";
import StyledButton from "../styles/Button.style";
type Props = {
  text: string;
  func?: any;
  className?: string;
};

const Button: FC<Props> = ({ text, func, className }) => {
  return (
    <StyledButton className={className} onClick={() => func()}>
      {text}
    </StyledButton>
  );
};

export default Button;
