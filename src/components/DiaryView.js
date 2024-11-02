/**
 * 작성된 일기를 보여주는 컴포넌트
 */
import React, { useEffect, useState } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

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

const DiaryView = () => {
  const navigate = useNavigate();
  const [diaryData, setDiaryData] = useState(null);

  useEffect(() => {
    const savedDiary = localStorage.getItem('currentDiary');
    if (savedDiary) {
      const parsedDiary = JSON.parse(savedDiary);
      parsedDiary.date = new Date(parsedDiary.date);
      setDiaryData(parsedDiary);
    }
  }, []);

  const handleCreateMusic = () => {
    navigate('/loading', { state: { musicType: 'bgm' } });
  };

  if (!diaryData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Header isWritingPage={true} />
      <section className="writingView mt20">
        <img src={weatherIcons[diaryData.weather]} alt={diaryData.weather} />
        <span className="writingViewDate">{diaryData.formattedDate}</span>
        <span>{diaryData.title}</span>
        <div className="diary">
          <p style={{ whiteSpace: 'pre-wrap' }}>{diaryData.content}</p>
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