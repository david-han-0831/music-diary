// components/MainDate.js
import React from 'react';

const MainDate = ({ isWritingPage }) => {
  return (
    <section className="">
      <div className="mainDate">
        <span>September 27, Friday</span>
        <span>{isWritingPage ? "Write a Diary" : "HOME"}</span>
      </div>
    </section>
  );
};

export default MainDate;