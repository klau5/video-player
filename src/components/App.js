import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDeatil from './VideoDeatail';

const KEY = 'AIzaSyC7iEDaHa6cmId7crRlMMz8iI92OgqQEVw';

class App extends Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onSearchSubmit('funny');
	}

	onSearchSubmit = async searchTerm => {
		const response = await youtube.get('/search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				key: KEY,
				q: searchTerm
			}
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onSearchSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDeatil video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelected={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
