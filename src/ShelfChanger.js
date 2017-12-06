import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class ShelfChanger extends Component {

	onChangeShelf(book, shelf){
		// 将'更新state/UI'与'更新API的数据'解耦
		BooksAPI.update(book,shelf);
		this.props.updateShelf(book.id, shelf);
	}

	render() {
		return (
			<div className="book-shelf-changer" onChange={event=>this.onChangeShelf(this.props.book, event.target.value)}>
				{/* 如果是none,则会选择默认选中最后一个None */}
				<select defaultValue={this.props.book.shelf}>
					<option value="none" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		);
	}
}

export default ShelfChanger;
