import axios from 'axios';

// API key  is restricted to localhost:3000 only
const KEY = 'AIzaSyBc4hj8tqe0Ma0N0j0BPen25EwPAuhRw9I';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
