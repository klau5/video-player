import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends Component {
	onSearchSubmit = async search_term => {
		const response = await youtube.get('/search', {
			params: {
				q: search_term
			}
		});

		console.log(response);
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
