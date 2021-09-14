import React from "react";


function Main(props) {
  return <main {...props}>
    {props.children}
  </main >
}

export default Main;
