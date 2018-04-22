import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu, Dropdown} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/auth';
import { allbookSelector } from '../../reducers/books';

const TopNavigation = ({ logout, hasBooks }) => (
    <Menu secondary borderless inverted>
        <Menu.Item as={Link} to='/dashboard'>Dashboard</Menu.Item>
        <Menu.Item as={Link} to='/dream/new'>
            <Dropdown.Item>New Dream</Dropdown.Item>
        </Menu.Item>
        <Dropdown item text='Deprecated'>
            <Dropdown.Menu>
                {hasBooks && <Menu.Item as={Link} to='/test/'>Search for a book</Menu.Item>}
                <Menu.Item as={Link} to='/characters'>Characters</Menu.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Menu.Menu position='right'>
            <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
        </Menu.Menu>
    </Menu>
);

TopNavigation.propTypes = {
    // user: PropTypes.shape({
    //  email: PropTypes.string.isRequired
    // }).isRequired,
    hasBooks: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        user: state.user,
        hasBooks: allbookSelector(state).length > 0
    };
}

export default connect(mapStateToProps, { logout: actions.logout })(TopNavigation);