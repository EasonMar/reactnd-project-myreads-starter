import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SearchBooks from './SearchBooks.js';
import BookList from './BookList.js';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: []
        }
        this.updateShelf = this.updateShelf.bind(this);
    }


    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ books });
        });
    }

    updateShelf(id,shelf){
        this.setState(state => {
            // 这样写就是命令式，而不是声明式了...(这里需要优化)
            let maintainBooks = state.books.filter(book => book.id !== id);
            let updateBook = state.books.filter(book => book.id === id)[0];
            updateBook.shelf = shelf;
            maintainBooks.push(updateBook);
            return {
                books: maintainBooks
            };
        });
    }

    render() {
        return (
            <div className="app">
                <Route path="/search" render={() => <SearchBooks books={this.state.books} />} />
                <Route exact path="/" render={() => <BookList books={this.state.books} updateShelf={this.updateShelf} />} />
            </div>
        );
    }
}

export default BooksApp;
