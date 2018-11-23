import React from 'react';

/* eslint-disable no-console */
const someHOC = () => {
  class WrappedComponent extends React.Component {
    componentWillMount() {
      console.log('componentWillMount');
    }

    componentDidMount() {
      console.log('componentDidMount');
    }

    render() {
      return null;
    }
  }

  return WrappedComponent;
};

export default someHOC;
