/**
 * BGM/노래 선택 컴포넌트
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const MusicSelection = () => {
  const navigate = useNavigate();

  const handleSelection = (type) => {
    navigate('/loading', { state: { musicType: type } });
  };

  return (
    <>
      <Header isWritingPage={true} />
      <section className="selection mt20">
        <div className="txt">
          <span>작성하신 일기를 바탕으로</span>
          <span>BGM으로 만들지 노래로 만들지</span>
          <span>선택해주세요.</span>
        </div>

        <div className="selectionBtnWrap">
          <div className="bottomBtn">
            <div onClick={() => handleSelection('bgm')} style={{ width: '100%' }}>
              <button className="secondBtn">BGM으로 만들기</button>
            </div>
            <div onClick={() => handleSelection('song')} style={{ width: '100%' }}>
              <button>노래로 만들기</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MusicSelection; 