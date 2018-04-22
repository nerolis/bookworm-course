import PropTypes from 'prop-types';
import React from 'react';
import DreamPage from "./DreamPage";

const test = () => console.log('test');

const DreamListPage = ({dreams}) => (
    <div className='ui container'>
        <DreamPage item={dreams} test={test} />
    </div>
)

DreamListPage.propTypes = {
    dreams: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DreamListPage; 