// App.js
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SwiperSection from './components/SwiperSection';
import MainDate from './components/MainDate';
import BtnWrap from './components/BtnWrap';
import Navigation from './components/Navigation';
import WritingDiary from './components/WritingDiary';
import DiaryView from './components/DiaryView';
import MusicSelection from './components/MusicSelection';
import Loading from './components/Loading';
import MusicResult from './components/MusicResult';
import './styles/style.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={
            <>
              <Header isWritingPage={false} />
              <MainDate />
              <SwiperSection />
              <BtnWrap />
              <Navigation />
            </>
          } />
          <Route path="/writing" element={<WritingDiary />} />
          <Route path="/diary-view" element={<DiaryView />} />
          <Route path="/music-selection" element={<MusicSelection />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/music-result" element={<MusicResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;