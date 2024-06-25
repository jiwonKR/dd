import { useEffect } from 'react';
import './App.css';


const API_URL = 'http://www.omdbapi.com?apikey=f58e8343';

const App = () => {
  <h1>안녕</h1>;
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`); //검색쿼리를 설정하는일
    const data = await response.json();

    console.log(data.Search); //data.Search는 db의 API에서 제공하는 기능.
  };

  useEffect(() => {
    //useEffect 훅을 사용하여 컴포넌트가 마운트될때 한번 실행된는 함수호출.
    searchMovies('spiderman');
  }, []);
};

export default App;
