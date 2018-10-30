import React, { Component } from 'react';

import App from '../components/App';
import { Container } from '../components/Container';
import PlaylistGen from '../components/PlaylistGen';

class Results extends Component {
  render() {
    return (
      <App>
        <Container
          containerName="modal"
          containerWrapper="modal-header"
        >
          <p>Container</p>
          <PlaylistGen />
        </Container>
      </App>
    );
  }
}

export default Results;
