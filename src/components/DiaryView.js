/**
 * 작성된 일기를 보여주는 컴포넌트
 */
import React, { useEffect, useState } from 'react';
import Header from './Header';
import sunIcon from '../assets/img/sun.png';
import { useNavigate } from 'react-router-dom';

const DiaryView = () => {
  const navigate = useNavigate();
  const [diaryData, setDiaryData] = useState(null);

  useEffect(() => {
    // 로컬 스토리지에서 일기 데이터 불러오기
    const savedDiary = localStorage.getItem('currentDiary');
    if (savedDiary) {
      const parsedDiary = JSON.parse(savedDiary);
      // date 문자열을 Date 객체로 변환
      parsedDiary.date = new Date(parsedDiary.date);
      setDiaryData(parsedDiary);
    }
  }, []);

  const handleCreateMusic = () => {
    navigate('/music-selection');
  };

  if (!diaryData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Header isWritingPage={true} />
      <section className="writingView mt20">
        <img src={sunIcon} alt="맑음" />
        <span className="writingViewDate">{diaryData.formattedDate}</span>
        <span>{diaryData.title}</span>
        <div className="diary">
          <p>{diaryData.content}</p>
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