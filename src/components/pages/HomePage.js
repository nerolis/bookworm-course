import React from 'react';
import { Segment, Button, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import * as css from '../../styles/HomePage.css';
import history from '../../utils/history';

const HomePageStyles = {
  paddingTop: '300px'
}

const HomePage = ({ isAuthenticated }) => (
  <div style={HomePageStyles} className='ui container'>
  {!isAuthenticated &&
  <Segment basic padded>
    <Button onClick={() => history.push("/login")} inverted fluid>Login</Button>
      <Divider inverted horizontal>Or</Divider>
    <Button onClick={() => history.push("/signup")} inverted fluid>Sign Up Now</Button>
  </Segment>
  }
</div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {  
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);    