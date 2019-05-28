/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import React from 'react';
import { TextField, createMuiTheme, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import {
  TextFieldDemo, BasicSliderDemo, InputDemo, FormValidationDemo, MathDemo, Trainee,
} from './pages';
import AppCss from './AppCss';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Comic Sans MS"',
      'cursive',
      'sans-serif',
    ].join(','),
    fontSize: '10',
  },
});

function App() {
  /* -------------Day 3-----------------------------------------*/
  // return (
  // <div>
  //   <TextFieldDemo />
  // </div>

  /* -------------Day 4-----------------------------------------*/
  // return (
  // <div style={AppCss.mainDiv}>
  //   <BasicSliderDemo />
  //   <TextFieldDemo />
  // </div>

  /* -------------Day 5-----------------------------------------*/
  // return (
  // <div style={AppCss.mainDiv}>
  //   <InputDemo />
  // </div>

  /* -------------Day 6-----------------------------------------*/
  // return (
  // <div>
  //   <FormValidationDemo />
  // </div>

  // /* -------------Day 6-----------------------------------------*/
  // return (
  // 	<React.Fragment>
  //     <MathDemo first={55} second={24} operator="+">
  //       {
  // 				result => (
  // 					<div>
  // 						<ThemeProvider theme={theme}>
  // 							<TextField
  // 								id="standard-with-placeholder"
  // 								label="Your answer is :"
  // 								placeholder="Your Answer showed here"
  // 								margin="normal"
  // 								value={result}
  // 								variant="outlined"
  // 							/>
  // 						</ThemeProvider>
  // 					</div>
  // 				)
  // 			}
  //     </MathDemo>
  // 		<MathDemo first={34} second={12} operator="*">
  //       {
  // 				result => (
  // 					<div>
  // 						<ThemeProvider theme={theme}>
  // 							<TextField
  // 								id="standard-with-placeholder"
  // 								label="Your answer is :"
  // 								placeholder="Your Answer showed here"
  // 								margin="normal"
  // 								value={result}
  // 							/>
  // 						</ThemeProvider>
  // 					</div>
  // 				)
  // 			}
  //  </MathDemo>
  // 		<MathDemo first={50} second={0} operator="/">
  //       {
  // 				result => (
  // 					<div>
  // 						<ThemeProvider theme={theme}>
  // 							<TextField
  // 								id="standard-required"
  // 								label="Your answer is : *"
  // 								placeholder="Your Answer showed here"
  // 								margin="normal"
  // 								value={result}
  // 								variant="filled"
  // 							/>
  // 						</ThemeProvider>
  // 					</div>
  // 				)
  // 			}
  //  </MathDemo>
  //  <MathDemo first={50} second={0} operator="^">
  //       {
  // 				result => (
  // 					<div>
  // 						<ThemeProvider theme={theme}>
  // 								<TextField
  // 									fullWidth
  // 									id="standard-required"
  // 									label="Your answer is : *"
  // 									placeholder="Your Answer showed here"
  // 									margin="normal"
  // 									value={result}
  // 									variant="filled"
  // 								/>
  // 						</ThemeProvider>
  // 					</div>
  // 				)
  // 			}
  // </MathDemo>
  // 	</React.Fragment>

  // /* -------------Day 7-----------------------------------------*/
  return (
		<React.Fragment>
			<Trainee />
		</React.Fragment>
  );
}

export default App;
