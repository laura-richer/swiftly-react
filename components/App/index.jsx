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
        description="Based on how your day has gone, here is your personal soundtrack to match your mood and activities. You can listen to the tracks here or save as a spotify playlist and listen anytime."
        title="swiftLY | Generate a soundtrack for your day"
      />
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

App.propTypes = propTypes;

export default App;
