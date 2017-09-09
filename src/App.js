import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link, Route } from 'react-router-dom'
import Search from './components/Search'
import Shelf from './components/Shelf'

class BooksApp extends React.Component {
  state = {
    shelfName: ['Currently Reading', 'Want to Read', 'Finished Reading'],
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(res => this.setState({books: res}));
  }

  updateBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(() =>
      BooksAPI.getAll().then(res => this.setState({books: res}))
    )
  }

  render() {
    return (
      <div className="app">
          <Route path="/search" render={() => (
            <Search updateBookShelf={(book, shelf) => this.updateBookShelf(book, shelf)} />
          )}/>
          <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                {this.state.shelfName.map((shelfName) => (
                  <Shelf key={shelfName} shelfTitle={shelfName} books={this.state.books} updateBookShelf={(book, shelf) => this.updateBookShelf(book, shelf)}/>
                ))
              }
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
            )}/>
      </div>
    )
  }
}
export default BooksApp
