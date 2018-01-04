import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { allbookSelector } from '../../reducers/books';
import AddDreamCta from '../ctas/AddDreamCta';
import { fetchBooks } from '../../actions/books';
import { Segment, Message , Icon} from 'semantic-ui-react';

class DashboardPage extends React.Component {
    componentDidMount = () => this.onInit(this.props);
    
    onInit = props => props.fetchBooks();

    
    render() {
    const { isConfirmed, books } = this.props;
    const emptyMessage = (
     <Message icon>
      <Icon name='circle notched' loading />
        <Message.Content>
        <Message.Header>Just one second</Message.Header>
             We are fetching that content for you.ц
        </Message.Content>
      </Message>
  );
        return (
        <div>
            {!isConfirmed && <ConfirmEmailMessage />}
            {books.length === 0 ? emptyMessage : <Segment inverted>Amount of books in DB is: {books.length} </Segment>}
            <AddDreamCta />
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