/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import React, { useState, Component } from 'react';
import {
  TextField, createMuiTheme, Typography, Snackbar, SnackbarContent, Icon, IconButton,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import AppCss from './AppCss';
import { NavBar, Footer } from './Layouts';
import { AuthRoute, PrivateRoute, StartRouting } from './Routes';
import {
  TextFieldDemo,
  BasicSliderDemo,
  InputDemo,
  FormValidationDemo,
  MathDemo,
  Trainee,
  ChildrenDemo,
  Login,
  NoMatch,
} from './pages';
import { SnackBarContext } from './components';

const useStyles = theme => ({
  success: {
    backgroundColor: '#4BB543',
  },
  tick: {
    color: '#FFFFFF',
  },
});

class App extends Component {
/* -------------Day 4-----------------------------------------*/
// render() {
  //   return (
  //   <div>
  //     <TextFieldDemo />
  //   </div>
  //   );
  // }
// }
  /* -------------Day 5-----------------------------------------*/

  // render() {
  //   return (
  //   <div style={AppCss.mainDiv}>
  //     <BasicSliderDemo />
  //     <TextFieldDemo />
  //   </div>
  //   );
  // }
  // }

  /* -------------Day 6-----------------------------------------*/
  // render() {
  //   return (
  //   <div style={AppCss.mainDiv}>
  //    <InputDemo />
  //   </div>
  //   );
  // }
  // }

  /* -------------Day 7-----------------------------------------*/

  // render() {
  //   return (
  //    <div>
  //      <FormValidationDemo />
  //    </div>
  //   );
  // }
  // }

  // /* -------------Day 8-----------------------------------------*/

  // render() {
  // return (
  // 	<ChildrenDemo />
  // );
  // }
  // }

  // /* -------------Day 9  -----------------------------------------*/

  // render() {
  //   return (
  //     	<React.Fragment>
  //     		<Trainee />
  //     	</React.Fragment>
  //   );
  // }
  // }

  // /* -------------Day 10-----------------------------------------*/

  // render() {
  //   return (
  //   // Navigational Bar---------------

  //       <React.Fragment>
  //         <NavBar />
  //         <Trainee />
  //       </React.Fragment>

  //   // Login Form---------------------

  //   // <React.Fragment>
  //   //   <Login />
  //   // </React.Fragment>

  //   );
  // }
  // }

  // /* -------------Day 11-----------------------------------------*/

  // render() {
  //   return (
  //     <React.Fragment>
  //       <Router>
  //
  //       </Router>
  //     </React.Fragment>
  //   );
  // }
  // }

  // /* -------------Day 12-----------------------------------------*/

  // render() {
  //   return (
  //     <React.Fragment>
  //       <Router>
  //         <Switch>
  //           <AuthRoute exact path="/login" component={Login} />
  //           <AuthRoute exact path="/" component={NavBar} />
  //           <PrivateRoute exact path="/input-demo" component={InputDemo} />
  //           <PrivateRoute exact path="/textfield-demo" component={TextFieldDemo} />
  //           <PrivateRoute exact path="/children-demo" component={ChildrenDemo} />
  //           <PrivateRoute path="/trainee/" component={Trainee} />
  //           <PrivateRoute exact path="/form-validation-demo" component={FormValidationDemo} />
  //           <PrivateRoute exact path="/basic-slider-demo" component={BasicSliderDemo} />
  //           <PrivateRoute component={NoMatch} />
  //         </Switch>
  //       </Router>
  //     </React.Fragment>
  //   );
  // }
  // }

  // /* -------------Day 13, 14, 15-----------------------------------------*/

  // render() {
  //   return (
  //       <React.Fragment>
  //         <Router>
  //            <StartRouting />
  //         </Router>
  //       </React.Fragment>
  //   );
  // }
  // }

  // /* -------------Day 13, 14, 15-----------------------------------------*/

  state = {
    open: false,
    showMessage: '',
  };

  handleOpenSnack = message => () => {
    this.setState({
      open: true,
      showMessage: message,
    });
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    const { open, showMessage } = this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <SnackBarContext.Provider value={this.handleOpenSnack}>
          <Router>
            <StartRouting />
          </Router>
          <Snackbar
            key={showMessage}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            autoHideDuration={1500}
            onClose={this.handleClose}
            open={open}
          >
            <SnackbarContent
              className={classes.success}
              aria-describedby="client-snackbar"
              onClose={this.handleClose}
              message={showMessage}
              action={[
                <IconButton key="close" aria-label="Close" color="inherit" onClick={this.handleClose}>
                  <Close />
                </IconButton>,
              ]}
            />
          </Snackbar>
        </SnackBarContext.Provider>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(App);
