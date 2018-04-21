import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { dreamsRequest } from '../../actions/dreams';
import DreamListPage from './DreamListPage';

class DashboardPage extends React.Component {
    componentDidMount = () => this.onInit(this.props);

    onInit = props => props.dreamsRequest();

    render() {
    const { isConfirmed, dreams} = this.props;
        return (
        <div>
            {!isConfirmed && <ConfirmEmailMessage />}
            {dreams.length !== 0 && <DreamListPage dreams={dreams} />}
        </div>
        );
    }
}

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired,   
    dreams: PropTypes.arrayOf(PropTypes.object).isRequired       
}

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed,
        dreams: state.dreams
    };
}

export default connect(mapStateToProps, { dreamsRequest })(DashboardPage)