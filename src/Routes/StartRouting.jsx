/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import { NavBar } from '../Layouts';
import {
  TextFieldDemo,
  BasicSliderDemo,
  InputDemo,
  FormValidationDemo,
  Trainee,
  ChildrenDemo,
  Login,
  NoMatch,
} from '../pages';

class StartRouting extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/" component={NavBar} />
          <PrivateRoute exact path="/input-demo" component={InputDemo} />
          <PrivateRoute exact path="/textfield-demo" component={TextFieldDemo} />
          <PrivateRoute exact path="/children-demo" component={ChildrenDemo} />
          <PrivateRoute path="/trainee/" component={Trainee} />
          <PrivateRoute exact path="/form-validation-demo" component={FormValidationDemo} />
          <PrivateRoute exact path="/basic-slider-demo" component={BasicSliderDemo} />
          <PrivateRoute component={NoMatch} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default StartRouting;
