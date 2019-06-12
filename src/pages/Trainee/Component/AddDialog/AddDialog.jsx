/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-console */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import {
  Dialog, TextField, DialogTitle, DialogActions, DialogContent, Button, Grid,
  InputAdornment, IconButton, Input, InputLabel, FormControl, Paper, CircularProgress,
} from '@material-ui/core';
import {
  Visibility, VisibilityOff,
} from '@material-ui/icons';
import React, { Component } from 'react';
import yupValidationSchema from './yupValidationSchema';
import { SnackBarContext } from '../../../../components';

class AddDialog extends Component {
	state = {
	  name: '',
	  email: '',
	  password: '',
	  rePassword: '',
	  showPassword: false,
	  showRePassword: false,
	  nameTouched: false,
	  emailTouched: false,
	  passwordTouched: false,
	  rePasswordTouched: false,
	  isError: false,
	  getError: {},
	}

	/*---------------------------------*/

	handleName = (event) => {
	  this.setState({
	    name: event.target.value,
	  }, this.validation);
	};

	handleEmail = (event) => {
	  this.setState({
	    email: event.target.value,
	  }, this.validation);
	};

	handlePassword = (event) => {
	  this.setState({
	    password: event.target.value,
	  }, this.validation);
	};

	handleRePassword = (event) => {
	  this.setState({
	    rePassword: event.target.value,
	  }, this.validation);
	};

	/*---------------------------------*/

	handleClickShowPassword = () => {
	  const { showPassword } = this.state;
	  if (showPassword) {
	    this.setState({
	      showPassword: false,
	    });
	  } else {
	    this.setState({
	      showPassword: true,
	    });
	  }
	};

	handleClickShowRePassword = () => {
	  const { showRePassword } = this.state;
	  if (showRePassword) {
	    this.setState({
	      showRePassword: false,
	    });
	  } else {
	    this.setState({
	      showRePassword: true,
	    });
	  }
	};

	/*---------------------------------*/

	handleClose = () => {
	  const { onClose } = this.props;
	  onClose();
	};

	handleSubmit = (event) => {
	  const { onSubmit } = this.props;
	  this.setState({
	    name: event.target.value,
	    email: event.target.value,
	    password: event.target.value,
	    rePassword: event.target.value,
	  });
	  onSubmit(this.state);
	};

	handleTouch = field => () => {
	  this.setState({
	    [field]: true,
	  });
	}

  getFieldError = (field) => {
	  const { getError } = this.state;
	  return getError[field];
  }

  /*---------------------------------*/

	validation = () => {
	  const {
	    name, email, password, rePassword,
	  } = this.state;
	  const parsedError = {};
	  yupValidationSchema.validate({
	    name, email, password, rePassword,
	  }, { abortEarly: false })
	    .then((result) => {
	      this.setState({
	        isError: false,
	        getError: {},
	      });
	    })
	    .catch((error) => {
	      error.inner.forEach((err) => {
	        parsedError[err.path] = err.message;
	      });
	      this.setState({
	        isError: true,
	        getError: parsedError,
	      });
	    });
	}

	/*---------------------------------*/


	render() {
	  const { open, loader } = this.props;

	  const {
	    showPassword, showRePassword, isError, nameTouched, emailTouched,
	    passwordTouched, rePasswordTouched,
	  } = this.state;

	  return (
     <React.Fragment>
			<Dialog
				open={open}
        disableBackdropClick
				onClose={this.handleClose}
				aria-labelledby="responsive-dialog-title"
			>
				<DialogTitle id="simple-dialog-title">Add Your Trainee Details</DialogTitle>
				<DialogContent>
					<form>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<FormControl fullWidth>
									<TextField
										error={nameTouched && !!this.getFieldError('name')}
                    helperText={nameTouched && this.getFieldError('name')}
                    autoComplete="on"
                    autoFocus
										margin="dense"
										id="name"
										label="Enter your name"
										type="text"
										onFocus={this.handleTouch('nameTouched')}
										onChange={this.handleName}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl fullWidth>
									<TextField
										error={emailTouched && !!this.getFieldError('email')}
                    helperText={emailTouched && this.getFieldError('email')}
                    autoComplete="on"
										margin="dense"
										id="email"
										label="Email Address"
										type="email"
										onFocus={this.handleTouch('emailTouched')}
										onChange={this.handleEmail}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<Grid container spacing={2}>
									<Grid item xs={6}>
										<FormControl fullWidth>
											<TextField
                        error={passwordTouched && !!this.getFieldError('password')}
                        helperText={passwordTouched && this.getFieldError('password')}
                        autoComplete="on"
                        label="Password"
												type={showPassword ? 'text' : 'password'}
                        onFocus={this.handleTouch('passwordTouched')}
                        onChange={this.handlePassword}
												InputProps={{
												  endAdornment:
                           <InputAdornment position="end">
                            <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowPassword}>
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                           </InputAdornment>,
												}}
											/>
										</FormControl>
									</Grid>
									<Grid item xs={6}>
										<FormControl fullWidth>
											<TextField
                        error={rePasswordTouched && !!this.getFieldError('rePassword')}
                        helperText={rePasswordTouched && this.getFieldError('rePassword')}
                        autoComplete="on"
                        label="Re-Enter Password"
												type={showRePassword ? 'text' : 'password'}
                        onFocus={this.handleTouch('rePasswordTouched')}
                        onChange={this.handleRePassword}
                        InputProps={{
                          endAdornment:
                           <InputAdornment position="end">
                            <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowRePassword}>
                              {showRePassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                           </InputAdornment>,
                        }}
											/>
										</FormControl>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</form>
				</DialogContent>
				<DialogActions>
				<Button onClick={this.handleClose} color="primary">
							Cancel
				</Button>
        <Button
          disabled={isError || !nameTouched || !emailTouched || !passwordTouched || !rePasswordTouched}
          onClick={this.handleSubmit}
          color="primary"
        >
        {
          loader
            ? <CircularProgress />
            : 'Submit'
        }
        </Button>
				</DialogActions>
			</Dialog>
     </React.Fragment>
	  );
	}
}

export default AddDialog;
