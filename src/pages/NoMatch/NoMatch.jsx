/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Container, Typography, CssBaseline, withStyles,
} from '@material-ui/core';

const style = theme => ({
  font: {
    fontSize: theme.spacing(5),
  },
});

class NoMatch extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography className={classes.font}>PAGE NOT FOUND</Typography>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(style)(NoMatch);
