/*eslint-disable*/
import './App.css';
import { useState } from 'react';

function App() {

  let post = '대전 찐 맛집';
  let [titles, setTitles] = useState(['충남대 디저트 맛집', '회식 장소 추천', '리액트 공부']);
  let [dates, setDates] = useState(['1월 2일', '1월 3일', '1월 3일']);
  let [likes, setLikes] = useState([0, 0, 0]);

  const increaseLike = (i) => {
    const newLikes = [...likes];
    newLikes[i]++;
    setLikes(newLikes);
  }

  let arr = [1, 2, 3];

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'pink', 'fontSize': '16px' }}>nalmi's blog</h4>
      </div>
      <button className='sort' onClick={() => {
        const newTitles = [...titles];
        newTitles.sort();
        setTitles(newTitles);
      }}>가나다순으로</button>
      {titles.map((title, i) => (
        <div className='list' key={i}>
          <h4>{title} <span onClick={() => { increaseLike(i) }}>🩵</span> {likes[i]} </h4>
          <p>{dates[i]} 발행</p>
        </div>
      ))}

      <Modal></Modal>

    </div>
  );
}

function Modal() {
  return (
    <div>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </div>
  );
}

export default App;
