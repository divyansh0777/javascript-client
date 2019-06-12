/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Footer } from '../component';

class AuthLayout extends Component {
  render() {
    const { children, ...rest } = this.props;

    return (
      <React.Fragment>
        { children }
        <Footer {...rest} />
      </React.Fragment>
    );
  }
}

export default AuthLayout;
