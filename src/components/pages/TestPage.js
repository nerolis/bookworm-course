import React from 'react';
import axios from 'axios';
import SearchBookForm from '../forms/SearchBookForm';
import BookForm from '../forms/BookForm';

class NewDreamPage extends React.Component {
  state = {
    book: null,
  }

  onBookSelect = book => {
    this.setState({ book });
    axios.get(`/api/books/fetchPages?goodreadsId=${book.goodreadsId}`)
      .then(res => res.data.pages)
        .then(pages => this.setState({book: {...book, pages}}));
    ;}

  addBook = () => console.log('test')

    render() {
      return (
      <div>
          <SearchBookForm onBookSelect={this.onBookSelect} />
          {this.state.book && <BookForm submit={this.addBook} book={this.state.book} />}        
      </div> 

      );
    }
  
}

export default NewDreamPage; 