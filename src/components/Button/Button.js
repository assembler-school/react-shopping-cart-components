import React from "react";

function Button({ submitButton, children, disable = false, ...props }) {

  return (
    <button className="btn btn-primary" type={submitButton ? "submit" : "button"}  {...props}>
      {children}
    </button>
  );
}

export default Button;
