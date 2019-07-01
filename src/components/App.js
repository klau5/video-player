import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

const KEY = 'AIzaSyC7iEDaHa6cmId7crRlMMz8iI92OgqQEVw';

class App extends Component {
	state = { videos: [] };

	onSearchSubmit = async search_term => {
		const response = await youtube.get('/search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				key: KEY,
				q: search_term
			}
		});

		console.log('this works');

		this.setState({ videos: response.data.items });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onSearchSubmit} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
