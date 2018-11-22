import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

const Button = (props) => {
  const { handleClick, title } = props;

  return (
    <button type="button" title={title} onClick={handleClick}>
      {title}
    </button>
  );
};

Button.propTypes = propTypes;

export default Button;
