import React, { Component } from 'react';

import App from '../components/App';
import { Container } from '../components/Container';
import Meta from '../components/Meta';


class Home extends Component {
  render() {
    return (
      <App>
        <Meta
          description="Home page"
          title="Home"
        />

        <Container
          containerName="modal"
          containerWrapper="modal-header"
        >
          <p>Container</p>
        </Container>
      </App>
    );
  }
}

export default Home;
