import React from 'react';
import { Link } from 'react-router-dom';
import BookShelves from './BookShelves.js';

function BookList(props) {
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<BookShelves books={props.books} updateShelf={props.updateShelf} />
			<div className="open-search">
				<Link to="/search">Add a book</Link>
			</div>
		</div>
	);
}

export default BookList;
