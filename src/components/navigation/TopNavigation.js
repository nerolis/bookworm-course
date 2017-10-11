import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu, Dropdown, Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/auth';

const TopNavigation = ({ user, logout }) => (
    <Menu secondary pointing inverted color='white'>
        <Menu.Item as={Link} to='/dashboard'>Dashboard</Menu.Item>
        <Menu.Item as={Link} to='/Test'>Book Search</Menu.Item>
        <Menu.Menu position='right'>
            <Dropdown trigger={<Image avatar src={'https://static.zerochan.net/Chen.full.1066321.jpg'}/>}>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
    </Menu>
);

TopNavigation.propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string.isRequired
    }).isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { logout: actions.logout })(TopNavigation);