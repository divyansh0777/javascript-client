/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { AuthLayout } from '../Layouts';

class AuthRoute extends Component {
  render() {
    const { ...rest } = this.props;

    return (
      <AuthLayout>
        <Route {...rest} />
      </AuthLayout>
    );
  }
}

export default AuthRoute;
