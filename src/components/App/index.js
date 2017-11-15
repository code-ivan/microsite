// src/components/App/index.js
import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';

class App extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  componentWillMount(){
  }
  render() {
    const click = ()=>{
      this.props.fetchTest()
    }
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        {/* Use Helmet for all meta tag */}
        <Helmet title="Test TITLE HELMET">
          <meta name="description" content="Stop the VAT increase on Small Businesses" />
        </Helmet>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          {this.props.test.data}
        </div>
        <button type="button" onClick={() =>click()}>TEST</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  test: state.test
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTest: () => {
      dispatch({
        type:"FETCH_TEST"
      });
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)