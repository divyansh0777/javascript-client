/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  CssBaseline, Container, Typography, withStyles,
} from '@material-ui/core';

const style = () => ({
  container: {
    textAlign: 'center',
  },
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container className={classes.container} axWidth="xs">
          <Typography>@ Successive Technologies</Typography>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(style)(Footer);
