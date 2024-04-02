import React from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  return <button {...(props as any)}>{props.children}</button>;
};

export default Button;
