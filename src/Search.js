/*libraries and scripts*/
import React from 'react'; /*React library*/
import Book from './Book'; /*Book script*/
import { Link } from 'react-router-dom';

class Search extends React.Component {

  state={ showing: true};

  render() { /*The Book script is called here*/
    /*if a query is provided, the search function returns the result of the matching.
    if there are no matches, the function returns an empty list.
    */
    const { search } = this.props;
    // eslint-disable-next-line
    const { showing} = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={ event => search(event.target.value)}
              type="text"
              placeholder="Search by subject"/>
          </div>
        </div>
        <div className="search-books-results">
          <div className="searching-subjects">
            <h1>Please search for your favorite books using the following keywords:</h1>
              <p>Android, Art, Artificial Intelligence, Astronomy, Austen, Baseball, Basketball, Bhagat, Biography, Brief, Business, 
              Camus, Cervantes, Christie, Classics, Comics, Cook, Cricket, Cycling, Desai, Design, Development, Digital Marketing, Drama, 
              Drawing, Dumas, Education, Everything, Fantasy, Film, Finance, First, Fitness, Football, Future, Games, Gandhi, Homer, 
              Horror, Hugo, Ibsen, Journey, Kafka, King, Lahiri, Larsson, Learn, Literary Fiction, Make, Manage, Marquez, Money, Mystery,
              Negotiate, Painting, Philosophy, Photography, Poetry, Production, Programming, React, Redux, River, Robotics, Rowling,
              Satire, Science Fiction, Shakespeare, Singh, Swimming, Tale, Thrun, Time, Tolstoy, Travel, Ultimate, Virtual Reality,
              Web Development, iOS</p>
          </div>
          <ol className="books-grid">
            {this.props.searchedBooks.length > 0 ? (
              this.props.searchedBooks.map((book) => (
              <li key={book.id}>
                <Book
                  book={ book }
                  shelfUpdate={this.props.shelfUpdate}
                />
              </li>
          ))) : <li></li> }
          </ol>
        </div>
        <p className="web-creator"><strong>Created by:</strong> Andrés R. Bucheli</p> 
      </div>
    )
  }
}

export default Search
