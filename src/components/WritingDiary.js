/**
 * 일기 작성 컴포넌트
 */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";
import Header from './Header';
import Modal from './Modal';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

// 날씨 아이콘 import
import sunIcon from '../assets/img/weather/sun.png';
import rainIcon from '../assets/img/weather/rain.png';
import cloudIcon from '../assets/img/weather/cloud.png';
import typhoonIcon from '../assets/img/weather/typhoon.png';
import snowIcon from '../assets/img/weather/snow.png';

const weatherTypes = [
  { id: 'sun', icon: sunIcon, label: '맑음' },
  { id: 'rain', icon: rainIcon, label: '비' },
  { id: 'cloud', icon: cloudIcon, label: '구름' },
  { id: 'typhoon', icon: typhoonIcon, label: '태풍' },
  { id: 'snow', icon: snowIcon, label: '눈' },
];

const WritingDiary = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedWeather, setSelectedWeather] = useState('sun');
  const { t } = useTranslation();

  // 컴포넌트 마운트 시 또는 location이 변경될 때 데이터 로드
  useEffect(() => {
    // DiaryView에서 돌아온 경우에만 데이터 로드
    if (location.state?.preserveData) {
      const savedDiary = localStorage.getItem('currentDiary');
      if (savedDiary) {
        const parsedDiary = JSON.parse(savedDiary);
        setSelectedDate(new Date(parsedDiary.date));
        setTitle(parsedDiary.title);
        setContent(parsedDiary.content);
        setSelectedWeather(parsedDiary.weather);
      }
    } else {
      // 메인에서 새로 작성하는 경우 초기화
      setSelectedDate(new Date());
      setTitle('');
      setContent('');
      setSelectedWeather('sun');
    }
  }, [location]);

  const handleSave = () => {
    // 일기 데이터 객체 생성
    const diaryData = {
      date: selectedDate,
      formattedDate: format(selectedDate, 'MMMM dd, EEEE', { locale: ko }),
      title,
      content,
      weather: selectedWeather
    };

    // 로컬 스토리지에 저장
    localStorage.setItem('currentDiary', JSON.stringify(diaryData));
    
    setShowModal(true);
  };

  const formatDate = (date) => {
    return format(date, 'MMMM dd, EEEE', { locale: ko });
  };

  return (
    <>
      <Header isWritingPage={true} />
      <section className="writingDiary">
        <div className="date-picker-wrapper writing-date">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MMMM dd, EEEE"
            locale={ko}
            customInput={
              <span className="date-text">{formatDate(selectedDate)}</span>
            }
          />
        </div>

        <div className="weather-selector">
          {weatherTypes.map((weather) => (
            <div 
              key={weather.id}
              className={`weather-item ${selectedWeather === weather.id ? 'selected' : ''}`}
              onClick={() => setSelectedWeather(weather.id)}
            >
              <img src={weather.icon} alt={weather.label} />
              <span>{weather.label}</span>
            </div>
          ))}
        </div>

        <input 
          type="text" 
          placeholder={t('diary.title')}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea 
          placeholder={t('diary.content')}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="bottomBtnWrap">
          <div className="bottomBtn">
            <div onClick={handleSave} style={{ width: '100%' }}>
              <button className="btn">{t('diary.save')}</button>
            </div>
          </div>
        </div>
      </section>
      {showModal && <Modal />}
    </>
  );
};

export default WritingDiary;