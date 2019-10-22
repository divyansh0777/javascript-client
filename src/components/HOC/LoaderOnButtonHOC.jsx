/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';

const LoaderOnButtonHOC = (WrappedComponent) => {
  class buttonLoader extends Component {
    render() {
      const { loader, ...rest } = this.props;
      if (loader) {
        return (
          <WrappedComponent {...rest}>
            <CircularProgress />
          </WrappedComponent>
        );
      }
      return (
        <WrappedComponent {...rest}>
          Submit
        </WrappedComponent>
      );
    }
  }
  return buttonLoader;
};
export default LoaderOnButtonHOC;
