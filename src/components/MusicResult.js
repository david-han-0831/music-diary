/**
 * 음악 생성 결과 컴포넌트
 */
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import recordImg from '../assets/img/windowroom1.png';
import playIcon from '../assets/img/play.svg';

// 날씨 아이콘 import
import sunIcon from '../assets/img/weather/sun.png';
import rainIcon from '../assets/img/weather/rain.png';
import cloudIcon from '../assets/img/weather/cloud.png';
import typhoonIcon from '../assets/img/weather/typhoon.png';
import snowIcon from '../assets/img/weather/snow.png';

const weatherIcons = {
  sun: sunIcon,
  rain: rainIcon,
  cloud: cloudIcon,
  typhoon: typhoonIcon,
  snow: snowIcon
};

const MusicResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const musicType = location.state?.musicType || 'song';
  const [diaryData, setDiaryData] = useState(null);

  useEffect(() => {
    const savedDiary = localStorage.getItem('currentDiary');
    if (savedDiary) {
      const parsedDiary = JSON.parse(savedDiary);
      parsedDiary.date = new Date(parsedDiary.date);
      setDiaryData(parsedDiary);
    }
  }, []);

  const handleRetry = () => {
    navigate('/music-selection');
  };

  const handleSave = () => {
    // 저장 로직 추가
    navigate('/');
  };

  if (!diaryData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header isWritingPage={true} />
      <div className="content-wrapper">
        {/* 음악 결과 섹션 */}
        <section className="play mt20">
          <span>{musicType === 'bgm' ? 'BGM이' : '노래가'} 완성되었어요!</span>
          <img src={recordImg} alt="재생" />
          <button>
            재생
            <img src={playIcon} alt="재생" />
          </button>
        </section>
        
        {/* 일기 내용 섹션 */}
        <section className="writingView mt20">
          <img src={weatherIcons[diaryData.weather]} alt={diaryData.weather} />
          <span className="writingViewDate">{diaryData.formattedDate}</span>
          <span>{diaryData.title}</span>
          <div className="diary">
            <p style={{ whiteSpace: 'pre-wrap' }}>{diaryData.content}</p>
          </div>
        </section>

        

        <section className="play mt60">
          <span>{musicType === 'bgm' ? 'BGM이' : '노래가'} 마음에 안 드시나요?</span>
        </section>
      </div>

      <div className="bottomBtnWrap2">
        <div className="bottomBtn">
          <div onClick={handleRetry} style={{ width: '100%' }}>
            <button className="secondBtn">다른 분위기로 다시 만들기</button>
          </div>
          <div onClick={handleSave} style={{ width: '100%' }}>
            <button>저장</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicResult; 