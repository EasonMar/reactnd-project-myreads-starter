import React, { Component } from 'react';
import Books from './Books.js';
import { Link } from 'react-router-dom';

class BookList extends Component {
	shelfs = [
		{ type: 'currentlyReading', title: 'Currently Reading' },
		{ type: 'wantToRead', title: 'Want to Read' },
		{ type: 'read', title: 'Read' }
	]

	render() {
		const { books, updateShelf } = this.props;
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					{
						this.shelfs.map(shelf => (
							<div className="bookshelf" key={shelf.type}>
								<h2 className="bookshelf-title">{shelf.title}</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">
										{
											books.filter(book => book.shelf === shelf.type)
												.map(book => (
													<li key={book.id}>
														<Books book={book} updateShelf={updateShelf} />
													</li>
												))
										}
									</ol>
								</div>
							</div>
						))
					}
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		);
	}
}

export default BookList;
