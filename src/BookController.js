import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class BookController extends Component {
	onUpdateBook(book, new_shelf) {
		// 将'更新state/UI'与'更新API的数据'解耦
		BooksAPI.update(book, new_shelf);
		book.shelf = new_shelf;
		this.props.updateBook(book);
	}

	render() {
		return (
			<div
				className="book-shelf-changer"
				onChange={event =>
					this.onUpdateBook(this.props.book, event.target.value)
				}
			>
				<select defaultValue={this.props.book.shelf}>
					<option value="none" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}

export default BookController;
