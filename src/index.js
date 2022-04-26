import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import MovieList from './components/MovieList';
import Header from './components/Header'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header />
      <MovieList />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);




