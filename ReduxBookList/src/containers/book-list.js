import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList(){
		return this.props.books.map((book) => {
			return (
				<li 
					onClick={() => this.props.selectBook(book)}
					key={book.title} 
					className="list-group-item">
						{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

// Whatever is returned will show up as props inside BookList
function mapStateToProps(state) {
	return {
		books: state.books
	};
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, result should be passed to all of our reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from component to container - it needs to know about dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);