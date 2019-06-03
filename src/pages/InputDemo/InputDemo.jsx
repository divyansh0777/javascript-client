/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  TextField, Paragraph, Select, Option, Radio,
} from '../../components';
import style from './style';


class InputDemo extends Component {
	state = {
	  name: '',
	  select: '',
	  radio: '',
	}

	/*---------------------------------*/

	handleName = (event) => {
	  this.setState({
	    name: event.target.value,
	  });
	}

	handleSelect = (event) => {
	  this.setState({
	    select: event.target.value,
	  });
	}

	handleRadio = (event) => {
	  this.setState({
	    radio: event.target.value,
	  });
	}

	/*---------------------------------*/

	showRadio = () => {
	  const { select } = this.state;

	  if (select === 'Cricket') {
	    return (
  <React.Fragment>
    <Radio name="Cricketer" text="Wicket Keeper" value="Wicket Keeper" onClick={this.handleRadio} />
    <Radio name="Cricketer" text="Batsman" value="Batsman" onClick={this.handleRadio} />
    <Radio name="Cricketer" text="Bowler" value="Bowler" onClick={this.handleRadio} />
    <Radio name="Cricketer" text="Fielder" value="Fielder" onClick={this.handleRadio} />
  </React.Fragment>
	  	);
	  } if (select === 'Football') {
	    return (
  <React.Fragment>
    <Radio name="Football" text="Defender" value="Defender" onClick={this.handleRadio} />
    <Radio name="Football" text="Striker" value="Striker" onClick={this.handleRadio} />
  </React.Fragment>
	    );
	  }
	  return (
  <p>Select options above for appropriate values</p>
	  );
	}

	/*---------------------------------*/

	render() {
	  const { select } = this.state;
	  console.log(this.state);

	  return (

  <React.Fragment>
    <div style={style.mainDiv}>
      <Paragraph text="Name" style={style.paragraphStyle} />
      <TextField style={style.textBox} pattern="[a-z]{A,Z}" autoFocus placeholder="Enter Name" onChange={this.handleName} />
      <br />
      <Paragraph style={style.paragraphStyle} text="Select game you play" />
      <br />
      <Select style={style.select} value={select} onChange={this.handleSelect}>
        <Option style={style.option} text="Select" />
        <Option style={style.option} value="Cricket" text="Cricket" />
        <Option style={style.option} value="Football" text="Football" />
      </Select>
      <br />
      <br />
      <br />
      <div>
        {
					(select.length) ? this.showRadio() : <Paragraph style={style.paragraphStyle} text="Select options above for appropriate values" />
				}
      </div>
    </div>
  </React.Fragment>

	  );
	}
}


export default InputDemo;
