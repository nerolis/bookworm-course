import PropTypes from 'prop-types';
import React from 'react';
import DreamPage from "./DreamPage";

const DreamListPage = ({dreams}) => (
    <div className='ui container'>
        <DreamPage item={dreams} />
    </div>
)

DreamListPage.propTypes = {
    dreams: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DreamListPage; 