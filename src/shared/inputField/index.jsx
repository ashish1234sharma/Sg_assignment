import React from "react";

//Reusable input box 

const InputField=({ children, ...props })=> {
  return <input {...props}>{children}</input>;
}

export default InputField;
