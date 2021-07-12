/*Libraries and scripts*/
import React from 'react'; /*Library react*/
import * as BooksAPI from './BooksAPI'; /*Used to interact with the Backend API*/
import './App.css'; /*App tyle*/
import Shelf from './Shelf'; /*Shelf script*/
import Search from './Search'; /*Search script*/
import { Route, Link } from 'react-router-dom'; /*Obligatory to use react router*/

class BooksApp extends React.Component { /*main class*/
  state = { /*Initial state*/
    books: [],
    searchedBooks: [],
    isLoading: true,
  }

 fetch() { /*Used for fetching data*/
    BooksAPI.getAll().then( books => {
      this.setState({
        books,
        isLoading: false,
      })
    });
 }
/*The fetch() function is run once this component is renderized*/
 componentDidMount() {
 	this.fetch();
 }



  search = (query) => {
    if (query.length !== 0) { /*
  If a query is provided, it runs the function search in BooksAPI*/
      BooksAPI.search(query).then( searchedBooks => {
        let searchResult = [];
          for (const serachedBook of searchedBooks) {
            for (const book of this.state.books) {
                if (serachedBook.id === book.id) { /*once completed successfully, checks if the books were found are already in shelf, if they are, it makes sure that the shelf assigned on the main page and on the search page are the same*/
                  serachedBook.shelf = book.shelf
                }
            }
            searchResult.push(serachedBook)
          }
          return searchResult
      }).then((searchedBooks) => {
        this.setState((prevState) => ({ searchedBooks }))
      }).catch(searchedBooks => this.setState({ searchedBooks: [] })) /*.catch handles incorrect query and returns no result*/
    } else {
      this.setState({ searchedBooks: [] }) /*If there is no query*/
    }
  }



  shelfUpdate = (addedbook, shelf) => { /*it runs update whenever shelf selection is made;*/
    BooksAPI.update(addedbook, shelf).then( response => {
      addedbook.shelf = shelf
    })

    let addedBooks = this.state.books.filter( book => book.id !== addedbook.id ) /* prior to adding a book to its selected shelf, it checks if the book is already on that shelf*/
    addedBooks.push(addedbook);
    this.setState({ books: addedBooks })
   	this.setState({ searchedBooks: [] }) /*once added, book search is reset an empty array*/
    this.componentDidMount()
  }

  render() { /*Displays the rendering you want to see on screen.  The scripts Shelf and Search are called here}*/
    return (
      <div className="app">
        <Route exact path="/" render={ () => ( /*Route path*/
          <div className="list-books">
            <div className="list-books-title">
              <h1>THE BOOKS THAT I LOVE</h1>
              <h2>Created by: Andrés R. Bucheli</h2> {/*Displays the content of the shelfs in the current state*/}
            </div>
            <div className="list-books-content">
                <Shelf 
                  books={this.state.books}
                  shelfUpdate={this.shelfUpdate}
                />
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />

        <Route path="/search" render={ () => (
          <Search
            searchedBooks={this.state.searchedBooks}
            search={this.search}
            shelfUpdate={this.shelfUpdate}
          />
        )}
        />
        </div>
    )
  }
}

export default BooksApp
