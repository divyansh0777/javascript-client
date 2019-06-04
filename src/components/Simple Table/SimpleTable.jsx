/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
import React, { Component } from 'react';
import {
  Paper, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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
  render() {
    const { classes, tableId, tableColumns, tableData, onSelect, orderBy, order, onSort } = this.props;
    // const { activeSortingLabel } = this.state;
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
            col.field || col.label
              ? <TableCell align={col.align}>{key[col.field || col.label]}</TableCell>
              : ''
          ))
        }
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
          </Table>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(SimpleTable);
