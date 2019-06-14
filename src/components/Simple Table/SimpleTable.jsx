/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-*/
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import {
  Paper, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel, TableFooter,
  TablePagination,
  IconButton,
} from '@material-ui/core';
import { withStyles, useTheme } from '@material-ui/core/styles';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@material-ui/icons';
import { getDateFormat } from '../../pages/Trainee/Data';
import { withLoaderAndMessageHOC } from '../HOC';

const useStyles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',

  },
  table: {
    minWidth: 650,
    cursor: 'pointer',
    '& tr:nth-child(odd)': {
      backgroundColor: '#e5e5e5',
    },
  },
  tableHeadColor: {
    backgroundColor: 'white',
    cursor: 'default',
  },
});

class SimpleTable extends Component {
  TablePaginationActions = () => {
    const { onChangeForwardPage, onChangeBackwardPage, page } = this.props;
    const theme = useTheme();

    const handleBackButtonClick = (event) => {
      onChangeBackwardPage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
      onChangeForwardPage(event, page + 1);
    };

    return (
      <React.Fragment>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="Previous Page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
      </React.Fragment>
    );
  }

  render() {
    const { classes, tableId, tableColumns, tableData, onSelect, orderBy, order,
      onSort, count, rowsPerPage, page, rowsPerPageOptions, actions, onChangeRowsPerPage,
      onChangePage } = this.props;
    const createColumns = tableColumns.map(key => (
      <TableCell className={classes.tableHeadColor} key={key.label || key.field} align={key.align || 'center'}>
        <TableSortLabel
          direction={order}
          onClick={onSort(order, orderBy)}
        >
          { key.label || key.field }
        </TableSortLabel>
      </TableCell>
    ));

    const createRows = tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(key => (
      <TableRow key={key._id} onClick={onSelect(key._id)} hover>
        {
          tableColumns.map(col => (
            col.format
              ? <TableCell key={col.label} align={col.align}>{col.format(key[col.field || col.label])}</TableCell>
              : (
                col.field === 'createdAt' || col.label.toLowerCase() === 'createdAt'
                  ? (
                    <TableCell key={col.label} align={col.align}>{getDateFormat(key[col.field || col.label.toLowerCase()])}</TableCell>
                  )
                  : <TableCell key={col.label} align={col.align}>{key[col.field || col.label]}</TableCell>
              )
          ))
        }
        <TableCell key={key.src}>
          {
            actions.map(button => (
              <IconButton key={button.icons} onClick={event => button.handler(event, key._id)}>
                {
                  button.icons
                }
              </IconButton>
            ))
          }
        </TableCell>
      </TableRow>
    ));

    return (
      <React.Fragment>
        <Paper className={classes.root}>
          <Table _id={tableId} className={classes.table}>
            <TableHead>
              <TableRow>
                {
                  createColumns
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {
                  createRows
              }
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  className={classes.tableHeadColor}
                  rowsPerPageOptions={rowsPerPageOptions}
                  count={count}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true,
                  }}
                  onChangePage={onChangePage}
                  onChangeRowsPerPage={onChangeRowsPerPage}
                  ActionsComponent={this.TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
      </React.Fragment>
    );
  }
}

SimpleTable.defaultProps = {
  page: 0,
};

export default withLoaderAndMessageHOC(withStyles(useStyles)(SimpleTable));
