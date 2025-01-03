/*eslint-disable*/
import './App.css';
import { useState } from 'react';

function App() {

  let post = '대전 찐 맛집';
  let [titles, b] = useState(['충남대 디저트 맛집', '회식 장소 추천', '리액트 공부']);
  let [dates, d] = useState(['1월 2일', '1월 3일', '1월 3일']);
  let [likes, setLikes] = useState([0, 0, 0]);

  const increaseLike = (i) => {
    const newLikes = [...likes];
    newLikes[i]++;
    setLikes(newLikes);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'pink', 'fontSize': '16px' }}>nalmi's blog</h4>
      </div>
      {titles.map((title, i) => (
        <div className='list' key={i}>
          <h4>{title} <span onClick={() => {increaseLike(i)}}>🩵</span> { likes[i] } </h4>
          <p>{dates[i]} 발행</p>
        </div>
      ))}
    </div>
  );
}

export default App;
