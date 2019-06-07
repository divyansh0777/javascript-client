/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

export const SnackBarContext = React.createContext(null);

class SnackBarProvider extends Component {
state = {
  open: false,
  showMessage: '',
  setColor: '',
};

handleOpenSnack = (message, color) => () => {
  this.setState({
    open: true,
    showMessage: message,
    setColor: color,
  });
}

handleClose = () => {
  this.setState({
    open: false,
  });
}

render() {
  const { open, showMessage, setColor } = this.state;
  const { children } = this.props;
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
            style={{ backgroundColor: setColor }}
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

export default SnackBarProvider;
