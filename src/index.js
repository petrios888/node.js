import React from 'react'
import ReactDOM from 'react-dom';


import SearchBar from './components/search_bar';



// Create New Component
// some HTML

// youtube API key = AIzaSyD0sM9yiDqADYwDquuRBkBKzS6wIzyhV7M

const API_KEY = 'AIzaSyD0sM9yiDqADYwDquuRBkBKzS6wIzyhV7M';


const App =  () => {     return (<div> <SearchBar/> </div>) ;  }





ReactDOM.render(< App /> , document.querySelector('.container'));


