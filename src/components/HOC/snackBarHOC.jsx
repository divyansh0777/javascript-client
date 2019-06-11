/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { SnackBarContext } from '../Context';

const snackBarHOC = (WrappedComponent) => {
  class TraineeList extends Component {
    render() {
      return (
        <SnackBarContext.Consumer>
          {
            handleOpenSnack => (
              <WrappedComponent handleOpenSnack={handleOpenSnack} {...this.props} />
            )
          }
        </SnackBarContext.Consumer>
      );
    }
  }

  return TraineeList;
};

export default snackBarHOC;
