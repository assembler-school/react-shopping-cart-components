import React from "react";

function Button({ disabled = false, submitButton, children, ...props }) {
  return (
    <button
      className="btn btn-primary"
      type={submitButton ? "submit" : "button"}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
