/* eslint-disable react/prefer-stateless-*/
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
import React, { Component } from 'react';
import {
  Paper, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel, TableFooter,
  TablePagination,
  IconButton,
} from '@material-ui/core';
import { withStyles, useTheme } from '@material-ui/core/styles';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@material-ui/icons';

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
    const { onChangePage, page, count, rowsPerPage } = this.props;
    const theme = useTheme();

    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };

    return (
      <React.Fragment>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="Previous Page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
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

    const createRows = tableData.map(key => (
      <TableRow onClick={onSelect(key.id)} hover key={key.id}>
        {
          tableColumns.map(col => (
            col.format
              ? <TableCell align={col.align}>{col.format(key[col.field || col.label])}</TableCell>
              : <TableCell align={col.align}>{key[col.field || col.label.toLowerCase()]}</TableCell>
          ))
        }
        <TableCell>
          {
            actions.map(button => (
              <IconButton onClick={event => button.handler(event, key.id)}>
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
          <Table id={tableId} className={classes.table}>
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

export default withStyles(useStyles)(SimpleTable);
