import React from 'react'
import { Route } from 'react-router-dom'

import '../App.css'

import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import BookSearch from './BookSearch'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  getBooks = () => {
    BooksAPI.getAll()
    .then(books => {
    this.setState(() => ({
      books
    }))
  })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      this.getBooks()
    })
    .catch(() =>{
      alert('An error has occurred. Please try again')
      this.getBooks()
    })
  }

  componentDidMount() {
    this.getBooks()
  }

  render() {
    return (
      <div className="app">
        
        <Route exact path='/' render ={() => (
          <ListBooks
          books={this.state.books} 
          updateBook={this.updateBook}
          />
        )} />
        <Route path='/search' render={({ history }) => (
          <BookSearch 
          books={this.state.books}
          updateBook={(book, shelf) => {
            this.updateBook(book, shelf)
            history.push('/')
          }}
          />
          )} />
      </div>
    )
  }
}

export default BooksApp
