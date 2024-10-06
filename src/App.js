// App.js
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SwiperSection from './components/SwiperSection';
import MainDate from './components/MainDate';
import BtnWrap from './components/BtnWrap';
import Navigation from './components/Navigation';
import WritingDiary from './components/WritingDiary';
import './styles/style.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <MainDate />
              <SwiperSection />
              <BtnWrap />
              <Navigation />
            </>
          } />
          <Route path="/writing" element={<WritingDiary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;