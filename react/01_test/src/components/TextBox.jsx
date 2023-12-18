import React from "react";
import styles from "./TextBox.module.scss";

const TextBox = () => {
  const writeDate = new Date().toLocaleDateString();
  console.log(writeDate);
  return (
    <>
      <div className={styles.containter}>
        <div className={styles.tag1}>태그</div>
        <div className={styles.tag2}>태그</div>
        <div className={styles.tag2}>태그</div>
        <div>
          <span>작성일</span>
          <span>{writeDate}</span>
        </div>
        <div>
          <h2>프로젝트 팀원 모집</h2>
        </div>
        <div>
          <p>프로젝트를 함께하실 기획자분을 모집 합니다!</p>
        </div>
        <hr />
        <div className={styles.footer}>
          <div>
            <span>작성자</span>
          </div>
          <div>
            <span>조회수</span>
            <span>댓글</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextBox;
