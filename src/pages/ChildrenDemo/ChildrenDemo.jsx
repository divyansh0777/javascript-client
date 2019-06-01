/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable-next-line react/jsx-indent */
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { TextField, createMuiTheme, Typography } from '@material-ui/core';
import { MathDemo } from '../MathDemo';


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Comic Sans MS"',
      'cursive',
      'sans-serif',
    ].join(','),
    fontSize: '20',
  },
});

export const ChildrenDemo = () => (
  <>
    <MathDemo first={55} second={24} operator="+">
      {
  				result => (
            <div>
              <ThemeProvider theme={theme}>
                <TextField
                  id="standard-with-placeholder"
                  label="Your answer is :"
                  placeholder="Your Answer showed here"
                  margin="normal"
                  value={result}
                  variant="outlined"
                />
              </ThemeProvider>
            </div>
  				)
  			}
    </MathDemo>
    <MathDemo first={50} second={0} operator="/">
      {
  				result => (
            <div>
              <ThemeProvider theme={theme}>
                <TextField
                  id="standard-required"
                  label="Your answer is : *"
                  placeholder="Your Answer showed here"
                  margin="normal"
                  value={result}
                  variant="filled"
                />
              </ThemeProvider>
            </div>
  				)
  			}
    </MathDemo>
    <MathDemo first={50} second={0} operator="^">
      {
  				result => (
            <div>
              <ThemeProvider theme={theme}>
                <TextField
                  fullWidth
                  id="standard-required"
                  label="Your answer is : *"
                  placeholder="Your Answer showed here"
                  margin="normal"
                  value={result}
                  variant="filled"
                />
              </ThemeProvider>
            </div>
  				)
  			}
    </MathDemo>
  </>
);
