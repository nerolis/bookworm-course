import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu, Dropdown} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/auth';

const TopNavigation = ({ logout }) => (
    <Menu secondary borderless inverted>
        <Menu.Item as={Link} to='/dashboard'>Dashboard</Menu.Item>
        <Menu.Item as={Link} to='/dream/new'>
            <Dropdown.Item>New Dream</Dropdown.Item>
        </Menu.Item>
        <Menu.Menu position='right'>
            <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
        </Menu.Menu>
    </Menu>
);

TopNavigation.propTypes = {
    // user: PropTypes.shape({
    //  email: PropTypes.string.isRequired
    // }).isRequired,
    logout: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps, { logout: actions.logout })(TopNavigation);