/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Dialog, DialogTitle, DialogContent, Button, TextField, FormControl, Grid, DialogActions,
} from '@material-ui/core';

class EditDialog extends Component {
  state = {
    name: '',
    email: '',
    valueChanged: true,
  }

  handleClose = () => {
	  const { onClose } = this.props;
	  onClose();
  };

  handleSubmit = () => {
    const { onClose, onSubmit } = this.props;
    onSubmit(this.state);
    onClose();
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
      valueChanged: false,
    });
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
      valueChanged: true,
    });
  }

  setData = () => {
    const { data } = this.props;
    this.setData({
      name: data.name,
      email: data.email,
    });
  }

  render() {
    const {
      open, onClose, data,
    } = this.props;
    const { valueChanged } = this.state;
    return (
      <React.Fragment>
        <Dialog
          open={open}
          disableBackdropClick
          onClose={onClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="simple-dialog-title">Add Your Trainee Details</DialogTitle>
          <DialogContent>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      autoComplete="off"
                      autoFocus
                      margin="dense"
                      id="name"
                      type="text"
                      onChange={this.handleNameChange}
                      defaultValue={data.name}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      autoComplete="off"
                      margin="dense"
                      id="email"
                      type="email"
                      onChange={this.handleEmailChange}
                      defaultValue={data.email}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
            Cancel
            </Button>
            <Button disabled={valueChanged} onClick={this.handleSubmit} color="primary">
            Submit
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default EditDialog;
