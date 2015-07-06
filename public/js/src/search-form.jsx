var React = require('react');

var SearchForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();

		var q = this.refs.query.getDOMNode().value.trim();
		this.props.onSearchSubmit(q);

		this.refs.query.getDOMNode().value = '';
	},
	render: function() {
		return (
			<form className="searchForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Search GitHub for issues..." ref="query" />
				<input type="submit" value="Search" />
			</form>
		);
	},
});

module.exports = SearchForm;