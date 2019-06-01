/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TraineeList from './TraineeList';
import TraineeDetail from './TraineeDetail';

class Trainee extends Component {
  render() {
    const { match } = this.props;
	  console.log('Inside Trainee--', this.state);

	  return (
			<React.Fragment>
        <Switch>
            <Route exact path={`${match.path}`} component={TraineeList} />
            <Route exact path={`${match.path}traineeDetail/:id`} component={TraineeDetail} />
        </Switch>
			</React.Fragment>
	  );
  }
}

export default Trainee;
