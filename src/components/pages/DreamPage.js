import React from "react";
import { Item, Segment } from 'semantic-ui-react'

class DreamPage extends React.Component {
  state = {};

  render() {
    const { item } = this.props;
    return (
      <div className='container'>
      {item.map(items => 
          <Item.Group key={items.childKey}>
          <Item>
            <Item.Image size='small' src={items.image} />
            <Item.Content>
              <Item.Header as='a' style={{ color: '#BDBDBD' }}>{items.header}</Item.Header>
              <Item.Description>
                <Segment>{items.description}</Segment>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group> 
      )}
      </div>
    )
  }
}

export default DreamPage