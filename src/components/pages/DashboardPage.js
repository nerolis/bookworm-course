import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { dreamsFetched } from '../../actions/dreams';

import DreamListPage from './DreamListPage';

class DashboardPage extends React.Component {
    componentDidMount = () => this.onInit(this.props);
    
    onInit = props => props.dreamsFetched();


    
    render() {
        
    const { isConfirmed } = this.props;

        return (
        <div>
            {!isConfirmed && <ConfirmEmailMessage />}
            <DreamListPage />
        </div>
        );
    }
}

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired               
}

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed,
        dreams: state.dreams
        
    };
}

export default connect(mapStateToProps, { dreamsFetched })(DashboardPage)