import React from "react";
import PropTypes from 'prop-types';
import { Input, Button, Form , TextArea, Image} from 'semantic-ui-react'; 

class NewDreamForm extends React.Component {
  state = {
    data: {
      name: '',
      image: '',
      description: '',
      tags: '',
      timestamp: Date.now(),
      author: 'Mock Author',
      text: '',
      dreamId: Date.now(),
      title: ''

    },
    loading: false,
    image: false,
    errors: {},
    
  };
  onChange = e => this.setState({ ...this.state, data: { ...this.state.data, [e.target.name]: e.target.value } })

  onSubmit = () => { 
    this.setState({ loading: true }); 
    this.props.submit(this.state.data);
  }


  render() {
  
    const { data, loading } = this.state
   
    return (

        <Form onSubmit={this.onSubmit} loading={loading}>
            <div className="field">
              <Input
                placeholder='Dream title'
                name='title'
                value={data.title}
                onChange={this.onChange}
              />
            </div>
            
              <TextArea
                placeholder='Tell us more' 
                rows='6'
                name='description'
                value={data.description}
                onChange={this.onChange}
              />

              <Input
                icon='tags'
                iconPosition='left'
                label={{ tag: true, content: 'Tags' }}
                labelPosition='right'
                placeholder='Enter tags'
                name='tags'
                value={data.tags}
                onChange={this.onChange}
              />


            <div className="field">
             <Image src={this.state.data.image} onClick={() => this.setState({image: true})} size='small' label='Want to add image? Click me!' />
                {this.state.image && <Input value={data.image} onChange={this.onChange} name='image' />}
            </div>
          <Button basic inverted>Save</Button>
        </Form>
    );
  }
}

NewDreamForm.propTypes = { submit: PropTypes.func.isRequired };

export default NewDreamForm;