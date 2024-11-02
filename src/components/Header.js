// components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../assets/img/search.svg';
import menuIcon from '../assets/img/menu.svg';
import backIcon from '../assets/img/arrow-left.svg';

const Header = ({ isWritingPage, onBack }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/');
    }
  };

  return (
    <header>
      <div className="headerWrap">
        <div className="header-left">
          <div className="icon">
            {isWritingPage && (
              <div onClick={handleBack} style={{ cursor: 'pointer' }}>
                <img src={backIcon} alt="뒤로가기" />
              </div>
            )}
            {!isWritingPage && (
              <div>
                <img src={searchIcon} alt="검색" />
              </div>
            )}
          </div>
        </div>
        <div className="header-center">
          <div className="txt">
            <p></p>
          </div>
        </div>
        <div className="header-right">
          <div className="icon">
            <div>
              <img src={menuIcon} alt="메뉴" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;