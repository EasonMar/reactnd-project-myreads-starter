import React from 'react';
import BookController from './BookController.js';

function Books(props) {
	const {book,updateShelf} = props;
	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage: `url("http://books.google.com/books/content?id=${
							book.id
						}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")`
					}}
				/>
				<BookController book={book} updateShelf={updateShelf} />
			</div>
			<div className="book-title">{book.title}</div>
			{book.authors && book.authors.map((author, index) => (
				<div className="book-authors" key={index}>
					{author}
				</div>
			))}
		</div>
	);
}

export default Books;
