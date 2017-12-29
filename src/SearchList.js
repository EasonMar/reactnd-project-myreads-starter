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

	/**
	 * 仅仅更新 .state.query ，而不发起网络请求
	 */
	updateQuery = query => {
		let _query = query.trim();
		this.setState({ query: _query });
	}

	/**
	 * 输入完之后通过按下回车键来发起请求
	 */
	handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			this.searchBooks(e.target.value);
		}
	}

	/**
	 * 查找书本
	 * @param  {string} query 查询关键字
	 */
	searchBooks(query) {
		if (query) {
			BooksAPI.search(query).then(res_books => {
				if (Array.isArray(res_books)) {
					// 获取书架中已有书籍的id
					const books_in_shelf = this.props.books.map(book => book.id);
					let books = res_books.map(book => {
						// Array.prototype.includes() 方法判断一个元素是否存在于数组中
						if (books_in_shelf.includes(book.id)) {
							// Array.prototype.find() 方法会返回第一个符合条件的数组成员
							return this.props.books.find(shelf_book => shelf_book.id === book.id);
						} else {
							book.shelf = 'none';
						}
						return book;
					});
					this.setState({ books });
				} else {
					alert(res_books.error);
					this.setState({ query: '', books:[] }); // 清空state
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
							onKeyPress={this.handleKeyPress}
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
