import React from 'react'

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	book: props.book,
    	imageURL: props.book.imageLinks.thumbnail,
    	bookTitle: props.book.bookTitle,
    	authors: props.book.authors,
    	shelf: props.book.shelf
    }
    this.updateBookShelf = props.updateBookShelf;
    console.log(props);
  }
   componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.setState({shelf: nextProps.book.shelf});
    }
  }
  handleSelect(e) {
	this.updateBookShelf(this.state.book, e.target.value);
  }
  render() {
    return (
    	<li>
	    	<div className="book">
		    	<div className="book-top">
		        	<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.state.imageURL})` }}></div>
		        	<div className="book-shelf-changer">
					    <select value={this.state.shelf} onChange={(e) => this.handleSelect(e)}>
					      <option value="none" disabled>Move to...</option>
					      <option value="currentlyReading">Currently Reading</option>
					      <option value="wantToRead">Want to Read</option>
					      <option value="read">Finished Reading</option>
					      <option value="none">None</option>
					    </select>
		        	</div>
	            </div>
		        <div className="book-title">{ this.state.bookTitle }</div>
		        { this.state.authors ?
	        	<div className="book-authors">{ (this.state.authors.length === 1 ? this.state.authors : this.state.authors.map((author, index, authors) =>
	        		{ return (index < authors.length - 1) ? `${author}, ` : `${author}` }))
	        	}</div> : '' }
	    	</div>
    	</li>
    )
  }
}

export default Book