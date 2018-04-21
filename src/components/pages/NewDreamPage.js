import React                  from 'react';
import { connect }            from 'react-redux';
import PropTypes              from 'prop-types';
import NewDreamForm           from '../forms/NewDreamForm';
import { createDreamRequest } from '../../actions/dreams';

class NewDreamPage extends React.Component {
  submit = (data) => this.props.createDreamRequest(data);
    render() {
      return (
      <div>
        <NewDreamForm submit={this.submit}  />   
      </div> 

      );
    }
  
}


NewDreamPage.PropTypes = {
  createDreamRequest: PropTypes.func.isRequired
}

export default connect(null, { createDreamRequest })(NewDreamPage);