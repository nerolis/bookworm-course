import React from "react";
import { Input, Button, Form , TextArea, Image} from 'semantic-ui-react';

class NewDreamForm extends React.Component {
  state = {
    data: {
      name: '',
      image: 'http://i0.kym-cdn.com/photos/images/original/000/920/927/432.png',
      text: '',
      tags: '',
    },
    loading: false,
    image: false,
    errors: {},
    
  };
  onChange = (e) => this.setState({ ...this.state, data: { ...this.state.data, [e.target.name]: e.target.value } })

  onSubmit = (e) => { 
    e.preventDefault
    console.log(this.state.data)
  }

  render() {
    
    const { data, loading } = this.state
   
    return (

        <Form onSubmit={this.onSubmit} loading={loading}>
              <TextArea
                placeholder='Tell us more' 
                rows='6'
                name='text'
                value={data.text}
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
          <Button basic color='blue'>Save</Button>
        </Form>
    );
  }
}


export default NewDreamForm;