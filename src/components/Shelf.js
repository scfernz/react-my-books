import React from 'react'

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
          <h2 className="bookshelf-title">{ this.shelfTitle }</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <li>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{
                    this.state.books ?
                      (this.filterBooks(this.state.books)).map((book) => {
                        return book.title;
                      }) : ''
                    }
                  </div>
                  <div className="book-authors">Harper Lee</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
    )
  }
}

export default Shelf