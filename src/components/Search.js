import React from 'react'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [], shelvedBooks: [], shelvedBookIDs: [] };
    this.query = '';
    this.updateBookShelf = props.updateBookShelf;
  }
  componentDidMount() {
    BooksAPI.getAll().then(res => this.setState({shelvedBooks: res, shelvedBookIDs: res.map((book) => book.id)}));
  }
  handleSearch(e) {
    console.log(e.target.value);
    console.log(this.shelvedBooks);
    BooksAPI.search(e.target.value, 5).then(res => this.setState({books: res}));
    console.log(this.state.books);
  }
  checkShelvedID(book) {
    if (this.state.shelvedBookIDs.includes(book.id)) {
      // return this.state.shelvedBooks.find((book) => book.id === this.state.shelvedBooksIDs).shelf;
      return this.state.shelvedBooks[0].shelf;
    } else {
      return 'none';
    }
  }
  render() {
    console.log(this.state);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={(e) => this.handleSearch(e)}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
              {
                this.state.books ? (
                 this.state.books.map((book) =>
                    <Book
                      key={book.id}
                      book={book}
                      updateBookShelf={this.updateBookShelf}
                      shelf={this.checkShelvedID(book)}
                    />
                )) : ''
              }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search