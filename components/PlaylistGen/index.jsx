import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  answers: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

const PlaylistGen = (props) => {
  const { answers } = props;
  console.log(answers);

  return (
    <div>Playlist here</div>
  );
};

PlaylistGen.propTypes = propTypes;

export default PlaylistGen;
