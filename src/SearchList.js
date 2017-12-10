import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI.js';
import Books from './Books.js';

class SearchList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			books: []
		};

		this.keyTime = 0;
	}

	updateQuery = query => {
		clearTimeout(this.keyTime);
		let _query = query.trim();
		this.setState({ query: _query });
		// 避免oninput时不断触发searchBooks
		this.keyTime = setTimeout(()=>{
			this.searchBooks(_query);
		},100)
	};

	searchBooks(query) {
		if (query) {
			BooksAPI.search(query).then(res_books => {
				if (Array.isArray(res_books)) {
					const books_in_shelf = this.props.books.map(
						book => book.id
					);
					let books = res_books.map(book => {
						if (books_in_shelf.indexOf(book.id) > -1) {
							return this.props.books.filter(
								shelf_book => shelf_book.id === book.id
							)[0];
						} else {
							book.shelf = 'none';
						}
						return book;
					});
					this.setState({ books });
					console.log(books);
				} else {
					alert(res_books.error);
					this.setState({ query: '', books:[] });
				}
			});
		} else {
			this.setState({ books: [] });
		}
	}

	render() {
		const { query, books } = this.state;
		const { updateBook } = this.props;

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">
						Close
					</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							value={query}
							onChange={event =>
								this.updateQuery(event.target.value)
							}
							placeholder="Search by title or author"
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{books.map(book => (
							<Books
								book={book}
								updateBook={updateBook}
								key={book.id}
							/>
						))}
					</ol>
				</div>
			</div>
		);
	}
}

export default SearchList;
