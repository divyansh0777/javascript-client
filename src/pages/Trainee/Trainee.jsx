/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import { Button, createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import AddDialog from './Component/AddDialog/AddDialog';
import { Paragraph } from '../../components';
// import { AddDialog } from './AddDialog';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Comic Sans MS"',
      'cursive',
      'sans-serif',
    ].join(','),
  },
});

class Trainee extends Component {
	state = {
	  name: '',
	  email: '',
	  password: '',
	  rePassword: '',
	  open: false,
	}

	handleOpen = () => {
	  this.setState({
	    open: true,
	  });
	}

	handleClose = () => {
	  this.setState({
	    open: false,
	  });
	}

	handleChange = (data) => {
	  const {
	    name, email, password, rePassword,
	  } = data;
	  this.setState({
	    name,
	    email,
	    password,
	    rePassword,
	  });
	}


	handleSubmit = (data) => {
	  const {
	    name, email, password, rePassword,
	  } = data;
	  this.setState({
	    name,
	    email,
	    password,
	    rePassword,
	    open: false,
	  });
	}

	render() {
	  const { open } = this.state;
	  console.log('Inside Trainee--', this.state);

	  return (
			<React.Fragment>
				<ThemeProvider theme={theme}>
					<Button variant="contained" color="primary" onClick={this.handleOpen}>Add Trainee</Button>
				{
					open
					  ? (
							<AddDialog
								open={open}
								onClose={this.handleClose}
								onChange={this.handleChange}
								onSubmit={this.handleSubmit}
							/>
					  )
					  : <Paragraph text="Click Button to Show Dialog" />
				}
    </ThemeProvider>
			</React.Fragment>
	  );
	}
}

export default Trainee;
