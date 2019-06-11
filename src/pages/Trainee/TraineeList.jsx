/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Edit, Delete } from '@material-ui/icons';
import Axios from 'axios';
import { Paragraph, SimpleTable, snackBarHOC } from '../../components';
import {
  traineeTableColumns,
  traineeTableId,
} from './Data';
import { AddDialog, DeleteDialog, EditDialog } from './Component';
import { configuration } from '../../configs/configuration';
import * as nextApi from '../../libs/Utils/APIConstants';
import { axiosConfigure } from '../../configs/Axios';
import { getTraineeData, postTraineeData } from '../../libs/Utils/API';

axiosConfigure();

const useStyles = () => ({
  list: {
    textDecoration: 'none',
  },
});

class TraineeList extends Component {
	state = {
	  open: false,
	  loader: false,
	  tableLoader: true,
	  tableOrder: 'asc',
	  orderBy: 'name',
	  tableRowsPerPage: 5,
	  tablePage: 0,
	  tableRowsPerPageOptions: [],
	  deleteDialog: false,
	  editDialog: false,
	  traineeData: [],
	  traineeTableData: [],
	  limit: 5,
	  skip: 0,
	}

	componentDidMount() {
	  this.handleTableData();
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

  handleTableActionDialogs = field => (event, _id) => {
    const { traineeTableData } = this.state;
    event.stopPropagation();
    this.setState({
      [field]: true,
    });
    traineeTableData.map(key => (
      key._id === _id
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

  handleToShowTableData = _id => () => {
    const { match, history } = this.props;
    const { traineeTableData } = this.state;
    history.push({
      pathname: `${match.path}/trainee-detail/${_id}`,
      state: { data: traineeTableData },
    });
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

  handleTableData = async () => {
    const { handleOpenSnack } = this.props;
    const { limit, skip } = this.state;
    this.setState({
      tableLoader: true,
    });
    try {
      const response = await getTraineeData(limit, skip);
      this.setState({
        tableLoader: false,
        traineeTableData: response.data.data.records,
      });
	      handleOpenSnack('Table Updated', '#4BB543')();
    } catch (err) {
      this.setState({
        tableLoader: false,
      });
      handleOpenSnack('Something.. went wrong!', '#ff0000')();
    }
  }

  handleOnChangePage = (event, newPage) => {
    const { limit, skip, tableRowsPerPage } = this.state;
    this.setState({
      tablePage: newPage,
      skip: skip + limit,
      tableLoader: true,
      tableRowsPerPage: tableRowsPerPage + limit,
    });
    this.handleTableData();
  }

	handleSubmit = async (data) => {
	  const {
	    name, email, password,
	  } = data;
	  const { handleOpenSnack } = this.props;
	  this.setState({
	    loader: true,
	  });
	  try {
	    const response = postTraineeData({
	      data: {
	        name,
	        email,
	        password,
	      },
	    });
	    this.setState({
	      loader: false,
	    });
	    this.handleClose('open')();
	    handleOpenSnack('Trainee added Successfully', '#4BB543')();
	  } catch (err) {
	    this.setState({
	      loader: false,
	    });
	    this.handleClose('open')();
	    handleOpenSnack('Trainee not added !', '#ff0000')();
	  }
	}

	render() {
	  const {
	    open, tableOrder, orderBy, tablePage, tableRowsPerPage, tableRowsPerPageOptions, deleteDialog,
	    editDialog, traineeData, loader, tableLoader, traineeTableData,
	  } = this.state;
	  const tableActions = [
	    {
	      icons: <Edit />,
	      handler: this.handleTableActionDialogs('editDialog'),
	    },
	    {
	      icons: <Delete />,
	      handler: this.handleTableActionDialogs('deleteDialog'),
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
                  loader={loader}
                  onClose={this.handleClose('open')}
                  onSubmit={this.handleSubmit}
                />
              )
              : <Paragraph text="Click Button to Show Dialog" />
          }
    {
      <SimpleTable
        tableId={traineeTableId}
        tableData={traineeTableData}
        tableColumns={traineeTableColumns}
        orderBy={orderBy}
        order={tableOrder}
        onSort={this.handleTableSorting}
        onSelect={this.handleToShowTableData}
        count={traineeTableData.length}
        rowsPerPage={tableRowsPerPage}
        page={tablePage}
        rowsPerPageOptions={tableRowsPerPageOptions}
        onChangeRowsPerPage={this.handleOnChangeRowsPerPage}
        onChangePage={this.handleOnChangePage}
        actions={tableActions}
        loader={tableLoader}
      />
          }
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
  </React.Fragment>
	  );
	}
}

export default snackBarHOC(withStyles(useStyles)(TraineeList));
