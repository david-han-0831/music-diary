// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/img/search.svg';
import menuIcon from '../assets/img/menu.svg';
import backIcon from '../assets/img/arrow-left.svg';

const Header = ({ isWritingPage }) => {
  return (
    <header>
      <div className="headerWrap">
        <div className="header-left">
          <div className="icon">
            <Link to={isWritingPage ? "/" : "#"}>
              <img src={isWritingPage ? backIcon : searchIcon} alt={isWritingPage ? "뒤로가기" : "검색"} />
            </Link>
          </div>
        </div>
        <div className="header-center">
          <div className="txt">
            <p></p>
          </div>
        </div>
        <div className="header-right">
          <div className="icon">
            <a href="#">
              <img src={menuIcon} alt="메뉴" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;