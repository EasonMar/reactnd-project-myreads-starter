import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SearchList from './SearchList.js';
import BookList from './BookList.js';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: []
        }
        this.updateBook = this.updateBook.bind(this);
    }


    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ books });
        });
    }

    updateBook(new_book){
        this.setState(state => {
            return {
                books: state.books.filter(book => book.id !== new_book.id).concat([new_book])
            };
        });
    }

    render() {
        return (
            <div className="app">
                <Route path="/search" render={() => <SearchList books={this.state.books} updateBook={this.updateBook} />} />
                <Route exact path="/" render={() => <BookList books={this.state.books} updateBook={this.updateBook} />} />
            </div>
        );
    }
}

export default BooksApp;
