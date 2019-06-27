import React, { Component } from 'react';

class SearchBar extends Component {
	state = { search_term: '' };

	onInputChange = event => {
		this.setState({ search_term: event.target.value });
	};

	onFormSubmit = event => {
		event.preventDefault();
	};

	render() {
		return (
			<div className="ui segment search-bar">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Vidoe Search</label>
						<input
							type="text"
							value={this.state.search_term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
