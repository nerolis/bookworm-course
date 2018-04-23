import React from "react";
import PropTypes from 'prop-types';
import { Item, Segment, Label, Button } from 'semantic-ui-react'

const DreamPage = ({ item, deleteDream, openDream}) => (
      <div>
      {item.map(items => 
          <Item.Group key={items.dreamId}>
          <Item>
            <Item.Image size='small' src={items.image} />
            <Item.Content>
            <Item.Header as='a' style={{ color: 'white' }} onClick={() => openDream(items.dreamId)}>{items.title}</Item.Header>
              <Item.Description>
                <Segment>{items.description}</Segment>
              </Item.Description>
              <Item.Extra>
              <Label as='a' basic size='small'>{items.tags}</Label>
              <Button inverted size='mini' floated='right' onClick={deleteDream}>Delete</Button>
              </Item.Extra>
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