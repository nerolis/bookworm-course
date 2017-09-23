import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import styles from '../../styles/HomePage.css';


const HomePage = ({ isAuthenticated, logout }) => (
    <div className='h1 ui header'>
      {isAuthenticated ?
         <Button primary onClick={() => logout()}>Logout</Button> 
         : <div><Link to='/login'>Login</Link> or <Link to='/signup'>Sign Up</Link> </div>}
    </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {  
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);    