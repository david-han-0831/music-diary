/**
 * 일기 작성 컴포넌트
 */
import React, { useState } from 'react';
import Header from './Header';
import Modal from './Modal';

const WritingDiary = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    setShowModal(true);
  };

  return (
    <>
      <Header isWritingPage={true} />
      <section className="writingDiary">
        <input 
          type="text" 
          placeholder="제목을 입력해주세요" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea 
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="bottomBtnWrap">
          <div className="bottomBtn">
            <div onClick={handleSave} style={{ width: '100%' }}>
              <button className="btn">저장</button>
            </div>
          </div>
        </div>
      </section>
      {showModal && <Modal />}
    </>
  );
};

export default WritingDiary;