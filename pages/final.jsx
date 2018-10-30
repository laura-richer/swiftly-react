import React, { Component } from 'react';

import App from '../components/App';
import { Container } from '../components/Container';

class Final extends Component {
  render() {
    return (
      <App>
        <Container
          containerName="modal"
          containerWrapper="modal-header"
        >
          <p>Container</p>
          <p>Final page</p>
        </Container>
      </App>
    );
  }
}

export default Final;
