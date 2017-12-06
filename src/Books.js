import React from 'react';
import ShelfChanger from './ShelfChanger.js';

function Books(props) {
	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage: `url("http://books.google.com/books/content?id=${
							props.book.id
						}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")`
					}}
				/>
				<ShelfChanger book={props.book} updateShelf={props.updateShelf} />
			</div>
			<div className="book-title">{props.book.title}</div>
			{props.book.authors.map((author, index) => (
				<div className="book-authors" key={index}>
					{author}
				</div>
			))}
		</div>
	);
}

export default Books;
