/* eslint-disable no-use-before-define */
/* eslint-disable react/no-unescaped-entities */
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
  Dialog, TextField, DialogTitle, DialogActions, DialogContent, Button,
  Grid, InputAdornment, IconButton, Input, InputLabel, FormControl, Paper,
  createMuiTheme, Container, Avatar, Typography,
} from '@material-ui/core';
import {
  Visibility, VisibilityOff,
} from '@material-ui/icons';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React, { Component } from 'react';
import yupValidationSchema from './yupValidationSchema';

const useStyles = theme => ({
  paper: {
    padding: theme.spacing(4, 11),
    marginTop: theme.spacing(5),
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    spaceBetween: theme.spacing(4),
  },
  bigAvatar: {
    margin: theme.spacing(3),
  },

  input: {
    marginBottom: theme.spacing(3),
  },
});


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Comic Sans MS"',
      'cursive',
      'sans-serif',
    ].join(','),
    fontSize: '14',
    margin: '8',
  },
});

class Login extends Component {
	state = {
	  email: '',
	  password: '',
	  emailTouched: false,
	  passwordTouched: false,
	  showPassword: false,
	  isError: false,
	  getError: {},
	}

	/*---------------------------------*/

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

	/*---------------------------------*/

	handleSubmit = (event) => {
	  const { onSubmit } = this.props;
	  const { email, password } = this.state;
	  this.setState({
	    email: event.target.value,
	    password: event.target.value,
	  });
	  onSubmit(email, password);
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
	    email, password,
	  } = this.state;
	  const parsedError = {};
	  yupValidationSchema.validate({
	    email, password,
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
	      console.log('getError', parsedError);
	      this.setState({
	        isError: true,
	        getError: parsedError,
	      });
	    });
	}

	/*---------------------------------*/


	render() {
	  const { classes } = this.props;

	  const {
	    showPassword, isError, emailTouched, passwordTouched,
	  } = this.state;

	  return (
      <div>
       <Container maxWidth="sm">
       <ThemeProvider theme={theme}>
         <form className={classes.form}>
            <Paper className={classes.paper} elevation={3}>
              <Avatar
                alt="Remy Sharp"
                src="images/login_lock.png"
                className={classes.bigAvatar}
              />
              <Typography
                variant="h4"
              >Login
              </Typography>
              <FormControl fullWidth>
                <TextField
                  className={classes.input}
                  error={emailTouched && !!this.getFieldError('email')}
                  helperText={emailTouched && this.getFieldError('email')}
                  autoComplete="on"
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Enter Email ID"
                  type="email"
                  onFocus={this.handleTouch('emailTouched')}
                  onChange={this.handleEmail}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  className={classes.input}
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
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.input}
                disabled={isError}
                onClick={this.handleSubmit}
              >
                  Submit
              </Button>
            </Paper>
         </form>
       </ThemeProvider>
       </Container>
      </div>
	  );
	}
}

export default withStyles(useStyles)(Login);
