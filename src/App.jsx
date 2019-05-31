/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import React from 'react';
import { TextFieldDemo, BasicSliderDemo } from './pages';
import AppCss from './AppCss';

function App() {
  return (
    <div style={AppCss.mainDiv}>
			<div style={AppCss.upperDiv}>
				<BasicSliderDemo />
			</div>
			<div style={AppCss.lowerDiv}>
				<TextFieldDemo />
			</div>
    </div>
  );
}

export default App;
