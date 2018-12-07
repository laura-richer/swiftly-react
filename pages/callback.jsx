import React, { Component } from 'react';
import { withRouter } from 'next/router';
import ls from 'local-storage';

class Callback extends Component {
  componentDidMount = () => {
    const { router: { query: { code } } } = this.props;
    ls.set('accessToken', code);
    window.location.href = '/';
  };

  render() {
    return (
      <div />
    );
  }
}

// export const token = this.accessToken;
export default withRouter(Callback);
