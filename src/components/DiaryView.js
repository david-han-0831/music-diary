/**
 * 작성된 일기를 보여주는 컴포넌트
 */
import React from 'react';
import Header from './Header';
import sunIcon from '../assets/img/sun.png';
import { useNavigate } from 'react-router-dom';

const DiaryView = () => {
  const navigate = useNavigate();

  const handleCreateMusic = () => {
    navigate('/music-selection');
  };

  return (
    <div className="container">
      <Header isWritingPage={true} />
      <section className="writingView mt20">
        <img src={sunIcon} alt="맑음" />
        <span className="writingViewDate">September 27, Friday</span>
        <span>시흥갯골생태공원 산책</span>
        <div className="diary">
          <p>
            오늘 레오랑 시흥갯골생태공원 산책을 했다. 사람들이 없어서 너무너무 좋았다...
            {/* 일기 내용 */}
          </p>
        </div>
      </section>
      <div className="bottomBtnWrap">
        <div className="bottomBtn">
          <div onClick={handleCreateMusic} style={{ width: '100%' }}>
            <button>이 일기로 음악 만들기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryView; 