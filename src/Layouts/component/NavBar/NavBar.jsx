/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  AppBar, Button, Typography, Grid, CssBaseline,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link, Redirect } from 'react-router-dom';

const styles = () => ({
  root: {
    marginBottom: 10,
  },
  MuiAppBar: {
    padding: 10,
  },
  title: {
    flexGrow: 1,
    color: 'white',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    color: 'white',
  },
});

class NavBar extends Component {
  state = {
    logout: false,
  }

  logoutHandler = () => {
    localStorage.removeItem('token');
    this.setState({
      logout: true,
    });
  }

  render() {
    const { classes } = this.props;
    const { logout } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="static" className={classes.MuiAppBar}>
            <Grid
              container
              spacing={3}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={2}>
                <Link className={classes.link} to="/login">
                  <Typography variant="h6" className={classes.title}>
                    Trainee Portal
                  </Typography>
                </Link>
              </Grid>

              <Grid item xs={10}>
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Grid item xs="auto">
                    <Link className={classes.link} to="/trainee">
                      <Button className={classes.button}>TRAINEE</Button>
                    </Link>
                  </Grid>
                  <Grid item xs="auto">
                    <Link className={classes.link} to="/textfield-demo">
                      <Button className={classes.button}>TEXTFIELD DEMO</Button>
                    </Link>
                  </Grid>
                  <Grid item xs="auto">
                    <Link className={classes.link} to="/input-demo">
                      <Button className={classes.button}>INPUT DEMO</Button>
                    </Link>
                  </Grid>
                  <Grid item xs="auto">
                    <Link className={classes.link} to="/form-validation-demo">
                      <Button className={classes.button}>FORM VALIDATION DEMO</Button>
                    </Link>
                  </Grid>
                  <Grid item xs="auto">
                    <Link className={classes.link} to="/children-demo">
                      <Button className={classes.button}>CHILDREN DEMO</Button>
                    </Link>
                  </Grid>
                  <Grid item xs="auto">
                    <Link className={classes.link} to="/basic-slider-demo">
                      <Button className={classes.button}>BASIC SLIDER DEMO</Button>
                    </Link>
                  </Grid>
                  <Grid item xs="auto">
                    <Button onClick={this.logoutHandler} className={classes.button}>LOGOUT</Button>
                    {
                      logout
                        ? <Redirect to="/" />
                        : ''
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AppBar>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(NavBar);
