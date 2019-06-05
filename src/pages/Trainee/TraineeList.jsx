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
import { Edit, Delete } from '@material-ui/icons';
import { Paragraph, SimpleTable } from '../../components';
import TraineeDetail from './TraineeDetail';
import {
  traineeListData,
  traineeTableColumns,
  traineeTableId,
} from './Data';
import { AddDialog, DeleteDialog, EditDialog } from './Component';

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
	  orderBy: 'name',
	  tableRowsPerPage: 2,
	  tablePage: 0,
	  tableRowsPerPageOptions: [],
	  deleteDialog: false,
	  editDialog: false,
	  traineeData: [],
	}

	handleOpen = () => {
	  this.setState({
	    open: true,
	  });
	}

	handleClose = field => () => {
	  this.setState({
	    [field]: false,
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

  handleDialogOpen = field => (event, id) => {
    event.stopPropagation();
    this.setState({
      [field]: true,
    });
    traineeListData.map(key => (
      key.id === id
        ? this.setState({
          traineeData: key,
        })
        : ''
    ));
  }

  handleEditSubmit = (data) => {
    console.log('Edited Data - ', data);
  }

  handleDeleteSubmit = (data) => {
    console.log('Deleted Data', data);
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

  handleOnChangeRowsPerPage = (event) => {
    this.setState({
	    tableRowsPerPage: event.target.value,
	  });
  }

  handleOnChangePage = (event, newPage) => {
    this.setState({
	    tablePage: newPage,
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
	    open, name, email, password, rePassword, tableOrder, orderBy, tablePage,
	    tableRowsPerPage, tableRowsPerPageOptions, deleteDialog, editDialog, traineeData, cricketerId,
	  } = this.state;
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
	  const tableActions = [
	    {
	      icons: <Edit />,
	      handler: this.handleDialogOpen('editDialog'),
	    },
	    {
	      icons: <Delete />,
	      handler: this.handleDialogOpen('deleteDialog'),
	    },
	  ];

	  return (
			<React.Fragment>
					<Button variant="contained" color="primary" onClick={this.handleOpen}>Add Trainee List</Button>
          {
            open
              ? (
                <AddDialog
                  open={open}
                  onClose={this.handleClose('open')}
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
            count={traineeListData.length}
            rowsPerPage={tableRowsPerPage}
            page={tablePage}
            rowsPerPageOptions={tableRowsPerPageOptions}
            onChangeRowsPerPage={this.handleOnChangeRowsPerPage}
            onChangePage={this.handleOnChangePage}
            actions={tableActions}
          />
          {
            deleteDialog
              ? (
                <DeleteDialog
                  open={deleteDialog}
                  onClose={this.handleClose('deleteDialog')}
                  onSubmit={this.handleDeleteSubmit}
                  data={traineeData}
                />
              ) : ''
          }
          {
            editDialog
              ? (
                <EditDialog
                  open={editDialog}
                  onClose={this.handleClose('editDialog')}
                  onSubmit={this.handleEditSubmit}
                  data={traineeData}
                />
              ) : ''
          }
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
