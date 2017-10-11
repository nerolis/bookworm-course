import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Form, Dropdown, Segment } from 'semantic-ui-react';
import { searchBook } from '../../actions/books';

class SearchBookForm extends React.Component {
  state = {
    query: '',
    loading: false,
    options: [],
      books: {}
  }

  onSearchChange = (e, data) => {
    clearTimeout(this.timer);
    this.setState({
      query: data
    });
    this.timer = setTimeout(this.fetchOptions, 1000);
  }

  onChange = (e, data) => {
    this.setState({ query: data.value });
    this.props.onBookSelect(this.state.books[data.value]);
  }

  fetchOptions  = () => {
    if (!this.state.query) return;
    this.setState({ loading: true });
    searchBook(this.state.query)
      .then(books => {
        const options = [];
        const booksHash = {};
        books.forEach(book => {
          booksHash[book.goodreadsId] = book;
          options.push({
            key: book.goodreadsId,
            value: book.goodreadsId,
            text: book.title
          });
        });
        this.setState({ loading: false, options, books: booksHash });
      });
  }


  render() {

    return (
     <Segment>
      <Form>
        <Dropdown 
         search
         fluid placeholder='Search for a book by title'
         value={this.state.query}
         onSearchChange={this.onSearchChange}
         options={this.state.options}
         loading={this.state.loading}
         onChange={this.onChange}
         
         />
      </Form>
      </Segment>
    );
  }
}

SearchBookForm.propTypes = {
  onBookSelect: PropTypes.func.isRequired
};

export default connect(null, { searchBook })(SearchBookForm);