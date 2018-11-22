import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';


const propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  siteName: PropTypes.string,
  title: PropTypes.string,
};

const defaultProps = {
  description: null,
  image: null,
  siteName: null,
  title: null,
};


const Meta = (props) => {
  const {
    description,
    image,
    siteName,
    title,
  } = props;

  return (
    <Head>
      {/* Page */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}

      {/* Facebook */}
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      {title && <meta property="og:title" content={title} />}
      {image && <meta property="og:image" content={image} />}
      {description && <meta property="og:description" content={description} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {image && <meta name="twitter:image" content={image} />}
      {description && <meta name="twitter:description" content={description} />}
    </Head>
  );
};


Meta.propTypes = propTypes;
Meta.defaultProps = defaultProps;

export default Meta;
