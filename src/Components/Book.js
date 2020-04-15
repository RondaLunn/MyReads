import React from 'react'

const Book = props => {
    const imageURL = props.book.imageLinks ? props.book.imageLinks.thumbnail : null
    const authors = props.book.authors ? props.book.authors : []
    return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" 
            style={{ 
                width: 128, 
                height: 193, 
                backgroundImage: `url(${imageURL})` 
                }}></div>
            <div className="book-shelf-changer">
                <select 
                onChange={event => props.updateBook(props.book, event.target.value)}
                defaultValue={props.book.shelf ? props.book.shelf : 'none'}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead" >Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{authors.map(author => <div key={author}>{author}</div>)}</div>
        </div>
    )
  
}

export default Book