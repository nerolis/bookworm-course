import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Menu, Dropdown, Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/auth';
import { allbookSelector } from '../../reducers/books';
import { setLocale } from "../../actions/locale";

const TopNavigation = ({ user, logout, hasBooks }) => (
    <Menu secondary pointing inverted>
        <Menu.Item as={Link} to='/dashboard'>
        <FormattedMessage id='nav.dashboard' defaultMessage='Dashboard'/>
        </Menu.Item>
        {hasBooks && <Menu.Item as={Link} to='/test/'>Search for a book</Menu.Item>}
        <Menu.Item as={Link} to='/characters'>Characters</Menu.Item>
        <Menu.Menu position='right'>
            <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
        </Menu.Menu>
    </Menu>
);

TopNavigation.propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string.isRequired
    }).isRequired,
    hasBooks: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    setLocale: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.user,
        hasBooks: allbookSelector(state).length > 0
    };
}

export default connect(mapStateToProps, { logout: actions.logout, setLocale })(TopNavigation);