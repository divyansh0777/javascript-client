/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Paper, Table, TableHead, TableRow, TableCell, TableBody,
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
  },
});

class SimpleTable extends Component {
  getAlignmentOfData = (field, label) => {
    const { tableColumns } = this.props;
    const textAlign = tableColumns.map(key => (
      (key.field === [field] || key.label === [label])
        ? key.align
        : 'centre'
    ));
    return textAlign;
  };

  render() {
    const { classes, tableId, tableColumns, tableData } = this.props;
    console.log(this.props);
    const createColumns = tableColumns.map(key => (
      <TableCell key={key.field || key.label} align={key.align || 'centre'}>{ key.label || key.field }</TableCell>
    ));

    const createRows = tableData.map(key => (
      <TableRow>
        <TableCell key={key.id} align="centre" component="th" scope="row">
          {key.name || key.Name}
        </TableCell>
        <TableCell key={key.id} align="centre">{key.email || key.Email}</TableCell>
        <TableCell key={key.id} align="centre">{key.age || key.Age}</TableCell>
        <TableCell key={key.id} align="centre">{key.id || key.Id}</TableCell>
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
