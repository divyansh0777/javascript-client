/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Paper, Grid, createMuiTheme, List, ListItem, Typography, Divider, Avatar,
} from '@material-ui/core';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import { traineeData } from './Data';

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
  color:{
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
  showDetail = (id) => {
    const { classes } = this.props;
    const traineeDetails = traineeData.map(key => (
      key.id === id
        ? (
          <React.Fragment>
            <List>
              <ListItem alignItems="flex-start">
                <Typography variant="h3" key={key.id}>
                  {
                    key.name
                  }
                </Typography>
              </ListItem>
              <Divider variant="fullWidth" component="li" />
              <ListItem>
                <Typography key={key.id}>
                  {
                    key.email
                  }
                </Typography>
              </ListItem>
              <Divider variant="fullWidth" component="li" />
              <ListItem>
                <Typography className={classes.color} key={key.id}>
                  {
                    key.currentDateTime
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

  getImage = (id) => {
    const { classes } = this.props;
    const image = traineeData.map(key => (
      key.id === id
        ? (
          <React.Fragment>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Avatar alt="Remy Sharp" key={key.id} src={key.src} className={classes.bigAvatar} />
              </Grid>
            </Grid>
          </React.Fragment>
        )
        : ''
    ));
    return image;
  };

  render() {
    console.log(this.props);
    const { classes, match } = this.props;
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
                  this.getImage(match.params.id)
                }
              </Grid>
              <Grid item xs={9}>
                <Grid
                  xs={12}
                  container
                  direction="column"
                  justify="space-evenly"
                  alignItems="flex-start"
                >
                  <Grid item xs={12}>
                    <Typography fullWidth>
                      {
                        this.showDetail(match.params.id)
                      }
                    </Typography>
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
