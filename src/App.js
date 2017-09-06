import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
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

  render() {
    return (
      <div className="app">
          <Route path="/search" component={ Search }/>
          <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                {this.state.shelfName.map((shelfName) => (
                  <Shelf key={shelfName} shelfTitle={shelfName} books={this.state.books}/>
                ))
              }
              </div>
              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
              </div>
            </div>
            )}/>
      </div>
    )
  }
}
export default BooksApp
