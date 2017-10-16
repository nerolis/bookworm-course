import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import SearchBookForm from '../forms/SearchBookForm';
import BookForm from '../forms/BookForm';
import { createBook } from '../../actions/books';


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

  addBook = (book) => this.props.createBook(book).then(() => this.props.history.push('/dashboard'));

    render() {
      return (
      <div>
          <SearchBookForm onBookSelect={this.onBookSelect} />
          {this.state.book && <BookForm submit={this.addBook} book={this.state.book} />}        
      </div> 

      );
    }
  
}


NewDreamPage.propTypes = {
  createBook: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { createBook })(NewDreamPage); 