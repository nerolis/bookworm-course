import React                 from 'react';
import PropTypes             from 'prop-types';
import { Link }              from 'react-router-dom';
import { connect }           from 'react-redux';
import { characterSelector } from '../../reducers/characters';


const CharactersPage = ({ characters }) => <div>
  {characters.length === 0 && <div className="text-center">
  <div className="alert alert-info" >
    You have no characters how about creating one?
  </div>
  <Link to="/characters/new" className="btn btn-primary btn-lg">Create new character</Link>
  </div>
}
</div>

CharactersPage.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
  return {
    characters: characterSelector(state)
  };
}

export default connect(mapStateToProps)(CharactersPage);