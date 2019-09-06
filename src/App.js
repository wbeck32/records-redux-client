import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
// import { Router, Route } from 'react-router';
// import { bindActionCreators } from 'redux';
import RecordsContainer from './records/RecordsContainer';

class App extends Component {
  static propTypes = {
    token: PropTypes.string,
    categories: PropTypes.array
    };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
            <div>
              {' '}
              <RecordsContainer />
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps, null)(App);
