/*libraries and scripts*/
import React from 'react'; /*React library*/
import Book from './Book'; /*script Book*/

class Shelf extends React.Component {
  /*
  Before returning the result, the books are filtered according to the selected shelf category
  */
  render() { /*The Book script is called from here*/
    const { books } = this.props;
    const currentlyReading = books.filter( book => book.shelf === "currentlyReading");
    const wantToRead = books.filter(book => book.shelf === "wantToRead");
    const read = books.filter(book => book.shelf === "read");

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">CURRENTLY READING</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {currentlyReading.map( book => (
                <li key={book.id}>
                  <Book
                    books={ this.props.books }
                    book={ book }
                    shelfUpdate={this.props.shelfUpdate}
                  />
                </li>
              ))
              }
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">WANT TO READ</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {wantToRead.map( book => (
                <li key={book.id}>
                  <Book
                    books={ this.props.books }
                    book={ book }
                    shelfUpdate={this.props.shelfUpdate}
                  />
                </li>
              ))
              }
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">READ</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {read.map( book => (
                <li key={book.id}>
                  <Book
                    books={ this.props.books }
                    book={ book }
                    shelfUpdate={this.props.shelfUpdate}
                  />
                </li>
              ))
              }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf
