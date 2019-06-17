/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Snackbar, SnackbarContent, IconButton, withStyles,
} from '@material-ui/core';
import {
  Close, CheckCircle, Error, Info, Warning,
} from '@material-ui/icons';

export const SnackBarContext = React.createContext(null);


const useStyles = () => ({
  icon: {
    fontSize: 20,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    justify: 'space-around',
  },
});

class SnackBarProvider extends Component {
state = {
  open: false,
  showMessage: '',
  setColor: '',
  iconVariant: '',
};

handleOpenSnack = (message, variant) => () => {
  if (variant === 'success') {
    this.setState({
      open: true,
      showMessage: message,
      setColor: '#4BB543',
      iconVariant: [variant],
    });
  } else {
    this.setState({
      open: true,
      showMessage: message,
      setColor: '#ff0000',
      iconVariant: [variant],
    });
  }
}

handleClose = () => {
  this.setState({
    open: false,
  });
}

render() {
  const {
    open, showMessage, setColor, iconVariant,
  } = this.state;
  const { children, classes } = this.props;
  const variant = {
    success: CheckCircle,
    warning: Warning,
    error: Error,
    info: Info,
  };
  const Icon = variant[iconVariant];
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
          autoHideDuration={2000}
          onClose={this.handleClose}
          open={open}
        >
          <SnackbarContent
            style={{ backgroundColor: setColor }}
            aria-describedby="client-snackbar"
            onClose={this.handleClose}
            message={(
              <span className={classes.message}>
                <Icon className={classes.icon} />
                { showMessage }
              </span>
            )}
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
