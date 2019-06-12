/* eslint-disable no-underscore-dangle */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Dialog, DialogTitle, DialogContent, Button, TextField, FormControl, Grid, DialogActions,
} from '@material-ui/core';
import { snackBarHOC } from '../../../../components';
import { LoaderOnButtonHOC } from '../../../../components/HOC';

const LoaderButton = LoaderOnButtonHOC(Button);
class EditDialog extends Component {
  state = {
    name: '',
    email: '',
    _id: '',
    valueChanged: false,
  }

  async componentWillMount() {
    const { data } = this.props;
    this.setState({
      name: data.name,
      email: data.email,
      _id: data._id,
    });
  }

  handleClose = () => {
	  const { onClose } = this.props;
	  onClose();
  };

  handleSubmit = async () => {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
      valueChanged: true,
    });
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
      valueChanged: true,
    });
  }

  render() {
    const {
      open, onClose, actionLoader,
    } = this.props;
    const { valueChanged, name, email } = this.state;
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
                      defaultValue={name}
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
                      defaultValue={email}
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
            <LoaderButton
              disabled={!valueChanged}
              onClick={this.handleSubmit}
              color="primary"
              loader={actionLoader}
            />
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default snackBarHOC(EditDialog);
