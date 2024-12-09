/**
 * BGM/노래 선택 컴포넌트
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { useTranslation } from 'react-i18next';

const MusicSelection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSelection = (type) => {
    navigate('/loading', { state: { musicType: type } });
  };

  return (
    <>
      <Header isWritingPage={true} />
      <section className="selection mt20">
        <div className="txt">
          <span>{t('music.select.title')}</span>
          <span>{t('music.select.subtitle')}</span>
          <span>{t('music.select.description')}</span>
        </div>

        <div className="selectionBtnWrap">
          <div className="bottomBtn">
            <div onClick={() => handleSelection('bgm')} style={{ width: '100%' }}>
              <button className="secondBtn">{t('music.select.bgm')}</button>
            </div>
            <div onClick={() => handleSelection('song')} style={{ width: '100%' }}>
              <button>{t('music.select.song')}</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MusicSelection; 