import React from "react";

function Button({submitButton,disabled=false, children, ...props}) {
  return (
    <button
    className="btn btn-primary" 
    disabled={disabled}
    type={submitButton ? "submit" : "button"}
        {...props}
        >
          {children}
      </button>
  );
}

export default Button;
