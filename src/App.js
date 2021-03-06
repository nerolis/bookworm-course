import React                       from 'react';
import PropTypes                   from 'prop-types';
import { Route }                   from 'react-router-dom';
import Loader                      from 'react-loader';
import { connect }                 from 'react-redux';
import HomePage                    from './components/pages/HomePage';
import LoginPage                   from './components/pages/LoginPage';
import DashboardPage               from './components/pages/DashboardPage';
import ForgotPasswordPage          from './components/pages/ForgotPasswordPage';
import ResetPasswordPage           from './components/pages/ResetPasswordPage';
import SignupPage                  from './components/pages/SignupPage';
import ConfirmationPage            from './components/pages/ConfirmationPage';
import NewDreamPage                from './components/pages/NewDreamPage';
import UserRoute                   from './components/routes/UserRoute';
import GuestRoute                  from './components/routes/GuestRoute';
import TopNavigation               from './components/navigation/TopNavigation';

import DreamListPage               from './components/pages/DreamListPage';
import SingleDreamPage             from './components/pages/SingleDreamPage';
import { fetchCurrentUserRequest } from './actions/users';


class App extends React.Component {
    componentDidMount() {
        if (this.props.isAuthenticated) this.props.fetchCurrentUserRequest();
    }

    render() {
        const { location, isAuthenticated, loaded } = this.props;
        return (
            <div className='ui container'>
            <Loader loaded={loaded}>
                {isAuthenticated && <TopNavigation />}
                <Route location={location} path='/' exact component={HomePage} />
                <Route location={location} path='/confirmation/:token' exact component={ConfirmationPage} />

                <GuestRoute location={location} path='/login' exact component={LoginPage} />
                <GuestRoute location={location} path='/signup' exact component={SignupPage} />
                <GuestRoute location={location} path='/forgot_password' exact component={ForgotPasswordPage} />
                <GuestRoute location={location} path='/reset_password/:token' exact component={ResetPasswordPage} />

                <UserRoute location={location} path='/dashboard' exact component={DashboardPage} />
               
                <UserRoute location={location} path='/dream/read/:dreamId' exact component={SingleDreamPage} />
                <UserRoute location={location} path='/dream/new' exact component={NewDreamPage} />
                <UserRoute location={location} path='/dream/list' exact component={DreamListPage} />
            
            </Loader>
            </div>
        )
    }
}

App.propTypes = {
    location: PropTypes.shape({
        pathname:  PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    fetchCurrentUserRequest: PropTypes.func.isRequired,
    loaded: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.email,
        loaded: state.user.loaded,
    }
}

export default connect(mapStateToProps, { fetchCurrentUserRequest })(App);
