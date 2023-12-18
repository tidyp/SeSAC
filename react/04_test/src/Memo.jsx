import React from "react";
import { useState } from "react";

const Memo = () => {
  const [memoList, setMemoList] = useState([]);
  const [memo, setmemo] = useState("");

  const addMemo = (e) => {
    e.preventDefault();
    setMemoList([...memoList, memo]);

    setmemo("");
  };

  const delMemo = (index) => { 
    const updateMemoList = [...memoList]
    updateMemoList.splice(index, 1)
    setMemoList(updateMemoList)
   }

  return (
    <>
      <h1>My Memo</h1>
      <div>
        <input
          type="text"
          value={memo}
          onChange={(e) => {
            setmemo(e.target.value);
          }}
        />
        <button onClick={addMemo}>작성하기</button>
      </div>

      <ul>
        {memoList.map((el, index) => (
          <li key={index}>{el}
          <button onClick={() => delMemo(index)}>삭제</button></li>
        ))}
      </ul>
    </>
  );
};

export default Memo;
