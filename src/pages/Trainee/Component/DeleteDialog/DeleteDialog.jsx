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
import { LoaderOnButtonHOC } from '../../../../components/HOC';

const LoaderButton = LoaderOnButtonHOC(Button);
class DeleteDialog extends Component {
  handleClose = () => {
	  const { onClose } = this.props;
	  onClose();
  };

  handleSubmit = () => {
    const { onSubmit, data } = this.props;
    onSubmit(data);
  }

  render() {
    const { open, actionLoader } = this.props;
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
            <LoaderButton
              onClick={this.handleSubmit}
              color="primary"
              autofocus
              loader={actionLoader}
            />
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default snackBarHOC(DeleteDialog);
