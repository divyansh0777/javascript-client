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
import { ThemeProvider, withStyles } from '@material-ui/styles';
import { Route, Switch, Link } from 'react-router-dom';
import { Paragraph, SimpleTable } from '../../components';
import TraineeDetail from './TraineeDetail';
import { traineeListData, traineeTableColumns, traineeTableId } from './Data';
import { AddDialog } from './Component';

const useStyles = theme => ({
  list: {
    textDecoration: 'none',
  },
});

class TraineeList extends Component {
	state = {
	  name: '',
	  email: '',
	  password: '',
	  rePassword: '',
	  open: false,
	  cricketerId: '',
	  tableOrder: 'asc',
	  orderBy: '',
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

  handleToShowTableData = id => () => {
    const { match, history } = this.props;
    console.log(id, match);
    history.push(`${match.path}/trainee-detail/${id}`);
  }

  handleTableSorting = (order, orderBy) => () => {
    if (order === 'asc') {
      this.setState({
        tableOrder: 'desc',
      });
    } else {
      this.setState({
        tableOrder: 'asc',
      });
    }
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
	    open, name, email, password, rePassword, tableOrder, orderBy,
	  } = this.state;
	  console.log('TraineeListOnSubmit { Name -', name, ', Email -', email, ', Password -', password, ', RePassword -', rePassword, ' }');
	  const { match, classes } = this.props;
	  const cricketersList = traineeListData.map(data => (
          <List key={data.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar key={data.id} src={data.src} />
              </ListItemAvatar>
              <Link className={classes.list} to={`${match.url}/trainee-detail/${data.id}`}>
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
          <SimpleTable
            tableId={traineeTableId}
            tableData={traineeListData}
            tableColumns={traineeTableColumns}
            orderBy={orderBy}
            order={tableOrder}
            onSort={this.handleTableSorting}
            onSelect={this.handleToShowTableData}
          />
          <br />
          <br />
          {
            cricketersList
          }
			</React.Fragment>
	  );
	}
}

export default withStyles(useStyles)(TraineeList);
