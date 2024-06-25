// App.js
import React, { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'; // 파일 경로는 실제 파일 위치에 맞게 수정

const API_URL = 'http://www.omdbapi.com?apikey=f58e8343';

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies('spiderman');
  }, []);

  return (
    <div className='app'>
      <h1>Movie Land</h1>

      <div className='search'>
        <input placeholder='Search for movies' value='Superman' onChange={() => {}} />
        <img src={SearchIcon} alt='search' />
      </div>
    </div>
  );
};

export default App;
