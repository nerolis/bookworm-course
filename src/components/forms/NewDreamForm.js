import React from "react";
import { Input, Button, Form , TextArea} from 'semantic-ui-react';

class NewDreamForm extends React.Component {
  state = { image: 'http://i0.kym-cdn.com/photos/images/original/000/920/927/432.png', };

  render() {
    return (
        <Form onSubmit={this.onSubmit}>
              <TextArea
                placeholder='Tell us more' 
                rows='6'
                />
              <Input
                icon='tags'
                iconPosition='left'
                label={{ tag: true, content: 'Tags' }}
                labelPosition='right'
                placeholder='Enter tags'
              />
              <div>
              <div className="field"> {this.state.image !== '' && <img src={this.state.image} className="ui small bordered image" />}</div>
              </div>
          <Button basic color='blue'>Save</Button>
        </Form>
    );
  }
}


export default NewDreamForm;