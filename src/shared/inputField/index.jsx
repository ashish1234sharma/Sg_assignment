import React from "react";

const InputField=({ children, ...props })=> {
  return <input {...props}>{children}</input>;
}

export default InputField;
