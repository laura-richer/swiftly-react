import React, { Component } from 'react';

import App from '../components/App';
import { Container } from '../components/Container';
import Questions from '../components/Questions';

class Home extends Component {
  render() {
    return (
      <App>

        <Container
          containerName="modal"
          containerWrapper="modal-header"
        >
          <p>Container Example</p>
          <Questions />
        </Container>
      </App>
    );
  }
}

export default Home;
