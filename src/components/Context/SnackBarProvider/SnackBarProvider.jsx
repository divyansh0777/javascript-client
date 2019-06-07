/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Close } from '@material-ui/icons';

export const SnackBarContext = React.createContext(null);

const useStyles = () => ({
  success: {
    backgroundColor: '#4BB543',
  },
  tick: {
    color: '#FFFFFF',
  },
});
class SnackBarProvider extends Component {
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
  const { children, classes } = this.props;
  return (
    <React.Fragment>
      <SnackBarContext.Provider value={this.handleOpenSnack}>
        {children}
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

export default withStyles(useStyles)(SnackBarProvider);
