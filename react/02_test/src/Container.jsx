import React from "react";

const Container = (props) => {
  return (
    <div style={{ textAlign: "center", border: "1px solid red" }}>
      {props.children}
    </div>
  );
};

export default Container;
