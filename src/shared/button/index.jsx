import React from "react";
//Reusable button

const Button=({ children, ...props })=> {
  return <button {...props}>{children}</button>;
}

export default Button;
