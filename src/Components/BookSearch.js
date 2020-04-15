import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BookSearch extends React.Component {
  state = {
    books: [],
  }

  updateBooks = (books) => {
    this.setState(() => ({
      books
    }))
  }

  handleSearch = (query) => {
    if (query) {
      BooksAPI.search(query)
      .then(books => {
        let newBooks = books.map(book => {
          let shelfBook = this.props.books.filter(propsBook => book.id === propsBook.id)
          return shelfBook.length > 0 ? shelfBook[0] : book
        })
        this.updateBooks(newBooks)
      })
      .catch(() => {
        this.updateBooks('')
      })
    } else {
      this.updateBooks([])
    }
  }

  render() {
    return(
        <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'><button className="close-search">Close</button></Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                type="text" 
                placeholder="Search by title or author"
                onChange={event => this.handleSearch(event.target.value)} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {Array.isArray(this.state.books) ?
                this.state.books.map(book => (
                <li key={book.id}><Book book={book} updateBook={this.props.updateBook}/></li>
                ))
                : <li>{"No Results Found"}</li>
              }
              </ol>
            </div>
          </div>
    )}
}

export default BookSearch