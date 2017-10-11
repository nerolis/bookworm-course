import React from 'react';
import { Segment } from 'semantic-ui-react';
import SearchBookForm from '../forms/SearchBookForm';
import BookForm from '../forms/BookForm';

class NewDreamPage extends React.Component {
  state = {
    book: null,
  }

  onBookSelect = book => this.setState({ book });

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