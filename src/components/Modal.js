/**
 * 일기 저장 완료 후 표시되는 모달 컴포넌트
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import confirmIcon from '../assets/img/confirm.svg';

const Modal = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/diary-view');
  };

  return (
    <div className="modal-background">
      <div className="modal">
        <img src={confirmIcon} alt="모달아이콘" />
        <p>저장되었습니다.</p>
        <button onClick={handleConfirm}>확인</button>
      </div>
    </div>
  );
};

export default Modal; 