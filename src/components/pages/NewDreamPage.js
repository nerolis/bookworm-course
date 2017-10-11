import React from 'react';
import NewDreamForm from '../forms/NewDreamForm';

class NewDreamPage extends React.Component {
  state = {}
    render() {
      return (
      <div>
       {!this.state.book && <NewDreamForm />}    
      </div> 

      );
    }
  
}

export default NewDreamPage; 