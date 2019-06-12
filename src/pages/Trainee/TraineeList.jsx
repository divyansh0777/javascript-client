/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import { Button, Container, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Edit, Delete } from '@material-ui/icons';
import { Paragraph, SimpleTable, snackBarHOC } from '../../components';
import {
  isDateAfter,
  traineeTableColumns,
  traineeTableId,
} from './Data';
import { AddDialog, DeleteDialog, EditDialog } from './Component';
import {
  getTraineeData, postTraineeData, editTraineeData, deleteTraineeData,
} from '../../libs/Utils/API';

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
	  tableDataLoaded: false,
	  tableRowsPerPage: 5,
	  tablePage: 0,
	  tableRowsPerPageOptions: [],
	  deleteDialog: false,
	  editDialog: false,
	  traineeData: [],
	  traineeTableData: [],
	  limit: 5,
	  skip: 0,
	  actionLoader: false,
	}

	async componentDidMount() {
	  await this.handleTableData();
	  await this.setState({
	    tableDataLoaded: true,
	  });
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

  handleEditSubmit = async (data) => {
    const { handleOpenSnack } = this.props;
    const { tableDataLoaded } = this.state;
    const { _id, name, email } = data;
    this.setState({
      actionLoader: true,
    });
    try {
      if (tableDataLoaded) {
        const response = await editTraineeData({ _id, name, email });
        this.setState({
          actionLoader: false,
          editDialog: false,
          tableDataLoaded: false,
        });
        handleOpenSnack('Trainee Edited Successfully', '#4BB543')();
      } else {
        this.componentDidMount();
      }
    } catch (error) {
      this.setState({
        actionLoader: false,
        editDialog: false,
      });
      handleOpenSnack('Trainee not edited..!', '#ff0000')();
    }
  }

  handleDeleteSubmit = async (data) => {
    const { handleOpenSnack } = this.props;
    const { tableDataLoaded } = this.state;
    const { _id, createdAt } = data;
    this.setState({
      actionLoader: true,
    });

    try {
      if (tableDataLoaded) {
        if (isDateAfter(data.createdAt, '2019-02-14')) {
          const response = await deleteTraineeData({ _id });
          this.setState({
            actionLoader: false,
            deleteDialog: false,
            tableDataLoaded: false,
          });
          this.componentDidMount();
          handleOpenSnack('Trainee Deleted Successfully', '#4BB543')();
        } else {
          throw new Error();
        }
      } else {
        this.componentDidMount();
      }
    } catch (error) {
      this.setState({
        actionLoader: false,
        deleteDialog: false,
      });
      handleOpenSnack('Trainee not deleted..!', '#ff0000')();
    }
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
	    const response = await postTraineeData(name, email, password);
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
	};

	render() {
	  const {
	    open, tableOrder, orderBy, tablePage, tableRowsPerPage, tableRowsPerPageOptions, deleteDialog,
	    editDialog, traineeData, loader, tableLoader, traineeTableData, actionLoader,
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
                  actionLoader={actionLoader}
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
                  actionLoader={actionLoader}
                />
              ) : ''
          }
    <br />
  </React.Fragment>
	  );
	}
}

export default snackBarHOC(withStyles(useStyles)(TraineeList));
