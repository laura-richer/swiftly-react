import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import Meta from '../Meta';

import content from '../../../src/json/content.json';

import '../../../src/scss/all.scss';

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
        description={content.metaData.metaDescription}
        siteName={content.metaData.siteName}
        title={content.metaData.metaTitle}
      />
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

App.propTypes = propTypes;

export default App;
