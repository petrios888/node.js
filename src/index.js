import React from 'react'
import ReactDOM from 'react-dom';


import SearchBar from './components/search_bar';



// Create New Component
// some HTML

// youtube API key = ####################################

const API_KEY = '#######################################';


const App =  () => {     return (<div> <SearchBar/> </div>) ;  }





ReactDOM.render(< App /> , document.querySelector('.container'));


