import React, { Component, PropTypes } from 'react';
import faas from 'faas-client';

export default class Faas extends Component {
  static childContextTypes = {
    faas: PropTypes.object
  };

  state = {
    fass: null
  };

  constructor(props) {
    super(props);

    fass({
      host: props.host,
      appId: props.appId
    }).then(({faas}) => {
      this.setState({
        faas
      });
    });
  }

  getChildContext() {
    return {
      faas: this.state.faas
    };
  }

  render() {
    if (this.state.faas) {
      return this.props.children;
    }

    return (
      <div>
        Initializing faas
      </div>
    );
  }
}
