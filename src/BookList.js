import React from 'react';
import Books from './Books.js';
import { Link } from 'react-router-dom';

function BookList(props) {
	const { books, updateBook } = props;
	// shelfs可以写在这里作为一个常量,比写在类内部要好一些...此时BookList组件就可以写成函数式组件...
	const shelfs = [{ type: 'currentlyReading', title: 'Currently Reading' }, { type: 'wantToRead', title: 'Want to Read' }, { type: 'read', title: 'Read' }];
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				{
					shelfs.map(shelf => (
						<div className="bookshelf" key={shelf.type}>
							<h2 className="bookshelf-title">{shelf.title}</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{
										books.filter(book => book.shelf === shelf.type)
											.map(book => (
												<li key={book.id}>
													<Books book={book} updateBook={updateBook} />
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
	)
}

export default BookList;
