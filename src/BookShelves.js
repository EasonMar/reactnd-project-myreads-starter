import React, { Component } from 'react';
import Books from './Books.js';

class BookShelves extends Component {
	shelfs = [
		{ type: 'currentlyReading', title: 'Currently Reading' },
		{ type: 'wantToRead', title: 'Want to Read' },
		{ type: 'read', title: 'Read' }
	]

	render() {
		return (
			<div className="list-books-content">
				{this.shelfs.map(shelf => (
					<div className="bookshelf" key={shelf.type}>
						<h2 className="bookshelf-title">{shelf.title}</h2>
						<div className="bookshelf-books">
							<ol className="books-grid">
								{this.props.books
									.filter(book => book.shelf === shelf.type)
									.map(book => (
										<li key={book.id}>
											<Books book={book} updateShelf={this.props.updateShelf} />
										</li>
									))}
							</ol>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default BookShelves;
