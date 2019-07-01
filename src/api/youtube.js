import axios from 'axios';

// API key  is restricted to localhost only
const KEY = 'AIzaSyC7iEDaHa6cmId7crRlMMz8iI92OgqQEVw';

 const instance = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});

export default instance;
