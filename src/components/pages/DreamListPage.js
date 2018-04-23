import PropTypes from 'prop-types';
import React from 'react';
import DreamPage from "./DreamPage";
import history from '../../utils/history'

const test = () => alert('idi nag');

const openDream = dreamId => history.push(`/dream/read/${dreamId}`);



const DreamListPage = ({dreams}) => (
    <div className='ui container'>
        <DreamPage item={dreams} deleteDream={test} openDream={openDream} />
    </div>
)

DreamListPage.propTypes = {
    dreams: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DreamListPage; 