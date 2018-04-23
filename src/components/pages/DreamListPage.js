import PropTypes from "prop-types";
import { connect } from "react-redux";
import React from 'react';
import DreamPage from "./DreamPage";
import history from '../../utils/history'
import { deleteDreamRequest } from '../../actions/dreams';


class DreamListPage extends React.Component {

deleteDream = dreamId => this.props.deleteDreamRequest(dreamId);

openDream = dreamId => history.push(`/dream/read/${dreamId}`);

    render() {
        const { dreams } = this.props;
        return (
            <div className='ui container'>
                <DreamPage item={dreams} deleteDream={this.deleteDream} openDream={this.openDream} />
            </div>
        );
    }
}


DreamListPage.propTypes = {
    dreams: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteDreamRequest: PropTypes.func.isRequired
}

export default connect(null, { deleteDreamRequest })(DreamListPage);