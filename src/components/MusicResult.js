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

const MusicResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const musicType = location.state?.musicType || 'song';
  const [diaryData, setDiaryData] = useState(null);
  const [musicUrl, setMusicUrl] = useState(null);
  const [musicInfo, setMusicInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const generateMusic = async () => {
      const savedDiary = localStorage.getItem('currentDiary');
      if (savedDiary && !musicUrl) {
        const parsedDiary = JSON.parse(savedDiary);
        parsedDiary.date = new Date(parsedDiary.date);
        setDiaryData(parsedDiary);

        // 테스트를 위한 하드코딩된 URL과 음악 정보
        setMusicUrl('http://harmony-hackers-test.s3-website.ap-northeast-2.amazonaws.com/diary_reading/diaryreading_20241210002042.mp3');
        setMusicInfo({
          description: "A lively and uplifting composition that captures the joy and positivity of a beautiful day, reflecting the warmth and brightness of the moment.",
          info: {
            genre: "indie pop",
            instruments: "acoustic guitar, piano, ukulele",
            atmosphere: "bright, joyful, uplifting",
            techniques: "light percussion for a playful rhythm"
          }
        });
        setIsLoading(false);
      }
    };

    generateMusic();
  }, [musicType, musicUrl]);

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
        
        {musicInfo && (
          <section className="music-info mt20">
            <div className="description">
              <h3>Description</h3>
              <p>{musicInfo.description}</p>
            </div>
            <div className="details">
              <div className="info-item">
                <span className="label">Genre:</span>
                <span>{musicInfo.info.genre}</span>
              </div>
              <div className="info-item">
                <span className="label">Instruments:</span>
                <span>{musicInfo.info.instruments}</span>
              </div>
              <div className="info-item">
                <span className="label">Atmosphere:</span>
                <span>{musicInfo.info.atmosphere}</span>
              </div>
              <div className="info-item">
                <span className="label">Techniques:</span>
                <span>{musicInfo.info.techniques}</span>
              </div>
            </div>
          </section>
        )}
        
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