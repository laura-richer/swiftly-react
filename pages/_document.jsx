import 'isomorphic-fetch';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import svgSprite from 'svg-sprite-loader/runtime/sprite.build';

import { APP_NAME, APP_THEME_COLOR } from '../config/constants';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en" prefix="og: http://ogp.me/ns#">
        <Head>
          {/* Browser */}
          <meta charSet="utf-8" />
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />

          {/* App */}
          <meta name="theme-color" content={APP_THEME_COLOR} />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />

          {/* Icons */}
          {/* <link rel="icon" sizes="32x32" href={icon32} />
          <link rel="icon" sizes="128x128" href={icon128} />
          <link rel="icon" sizes="192x192" href={icon192} />
          <link rel="apple-touch-icon" sizes="120x120" href={icon120} />
          <link rel="apple-touch-icon" sizes="152x152" href={icon152} />
          <link rel="apple-touch-icon" sizes="167x167" href={icon167} />
          <link rel="apple-touch-icon" sizes="180x180" href={icon180} /> */}

          {/* PWA */}
          <link rel="manifest" href="/static/manifest.json" />

          {/* Styles */}
        </Head>
        <body>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: svgSprite.stringify() }} />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
