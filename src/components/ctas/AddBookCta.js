import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AddBookCta = () => (
  <Link to='/books/new'>
    <Image
      src='https://vignette.wikia.nocookie.net/touhou/images/8/8f/De_Chen.png/revision/latest?cb=20150114061329'
      size='medium'
      label='Got a new dream? I would like to save it!'
    />
  </Link>
);

export default AddBookCta;