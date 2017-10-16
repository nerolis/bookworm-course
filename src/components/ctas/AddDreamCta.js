import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AddBookCta = () => (
 <div>
  <Link to='/books/new'>
    <Image
      src='https://vignette.wikia.nocookie.net/touhou/images/8/8f/De_Chen.png/revision/latest?cb=20150114061329'
      size='medium'
      label='Got a new dream? I would like to save it!'
    />
  </Link>

  <Link to='/dream/list'>
    <Image
      src='http://touhou.ucoz.ru/chenii_copy.gif'
      size='small'
      label='List of dreams'
    />
  </Link>
  </div>
);

export default AddBookCta;