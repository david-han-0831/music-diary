// components/BtnWrap.js
import React from 'react';
import { Link } from 'react-router-dom';
import arrowRight from '../assets/img/arrow-right.svg';

const BtnWrap = () => {
  return (
    <div className="btnWrap" style={{ textAlign: 'center' }}>
      <p>
        <span className="mb20">오늘, 어떤 감정들이 스쳐 지나갔나요?</span>
        <span>당신의 이야기를 일기로 담고,</span>
        <span>그 감정들을 노래로 풀어보세요.</span>
      </p>
      <Link to="/writing">
        <button className="btn greenBtn">내 이야기로 앨범 만들기
          <img src={arrowRight} alt="우측화살표" />
        </button>
      </Link>
    </div>
  );
};

export default BtnWrap;