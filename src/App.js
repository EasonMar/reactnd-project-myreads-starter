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
        this.updateShelf = this.updateShelf.bind(this);
    }


    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ books });
            console.log(books);
        });
    }

    updateShelf(id,shelf){
        this.setState(state => {
            return {
                books: state.books.map(book => {
                    if(book.id === id){
                        book.shelf = shelf;
                    }
                    return book;
                })
            };
        });
    }

    render() {
        return (
            <div className="app">
                <Route path="/search" render={() => <SearchList />} />
                <Route exact path="/" render={() => <BookList books={this.state.books} updateShelf={this.updateShelf} />} />
            </div>
        );
    }
}

export default BooksApp;
