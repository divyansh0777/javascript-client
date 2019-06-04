/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import {
  Button, createMuiTheme, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Route, Switch, Link } from 'react-router-dom';
import { Paragraph, SimpleTable } from '../../components';
import TraineeDetail from './TraineeDetail';
import { traineeListData, traineeTableColumns, traineeTableId } from './Data';
import { AddDialog } from './Component';

class TraineeList extends Component {
	state = {
	  name: '',
	  email: '',
	  password: '',
	  rePassword: '',
	  open: false,
	  cricketerId: '',
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
	  const {
	    open, name, email, password, rePassword,
	  } = this.state;
	  console.log('TraineeList { Name -', name, ', Email -', email, ', Password -', password, ', RePassword -', rePassword, ' }');
	  const { match } = this.props;
	  const cricketersList = traineeListData.map(data => (
          <List>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar key={data.id} src={data.src} />
              </ListItemAvatar>
              <Link key={data.id} to={`${match.url}/traineeDetail/${data.id}`}>
              {data.name}
              </Link>
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
	  ));

	  return (
			<React.Fragment>
					<Button variant="contained" color="primary" onClick={this.handleOpen}>Add Trainee List</Button>
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
          <SimpleTable tableId={traineeTableId} tableData={traineeListData} tableColumns={traineeTableColumns} />
          {
            cricketersList
          }
			</React.Fragment>
	  );
	}
}

export default TraineeList;
