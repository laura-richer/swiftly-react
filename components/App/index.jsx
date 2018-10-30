import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import Meta from '../Meta';

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
      <Meta
        description="Home page"
        title="Home"
      />
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

App.propTypes = propTypes;

export default App;
