/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { NavBar } from '../component';

class PrivateLayout extends Component {
  render() {
    const { children, ...rest } = this.props;

    return (
      <React.Fragment>
        <NavBar {...rest} />
        { children }
      </React.Fragment>
    );
  }
}

export default PrivateLayout;
