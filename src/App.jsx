/* eslint-disable react/prefer-stateless-function */
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
import { SnackBarProvider } from './components';

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
  render() {
    return (
    <div style={AppCss.mainDiv}>
     <InputDemo />
    </div>
    );
  }
  }

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

  // /* -------------Day 16,17-----------------------------------------*/

//   render() {
//     return (
//       <React.Fragment>
//         <SnackBarProvider>
//           <Router>
//             <StartRouting />
//           </Router>
//         </SnackBarProvider>
//       </React.Fragment>
//     );
//   }
// }

export default App;
