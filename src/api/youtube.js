import axios from 'axios';

// API key  is restricted to localhost:3000 only
const KEY = 'AIzaSyC7iEDaHa6cmId7crRlMMz8iI92OgqQEVw';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
