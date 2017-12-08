import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI.js';


class SearchList extends Component {
	constructor(props){
		super(props);
		this.state = {
			query: "",
			books: []
		}
	}

	updateQuery = query=> {
		let _query = query.trim();
		this.setState({ query: _query });
		this.searchBooks(_query);
	}

	searchBooks(query){
		if(query){
			BooksAPI.search(query).then(books => {
				if (Array.isArray(books)) {
					this.setState({ books });
				} else {
					alert(books.error);
					this.setState({ query: '' });
				}
				console.log(books);
			});
		}else{
			this.setState({ books:[] });
		}
	}

	render(){
		const {query} = this.state;
	    return (
	        <div className="search-books">
	            <div className="search-books-bar">
	                <Link to="/" className="close-search">Close</Link>
	                <div className="search-books-input-wrapper">
	                    <input
		                    type="text"
		                    value={query}
		                    onChange={event => this.updateQuery(event.target.value)}
		                    placeholder="Search by title or author"
	                    />
	                </div>
	            </div>
	            <div className="search-books-results">
	                <ol className="books-grid">

	                </ol>
	            </div>
	        </div>
	    );
    }
}

export default SearchList;
