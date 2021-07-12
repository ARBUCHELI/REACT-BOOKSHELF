/*Libraries and scripts*/
import React from 'react'; /*React library*/
import Selector from './Selector'; /*Selector script*/
import nature from './icons/nature.jpg'; /*picture for books without cover*/

class Book extends React.Component {

  render() { /*The script Selector is called from here*/
    const { book } = this.props;
    const image = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : nature; /*When there is not image asociated witht the book, the app app replaces it by
    the image of a pile of books (For example in the case of the book "My first life" in the biography section)*/
    const author = book.authors ? book.authors : "Unknown"; /*If there is no author, "Unknown is displayed"*/
    return (
        <div className="book">
          <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
            <Selector
              shelfUpdate={this.props.shelfUpdate}
              book={ book }
              books={ this.props.books }
              selectorCheck={this.props.selectorCheck}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{author}</div>
        </div>
    )
  }
}

export default Book
