/**
 * 음악 생성 결과 컴포넌트
 */
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import recordImg from '../assets/img/walkinggirl1.png';
import playIcon from '../assets/img/play.svg';
import { useTranslation } from 'react-i18next';

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

const API_BASE_URL = 'http://gsubuntu.iptime.org:5000';

const MusicResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const musicType = location.state?.musicType || 'song';
  const [diaryData, setDiaryData] = useState(null);
  const [musicUrl, setMusicUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const generateMusic = async () => {
      const savedDiary = localStorage.getItem('currentDiary');
      if (savedDiary) {
        const parsedDiary = JSON.parse(savedDiary);
        parsedDiary.date = new Date(parsedDiary.date);
        setDiaryData(parsedDiary);

        try {
          const response = await fetch(`${API_BASE_URL}/diary_reading`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              diary_text: parsedDiary.content,
              music_type: musicType === 'bgm' ? 'bgm' : 'song'
            }),
          });

          if (!response.ok) {
            throw new Error('음악 생성에 실패했습니다.');
          }

          const data = await response.json();
          setMusicUrl(data.music_url); // API 응답에서 음악 URL을 받아옴
        } catch (error) {
          console.error('음악 생성 중 오류 발생:', error);
          // 에러 처리 로직 추가 가능
        } finally {
          setIsLoading(false);
        }
      }
    };

    generateMusic();
  }, [musicType]);

  const handleRetry = () => {
    navigate('/music-selection');
  };

  const handleSave = () => {
    // 저장 로직 추가
    navigate('/');
  };

  const handlePlay = () => {
    if (musicUrl) {
      // 음악 재생 로직
      const audio = new Audio(musicUrl);
      audio.play();
    }
  };

  if (!diaryData || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header isWritingPage={true} />
      <div className="content-wrapper">
        <section className="play mt20">
          <span>{t(`music.complete.${musicType}`)}</span>
          <img src={recordImg} alt="재생" />
          <button onClick={handlePlay}>
            {t('music.play')}
            <img src={playIcon} alt="재생" />
          </button>
        </section>
        
        <section className="writingView mt20">
          <img src={weatherIcons[diaryData.weather]} alt={t(`diary.weather.${diaryData.weather}`)} />
          <span className="writingViewDate">{diaryData.formattedDate}</span>
          <span>{diaryData.title}</span>
          <div className="diary">
            <p style={{ whiteSpace: 'pre-wrap' }}>{diaryData.content}</p>
          </div>
        </section>

        <section className="play mt60">
          <span>{t('music.retry.question')}</span>
        </section>
      </div>

      <div className="bottomBtnWrap2">
        <div className="bottomBtn">
          <div onClick={handleRetry} style={{ width: '100%' }}>
            <button className="secondBtn">{t('music.retry.button')}</button>
          </div>
          <div onClick={handleSave} style={{ width: '100%' }}>
            <button>{t('diary.save')}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicResult; 