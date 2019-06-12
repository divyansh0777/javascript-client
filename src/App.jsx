/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  TextField, createMuiTheme, Typography,
} from '@material-ui/core';
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
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


function App() {
/* -------------Day 4-----------------------------------------*/

  //   return (
  //   <div>
  //     <TextFieldDemo />
  //   </div>
  //   );
  // }

  /* -------------Day 5-----------------------------------------*/

  //   return (
  //   <div style={AppCss.mainDiv}>
  //     <BasicSliderDemo />
  //     <TextFieldDemo />
  //   </div>
  //   );
  // }

  /* -------------Day 6-----------------------------------------*/

  //   return (
  //   <div style={AppCss.mainDiv}>
  //    <InputDemo />
  //   </div>
  //   );
  // }

  /* -------------Day 7-----------------------------------------*/

  //   return (
  //    <div>
  //      <FormValidationDemo />
  //    </div>
  //   );
  // }

  // /* -------------Day 8-----------------------------------------*/

  // return (
  // 	<ChildrenDemo />
  // );
  // }

  // /* -------------Day 9  -----------------------------------------*/

  //   return (
  //     	<React.Fragment>
  //     		<Trainee />
  //     	</React.Fragment>
  //   );
  // }

  // /* -------------Day 10-----------------------------------------*/

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

  // /* -------------Day 11-----------------------------------------*/

  //   return (
  //     <React.Fragment>
  //       <Router>
  //          <StartRouting />
  //       </Router>
  //     </React.Fragment>
  //   );
  // }

  // /* -------------Day 12-----------------------------------------*/

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

  // /* -------------Day 13-----------------------------------------*/
  return (
      <React.Fragment>
        <Router>
           <StartRouting />
        </Router>
      </React.Fragment>
  );
}

export default App;
