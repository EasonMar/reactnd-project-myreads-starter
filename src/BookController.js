import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class BookController extends Component {
	onUpdateBook(book, new_shelf) {
		// 将'更新state/UI'与'更新API的数据'解耦
		BooksAPI.update(book, new_shelf);
		book.shelf = new_shelf;
		this.props.updateBook(book);
		// 也可以不解耦,但是更改Book的状态需要异步请求,如果在更改状态时能给一些视觉上的反馈就更好
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
