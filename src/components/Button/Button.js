import React from "react";

function Button({ submitButton, children, disabled = false, ...props }) {
  return (
    <button
      disabled={disabled}
      {...props}
      className="btn btn-primary"
      type={submitButton ? "submit" : "button"}
    >
      {children}
    </button>
  );
}

export default Button;
