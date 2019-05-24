/* eslint-disable prefer-arrow-callback */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import {
  TextField, Paragraph, Select, Option, Radio, Submit, ResetFormButton,
} from '../../components';
import style from './style';
import yupValidationSchema from './yupValidationSchema';

class FormValidationDemo extends Component {
	state = {
	  name: '',
	  select: '',
	  radio: '',
	  isError: true,
	  getError: null,
	}
	/*---------------------------------*/

	validation = () => {
	  const { name, select, radio } = this.state;
	  const parsedError = {};
	  yupValidationSchema.validate({ name, select, radio }, { abortEarly: false })
	    .then((result) => {
	      // console.log('then', result);
	      this.setState({
	        isError: false,
	        getError: {},
	      });
	    })
	    .catch((error) => {
	      error.inner.forEach((err) => {
	        parsedError[err.path] = err.message;
	      });
	      this.setState({
	        isError: true,
	        getError: parsedError,
	      });
	    });
	}

	/*---------------------------------*/

	handleName = (event) => {
	  this.setState({
	    name: event.target.value,
	  }, this.validation);
	}

	handleSelect = (event) => {
	  this.setState({
	    select: event.target.value,
	    radio: '',
	  }, this.validation);
	}

	handleRadio = (event) => {
	  this.setState({
	    radio: event.target.value,
	  }, this.validation);
	}

	handleReset = () => {
	  this.setState({
	    select: 'none',
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
	  const { select, isError, getError } = this.state;
		console.log(this.state);
	  return (

  <React.Fragment>
    <div style={style.mainDiv}>
      <form>
        <Paragraph text="Name" style={style.paragraphStyle} />

        <TextField
          style={style.textBox}
          placeholder="Enter Name"
          onChange={this.handleName}
          autoFocus
        />

        <Paragraph style={style.error} text={getError && getError.name } />

        <br />
        <Paragraph style={style.paragraphStyle} text="Select game you play" />
        <br />
        <Select style={style.select} onChange={this.handleSelect}>
          <Option style={style.option} value="" text="Select" />
          <Option style={style.option} value="Cricket" text="Cricket" />
          <Option style={style.option} value="Football" text="Football" />
        </Select>

        <Paragraph style={style.error} text={getError ? getError.select : ''} />

        <br />
        <br />
        <div>
          {
						(select.length) ? this.showRadio() : <Paragraph style={style.paragraphStyle} text="Select options above for appropriate values" />
					}
          <Paragraph style={style.error} text={getError ? getError.radio : ''} />

        </div>
        <br />
        <br />
        <br />
        <div>
          <ResetFormButton
            style={style.reset}
            value="Cancel"
            onClick={this.handleReset}
          />

          <Submit
            disabled={isError}
            style={style.submit}
            value="Submit"
          />
        </div>
      </form>
    </div>
  </React.Fragment>
	  );
	}
}

export default FormValidationDemo;
