/* eslint-disable prettier/prettier */
import React from "react";

function Main({ children, ...props }) {
  // return <div />;
  return <main {...props}>{children}</main>;
}

export default Main;
