// components/Header.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../assets/img/search.svg';
import menuIcon from '../assets/img/menu.svg';
import backIcon from '../assets/img/arrow-left.svg';
import { useTranslation } from 'react-i18next';

const Header = ({ isWritingPage, onBack }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [showLanguageSelect, setShowLanguageSelect] = useState(false);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/');
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguageSelect(false);
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
          <div className="icon language-selector">
            <div onClick={() => setShowLanguageSelect(!showLanguageSelect)}>
              <img src={menuIcon} alt="메뉴" />
            </div>
            {showLanguageSelect && (
              <div className="language-dropdown">
                <div 
                  className={`language-option ${i18n.language === 'ko' ? 'active' : ''}`}
                  onClick={() => changeLanguage('ko')}
                >
                  한국어
                </div>
                <div 
                  className={`language-option ${i18n.language === 'en' ? 'active' : ''}`}
                  onClick={() => changeLanguage('en')}
                >
                  English
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;