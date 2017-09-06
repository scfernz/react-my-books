import React from 'react'
import Book from './Book'

class Shelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelfTitle: props.shelfTitle,
      books: props.books
    }
  }
  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.setState({shelfTitle: nextProps.shelfTitle, books: nextProps.books});
    }
  }
  filterBooks = (books) => {
      let filteredBooks;
      let shelfType;
        switch (this.state.shelfTitle) {
          case 'Currently Reading':
            shelfType = 'currentlyReading';
            break;
          case 'Want to Read':
            shelfType = 'wantToRead';
            break;
          case 'Finished Reading':
            shelfType = 'read';
            break;
          default:
            return null;
        }
        filteredBooks = books.filter(
          (book) => book.shelf === shelfType
        )
        return filteredBooks;
  }
  render() {
    return (
      <div className="bookshelf">
          <h2 className="bookshelf-title">{ this.state.shelfTitle }</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                this.state.books ? (
                 (this.filterBooks(this.state.books)).map((book) =>
                  <li>
                    <Book key={book.title} book={book} />
                  </li>
                )) : ''
              }
            </ol>
          </div>
        </div>
    )
  }
}

export default Shelf