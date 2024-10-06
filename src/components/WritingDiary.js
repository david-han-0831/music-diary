// components/WritingDiary.js
import React from 'react';

const WritingDiary = () => {
  return (
    <section className="writingDiary">
      <input type="text" placeholder="제목을 입력해주세요" />
      <textarea placeholder="내용을 입력해주세요"></textarea>
      <div className="bottomBtnWrap">
        <div className="bottomBtn">
          <a href="./modal.html">
            <button>저장</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WritingDiary;