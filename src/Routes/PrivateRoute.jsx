/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { PrivateLayout } from '../Layouts';

class PrivateRoute extends Component {
  render() {
    const { ...rest } = this.props;
    return (
      <PrivateLayout>
        <Route {...rest} />
      </PrivateLayout>
    );
  }
}

export default PrivateRoute;
