import { useEffect, useState } from "react";
import api from "./Instance";
import Click from "./Click";

const App = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0)

  useEffect(() => {
    api
      .get("api/data")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  }, []);

  const handleClickIncrease = () => {
    setCount(c => c+1)
  };
  const handleClickReset = () => {
    setCount(0)
  };

  return (
    <>
      <h1>React + Express</h1>
      <ul>
        {data.map((el) => (
          <li key={el.id}>
            {el.id}
            {el.name}
          </li>
        ))}
      </ul>
      {`마우스 클릭 횟수는 ${count} 입니다.`}
      <Click
        onButtonClick={handleClickIncrease}
        onResetClick={handleClickReset}
      />
    </>
  );
};

export default App;
