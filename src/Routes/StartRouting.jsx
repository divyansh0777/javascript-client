/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
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
          <AuthRoute exact path="/" component={Login} />
          <PrivateRoute exact path="/input-demo" component={InputDemo} />
          <PrivateRoute exact path="/textfield-demo" component={TextFieldDemo} />
          <PrivateRoute exact path="/children-demo" component={ChildrenDemo} />
          <PrivateRoute path="/trainee" component={Trainee} />
          <PrivateRoute exact path="/form-validation-demo" component={FormValidationDemo} />
          <PrivateRoute exact path="/basic-slider-demo" component={BasicSliderDemo} />
          <Route component={NoMatch} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default StartRouting;
