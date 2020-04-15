import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'


const ListBooks = props => {
    const currentlyReading = props.books.filter(book => book.shelf === 'currentlyReading')
    const wantToRead = props.books.filter(book => book.shelf === 'wantToRead')
    const read = props.books.filter(book => book.shelf === 'read')

    return (
        <div className="list-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div>
                <BookShelf books={currentlyReading} title={'Currently Reading'} updateBook={props.updateBook} />
                <BookShelf books={wantToRead} title={'Want to Read'} updateBook={props.updateBook} />
                <BookShelf books={read} title={'Read'} updateBook={props.updateBook} />
            </div>
            </div>
            <div className="open-search">
            <Link to='/search'><button>Add a book</button></Link>
            

            </div>
        </div>
    )}

export default ListBooks