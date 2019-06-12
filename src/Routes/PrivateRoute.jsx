/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateLayout } from '../Layouts';

class PrivateRoute extends Component {
  render() {
    const { ...rest } = this.props;
    return (
      localStorage.getItem('token')
        ? (
          <PrivateLayout {...rest}>
            <Route {...rest} />
          </PrivateLayout>
        )
        : <Redirect to="/" />
    );
  }
}

export default PrivateRoute;
