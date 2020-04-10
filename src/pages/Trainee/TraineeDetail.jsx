/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Paper, Grid, createMuiTheme, List, ListItem, Typography, Divider, Avatar,
} from '@material-ui/core';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import { getDateFormat } from './Data';

const useStyle = () => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
  },
  color: {
    color: '#6da9a9',
  },
});

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Comic Sans MS"',
      'cursive',
      'sans-serif',
    ].join(','),
    fontSize: '14',
    margin: '8',
    flexGrow: 1,
  },
});

class TraineeDetail extends Component {
  showDetail = (_id) => {
    const { classes, location } = this.props;
    const traineeDetails = location.state.data.map(key => (
      key._id === _id
        ? (
          <React.Fragment key={key.src}>
            <List key={key._id}>
              <ListItem key={key.name} alignItems="flex-start">
                <Typography variant="h3">
                  {
                    key.name
                  }
                </Typography>
              </ListItem>
              <Divider variant="fullWidth" component="li" />
              <ListItem key={key.email}>
                <Typography>
                  {
                    key.email
                  }
                </Typography>
              </ListItem>
              <Divider variant="fullWidth" component="li" />
              <ListItem key={key.createdAt}>
                <Typography className={classes.color}>
                  {
                    getDateFormat(key.createdAt)
                  }
                </Typography>
              </ListItem>
            </List>
          </React.Fragment>
        )
        : ''
    ));

    return traineeDetails;
  };

  getImage = (_id) => {
    const { classes, location } = this.props;
    const image = location.state.data && location.state.data.map(key => (
      key._id === _id
        ? (
          <React.Fragment key={key._id}>
            <Grid
              key={key._id}
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid key={key.name} item>
                <Avatar alt="Remy Sharp" key={key.src} src={key.src} className={classes.bigAvatar} />
              </Grid>
            </Grid>
          </React.Fragment>
        )
        : ''
    ));
    return image;
  };

  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Paper square elevation={10}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="stretch"
            >
              <Grid item xs={3}>
                {
                  this.getImage(match.params._id)
                }
              </Grid>
              <Grid item xs={9}>
                <Grid
                  container
                  direction="column"
                  justify="space-evenly"
                  alignItems="flex-start"
                >
                  <Grid item xs={12}>
                    {
                        this.showDetail(match.params._id)
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyle)(TraineeDetail);
