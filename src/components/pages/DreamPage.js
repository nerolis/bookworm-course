import React from "react";
import PropTypes from 'prop-types';
import { Item, Segment } from 'semantic-ui-react'

const DreamPage = ({item}) => (
      <div>
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

DreamPage.propTypes = {
  item: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DreamPage