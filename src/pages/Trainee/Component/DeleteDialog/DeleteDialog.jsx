/* eslint-disable no-console */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button,
} from '@material-ui/core';
import { snackBarHOC } from '../../../../components';
import { getDateFormat } from '../../Data';

class DeleteDialog extends Component {
  handleClose = () => {
	  const { onClose } = this.props;
	  onClose();
  };

  handleSubmit = () => {
    const {
      onSubmit, onClose, data, handleOpenSnack,
    } = this.props;
    if (data.createdAt > getDateFormat('2019-02-14')) {
      handleOpenSnack('Trainee Deleted Successfully', '#4BB543')();
      onClose();
    } else {
      onSubmit(data);
      handleOpenSnack('Sorry trainee cannot be deleted', '#FF0000')();
      onClose();
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
            <Button onClick={this.handleSubmit} color="primary" autofocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default snackBarHOC(DeleteDialog);
