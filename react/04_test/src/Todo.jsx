import React from "react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const dummyData = [{ id: 1, text: "test", ischecked: false }];

const List = ({ list }) => {
  return (
    <li>
      <input type="checkbox" />
      <span style={list.ischecked ? { textDecoration: "line-through" } : {}}>
        {list.text}
      </span>
      <FaTrash />
    </li>
  );
};

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setDate] = useState([]);

  const handleSumbit = () => {
    const newData = {id: Math.random(), text: inputValue, ischecked:true};
    console.log(newData);
    setDate([...data, newData]);
  };

  return (
    // <di/v>Todo</div>\
    <>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSumbit}>추가</button>
      </div>
      {/* {data.map((el) => (
        <List list={el} />
      ))} */}
    </>
  );
};

export default Todo;
