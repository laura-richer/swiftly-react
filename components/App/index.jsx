import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import '../../src/scss/all.scss';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const App = (props) => {
  const { children } = props;

  return (
    <Fragment>
      <div>
        {children}
      </div>
    </Fragment>
  );
};

App.propTypes = propTypes;

export default App;
