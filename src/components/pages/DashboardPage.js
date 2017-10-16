import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { allbookSelector } from '../../reducers/books';
import AddBookCta from '../ctas/AddBookCta';
import { fetchBooks } from '../../actions/books';
import { Segment } from 'semantic-ui-react';

class DashboardPage extends React.Component {
    componentDidMount = () => this.onInit(this.props);
    
    onInit = props => props.fetchBooks();

    
    render() {
    const { isConfirmed, books } = this.props;
        return (
        <div>
            
            {!isConfirmed && <ConfirmEmailMessage />}
            {books.length === 0 ? <AddBookCta /> : <Segment inverted>Amount of books in DB is:{books.length}</Segment>}
        </div>
        );
    }
}

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
    fetchBooks: PropTypes.func.isRequired,
    books: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired
    }),).isRequired                 
}

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed,
        books: allbookSelector(state)
        
    };
}

export default connect(mapStateToProps, { fetchBooks })(DashboardPage)