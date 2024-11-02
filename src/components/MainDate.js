// components/MainDate.js
import React from 'react';

const MainDate = ({ isWritingPage }) => {
  return (
    <section className="">
      <div className="mainDate">
        <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', weekday: 'long' })}</span>
        <span>{isWritingPage ? "Write a Diary" : "HOME"}</span>
      </div>
    </section>
  );
};

export default MainDate;