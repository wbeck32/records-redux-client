import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Editor extends Component {
  static propTypes = {
    getRecords: PropTypes.func
  };

  componentWillMount() {
    this.props.getRecords();
  }

  render() {
    const { getRecords } = this.props;
    return (
      <div>
        <div>
          <button onClick={getRecords}>Log out</button>
        </div>
        <div>

        </div>
      </div>
    );
  }
}
