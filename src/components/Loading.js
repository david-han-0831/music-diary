/**
 * 음악 생성 로딩 컴포넌트
 */
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import loadingIcon from '../assets/img/loading.svg';

const Loading = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const musicType = location.state?.musicType;

  useEffect(() => {
    // 3초 후 자동으로 결과 페이지로 이동
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
          음악을 만들고 있어요 <br /> 조금만 기다려주세요
        </span>
      </div>
    </div>
  );
};

export default Loading; 