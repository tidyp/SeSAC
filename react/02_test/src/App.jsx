import React from "react";
import Counter from "./Counter.jsx";
import Container from "./Container.jsx";
import Test from './Test.jsx'

const App = () => {
  const counterObj = {
    title: "Hello React!",
    num: 5,
  };

  return (
    <>
      <Container>
        <Counter obj={counterObj} />
      </Container>
      <Container>
        <Counter obj={counterObj} />
      </Container>
      <Container>
        <Counter obj={counterObj} />
      </Container>
      <Test/>
    </>
  );
};

export default App;
