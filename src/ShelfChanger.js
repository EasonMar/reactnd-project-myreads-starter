import React, { Component } from 'react';

class ShelfChanger extends Component {
	render() {
		return (
			<div className="book-shelf-changer">
				{/* 如果是none,则会选择默认选中最后一个None */}
				<select defaultValue={this.props.shelf}>
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
