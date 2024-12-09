/**
 * 음악 생성 로딩 컴포넌트
 */
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import loadingIcon from '../assets/img/loading.svg';
import { useTranslation } from 'react-i18next';

const Loading = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const musicType = location.state?.musicType;
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/music-result', { state: { musicType } });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, musicType]);

  return (
    <div className="modal-background">
      <div className="loading">
        <img src={loadingIcon} alt="로딩아이콘" />
        <span>
          {t('music.loading')} <br /> {t('music.wait')}
        </span>
      </div>
    </div>
  );
};

export default Loading; 