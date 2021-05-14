import React from "react";

function Button({ submitButton, children, disabled, ...props }) {
  return (
    <>
      <button
        className="btn btn-primary"
        type={submitButton ? "submit" : "button"}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
