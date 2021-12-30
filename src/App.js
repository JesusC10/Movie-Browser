import './App.css';
import { useState, useEffect } from 'react';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Movie from './components/Movie';
import My404Component from './components/My404Component';
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {

  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('')
  const [inputText, setInputText] = useState('')


  useEffect(() => {
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=a6c43d035930987d2f1e9005812fdb4a&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        })
    }
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} 
              inputText={inputText} setInputText={setInputText}/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/search" element={<Search keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movie/:id" element={<Movie/>} />
        <Route path="/404" element={<My404Component/>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
