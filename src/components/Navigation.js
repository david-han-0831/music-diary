// components/Navigation.js
import React from 'react';
import onHomeIcon from '../assets/img/nav/on-home.svg';
import searchIcon from '../assets/img/nav/search.svg';
import alarmIcon from '../assets/img/nav/alarm.svg';
import mypageIcon from '../assets/img/nav/mypage.svg';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="navOn">
          <img src={onHomeIcon} alt="홈" />
        </li>
        <li>
          <img src={searchIcon} alt="검색" />
        </li>
        <li>
          <img src={alarmIcon} alt="알림" />
        </li>
        <li>
          <img src={mypageIcon} alt="마이페이지" />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;