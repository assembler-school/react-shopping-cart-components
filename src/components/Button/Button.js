import React from "react";

function Button({ submitButton, children }) {
  return (
    <button
      className="btn btn-primary"
      disabled={false}
      type={submitButton ? "submit" : "button"}
    >
      {children}
    </button>
  );
}

export default Button;
