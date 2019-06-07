/* eslint-disable no-console */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button,
} from '@material-ui/core';
import { SnackBarContext } from '../../../../components';
import { getDateFormat } from '../../Data';

class DeleteDialog extends Component {
  handleClose = () => {
	  const { onClose } = this.props;
	  onClose();
  };

  handleSubmit = handleOpenSnack => () => {
    const { onSubmit, onClose, data } = this.props;
    onSubmit(data);
    if (data.createdAt < getDateFormat('2019-02-14')) {
      onClose(handleOpenSnack('Sorry trainee cannot deleted', '#FF0000'));
    } else {
      onClose(handleOpenSnack('Trainee Deleted Successfully', '#4BB543'));
    }
  }

  render() {
    const { open } = this.props;
    return (
      <React.Fragment>
        <Dialog
          open={open}
          disableBackdropClick
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Delete ?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this data from the list !
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <SnackBarContext.Consumer>
              { handleOpenSnack => (
                <Button onClick={this.handleSubmit(handleOpenSnack)} color="primary" autofocus>
                  Delete
                </Button>
              )
              }
            </SnackBarContext.Consumer>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default DeleteDialog;
