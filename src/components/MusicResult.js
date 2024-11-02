/**
 * 음악 생성 결과 컴포넌트
 */
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import recordImg from '../assets/img/record.jpg';
import playIcon from '../assets/img/play.svg';

const MusicResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const musicType = location.state?.musicType || 'song';

  const handleRetry = () => {
    navigate('/music-selection');
  };

  const handleSave = () => {
    // 저장 로직 추가
    navigate('/');
  };

  return (
    <>
      <Header isWritingPage={true} />
      <section className="play mt20">
        <span>{musicType === 'bgm' ? 'BGM이' : '노래가'} 완성되었어요!</span>
        <img src={recordImg} alt="재생" />
        <button>
          재생
          <img src={playIcon} alt="재생" />
        </button>
      </section>

      <section className="play mt60">
        <span>{musicType === 'bgm' ? 'BGM이' : '노래가'} 마음에 안 드시나요?</span>
      </section>

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