/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  AppBar, Button, Typography, Grid, CssBaseline,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    marginBottom: 10,
  },
  MuiAppBar: {
    padding: 10,
  },
  title: {
    flexGrow: 1,
  },
});

class NavBar extends Component {
  render() {
    const { classes } = this.props;
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
              <Grid item xs={4}>
                <Typography variant="h6" className={classes.title}>
                  Trainee Portal
                </Typography>
              </Grid>

              <Grid item xs={8}>
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Grid item xs={2.5}>
                    <Button color="inherit">TRAINEE</Button>
                  </Grid>
                  <Grid item xs={2.5}>
                    <Button color="inherit">TEXTFIELD DEMO</Button>
                  </Grid>
                  <Grid item xs={2.5}>
                    <Button color="inherit">INPUT DEMO</Button>
                  </Grid>
                  <Grid item xs={2.5}>
                    <Button color="inherit">CHILDREN DEMO</Button>
                  </Grid>
                  <Grid item xs={2.5}>
                    <Button color="inherit">LOGOUT</Button>
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
