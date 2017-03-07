import React, { Component} from 'react'
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_lists';
//import VideoList from './components/video_list';

const API_KEY = 'AIzaSyD0sM9yiDqADYwDquuRBkBKzS6wIzyhV7M';





class  App extends Component {
	constructor(props) {
	super(props);

	this.state = { videos:[]  };
	YTsearch({key: API_KEY, term:'surfboards'}, (videos) => {
		this.setState({ videos });
	});
	}






	render (){


	return   (
		<div>
		<SearchBar/>
		<VideoList videos = {this.state.videos}/>
		</div>  )
	}
}




ReactDOM.render(< App /> , document.querySelector('.container'));
