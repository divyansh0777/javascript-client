/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Typography, CircularProgress, Container, Grid,
} from '@material-ui/core';

const withLoaderAndMessageHOC = (WrappedComponent) => {
  class AddDialog extends Component {
    render() {
      const { tableData, loader, ...rest } = this.props;
      const tableDataLength = tableData.length;
      if (loader && !tableDataLength) {
        return (
          <Container>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <CircularProgress />
              </Grid>
              <Grid item>
                <Typography>
                  Fetching ...!
                </Typography>
              </Grid>
            </Grid>
          </Container>
        );
      }
      if (!loader && !tableDataLength) {
        return (
          <Container>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Typography>
                  OOPS! Trainees not found list is empty.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        );
      }
      if (loader) {
        return (
          <Container>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <CircularProgress />
              </Grid>
              <Grid item>
                <Typography>
                    Fetching ...!
                </Typography>
              </Grid>
            </Grid>
          </Container>
        );
      }
      return (
        <WrappedComponent tableData={tableData} {...rest} />
      );
    }
  }
  return AddDialog;
};

export default withLoaderAndMessageHOC;
